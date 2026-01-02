
import $ from "jquery";

export function initLegacyScripts() {
  /* ---------------- POPUP FUNCTIONS ---------------- */

  // function openPopup(popup) {
  //   if (!popup) return;
  //   $(popup).show().attr("aria-hidden", "false");
  //   $("#closePopup")?.focus();
  // }

  // function closePopup(popup) {
  //   if (!popup) return;
  //   $(popup).hide().attr("aria-hidden", "true");
  //   $("#openMyPopup")?.focus();
  // }

  /* ---------------- MODAL LOGIC ---------------- */

  const $modal = $(".modal-frame");
  const $overlay = $(".modal-overlay");

  if ($modal.length && $overlay.length) {
    $modal.on(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function () {
        if ($modal.hasClass("state-leave")) {
          $modal.removeClass("state-leave");
        }
      }
    );

    $(".close").on("click", function () {
      $overlay.removeClass("state-show");
      $modal.removeClass("state-appear").addClass("state-leave");
    });

    $(".open").on("click", function () {
      $overlay.addClass("state-show");
      $modal.removeClass("state-leave").addClass("state-appear");
    });
  }

  /* ---------------- TYPED.JS ---------------- */

  // var typed = new Typed('#element', {
  //     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  //     typeSpeed: 50,
  //   });

  /* ---------------- NAVBAR SCROLL ---------------- */

  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (!navbar) return;

    if (window.scrollY > lastScrollY && window.scrollY > 60) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  /* ---------------- CLEANUP (VERY IMPORTANT) ---------------- */

  return () => {
    window.removeEventListener("scroll", handleScroll);

    $(".close").off("click");
    $(".open").off("click");
    $modal.off();
  };
}
