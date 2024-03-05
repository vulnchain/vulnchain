const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Add class to header on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

document.addEventListener("DOMContentLoaded", function() {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(function(toggle) {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                closeOtherAccordions(this);
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
});
