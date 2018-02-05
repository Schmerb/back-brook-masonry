// // // // // // // // // //
//
//      Utility functions
//
// // // // // // // // // //

// SELECTOR CONSTANTS
const {
    MAIN_NAV,
    BANNER,
    LOGO_WRAP,
    TROWEL_ICON
} = require('./selectors');


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// checks current scrolling position and fixes banner if
// user scrolled down below header
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const fixBanner = () => {
    // Need to collapse nav items and logo to a fixed banner as header
    // leaves the window
    let winToTopDoc = $(window).scrollTop(),
        navToTopDoc = $(MAIN_NAV).offset().top;
        
    let navToTopWin = navToTopDoc - winToTopDoc;
    if(navToTopWin <= 40) {
        // menu-nav is in its proper position to be fixed
        $(MAIN_NAV).addClass('fixed');
    } else {
        $(MAIN_NAV).removeClass('fixed');
    }
    
    let offset = $('header').height() - $(window).scrollTop();
    // offset is the # of px of the header that is visible
    if(offset <= 0) {
        shrinkNav();
    } else if(offset >= 100) {
        expandNav();
    }
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Fully collapses banner, nav, & logo
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const shrinkNav = () => {
    $(MAIN_NAV).add(BANNER)
               .add('header')
               .add(LOGO_WRAP)
               .addClass('shrink');
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Fully expands banner, nav, & logo
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const expandNav = () => {
    $(MAIN_NAV).add(BANNER)
               .add('header')
               .add(LOGO_WRAP)
               .removeClass('shrink');
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
// Keeps the overview img and call to action el the same 
// height
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const callToActionHeightFix = () => {
    // 1) get height of img 
    // 2) apply to action el's
    $('.overview .lg-img').each((i, el) => {
        let h = $(el).find('img').height();
        $(el).siblings('.action').height(h);
    });
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// sets background image height on page load to avoid
// image jump when nav bar shows/hides on mobile
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const setBgImgHeight = () => {
    // trigger on 1) first touch
    //            2) on window resize when state.hasTouch === true
    let $bg = $('header');
    $bg.css('max-height', ''); // clear max-height to handle resize and get default height
    let h = $bg.height();
    $bg.css('max-height', h);
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


module.exports = {
    shrinkNav, 
    expandNav,
    fixBanner,
    toggleHeaderBgImg,
    callToActionHeightFix,
    setBgImgHeight,
    fadeOutLoadScreen
};