'use strict';

const state = {
    isMobile: false,
    hasTouch: false
};



// SELECTOR CONSTANTS
const SLIDER = '.to-do';




//================================================================================
// HTML Template literals
//================================================================================

function getTemplate(todo) {
    return `<div>
                ${todo}
            </div>`;
}


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



// ================================================================================
// Slick Carousel
// ================================================================================

// * * * * * * * * * * * * * * * * * * * * * * * * * 
// Drone banner carousel
// * * * * * * * * * * * * * * * * * * * * * * * * * 
function initSlider() {
    $(SLIDER).slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 2400,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 415,
                settings: {
                    speed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'ease-in-out'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}


// * * * * * * * * * * * * * * * * * * * * * * * * * 
// Intializes slider and sets height to zero
// before and unsets height after it is 'slicked'
// to avoid FOUC
// * * * * * * * * * * * * * * * * * * * * * * * * * 
function displaySlider() {
    $('.slick-slider').css('height', '0px');
    initSlider();
    $('.slick-slider').css('height', '');
}


// * * * * * * * * * * * * * * * * * * * * * * * * * 
//          Destroys slick carousels
// @params   Slider element to be destroyed
// * * * * * * * * * * * * * * * * * * * * * * * * * 
function unslick(SLIDER) {
    if ($(SLIDER).hasClass('slick-initialized')) {
        $(SLIDER).slick('unslick');
    }
}


// * * * * * * * * * * * * * * * * * * * * * * * * * 
//  Used to reslick sliders on window resize 
//  inccrease. 
//  Slick settings handles unslick for mobile 
//  but does not reslick when window size increases
// * * * * * * * * * * * * * * * * * * * * * * * * * 
function responsiveReslick() {
    $(window).resize(function () {
        let width = parseInt($('body').css('width'));
        if (!$(SLIDER).hasClass('slick-initialized')) {
            initSlider();
        }
    });
}


//================================================================================
// Utility functions
//================================================================================

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
        fixBanner();
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Hides/Shows header psuedo-el
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
// checks current scrolling position and fixes banner if
// user scrolled down below header
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function fixBanner() {
    // Need to collapse nav items and logo to a fixed banner as header
    // leaves the window
    let winToTop = $(window).scrollTop(),
        navToTop = $('.main-nav').offset().top;
    let offset;

    if(navToTop - winToTop <= 20) {
        // menu-nav is in its proper position to be fixed
        $('.main-nav').addClass('fixed');
        offset = $('header').height() - $(window).scrollTop();
        if(offset >= 178) {
            // nav menu back in position to stick to bottom of window
            $('.main-nav').removeClass('fixed');
        }
    }

    let bigScreen = window.innerWidth >= 1060;
    offset = $('header').height() - $(window).scrollTop();
    if(offset <= 125) {
        if(offset <= 0) {
            // Fully collapse banner, nav, & logo
            bigScreen ? $('header').css('z-index', 2) : null;
            $('.main-nav').add('.banner')
                          .add('.logo-wrap')
                          .addClass('shrink');
        } else {
            bigScreen ? $('header').css('z-index', '') : null;
        }
    } else {
        bigScreen ? $('header').css('z-index', '') : null;
        $('.logo-wrap').removeClass('fixed');
        $('.main-nav').add('.banner')
                      .add('.logo-wrap')
                      .removeClass('shrink');
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
    state.isMobile = window.innerWidth <= 414;
    setBgImgHeight();
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// sets background image height on page load to avoid
// image jump when nav bar shows/hides on mobile
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function setBgImgHeight() {
    // trigger on 1) first touch
    //            2) on window resize when state.hasTouch === true
    let $bg = $('header');
    $bg.css('height', ''); // clear height to handle resize and get default height
    $bg.height($bg.css('height'));
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
        // $('header').css('background-attachment','scroll');
        // remove listener once fired
        $(window).off('touchstart');
    });
}


//================================================================================
// Event Listeners
//================================================================================

function burgerClick() {
    $('.burger-btn').on('click', e => {
        e.preventDefault();
        $('.burger-icon').add('.main-nav')
                         .toggleClass('open');
    });
}

//================================================================================
// Event Listener Groups
//================================================================================

function navClicks() {
    burgerClick();
}

function footerClicks() { 
}

//================================================================================
// Utility and Initialization handlers
//================================================================================

function utils() {
    checkSizeHandler();
    checkScrollPos();
    checkForTouch();
}

function init() {
    // displaySlider(); // initializes slick slider
    // responsiveReslick(); // tears down and reslicks slider on window resize
    fixBanner();
    toggleHeaderBgImg();
    setBgImgHeight();
}

//================================================================================
// Entry point -- Main
//================================================================================

$(function () {
    utils();
    navClicks();
    init();
});