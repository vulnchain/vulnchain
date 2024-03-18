const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};


// document.addEventListener("DOMContentLoaded", function() {
//     var accordionToggles = document.querySelectorAll('.accordion-toggle');

//     for (var i = 0; i < accordionToggles.length; i++) {
//         accordionToggles[i].addEventListener('change', function() {
//             if (this.checked) {
//                 closeOtherAccordions(this);
//                 scrollToAccordion(this);
//             }
//         });
//     }

//     function closeOtherAccordions(currentToggle) {
//         for (var i = 0; i < accordionToggles.length; i++) {
//             if (accordionToggles[i] !== currentToggle) {
//                 accordionToggles[i].checked = false;
//             }
//         }
//     }

//     function scrollToAccordion(toggle) {
//         var headerHeight = document.querySelector('header').offsetHeight;
//         var accordionOffsetTop = toggle.parentElement.offsetTop - headerHeight;
//         window.scrollTo({
//             top: accordionOffsetTop,
//             behavior: 'smooth'
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    var accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(function(toggle) {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                closeOtherAccordions(this);
                expandAccordion(this);
                scrollToAccordion(this);
            }
        });
    });

    function closeOtherAccordions(currentToggle) {
        accordionToggles.forEach(function(toggle) {
            if (toggle !== currentToggle) {
                toggle.checked = false;
            }
        });
    }

    function expandAccordion(toggle) {
        var content = toggle.nextElementSibling;
        var contentHeight = content.scrollHeight;
        content.style.maxHeight = contentHeight + 'px';
    }

    function scrollToAccordion(toggle) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var targetElement = toggle.nextElementSibling;
        var targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});







