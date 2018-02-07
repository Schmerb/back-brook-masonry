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
    } else if(offset > 0 && window.innerWidth <= 899) {
        $('header').removeClass('shrink'); // allows for header/banner-backdrop to switch to maintain image over backdrop effect
    }
    if(offset >= 100) {
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
        }, 700);
        setTimeout(() => {
            $('.loading-page').remove();
        }, 2000);
    }, 500);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Checks if target exists within specified compare string
// of obj in an array of objects
//
// @returns all objects whos compare string property
//          contains target word(s)
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function findMatches(arr, compareStr, target) {
    let results = [];
    for(let obj of arr) {
        let added = false;
        let current = obj[compareStr].toLowerCase().trim();
        if(current.startsWith(target)) {
            console.log('current: ', current, " starts with ", target);
            results.push(obj);
            added = true;
        }
        // if not already added, check for match within any word in name
        if(!added) {
            // spitting up name by words allows for search within any word in name
            let words   = current.split(' ');
            let targets = target.split(' ');
            // if any words start with any targets, match
            for(let i=0; i<targets.length && !added; i++) {
                for(let j=0; j<words.length && !added; j++) {
                    if(words[j].startsWith(targets[i])) {
                        results.push(obj);
                        added = true;
                    }
                }
            }
        }
    }
    return results;
}


module.exports = {
    shrinkNav, 
    expandNav,
    fixBanner,
    toggleHeaderBgImg,
    setBgImgHeight,
    fadeOutLoadScreen,
    findMatches
};