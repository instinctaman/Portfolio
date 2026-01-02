
export function progressScript() {

  /* ---------------- PROGRESS BAR ---------------- */

  function progressBarAndCountNumber() {
    const progress = document.querySelectorAll(".progress");
    if (!progress.length) return;

    let count = 0;
    const MAX = 80;

    const run = setInterval(() => {
      count++;

      progress.forEach((element) => {
        const target = Number(element.dataset.progress);

        if (count <= target) {
          element.parentElement.style.background =
            `conic-gradient(#05e6f7 ${count}%, #212428 0)`;

          if (element.firstElementChild) {
            element.firstElementChild.textContent = `${count}%`;
          }
        }
      });

      if (count >= MAX) {
        clearInterval(run);
      }
    }, 20);

    return run;
  }

  /* ---------- RUN AFTER DOM IS READY ---------- */
  const progressInterval = setTimeout(() => {
    progressBarAndCountNumber();
  }, 300);

  /* ---------------- CLEANUP ---------------- */
  return () => {
    clearTimeout(progressInterval);
  };
}
