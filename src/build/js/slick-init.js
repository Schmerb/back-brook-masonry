// ================================================================================
// Slick Carousel
// ================================================================================

// SELECTOR CONSTANTS
const SLIDER = '.project-slider';

// * * * * * * * * * * * * * * * * * * * * * * * * * 
// Drone banner carousel
// * * * * * * * * * * * * * * * * * * * * * * * * * 
const initSlider = () => {
    $(SLIDER).slick({
        dots: false,
        arrows: true,
        nextArrow: '<svg class="icon icon-chevron-right"><use xlink:href="#icon-chevron-right"></use></svg>',
        prevArrow: '<svg class="icon icon-chevron-left"><use xlink:href="#icon-chevron-left"></use></svg>',
        infinite: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 515,
                settings: {
                    speed: 1200,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // check if user has seen this in sessionStorage
    //   if yes, remove $('.icon-swipe-icon')
    // update sessionStorage that user has seen it
    let visisted = sessionStorage.getItem('visited');
    if(visisted) {
        $('.icon-swipe-icon').remove();
    }
    $(SLIDER).on('afterChange', (e, slick, currentSlide) => {
        $('.icon-swipe-icon').addClass('fadeOut');
        if(!visisted) {
            sessionStorage.setItem('visited', 'true');
        }
    })
}

// * * * * * * * * * * * * * * * * * * * * * * * * * 
// Intializes slider and sets height to zero
// before and unsets height after it is 'slicked'
// to avoid FOUC
// * * * * * * * * * * * * * * * * * * * * * * * * * 
const displaySlider = () => {
    $(SLIDER).css('height', '0px');
    initSlider();
    $(SLIDER).css('height', '');
    // $('.slick-list').addClass('fadeIn');
}


// * * * * * * * * * * * * * * * * * * * * * * * * * 
//          Destroys slick carousels
// @params   Slider element to be destroyed
// * * * * * * * * * * * * * * * * * * * * * * * * * 
const unslick = (SLIDER) => {
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
const responsiveReslick = () => {
    $(window).resize(() => {
        let width = parseInt($('body').css('width'));
        if (!$(SLIDER).hasClass('slick-initialized')) {
            initSlider();
        }
    });
}

module.exports = {
    initSlider, 
    displaySlider, 
    unslick, 
    responsiveReslick 
};