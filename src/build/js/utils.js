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
// Fully collapses banner, nav, & logo
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const shrinkNav = () => {
    $(MAIN_NAV).add(BANNER)
               .add(LOGO_WRAP)
               .addClass('shrink');
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Fully expands banner, nav, & logo
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const expandNav = () => {
    $(MAIN_NAV).add(BANNER)
               .add(LOGO_WRAP)
               .removeClass('shrink');
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// checks current scrolling position and fixes banner if
// user scrolled down below header
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const fixBanner = () => {
    // Need to collapse nav items and logo to a fixed banner as header
    // leaves the window
    let winToTop = $(window).scrollTop(),
        navToTop = $(MAIN_NAV).offset().top;
    let offset;

    if(navToTop - winToTop <= 20) {
        // menu-nav is in its proper position to be fixed
        $(MAIN_NAV).addClass('fixed');
        offset = $('header').height() - $(window).scrollTop();
        if(offset >= 178) {
            // nav menu back in position to stick to bottom of window
            $(MAIN_NAV).removeClass('fixed');
        }
    } 
    let bigScreen = window.innerWidth >= 1060;
    offset = $('header').height() - $(window).scrollTop();
    // offset is the # of px of the header that is visible
    if(offset <= 125) {
        if(offset <= 30) {
            $(BANNER).addClass('fixed');
        } else {
            $(BANNER).removeClass('fixed');
        }
        if(offset <= 0) {
            bigScreen ? $('header').css('z-index', 2) : null;
            // Fully collapse banner, nav, & logo
            shrinkNav();
        } else {
            bigScreen ? $('header').css('z-index', '') : null;
        }
    } else {
        bigScreen ? $('header').css('z-index', '') : null;
        $(BANNER).removeClass('fixed');
        // Fully expand banner, nav, & logo
        expandNav();
    }
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
// Creates a "sticky" footer
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function stickyFooterSet() {
    // 1) get height of footer
    // 2) set that height as body's padding-bottom
    let h = $('footer').height();
    $('body').css('padding-bottom', `${h}px`);
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// sets background image height on page load to avoid
// image jump when nav bar shows/hides on mobile
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const setBgImgHeight = () => {
    // trigger on 1) first touch
    //            2) on window resize when state.hasTouch === true
    let $bg = $('header');
    $bg.css('height', ''); // clear height to handle resize and get default height
    $bg.height($bg.css('height'));
}

module.exports = {
    shrinkNav, 
    expandNav,
    fixBanner,
    toggleHeaderBgImg,
    callToActionHeightFix,
    stickyFooterSet,
    setBgImgHeight
};