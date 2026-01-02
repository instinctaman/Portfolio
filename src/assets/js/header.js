import $ from "jquery";

export function headerScript() {

  function runTest() {
    const $tabs = $("#navbarSupportedContent");
    const $activeItem = $tabs.find(".active");

    if (!$tabs.length || !$activeItem.length) return;

    const height = $activeItem.innerHeight();
    const width = $activeItem.innerWidth();
    const position = $activeItem.position();

    $(".hori-selector").css({
      top: position.top + "px",
      left: position.left + "px",
      height: height + "px",
      width: width + "px",
    });
  }

  /* ---------- URL-based active menu ---------- */
  function syncActiveWithURL() {
    const path = window.location.pathname || "/";

    $("#navbarSupportedContent ul li").removeClass("active");

    const $target = $(
      `#navbarSupportedContent ul li a[href="${path}"]`
    );

    if ($target.length) {
      $target.parent().addClass("active");
    } else {
      $('#navbarSupportedContent ul li a[href="/"]').parent().addClass("active");
    }

    setTimeout(runTest, 0);
  }

  /* ---------- INITIAL RUN ---------- */
  syncActiveWithURL();

  /* ---------- CLICK (HEADER) ---------- */
  $("#navbarSupportedContent").on("click", "li", function () {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    setTimeout(runTest, 0);
  });

  /* ---------- LISTEN TO FOOTER / ROUTE CHANGES ---------- */
  window.addEventListener("popstate", syncActiveWithURL);

  /* ---------- Resize ---------- */
  const handleResize = () => setTimeout(runTest, 500);
  $(window).on("resize", handleResize);

  /* ---------- Bootstrap collapse ---------- */
  $("#navbarSupportedContent")
    .on("shown.bs.collapse hidden.bs.collapse", function () {
      setTimeout(runTest, 100);
    });

  /* ---------- CLEANUP ---------- */
  return () => {
    $("#navbarSupportedContent").off("click", "li");
    $(window).off("resize", handleResize);
    $("#navbarSupportedContent").off("shown.bs.collapse hidden.bs.collapse");
    window.removeEventListener("popstate", syncActiveWithURL);
  };
}
