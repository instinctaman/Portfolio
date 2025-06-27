function openPopup(popup) {
    /* Open popup and make accessible screen readers */
    $(popup).show().attr("aria-hidden", "false");
    /* Focus on element to guide screen readers to popup */
    $("#closePopup").focus();
}

function closePopup(popup) {
    /* Close popup and hide from screen readers */
    $(popup).hide().attr("aria-hidden", "true");
    /* Focus screen readers back to button */
    $("#openMyPopup").focus();
}
$(document).on('ready', function () {
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
        if ($modal.hasClass('state-leave')) {
            $modal.removeClass('state-leave');
        }
    });

    $('.close').on('click', function () {
        $overlay.removeClass('state-show');
        $modal.removeClass('state-appear').addClass('state-leave');
    });

    $('.open').on('click', function () {
        $overlay.addClass('state-show');
        $modal.removeClass('state-leave').addClass('state-appear');
    });

});