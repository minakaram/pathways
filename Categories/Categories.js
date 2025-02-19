// language toggle 

document.addEventListener('DOMContentLoaded', () => {
    const languageBox = document.querySelector('.language-box');
    const langMenu = document.querySelector('.lang-absolute');

    languageBox.addEventListener('click', () => {
        langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!languageBox.contains(event.target)) {
            langMenu.style.display = 'none';
        }
    });

    langMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'P') {
            languageBox.querySelector('span').textContent = event.target.textContent;
            langMenu.style.display = 'none';

            event.stopPropagation();
        }
    });


    // langMenu.addEventListener('click', (event) => {
    //     const link = event.target.closest('a'); // Ensure we target the correct <a> element
    //     if (link) {
    //         languageBox.querySelector('span').textContent = link.textContent.trim(); // Update the span with the link text
    //         langMenu.style.display = 'none';
    //         event.stopPropagation();
    //     }
    // });

});

// more menu ---------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const MoreBtn = document.querySelector('.more');
    const MoreMenu = document.querySelector('.more-dropdown');


    MoreBtn.addEventListener('click', () => {
        MoreMenu.style.display = MoreMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!MoreBtn.contains(event.target)) {
            MoreMenu.style.display = 'none';
        }
    });
});


$(document).ready(function () {
    const $searchOverlay = $('.search-overlay');
    const $body = $('body');

    // Function to show the overlay and disable scrolling
    function showSearchOverlay() {
        $searchOverlay.fadeIn(300);
        $body.css('overflow', 'hidden'); // Disable scrolling
        // $searchOverlay.css("overflow-y", "scroll");
    }

    // Function to hide the overlay and enable scrolling
    function hideSearchOverlay() {
        $searchOverlay.fadeOut(300, function () {
            $body.css('overflow', ''); // Restore scrolling after fade-out completes
        });
    }

    // Open overlay when clicking the search button
    $('#nav-search-icon').click(function () {
        showSearchOverlay();
    });

    // Close overlay when clicking the close button
    $('#nav-search-cancel').click(function () {
        hideSearchOverlay();
    });

    // Close overlay if clicking outside of it
    $(document).click(function (event) {
        if (!$(event.target).closest('.search-overlay, #nav-search-icon').length) {
            hideSearchOverlay();
        }
    });
});


const searchCoursesSwiper = new Swiper(".nav-courses-results", {
    slidesPerView: "auto", // Allow dynamic slide widths
    spaceBetween: 20,
    loop: false, // Set to false to allow proper scrolling
    freeMode: true, // Enables smooth scrolling without snapping
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     draggable: true, // Allow manual scrolling
    // },
    mousewheel: {
        forceToAxis: true, // Scrolls only in one direction
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const searchCategoriesSwiper = new Swiper(".nav-categories-results", {
    slidesPerView: "auto", // Allow dynamic slide widths
    spaceBetween: 20,
    loop: false, // Set to false to allow proper scrolling
    freeMode: true, // Enables smooth scrolling without snapping
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     draggable: true, // Allow manual scrolling
    // },
    mousewheel: {
        forceToAxis: true, // Scrolls only in one direction
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const searchCitiesSwiper = new Swiper(".nav-cities-results", {
    slidesPerView: "auto", // Allow dynamic slide widths
    spaceBetween: 20,
    loop: false, // Set to false to allow proper scrolling
    freeMode: true, // Enables smooth scrolling without snapping
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     draggable: true, // Allow manual scrolling
    // },
    mousewheel: {
        forceToAxis: true, // Scrolls only in one direction
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// navbar dropdowns ----------------------------------------------------------------------------------------

const categoriesArrow = document.getElementById('categories-nav-arrow');
const citiesArrow = document.getElementById('cities-nav-arrow');
const categoriesDropdown = document.querySelector('.categories-nav-dropdown');
const citiesDropdown = document.querySelector('.cities-nav-dropdown');

// Function to toggle dropdowns
function toggleDropdown(activeDropdown) {
    // Check if the active dropdown is currently visible
    const isActiveVisible = activeDropdown.style.display === 'flex';
    const MoreMenu = document.querySelector('.more-dropdown');
    // Hide all dropdowns
    categoriesDropdown.style.display = 'none';
    citiesDropdown.style.display = 'none';
    MoreMenu.style.display = 'none';

    // Toggle the active dropdown
    if (!isActiveVisible) {
        activeDropdown.style.display = 'flex';
    }
}

// Add event listeners to the SVGs
categoriesArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the document
    toggleDropdown(categoriesDropdown, citiesDropdown);
});

citiesArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the document
    toggleDropdown(citiesDropdown, categoriesDropdown);
});

// Add event listener to the dropdowns to stop click propagation
categoriesDropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click inside the dropdown from closing it
});

citiesDropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click inside the dropdown from closing it
});

// Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener('click', () => {
    categoriesDropdown.style.display = 'none';
    citiesDropdown.style.display = 'none';
});


const navigationMobileToggler = document.getElementById('navigation-mobile-toggler');
const navigationBoxMobile = document.querySelector('.navigation-box-mobile');

// Set initial state
let isMenuOpen = false;

navigationMobileToggler.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navigationBoxMobile.style.right = isMenuOpen ? '0' : '100%';
});

document.addEventListener('click', (event) => {
    if (!navigationMobileToggler.contains(event.target) && !navigationBoxMobile.contains(event.target)) {
        isMenuOpen = false;
        navigationBoxMobile.style.right = '100%';
    }
});





document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and containers
    const cardsButton = document.getElementById("cards-button");
    const rowsButton = document.getElementById("rows-button");
    const cardsContainer = document.querySelector(".cards-container");
    const boxesContainer = document.querySelector(".boxes-container");

    // Set the initial state: cards-container is active
    cardsButton.classList.add("active");
    cardsContainer.style.display = "gird";
    boxesContainer.style.display = "none";

    // Add click event listener to the cards button
    cardsButton.addEventListener("click", function () {
        if (!cardsButton.classList.contains("active")) {
            // Toggle active class
            cardsButton.classList.add("active");
            rowsButton.classList.remove("active");

            // Toggle visibility of containers
            cardsContainer.style.display = "grid";
            boxesContainer.style.display = "none";
        }
    });

    // Add click event listener to the rows button
    rowsButton.addEventListener("click", function () {
        if (!rowsButton.classList.contains("active")) {
            // Toggle active class
            rowsButton.classList.add("active");
            cardsButton.classList.remove("active");

            // Toggle visibility of containers
            cardsContainer.style.display = "none";
            boxesContainer.style.display = "grid";
        }
    });
});