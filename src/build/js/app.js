'use strict';

const state = {
    isMobile: false,
    hasTouch: false
};

// SELECTOR CONSTANTS
const {
    MAIN_NAV,
    BANNER,
    LOGO_WRAP,
    TROWEL_ICON
} = require('./selectors');

//================================================================================
// DOM / Display functions
//================================================================================

const Obj_values = require('object.values');

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




//================================================================================
// API handlers / Display handlers
//================================================================================



//================================================================================
// API calls
//================================================================================



//================================================================================
// Utility functions
//================================================================================

const { 
    fixBanner, 
    expandNav,
    shrinkNav, 
    toggleHeaderBgImg,
    callToActionHeightFix,
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
    if(width >= 737) {
        callToActionHeightFix();
    } else {
        $('.action').css('height', '');
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



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Checks endpoint to apply correct styles to view
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkEndpoint() {
    let path = location.pathname;
    if(path === '/') {
        $('header,  main, .banner').addClass('landing');
        $('.home').addClass('active'); // Active nav link styles
    } else {
        // Any Page
        $('header,  main, .banner').addClass('pages');
        // $('.banner').addClass('fixed');
        // shrinkNav();
        $('.' + path.slice(1)).addClass('active'); // Active nav link styles
    }
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
        smoothScroll('#overview');
        // Adjust timing on banner shrink to coincide with the
        // initial smoothScroll --> avoids a delay
        // smoothScroll('#overview', 1000, -60);
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


//================================================================================
// Utility and Initialization handlers
//================================================================================
const { startSlideShow } = require('./slideshow');

function utils() {
    checkEndpoint();    // checks current endpoint to apply active styles
    checkSizeHandler(); // checks width on resize
    checkScrollPos();   // gets user scroll y-pos to animate banner nav
    checkForTouch();    // checks if user has touch device by detecting first touch on screen
}

function init() {
    if(location.pathname === '/') {
        toggleHeaderBgImg();
        fixBanner();
    }
    state.hasTouch ? setBgImgHeight() : null;
    fadeOutLoadScreen();
    startSlideShow(4000); // starts bg image slideshow
    // getImagesAndDisplay();
}

//================================================================================
// Entry point -- Main
//================================================================================

$(function () {
    utils();
    navClicks();
    init();
});

