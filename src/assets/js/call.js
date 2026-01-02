export function initInputFocus() {
  const inputs = document.querySelectorAll(".input");
  if (!inputs.length) return;

  function focusFunc(e) {
    e.target.parentNode?.classList.add("focus");
  }

  function blurFunc(e) {
    if (e.target.value === "") {
      e.target.parentNode?.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  /* ---------- CLEANUP ---------- */
  return () => {
    inputs.forEach((input) => {
      input.removeEventListener("focus", focusFunc);
      input.removeEventListener("blur", blurFunc);
    });
  };
}
