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


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Adds hidden class to all classes passed in as args
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function hide() {
    Object.values(arguments).forEach((target) => {
        $(target).addClass('hidden');
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Removes hidden class from all classes passed in as args
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function show() {
    Object.values(arguments).forEach((target) => {
        $(target).removeClass('hidden');
    });
}



//================================================================================
// API handlers / Display handlers
//================================================================================


// TODO





//================================================================================
// API calls
//================================================================================


// TODO


//================================================================================
// Utility functions
//================================================================================

const { 
    fixBanner, 
    expandNav,
    shrinkNav, 
    callToActionHeightFix, 
    setBgImgHeight 
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
        toggleHeaderBgImg();
        if(location.pathname === '/') {
            fixBanner();
        }
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Hides/Shows header psuedo-el -- prevents bg image from
// showing below footer on overscrolls
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function toggleHeaderBgImg() {
    let winToTop = $(window).scrollTop(),
        headerHt = $('header').height();
    if(winToTop > headerHt * 2) {
        $('header').addClass('remove');
    } else {
        $('header').removeClass('remove');
    }
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
// Fades out loading screen and removes it from DOM
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function fadeOutLoadScreen() {
    setTimeout(() => {
        $('.loading-page, .loading-page svg').addClass('fade-out');
        setTimeout(() => {
            $('body').removeClass('no-scroll');
            // need to recalculate when scroll bar appears 
            // and screen jumps (resize not triggered)
            // callToActionHeightFix();
            window.innerWidth >= 737 ? callToActionHeightFix() : null;
        }, 700);
        setTimeout(() => {
            $('.loading-page').remove();
        }, 2000);
    }, 500);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Checks endpoint to apply correct styles to view
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function checkEndpoint() {
    let path = location.pathname;
    if(path !== '/') {
        $('header,  main, .banner').addClass('pages');
        $('.banner').addClass('fixed');
        shrinkNav();
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

// function burgerHover() {
//     // NOT FINISHED
//     let deg = 90;
//     $('.burger-btn').on('mouseenter', e => {
//         e.preventDefault();
//         if($('.burger-icon').hasClass('open')) {
//             $('.burger-icon').css({
//                 'transform': `rotate(${deg}deg) translateX(50%)`, 
//                 'top': 0,
//                 'left': 0
//             });
//             deg += 90;
//         }
//     });
// }

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

function utils() {
    checkEndpoint();
    checkSizeHandler();
    checkScrollPos();
    checkForTouch();
}

function init() {
    // displaySlider(); // initializes slick slider
    // responsiveReslick(); // tears down and reslicks slider on window resize
    if(location.pathname === '/') {
        fixBanner();
    }
    toggleHeaderBgImg();
    state.hasTouch ? setBgImgHeight() : null;
    fadeOutLoadScreen();
}

//================================================================================
// Entry point -- Main
//================================================================================

$(function () {
    utils();
    navClicks();
    init();
});

// $(window).on('load', e => {
//     e.preventDefault();
// });