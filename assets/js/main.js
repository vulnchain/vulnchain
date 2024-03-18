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

    for (var i = 0; i < accordionToggles.length; i++) {
        accordionToggles[i].addEventListener('change', function() {
            if (this.checked) {
                closeOtherAccordions(this);
                scrollToAccordion(this);
            }
        });
    }

    function closeOtherAccordions(currentToggle) {
        for (var i = 0; i < accordionToggles.length; i++) {
            if (accordionToggles[i] !== currentToggle) {
                accordionToggles[i].checked = false;
            }
        }
    }

    function scrollToAccordion(toggle) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var accordionOffsetTop = toggle.parentElement.offsetTop - headerHeight;
        smoothScrollTo(accordionOffsetTop, 800); // 800 milliseconds duration for the animation
    }

    function smoothScrollTo(targetPosition, duration) {
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            var elapsedTime = currentTime - startTime;
            var scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);
            window.scrollTo(0, scrollPosition);

            if (elapsedTime < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});








