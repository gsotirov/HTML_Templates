var MotionSlider = function(options) {
    //... Implement the slider class properly...
}

// ---| Fading effect on the slides |--->

var fade = function(currentSlide, nextSlide, currentDot, nextDot, speed) {

    currentSlide.fadeOut(speed).removeClass('active-slide');
    currentDot.removeClass('active-dot');
    nextSlide.fadeIn(speed).addClass('active-slide');
    nextDot.addClass('active-dot');
}

// ---| Main |--->

var slider = function() {
    
    $('.arrow-next').click(function(ev) {
        ev.preventDefault();
        var currentSlide = $('.active-slide'),
            currentDot = $('.active-dot'),
            nextSlide = currentSlide.next(),
            nextDot = currentDot.next();
            
        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        fade(
            currentSlide, 
            nextSlide, 
            currentDot, 
            nextDot, 
            600
        );
    });
    
    $('.arrow-prev').click(function(ev) {
        ev.preventDefault();
        var currentSlide = $('.active-slide'),
            currentDot = $('.active-dot'),
            nextSlide = currentSlide.prev(),
            nextDot = currentDot.prev();
        
        if(nextSlide.length === 0) {
            nextSlide = $('.slide').last();
            nextDot = $('.dot').last();
        }
        
        fade(
            currentSlide, 
            nextSlide, 
            currentDot, 
            nextDot, 
            600
        );
    });

    $('.dot').click(function() {
        var slides = $('.slide'),
            currentSlide = $('.active-slide'),
            id = parseInt($(this).data('slideto')),
            nextSlide = slides.eq(id - 1),
            currentDot = $('.active-dot');

        fade(
            currentSlide, 
            nextSlide, 
            currentDot, 
            $(this), 
            600
        );
    });
}

// ---| On Load |--->

$(document).ready(function() {
    slider();
});