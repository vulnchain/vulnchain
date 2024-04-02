const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

$(document).ready(function() {
    $('.accordion-toggle').on('change', function() {
        if (this.checked) {
            closeOtherAccordions(this);
            slideUpContent();
            slideToggleContent(this);
            scrollToAccordion(this);
        }
    });

    function closeOtherAccordions(currentToggle) {
        $('.accordion-toggle').not(currentToggle).prop('checked', false);
    }

    function slideUpContent() {
        $('.accordion-content').slideUp(400);
    }

    function slideToggleContent(toggle) {
        $(toggle).next('.accordion-content').slideToggle(400);
    }

    function scrollToAccordion(toggle) {
        var headerHeight = $('header').outerHeight();
        var accordionOffsetTop = $(toggle).parent().offset().top - headerHeight;

        $('html, body').animate({
            scrollTop: accordionOffsetTop
        }, 800); // 800 milliseconds duration for the animation
    }
});











