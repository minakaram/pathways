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

// hero section swiper -------------------------------------------------------------------------------------------------

const heroSwiper = new Swiper(".heroSwiper", {
    navigation: {
        nextEl: ".hero-button-next",
        prevEl: ".hero-button-prev",
    },
    pagination: {
        el: ".hero-pagination",
        clickable: true,
    },
    // loop: true,
    // speed: 700,
    // autoplay: {
    //     // delay: 5000,
    // },
});

// form dropdowns ------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = {
        categories: document.querySelector('.categories-results'),
        cities: document.querySelector('.cities-results'),
        years: document.querySelector('.years-results')
    };

    const arrows = {
        categories: document.getElementById('categories-arrow'),
        cities: document.getElementById('cities-arrow'),
        years: document.getElementById('years-arrow')
    };

    // Function to toggle a specific dropdown
    const toggleDropdown = (type) => {
        const dropdown = dropdowns[type];
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    // Event listeners for arrow buttons
    arrows.categories.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent outside click handler from hiding dropdown
        toggleDropdown('categories');
    });

    arrows.cities.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown('cities');
    });

    arrows.years.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown('years');
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
const nameInput = document.querySelector('.course-name-input input');
const yearsInput = document.querySelector('#years-input');
const categoriesInput = document.querySelector('#categories-input');
const citiesInput = document.querySelector('#cities-input');

const nameResults = document.querySelector('.name-results');
const yearsResults = document.querySelector('.years-results');
const categoriesResults = document.querySelector('.categories-results');
const citiesResults = document.querySelector('.cities-results');

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

categoriesInput.addEventListener('input', () => {
    const searchTerm = categoriesInput.value.toLowerCase();
    filterResults(categoriesResults, searchTerm);
    toggleResultsVisibility(categoriesResults, searchTerm);
});

citiesInput.addEventListener('input', () => {
    const searchTerm = citiesInput.value.toLowerCase();
    filterResults(citiesResults, searchTerm);
    toggleResultsVisibility(citiesResults, searchTerm);
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
setupDropdownClickListeners(categoriesResults, categoriesInput);
setupDropdownClickListeners(citiesResults, citiesInput);

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
    [nameResults, yearsResults, categoriesResults, citiesResults].forEach(results => {
        results.style.display = 'none';
    });
}

function hideAllResults() {
    nameResults.style.display = 'none';
    yearsResults.style.display = 'none';
    categoriesResults.style.display = 'none';
    citiesResults.style.display = 'none';
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


// upcoming section swiper -------------------------------------------------------------------------------------------------

const upcommingSwiper = new Swiper(".upcomingSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".upcoming-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".upcoming-button-next",
        prevEl: ".upcoming-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



// catagories section swiper -------------------------------------------------------------------------------------------------

const catagoriesSwiper = new Swiper(".catagoriesSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".catagories-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".catagories-button-next",
        prevEl: ".catagories-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                dynamicBullets: true, // Enable dynamic bullets only on small screens
            },
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                dynamicBullets: true, // Enable dynamic bullets only on small screens
            },
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    on: {
        init: function () {
            const paginationContainer = document.querySelector(".catagories-pagination");
            const maxVisibleDots = 4;

            // Get all child elements of the pagination container
            const paginationDots = Array.from(paginationContainer.children);

            // Hide pagination dots if they exceed the maxVisibleDots count
            paginationDots.forEach((dot, index) => {
                if (index >= maxVisibleDots) {
                    dot.style.display = "none";
                }
            });

            // Append SVG if there are more than maxVisibleDots
            if (paginationDots.length > maxVisibleDots) {
                const svgDots = document.createElement("p");
                svgDots.style.display = "flex";
                svgDots.style.marginLeft = "2px";
                svgDots.innerHTML = `
                    <svg width="23" height="5" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                        <rect x="4" width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                        <rect x="8" width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                        <rect x="12" width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                        <rect x="16" width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                        <rect x="20" width="3" height="5" rx="1" fill="#666565" fill-opacity="0.3"/>
                    </svg>
                `;
                paginationContainer.appendChild(svgDots);
            }
        },
    },
});


// catagories section swiper ----------------------------------------------------------------------------------------------

const topCatagoriesSwiper = new Swiper(".topSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".top-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".top-button-next",
        prevEl: ".top-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// partners section swiper ------------------------------------------------------------------------------------------------

const partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".partners-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".partners-button-next",
        prevEl: ".partners-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 8,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 8,
            spaceBetween: 30,
        },
    },
})

// crew swiper ------------------------------------------------------------------------------------------------------------

const crewSwiper = new Swiper(".crewSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".crew-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".crew-button-next",
        prevEl: ".crew-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        868: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
})

// testimonial swiper ------------------------------------------------------------------------------------------------------------

const testimonialSwiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    // autoplay: {
    //     delay: 10000,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        568: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
    },
})

document.getElementById("copy-icon").addEventListener("click", function () {
    const addressText = document.getElementById("address-text").textContent;
    const tooltip = document.getElementById("copy-tooltip");

    navigator.clipboard.writeText(addressText).then(() => {
        // Show tooltip
        tooltip.classList.add("show");

        // Hide tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.remove("show");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});



