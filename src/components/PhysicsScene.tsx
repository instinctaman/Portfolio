import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface PaletteColors {
  pastel: THREE.Color;
  light: THREE.Color;
  medium: THREE.Color;
  deep: THREE.Color;
  glass: THREE.Color;
}

export const PALETTES = {
  roseGold: {
    id: "roseGold",
    name: "Royal Blue & Pearl",
    color: "#2F69FF",
    bg: "radial-gradient(circle at center,#ffffff 0%,#ecefff 35%,#c2d1ff 100%)",
    desc: "Hyper-distinct cobalt spheres floating in soft white-slate gradients.",
  },
  pinkBlush: {
    id: "pinkBlush",
    name: "Rose Blush & Crème",
    color: "#FFC5C2",
    bg: "radial-gradient(circle at center,#ffffff 0%,#fff0f1 38%,#ffd1d5 100%)",
    desc: "Sweet candy pinks and juicy strawberry accents in a pearl studio.",
  },
  voltLime: {
    id: "voltLime",
    name: "Volt Lime & Slate",
    color: "#E1FC03",
    bg: "radial-gradient(circle at center,#ffffff 0%,#fbffe5 38%,#e8ff9c 100%)",
    desc: "Electric neon volt-lime against a clean white-slate horizon.",
  },
  arcticBlue: {
    id: "arcticBlue",
    name: "Arctic Sky & Crystal",
    color: "#96E5FF",
    bg: "radial-gradient(circle at center,#ffffff 0%,#effaff 38%,#c9f1ff 100%)",
    desc: "Cool arctic crystal blues with a translucent glass sheen.",
  },
} as const;

export type PaletteKey = keyof typeof PALETTES;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const getDynamicColors = (baseColor: string): PaletteColors => {
  const hex = baseColor.toLowerCase();
  if (hex === "#e1fc03")
    return {
      pastel: new THREE.Color("#FBFFE2"),
      light: new THREE.Color("#EFFE69"),
      medium: new THREE.Color("#E1FC03"),
      deep: new THREE.Color("#B1E200"),
      glass: new THREE.Color("#DCFF32"),
    };
  if (hex === "#ffc5c2" || hex === "#ffa19e")
    return {
      pastel: new THREE.Color("#FFF5F4"),
      light: new THREE.Color("#FFECEB"),
      medium: new THREE.Color("#FFA6B3"),
      deep: new THREE.Color("#FF4D6D"),
      glass: new THREE.Color("#FFA6B3"),
    };
  if (hex === "#96e5ff")
    return {
      pastel: new THREE.Color("#F0F9FF"),
      light: new THREE.Color("#C9F1FF"),
      medium: new THREE.Color("#96E5FF"),
      deep: new THREE.Color("#2BA5FF"),
      glass: new THREE.Color("#98E4FF"),
    };
  if (hex === "#2f69ff")
    return {
      pastel: new THREE.Color("#ECEFFF"),
      light: new THREE.Color("#A8C1FF"),
      medium: new THREE.Color("#2F69FF"),
      deep: new THREE.Color("#0A33BF"),
      glass: new THREE.Color("#4D80FF"),
    };
  const c = new THREE.Color(baseColor);
  return {
    pastel: c.clone().offsetHSL(0, -0.15, 0.25),
    light: c.clone().offsetHSL(0, -0.05, 0.12),
    medium: c.clone(),
    deep: c.clone().offsetHSL(0.01, 0.1, -0.12),
    glass: c.clone(),
  };
};

const ROLES = ["pastel", "light", "medium", "deep", "glass"] as const;
type Role = (typeof ROLES)[number];

interface PhysicsBall {
  id: number;
  radius: number;
  mass: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  meshGroup: THREE.Group;
  sphere: THREE.Mesh;
  material: THREE.MeshPhysicalMaterial;
  role: Role;
  isGlass: boolean;
  visualScale: number;
  color: THREE.Color;
  restPosition: THREE.Vector3;
  shapeTarget: THREE.Vector3;
  angleY: number;
  angleZ: number;
}

