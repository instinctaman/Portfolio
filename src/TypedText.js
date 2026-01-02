import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypedText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Web Developer.",
        "App Designer.",
        "UI/UX Enthusiast.",
        "Consultant.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

export default TypedText;
