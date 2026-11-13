import { useEffect, useRef, useState, useCallback } from "react";
import PhysicsScene, { PALETTES, type PaletteKey } from "./components/PhysicsScene";
import Navigation from "./components/Navigation";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/FooterSection";
import ProjectModal from "./components/ProjectModal";
import CredentialModal from "./components/CredentialModal";
import type { ProjectItem, ExperienceItem } from "./data/portfolioData";
import smLogo from "./assets/logo/sm_logo.jpg";
import "./App.css";

export default function App() {
  const [selectedPalette] = useState<PaletteKey>("arcticBlue");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [loaderValue, setLoaderValue] = useState(0);
  const [loaderStatus, setLoaderStatus] = useState("Calibrating gravity field");
  const [isLeavingLoader, setIsLeavingLoader] = useState(false);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const readyRef = useRef(false);
  const doneRef = useRef(false);
  const paletteRef = useRef(selectedPalette);
  const stageRef = useRef(0);
  const isScrolledRef = useRef(false);
  readyRef.current = isReady;
  doneRef.current = isDone;
  paletteRef.current = selectedPalette;

  // Direct gradient update without React re-renders
  const updateGradient = (stg: number, pal: PaletteKey) => {
    const el = document.getElementById("gradient");
    if (!el) return;
    el.style.background =
      stg === 0
        ? PALETTES[pal].bg
        : stg === 1
        ? "radial-gradient(circle at center,#ffffff 0%,#fbffe5 38%,#e8ff9c 100%)"
        : "radial-gradient(circle at center,#ffffff 0%,#fff0f1 38%,#ffd1d5 100%)";
  };

  useEffect(() => {
    updateGradient(stageRef.current, selectedPalette);
  }, [selectedPalette]);

  // Handle scene readiness
  const handleSceneReady = useCallback(() => {
    setIsReady(true);
  }, []);

  // Preloader animation loop
  useEffect(() => {
    let loaderVal = 0;
    let loaderLast = performance.now();
    let animId = 0;

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - loaderLast) / 1000);
      loaderLast = now;

      if (!doneRef.current) {
        const ceiling = readyRef.current ? 100 : 92;
        loaderVal += (ceiling - loaderVal) * (readyRef.current ? 6 : 1.7) * dt;
        if (readyRef.current && loaderVal >= 99.4) loaderVal = 100;

        setLoaderValue(loaderVal);
        setLoaderStatus(
          loaderVal >= 100 ? "Entering orbit" : "Calibrating gravity field"
        );

        if (loaderVal >= 99.9 && readyRef.current && !doneRef.current) {
          doneRef.current = true;
          setIsDone(true);

          setTimeout(() => {
            setIsLeavingLoader(true);
            setTimeout(() => {
              setIsStarted(true);
              setIsRevealed(true);
            }, 520);
          }, 140);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Smooth inertial scroll & scroll progress handler
  useEffect(() => {
    let scrollTarget = window.scrollY;
    let scrollActual = window.scrollY;
    let scrolling = false;
    let scrollRaf = 0;

    const smoothScroll = () => {
      scrollActual += (scrollTarget - scrollActual) * 0.09;
      if (Math.abs(scrollTarget - scrollActual) < 0.5) {
        scrollActual = scrollTarget;
        scrolling = false;
      }
      window.scrollTo(0, scrollActual);
      if (scrolling) scrollRaf = requestAnimationFrame(smoothScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 1) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("#drawer") || target.closest(".modal-content"))
      ) {
        return;
      }

      e.preventDefault();
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      scrollTarget = Math.max(0, Math.min(maxScroll, scrollTarget + e.deltaY));

      if (!scrolling) {
        scrolling = true;
        smoothScroll();
      }
    };

    const handleScroll = () => {
      if (!scrolling) scrollTarget = window.scrollY;
      const vh = window.innerHeight || 1;
      const prog = window.scrollY / vh;

      // Update background gradient stage without React re-rendering
      const currentStage = prog > 1.8 ? 2 : prog > 0.8 ? 1 : 0;
      if (currentStage !== stageRef.current) {
        stageRef.current = currentStage;
        updateGradient(currentStage, paletteRef.current);
      }

      // Only toggle isScrolled boolean when value actually transitions
      const scrolled = window.scrollY > 40;
      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(scrollRaf);
    };
  }, []);

  // IntersectionObserver for reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isStarted]);

  // Global keydown (Escape to close modals / mobile menu)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Background Gradient */}
      <div id="gradient" style={{ background: PALETTES[selectedPalette].bg }} />

      {/* Three.js Physics Scene */}
      <PhysicsScene
        started={isStarted}
        selectedPalette={selectedPalette}
        onReady={handleSceneReady}
      />

      {/* Preloader */}
      {!isStarted && (
        <div id="loader" className={isLeavingLoader ? "leaving" : ""}>
          <div className="loader-content">
            <img
              src={smLogo}
              alt="Aman Logo"
              className="loader-logo loader-item"
            />
            <div className="loader-status loader-item" id="loader-status">
              {loaderStatus}
            </div>
            <div className="progress-track loader-item">
              <div
                className="progress-fill"
                id="progress-fill"
                style={{ width: `${loaderValue}%` }}
              />
            </div>
            <div className="loader-count loader-item" id="loader-count">
              {String(Math.floor(loaderValue)).padStart(3, "0")}%
            </div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <Navigation
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        isMobileMenuOpen={isMobileMenuOpen}
        visible={isRevealed}
        isScrolled={isScrolled}
      />

      {/* Main Content */}
      <main>
        <HeroSection revealed={isRevealed} />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ServicesSection />
        <ExperienceSection onSelectExperience={setSelectedExperience} />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Mobile Navigation Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Credential / Experience Modal */}
      <CredentialModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}