interface PhysicsSceneProps {
  started: boolean;
  selectedPalette: PaletteKey;
  onReady: () => void;
}

export default function PhysicsScene({
  started,
  selectedPalette,
  onReady,
}: PhysicsSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const stateRef = useRef({
    started,
    selectedPalette,
    onReady,
  });

  stateRef.current.started = started;
  stateRef.current.selectedPalette = selectedPalette;
  stateRef.current.onReady = onReady;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const canvasEl: HTMLCanvasElement = canvas;
    const containerEl: HTMLDivElement = container;

    const isMobile = window.innerWidth < 768;

    let raf = 0;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let balls: PhysicsBall[] = [];
    let hemiLight: THREE.HemisphereLight;
    let clock: THREE.Clock;
    let localStarted = false;
    let entranceStart = 0;
    let reportedReady = false;

    let viewportWidth = 10;
    let viewportHeight = 6;
    let shapeScale = 1;
    let meanRadius = 0;

    const mousePos = { x: 99, y: 99, isDown: false };
    const prevMouseWorld = new THREE.Vector3();
    const mouseProjVec = new THREE.Vector3();
    const mouseWorld3D = new THREE.Vector3();
    const diffVec = new THREE.Vector3();
    const collideDiff = new THREE.Vector3();
    const relVel = new THREE.Vector3();
    const deltaPos = new THREE.Vector3();
    const rotAxis = new THREE.Vector3();

    const palLime = getDynamicColors("#E1FC03");
    const palPink = getDynamicColors("#FFC5C2");
    let palHero = getDynamicColors(PALETTES[stateRef.current.selectedPalette].color);
    const curPal: Record<Role, THREE.Color> = {
      pastel: new THREE.Color(),
      light: new THREE.Color(),
      medium: new THREE.Color(),
      deep: new THREE.Color(),
      glass: new THREE.Color(),
    };

    const params = {
      gravity: 0,
      rebound: -0.3,
      mouseRepelForce: isMobile ? 0.04 : 0.05,
      mouseRepelRadius: isMobile ? 3.6 : 4.4,
      damping: 0.91,
      centerAttractForce: 0.0035,
      bounciness: 0.02,
    };

    function updateFrustumBounds() {
      if (!camera) return;
      const fov = THREE.MathUtils.degToRad(camera.fov);
      viewportHeight = 2 * Math.tan(fov / 2) * camera.position.z;
      viewportWidth =
        viewportHeight * (containerEl.clientWidth / Math.max(containerEl.clientHeight, 1));
    }

    const inHeart = (x: number, y: number) => {
      const a = x * x + y * y - 1;
      return a * a * a - x * x * y * y * y <= 0;
    };

    function assignHeartTargets() {
      if (!balls.length) return;
      const S = Math.min(viewportWidth * 0.3, viewportHeight * 0.27);
      const baseCY = -viewportHeight * 0.03;
      shapeScale = Math.max(0.3, Math.min(1, (S * 0.45) / 2.3 / (meanRadius || 0.4)));

      for (let i = 0; i < balls.length; i++) {
        let x = 0;
        let y = 0;
        let tries = 0;
        do {
          x = (Math.random() * 2 - 1) * 1.25;
          y = Math.random() * 2.55 - 1.4;
          tries++;
        } while (!inHeart(x, y) && tries < 60);

        balls[i].shapeTarget.set(
          x * S,
          (y + 0.12) * S + baseCY,
          (Math.random() - 0.5) * 0.35
        );
      }
    }

    function scatterFar(inward: boolean) {
      const R = Math.max(viewportWidth, viewportHeight) * 1.5;
      for (const b of balls) {
        const a = Math.random() * Math.PI * 2;
        const px = Math.cos(a) * R * 1.25;
        const py = Math.sin(a) * R * 0.85;
        const pz = (Math.random() - 0.5) * 4;
        b.position.set(px, py, pz);
        b.meshGroup.position.copy(b.position);
        if (inward) {
          b.velocity
            .set(-px, -py, -pz)
            .normalize()
            .multiplyScalar(0.08 + Math.random() * 0.05);
        } else {
          b.velocity.set(0, 0, 0);
        }
      }
    }

    function init() {
      if (raf) cancelAnimationFrame(raf);
      if (renderer) {
        renderer.dispose();
        balls.forEach((b) => {
          b.material.dispose();
          b.sphere.geometry.dispose();
        });
      }

      scene = new THREE.Scene();
      const aspect = containerEl.clientWidth / Math.max(containerEl.clientHeight, 1);
      camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
      camera.position.set(0, 0, 11);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        antialias: !isMobile, // Disable MSAA on mobile for massive GPU fill-rate gains
        alpha: true,
        powerPreference: "high-performance",
        precision: isMobile ? "mediump" : "highp",
      });

      // Clamp DPR to 1.0 on mobile for silky smooth 60fps performance
      const pixelRatio = isMobile
        ? 1.0
        : Math.min(window.devicePixelRatio, 2);

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      // Enable shadows on desktop, disable on mobile to eliminate double-pass GPU bottlenecks
      renderer.shadowMap.enabled = !isMobile;
      if (!isMobile) {
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }

      palHero = getDynamicColors(PALETTES[stateRef.current.selectedPalette].color);
      ROLES.forEach((r) => (curPal[r] = new THREE.Color()));

      hemiLight = new THREE.HemisphereLight(
        0xffffff,
        new THREE.Color(PALETTES[stateRef.current.selectedPalette].color),
        1.6
      );
      scene.add(hemiLight);

      const key = new THREE.DirectionalLight(0xffffff, 1.4);
      key.position.set(-6, 10, 8);
      if (!isMobile) {
        key.castShadow = true;
        key.shadow.mapSize.set(1024, 1024);
        Object.assign(key.shadow.camera, {
          near: 0.5,
          far: 30,
          left: -8,
          right: 8,
          top: 8,
          bottom: -8,
        });
        key.shadow.bias = -0.0003;
        key.shadow.radius = 8;
      }
      scene.add(key);

      const rim = new THREE.DirectionalLight(0xffffff, 1.25);
      rim.position.set(8, 7, -8);
      scene.add(rim);

      const front = new THREE.DirectionalLight(0xffffff, 0.4);
      front.position.set(0, 0, 11);
      scene.add(front);

      const side = new THREE.DirectionalLight(0xffffff, 0.3);
      side.position.set(-9, -2, 4);
      scene.add(side);

      updateFrustumBounds();

      // Optimal sphere count: 20 on mobile (ultra fluid 60fps), 96 on desktop
      const n = isMobile ? 20 : 96;
      const sphereSegments = isMobile ? 18 : 48;
      const geometry = new THREE.SphereGeometry(1, sphereSegments, sphereSegments);

      balls = [];
      for (let i = 0; i < n; i++) {
        let radius = 0.33;
        const r = Math.random();
        if (r < 0.3) radius = 0.27 + Math.random() * 0.12;
        else if (r < 0.8) radius = 0.42 + Math.random() * 0.18;
        else radius = 0.66 + Math.random() * 0.21;

        // Scale spheres slightly larger on mobile for great visibility with fewer balls
        if (isMobile) radius *= 1.15;

        const mass = Math.pow(radius, 3);
        const isGlass = Math.random() < 0.22;
        let role: Role = "medium";
        let chosen = palHero.medium;
        let mat: THREE.MeshPhysicalMaterial;
        let color: THREE.Color;

        if (isGlass) {
          mat = new THREE.MeshPhysicalMaterial({
            color: palHero.glass,
            roughness: isMobile ? 0.12 : 0.08,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.03,
            transmission: isMobile ? 0 : 0.95, // avoid transmission render pass on mobile
            opacity: isMobile ? 0.75 : 1,
            ior: 1.485,
            thickness: 2.2,
            specularColor: new THREE.Color("#ffffff"),
            specularIntensity: 1,
            attenuationColor: palHero.pastel,
            attenuationDistance: 1,
            emissive: palHero.glass,
            emissiveIntensity: 0.12,
            transparent: true,
          });
          color = palHero.glass;
          role = "glass";
        } else {
          const cr = Math.random();
          if (cr < 0.25) {
            chosen = palHero.pastel;
            role = "pastel";
          } else if (cr < 0.55) {
            chosen = palHero.light;
            role = "light";
          } else if (cr < 0.85) {
            chosen = palHero.medium;
            role = "medium";
          } else {
            chosen = palHero.deep;
            role = "deep";
          }

          mat = new THREE.MeshPhysicalMaterial({
            color: chosen,
            roughness: 0.44,
            metalness: 0,
            clearcoat: 0.24,
            clearcoatRoughness: 0.35,
            emissive: chosen,
            emissiveIntensity: 0.08,
            transparent: true,
          });
          color = chosen;
        }

        const group = new THREE.Group();
        const mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.setScalar(radius);
        if (!isMobile) {
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
        group.add(mesh);
        scene.add(group);

        balls.push({
          id: i,
          radius,
          mass,
          position: new THREE.Vector3(),
          velocity: new THREE.Vector3(),
          meshGroup: group,
          sphere: mesh,
          material: mat,
          role,
          isGlass,
          visualScale: radius,
          color,
          restPosition: new THREE.Vector3(),
          shapeTarget: new THREE.Vector3(),
          angleY: Math.random() * Math.PI * 2,
          angleZ: 0.1 + Math.random() * 0.45,
        });
      }

      meanRadius = balls.reduce((s, b) => s + b.radius, 0) / balls.length;
      assignHeartTargets();
      scatterFar(false);

      clock = new THREE.Clock();
      localStarted = false;
      entranceStart = 0;
      reportedReady = false;

      simulateAndRender();
    }

    function updateMouse3D() {
      mouseProjVec.set(mousePos.x, mousePos.y, 0.5);
      mouseProjVec.unproject(camera);
      const dir = mouseProjVec.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      mouseWorld3D.copy(camera.position).add(dir.multiplyScalar(distance));
    }

    function simulateAndRender() {
      raf = requestAnimationFrame(simulateAndRender);
      const time = clock.getElapsedTime();
      clock.getDelta();
      updateMouse3D();

      const { started: isStarted, selectedPalette: palKey } = stateRef.current;

      // Direct, zero-cost scroll progress calculation
      const progress = window.scrollY / Math.max(window.innerHeight, 1);

      // Update base palette dynamically if user switched
      const targetBase = PALETTES[palKey].color;
      palHero = getDynamicColors(targetBase);

      if (isStarted && !localStarted) {
        localStarted = true;
        entranceStart = time;
        scatterFar(true);
      }

      if (!localStarted) {
        renderer.render(scene, camera);
        if (!reportedReady) {
          reportedReady = true;
          stateRef.current.onReady();
        }
        return;
      }

      const heroF = 1 - smoothstep(0.3, 0.8, progress);
      const dropRaw = smoothstep(0.4, 0.95, progress);
      const flyF = smoothstep(2.7, 3.45, progress);
      const shapeF =
        smoothstep(1.4, 2.05, progress) *
        (1 - smoothstep(2.55, 3, progress));
      const dropF = dropRaw * (1 - smoothstep(1.25, 1.75, progress));

      const bLime = smoothstep(0.55, 1.05, progress);
      const bPink = smoothstep(1.4, 1.95, progress);

      for (const role of ROLES) {
        curPal[role]
          .copy(palHero[role])
          .lerp(palLime[role], bLime)
          .lerp(palPink[role], bPink);
      }
      hemiLight.groundColor.copy(curPal.medium);

      const entranceT = easeOutCubic(clamp01((time - entranceStart) / 2.2));
      const attractionBoost = lerp(7.5, 1, entranceT);
      const interacting =
        Math.abs(mousePos.x) < 0.99 || Math.abs(mousePos.y) < 0.99;

      let mouseSpeed = interacting
        ? mouseWorld3D.distanceTo(prevMouseWorld)
        : 0;
      if (mouseSpeed > 3) mouseSpeed = 3;
      prevMouseWorld.copy(mouseWorld3D);

      let damping = 0.91;
      damping = lerp(damping, 0.992, dropF);
      damping = lerp(damping, 0.9, shapeF);
      damping = lerp(damping, 0.985, flyF);

      const clusterActive = Math.max(heroF, entranceT < 1 ? 1 : 0);

      for (const b of balls) {
        if (heroF > 0.01) {
          b.velocity.x +=
            Math.sin(time * 0.4 + b.id * 1.5) * 0.0004 * b.radius * heroF;
          b.velocity.y +=
            Math.cos(time * 0.5 + b.id * 1.2) * 0.0004 * b.radius * heroF;
          b.velocity.z += Math.sin(time * 0.35 + b.id) * 0.0001 * heroF;
        }

        const cluster =
          params.centerAttractForce * attractionBoost * clusterActive;
        if (cluster > 0.00001) {
          b.velocity.x += (0 - b.position.x) * cluster * 0.38;
          b.velocity.y += (0 - b.position.y) * cluster * 1.85;
          b.velocity.z += (0 - b.position.z) * cluster * 1.8;
        }

        if (dropF > 0.001) b.velocity.y -= 0.011 * dropF;

        if (shapeF > 0.001) {
          const k = 0.06 * shapeF;
          b.velocity.x += (b.shapeTarget.x - b.position.x) * k;
          b.velocity.y += (b.shapeTarget.y - b.position.y) * k;
          b.velocity.z += (b.shapeTarget.z - b.position.z) * k;
        }

        if (flyF > 0.001) {
          const stagger = (b.id * 0.6180339887) % 1;
          const local = smoothstep(stagger * 0.55, stagger * 0.55 + 0.45, flyF);
          b.velocity.z += 0.05 * local;
          b.velocity.x += b.position.x * 0.006 * local;
          b.velocity.y += b.position.y * 0.006 * local;
        }

        if (interacting) {
          diffVec.subVectors(b.position, mouseWorld3D);
          const dist = diffVec.length();
          const down = mousePos.isDown;
          const rad = down
            ? params.mouseRepelRadius * 1.4
            : params.mouseRepelRadius;
          const force = down
            ? params.mouseRepelForce * 1.7
            : params.mouseRepelForce;

          if (dist < rad && dist > 0.0001) {
            const ratio = dist / rad;
            const sf = 1 - ratio * ratio * (3 - 2 * ratio);
            const push = sf * force * (1 + mouseSpeed * 3.2);
            diffVec.normalize();
            diffVec.z *= 0.12;
            diffVec.normalize();
            b.velocity.addScaledVector(diffVec, push);
          }
        }

        b.velocity.multiplyScalar(damping);
        b.position.addScaledVector(b.velocity, 1);

        const c = b.isGlass ? curPal.glass : curPal[b.role];
        b.material.color.copy(c);
        b.material.emissive.copy(c);
        b.material.opacity =
          flyF > 0.001
            ? 1 -
              smoothstep(
                camera.position.z - 2.6,
                camera.position.z - 0.3,
                b.position.z
              )
            : 1;

        const target = b.radius * (1 - (1 - shapeScale) * shapeF);
        b.visualScale += (target - b.visualScale) * 0.12;
        b.sphere.scale.setScalar(b.visualScale);
      }

      // 1 sub-step on mobile (lightning fast), 4 on desktop
      const subSteps = isMobile ? 1 : 4;
      const collideScale = 0.28 * (1 - 0.93 * shapeF) * (1 - flyF);

      for (let step = 0; step < subSteps; step++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            const a = balls[i];
            const b = balls[j];
            collideDiff.subVectors(b.position, a.position);
            const dist = collideDiff.length();
            const min = a.visualScale + b.visualScale;

            if (dist < min && dist > 0.001) {
              const overlap = min - dist;
              collideDiff.multiplyScalar(1 / dist);
              const total = a.mass + b.mass;
              const r1 = b.mass / total;
              const r2 = a.mass / total;

              a.position.addScaledVector(
                collideDiff,
                -overlap * r1 * collideScale
              );
              b.position.addScaledVector(
                collideDiff,
                overlap * r2 * collideScale
              );

              relVel.subVectors(b.velocity, a.velocity);
              const along = relVel.dot(collideDiff);
              if (along < -0.0001) {
                const impulse =
                  (-(1 + params.bounciness) * along) /
                  (1 / a.mass + 1 / b.mass);
                a.velocity.addScaledVector(collideDiff, -impulse / a.mass);
                b.velocity.addScaledVector(collideDiff, impulse / b.mass);
              }
            }
          }
        }
      }

      const xBound = viewportWidth / 2 - 0.2;
      const topY = viewportHeight / 2 - 0.05;
      const floorY = -viewportHeight / 2 + 0.05;
      const zBound = 2;
      const restitution = 0.3 + 0.35 * dropF;
      const contain = flyF < 0.5;
      const zContain = flyF < 0.02;

      for (const b of balls) {
        const r = b.visualScale;
        if (contain) {
          if (b.position.x < -xBound - r) {
            b.position.x = -xBound - r;
            b.velocity.x *= params.rebound;
          } else if (b.position.x > xBound + r) {
            b.position.x = xBound + r;
            b.velocity.x *= params.rebound;
          }

          if (b.position.y - r < floorY) {
            b.position.y = floorY + r;
            if (b.velocity.y < 0) b.velocity.y = -b.velocity.y * restitution;
            if (dropF > 0.3) {
              b.velocity.x *= 0.86;
              b.velocity.z *= 0.86;
            }
          }

          if (b.position.y + r > topY) {
            b.position.y = topY - r;
            if (b.velocity.y > 0) b.velocity.y *= params.rebound;
          }
        }

        if (zContain) {
          if (b.position.z < -zBound) {
            b.position.z = -zBound;
            b.velocity.z *= params.rebound;
          } else if (b.position.z > zBound) {
            b.position.z = zBound;
            b.velocity.z *= params.rebound;
          }
        }

        deltaPos.copy(b.position).sub(b.meshGroup.position);
        if (deltaPos.lengthSq() > 0.000001) {
          rotAxis.set(deltaPos.y, -deltaPos.x, 0).normalize();
          b.meshGroup.rotateOnWorldAxis(
            rotAxis,
            (deltaPos.length() / b.radius) * 0.95
          );
        }
        b.meshGroup.position.copy(b.position);
      }

      renderer.render(scene, camera);
      if (!reportedReady) {
        reportedReady = true;
        stateRef.current.onReady();
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      if (!camera || !renderer || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateFrustumBounds();
      assignHeartTargets();
    });
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleMouseDown = () => (mousePos.isDown = true);
    const handleMouseUp = () => (mousePos.isDown = false);
    const handleBlur = () => (mousePos.isDown = false);

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mousePos.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    const handleTouchEnd = () => {
      mousePos.x = 99;
      mousePos.y = 99;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    init();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (renderer) renderer.dispose();
      balls.forEach((b) => {
        b.material.dispose();
        b.sphere.geometry.dispose();
      });
    };
  }, []);

  return (
    <div id="webgl" ref={containerRef}>
      <canvas id="scene" ref={canvasRef} />
    </div>
  );
}
