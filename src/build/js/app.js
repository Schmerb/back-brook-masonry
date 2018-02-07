'use strict';

const state = {
    isMobile: false,
    hasTouch: false,
    projects: []
};

// SELECTOR CONSTANTS
const {
    MAIN_NAV,
    BANNER,
    LOGO_WRAP,
    TROWEL_ICON,
    SEARCH_RESULTS,
    SEARCH_ICON,
    CLEAR_ICON
} = require('./selectors');

//================================================================================
// DOM / Display functions
//================================================================================

const Obj_values = require('object.values');

const { findMatches } = require('./utils');

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Adds hidden class to all classes passed in as args
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function hide() {
    Obj_values(arguments).forEach((target) => {
        $(target).addClass('hidden');
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Removes hidden class from all classes passed in as args
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function show() {
    Obj_values(arguments).forEach((target) => {
        $(target).removeClass('hidden');
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Removes search results and closes results container
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function clearResults() {
    $(SEARCH_RESULTS).removeClass('open');
    $(SEARCH_RESULTS).html('');
}

function showSearchIcon() {
    // show search glass
    show(SEARCH_ICON);
    // hide x icon
    hide(CLEAR_ICON);
}

function hideSearchIcon() {
    // hide search glass
    hide(SEARCH_ICON);
    // display x icon
    show(CLEAR_ICON); 
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Searches project names for matches and updates
// the DOM with results
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function showResults(query) {
    query = query.toLowerCase().trim();
    if(query === '') {
        clearResults();
        showSearchIcon();
        return;
    }
    hideSearchIcon();
    const { projects } = state;
    let results = findMatches(projects, 'name', query)
                  .map(result => {
                    return `
                        <li>
                            <a href="${result.url}">${result.name}</a>
                        </li>
                    `;
                });
    
    if(results.length > 0) {
        // At least one match found
        $(SEARCH_RESULTS).addClass('open')
                         .html(results.join(''));
        return;
    }

    // No matches remove previous results and close container
    clearResults();
}





//================================================================================
// API handlers / Display handlers
//================================================================================



//================================================================================
// API calls
//================================================================================

function getAllProjects() {
    $.ajax({
        url: '/projects/all/json',
        type: 'GET',
        dataType: 'json',
        success: res => {
            state.projects = res.projects;
            console.log(state.projects);
        },
        error: (jqXHR, textStatus, err) => {
            console.log(err);
        }
    });
}

//================================================================================
// Utility functions
//================================================================================

const { 
    fixBanner, 
    expandNav,
    shrinkNav, 
    toggleHeaderBgImg,
    setBgImgHeight,
    fadeOutLoadScreen
} = require('./utils');


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Gives a smooth animation to page navigation bringing the 
// target element to the top of the window
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function smoothScroll(target, duration = 1200, offset = 0) {
    $('body, html').animate({
        scrollTop: $(target).offset().top - offset
    }, duration);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Fires on user scroll event
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkScrollPos() {
    $(window).scroll(e => {
        if(location.pathname === '/') {
            toggleHeaderBgImg();
            fixBanner();
        }
    });
}



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Check screen size to determine Mobile Vs. Desktop
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkSizeHandler() {
    checkSize();
    $(window).resize(checkSize); 
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Called by checkSizeHandler to set state if mobile view
// or not (Portrait view)
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkSize() {
    let width = window.innerWidth;
    state.isMobile = width <= 414;
    // if device has touch, fix bg img height to avoid page jump
    state.hasTouch ? setBgImgHeight() : null;
    if(width < 1060) {
        // remove z-index on header for collapse nav views (<1060px)
        $('header').css('z-index', '');
    } 
    fixBanner();
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Checks if a user has touched their device and
// applies class to body and global var indicating whether
// user has touched / can touch. 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkForTouch() {
    $(window).on('touchstart', e => {
        state.hasTouch = true;
        setBgImgHeight();
        // remove listener once fired
        $(window).off('touchstart');
    });
}


//================================================================================
// Event Listeners
//================================================================================

function burgerClick() {
    $('.burger-btn').on('click', function(e) {
        e.preventDefault();
        let burger = `.burger-btn, .burger-icon, ${MAIN_NAV}`;
        $(burger).toggleClass('open');
    });
}


function trowelClick() {
    $(TROWEL_ICON).on('click', e => {
        e.preventDefault();
        // smoothScroll('#overview');
        // Adjust timing on banner shrink to coincide with the
        // initial smoothScroll --> avoids a delay
        smoothScroll('#overview', 1000, -60);
    });
}

function dropdownChange() {
    $('.category-form select').on('change', e => {
        e.preventDefault();
        const category = e.target.value
        const pathname = `/projects/${category}`;
        location.href = pathname;
        // window.history.pushState(state, category, pathname);
    });
}

function searchBarChange() {
    $('.search-bar').on('input', e => {
        e.preventDefault();
        console.log('Changed!');
        showResults(e.target.value);
    });
}

function clearIconClick() {
    $(CLEAR_ICON).on('click', e => {
        e.preventDefault();
        clearResults();
        showSearchIcon();
        $('.search-bar').val('')
                        .focus();
    });
}

//================================================================================
// Event Listener Groups
//================================================================================

function navClicks() {
    burgerClick();
    // burgerHover();
    trowelClick();
}

function categoryForm() {
    dropdownChange();
    searchBarChange();
    clearIconClick();
}


//================================================================================
// Utility and Initialization handlers
//================================================================================
const { startSlideShow } = require('./slideshow');

function utils() {
    checkSizeHandler(); // checks width on resize
    checkScrollPos();   // gets user scroll y-pos to animate banner nav
    checkForTouch();    // checks if user has touch device by detecting first touch on screen
    
    // ES6 Polyfills
    require('string.prototype.includes');
    require('string.prototype.startswith'); 
}

function init() {
    if(location.pathname === '/') {
        toggleHeaderBgImg();
        fixBanner();
    }
    state.hasTouch ? setBgImgHeight() : null;
    fadeOutLoadScreen();
    startSlideShow(4000); // starts bg image slideshow
    getAllProjects();
}

//================================================================================
// Entry point -- Main
//================================================================================

$(function () {
    utils();
    navClicks();
    categoryForm();
    init();
});

