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





// form dropdowns ------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = {
        durations: document.querySelector('.durations-results'),
        categories: document.querySelector('.categories-results'),
        years: document.querySelector('.years-results'),
        months: document.querySelector('.months-results'),
    };

    const arrows = {
        durations: document.getElementById('durations-arrow'),
        categories: document.getElementById('categories-arrow'),
        years: document.getElementById('years-arrow'),
        months: document.getElementById('months-arrow'),
    };

    // Function to toggle a specific dropdown
    const toggleDropdown = (type) => {
        const dropdown = dropdowns[type];
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    // Event listeners for arrow buttons
    arrows.durations.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent outside click handler from hiding dropdown
        toggleDropdown('durations');
    });

    arrows.categories.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown('categories');
    });

    arrows.years.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown('years');
    });
    arrows.months.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown('months');
    });

    // Hide all dropdowns on clicking outside
    document.addEventListener('click', () => {
        Object.values(dropdowns).forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });

    // Prevent hiding when clicking inside a dropdown
    Object.values(dropdowns).forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});





// Get the input fields and result divs
const nameInput = document.querySelector('.name-filter input');
const yearsInput = document.querySelector('#years-input');
const monthsInput = document.querySelector('#months-input');
const durationInput = document.querySelector('#durations-input');
const categoriesInput = document.querySelector('#categories-input');

const nameResults = document.querySelector('.name-results');
const yearsResults = document.querySelector('.years-results');
const monthsResults = document.querySelector('.months-results');
const categoriesResults = document.querySelector('.categories-results');
const durationsResults = document.querySelector('.durations-results');

// Add event listeners to the input fields
nameInput.addEventListener('input', () => {
    const searchTerm = nameInput.value.toLowerCase();
    filterResults(nameResults, searchTerm);
    toggleResultsVisibility(nameResults, searchTerm);
});

yearsInput.addEventListener('input', () => {
    const searchTerm = yearsInput.value.toLowerCase();
    filterResults(yearsResults, searchTerm);
    toggleResultsVisibility(yearsResults, searchTerm);
});

durationInput.addEventListener('input', () => {
    const searchTerm = durationInput.value.toLowerCase();
    filterResults(durationsResults, searchTerm);
    toggleResultsVisibility(durationsResults, searchTerm);
});

categoriesInput.addEventListener('input', () => {
    const searchTerm = categoriesInput.value.toLowerCase();
    filterResults(categoriesResults, searchTerm);
    toggleResultsVisibility(categoriesResults, searchTerm);
});
monthsInput.addEventListener('input', () => {
    const searchTerm = monthsInput.value.toLowerCase();
    filterResults(monthsResults, searchTerm);
    toggleResultsVisibility(monthsResults, searchTerm);
});


// Add event listener to hide results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box-left')) {
        hideAllResults();
    }
});

// Add click event listeners to dropdown items to set input values
function setupDropdownClickListeners(resultsContainer, inputField) {
    const resultItems = resultsContainer.querySelectorAll('p');
    resultItems.forEach(item => {
        item.addEventListener('click', () => {
            inputField.value = item.textContent; // Set the clicked value to the input field
            resultsContainer.style.display = 'none'; // Hide the dropdown
        });
    });
}

// Call the setup function for each input and its corresponding dropdown
setupDropdownClickListeners(nameResults, nameInput);
setupDropdownClickListeners(yearsResults, yearsInput);
setupDropdownClickListeners(durationsResults, durationInput);
setupDropdownClickListeners(categoriesResults, categoriesInput);
setupDropdownClickListeners(monthsResults, monthsInput);

// Function to filter results based on the search term
function filterResults(resultsContainer, searchTerm) {
    const resultItems = resultsContainer.querySelectorAll('p');
    let hasVisibleItems = false; // Track if any items match the search term

    resultItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const isVisible = itemText.includes(searchTerm);
        item.style.display = isVisible ? 'block' : 'none';
        if (isVisible) {
            hasVisibleItems = true;
        }
    });

    resultsContainer.style.display = hasVisibleItems ? 'block' : 'none'; // Show or hide the dropdown
}

// Function to toggle results visibility based on search term
function toggleResultsVisibility(resultsContainer, searchTerm) {
    resultsContainer.style.display = searchTerm.trim() === '' ? 'none' : 'block';
}

// Function to hide all results
function hideAllResults() {
    [nameResults, yearsResults, durationsResults, categoriesResults, monthsResults].forEach(results => {
        results.style.display = 'none';
    });
}

function hideAllResults() {
    nameResults.style.display = 'none';
    yearsResults.style.display = 'none';
    durationsResults.style.display = 'none';
    monthsResults.style.display = 'none';
    categoriesResults.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input'); // Replace with your input's actual ID
    const nameResults = document.querySelector('.name-results'); // Replace with your dropdown's actual class

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            const searchTerm = nameInput.value.trim().toLowerCase();
            if (searchTerm.length === 0) {
                nameResults.style.display = 'none'; // Hide if input is empty
            } else {
                const resultItems = nameResults.querySelectorAll('p'); // Assuming the results are inside <p> elements
                let hasMatch = false;

                resultItems.forEach(item => {
                    const itemText = item.textContent.toLowerCase();
                    if (itemText.includes(searchTerm)) {
                        item.style.display = 'block'; // Show matching item
                        hasMatch = true;
                    } else {
                        item.style.display = 'none'; // Hide non-matching item
                    }
                });

                // Show the dropdown only if there are matching items
                nameResults.style.display = hasMatch ? 'block' : 'none';
            }
        });
    }
});




$(document).ready(function () {
    // Hide all course content at the start using slideUp()
    $(".single-course-content").slideUp(0); // Use 0 duration to hide instantly

    $(".details-button").click(function () {
        const content = $(this).closest(".single-course").find(".single-course-content");

        content.slideToggle(); // Slide down or up on click
        $(this).find(".details-arrow").toggleClass("rotate"); // Rotate the arrow
    });
});
