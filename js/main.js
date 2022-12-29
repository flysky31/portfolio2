$(function () {
var ScreenWidth = $(window).width(),
    ScreenHeight = $(window).height();
    //headerHeight = $('.header').outerHeight();

// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        tweenChanges: true,
        duration: ScreenHeight,
        markers:false
    }
});

// Create scene
$(".sec01, .sec02, .sec03, .sec05").each(function(index){
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);

});

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}


/*===Section1===*/
var companyLine = '#company-line';     
pathPrepare($(companyLine));

var s1Tween = new TimelineMax();
s1Tween.to($(companyLine), 1, {strokeDashoffset: 0, ease:Linear.easeNone}) 
    .add(TweenMax.to(companyLine, 0, {stroke: "#f54d05", ease:Linear.easeNone}), 0)		
    .add(TweenMax.to('#wrap main .sec01 .line .txt-bottom', 0.3, {x: 110,duration: 5 ,opacity:1, ease:Linear.easeNone}))
    .add(TweenMax.to('#wrap main .sec01 .line .txt-top', 0.3, {y:85,opacity:1, ease:Linear.easeNone}),0)
    .add(TweenMax.to('#wrap main .sec01 .scroll-downs', 0.3, {opacity:0, ease:Linear.easeNone}),0)


var scene1 = new ScrollMagic.Scene({
    triggerElement: ".sec01",
    markers: false,
})
.setTween(s1Tween)
.addTo(ctrl);




/*===Section2===*/
var tween0 = TweenMax.to('#wrap main .sec02 .title', 0.3, {                    
    x: -300,
    duration: 5 ,
    opacity:1, ease:Linear.easeNone
});
var tween1 = TweenMax.to('#wrap main .sec02 .about .left .profile', 0.3, {                    
    scale: 1,
    y: 10,
    opacity: 1,
    rotation: 360, ease:Linear.easeNone
});
var tween2 = TweenMax.to('#wrap main .sec02 .about .left .txt', 0.3, {                    
    opacity:1, ease:Power0.easeNone
});

var tween3 = TweenMax.to('#wrap main .sec02 .about .right .deps01', 0.3, {                    
    opacity:1, 
    x: -100,
    ease:Power0.easeNone
});
var tween4 = TweenMax.to('#wrap main .sec02 .about .right .deps02', 0.3, {                    
    opacity:1, 
    x: -100,
    ease:Power0.easeNone
});

var tween5 = TweenMax.to('#wrap main .sec02 .about .right .deps03', 0.3, {                    
    opacity:1, 
    x: -100,
    ease:Power0.easeNone
});

var timeLine = new TimelineMax();
timeLine.add(tween0);
timeLine.add(tween1);
timeLine.add(tween2);
timeLine.add(tween3);
timeLine.add(tween4);
timeLine.add(tween5);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".sec02",
    triggerHook:  0 ,
    markers: false,
})

.setTween(timeLine)
.addTo(ctrl)




/*===Section3===*/
var tween31 = TweenMax.to('#wrap main .sec03 h3', 0.3, {                  
    y: 100,
    opacity: 1,
    rotation: 360, ease:Linear.easeNone
});
var tween32 = TweenMax.to('#wrap main .sec03 .skill_box', 0.3, {                    
    opacity:1, ease:Power0.easeNone
});

var timeLine = new TimelineMax();
timeLine.add(tween31);
timeLine.add(tween32);


var scene3 = new ScrollMagic.Scene({
    triggerElement: ".sec03",
    triggerHook:  0 ,
    markers: false,
})

.setTween(timeLine)
.addTo(ctrl)




/*===Section4===*/
var tween41 = TweenMax.to('#wrap main .sec04 h3', 0.3, {                  
    y: -100,
    opacity: 1,
    ease:Linear.easeNone
});
var tween42 = TweenMax.to('#wrap main .sec04 .scroll-wrapper', 0.3, {                    
    opacity:1, ease:Power0.easeNone
});

var timeLine = new TimelineMax();
timeLine.add(tween41);
timeLine.add(tween42);


var scene4 = new ScrollMagic.Scene({
    triggerElement: ".sec04",
    triggerHook:  0 ,
    markers: false,
})

.setTween(timeLine)
.addTo(ctrl)


/*===Section5===*/
var tween51 = TweenMax.to('#wrap main .sec05 h2.sec2_tit1', 0.3, {                  
    y: -250,
    opacity: 1,
    ease:Linear.easeNone
});
var tween52 = TweenMax.to('#wrap main .sec05 h2.sec2_tit2', 0.3, {                    
    y: -20,
    opacity: 1,
    ease:Linear.easeNone
});
var tween53 = TweenMax.to('#wrap main .sec05 h2.sec2_tit3', 0.3, {                    
    y: 150,
    opacity: 1,
    ease:Linear.easeNone
});
var timeLine = new TimelineMax();
timeLine.add(tween51);
timeLine.add(tween52);
timeLine.add(tween53);


var scene5 = new ScrollMagic.Scene({
    triggerElement: ".sec05",
    triggerHook:  0 ,
    markers: false,
})

.setTween(timeLine)
.addTo(ctrl)



/*===Section5===*/
    // gsap.timeline({  
    // scrollTrigger: {
    //     trigger: ".sec05", // 객체기준범위
    //     pin: true, // 고정
    //     start: "top top", // 시작점
    //     end: "bottom bottom", // 끝점
    //     scrub: 0.5, // 모션바운스
    //     markers: false, // 개발가이드선
    //     onLeave: function(){
    //     console.log('end');
    //     }
    // }
    // })
    // .to('.sec2_tit1', {duration: 0.3, opacity: 0, y: -30})
    // // .to('.sec2_tit1', {duration: 0, delay: 0})
    // // .to('.sec2_tit1', {duration: 0.3, opacity: 0, y: -30})

    // .to('.sec2_tit2', {duration: 0.3, opacity: 1, y: 0, onComplete: function(){
    // console.log('두번째 문구등장!');
    // }})
    // .to('.sec2_tit2', {duration: 0, delay: 1})
    // .to('.sec2_tit2', {duration: 0.3, opacity: 0, y: -30})

    // .to('.sec2_tit3', {duration: 0.3, opacity: 1, y: 0}) 
    // .to('.sec2_tit3', {duration: 0, delay:1})


})



    /*
    Horizontal Scroll Slider

    Version: 0.0.1
    Author: Alexandre Buffet
    Website: https://www.alexandrebuffet.fr
    */
    !(function($) {

    'use strict';

    var $slider = $('.scroll-slider'),
        $slides = $('.scroll-slide'),
        $sliderWrapper = $('.scroll-wrapper'),
        $firstSlide = $slides.first();

    var settings = {},
        resizing = false,
        scrollController = null,
        scrollTween = null,
        scrollTimeline = null,
        progress = 0,
        scrollScene = null;

    function scrollSlider(options) {

        // Default
        settings = $.extend({
            slider: '.scroll-slider',
            sliderWrapper: '.scroll-wrapper',
            slides: '.scroll-slide',
            slideWidth: null,
            slideHeight: null,
        }, options);

        // Set dimensions
        setDimensions();
        
        // On resize        
        $(window).on( 'resize', function() {
        clearTimeout(resizing);
        resizing = setTimeout(function() {
            setDimensions();
        }, 250); 
        });
    
    }

    function setDimensions() {

        settings.slideWidth = $firstSlide.width();
        settings.slideHeight = $firstSlide.height();
    
        console.log(settings.slideWidth);
        console.log(settings.slideHeight);

        // Calculate slider width and height
        settings.sliderWidth = Math.ceil((settings.slideWidth * $slides.length));
        settings.sliderHeight = $firstSlide.outerHeight(true);

        // Set slider width and height
        $sliderWrapper.width(settings.sliderWidth);
        //$sliderWrapper.height(settings.sliderHeight);

        // Set scene
        setScene();

        //resizing = false;
    }

    function setScene() {

    var xDist = -$slides.width() * ( $slides.length - 1 ),
        tlParams = { x: xDist, ease: Power2.easeInOut };
            
    if (scrollScene != null && scrollTimeline != null) {
        
        progress = 0;
        scrollScene.progress(progress);

        scrollTimeline = new TimelineMax();
        scrollTimeline.to( $sliderWrapper, 2, tlParams );
        
        scrollScene.setTween(scrollTimeline);
        
        scrollScene.refresh();
        
    } else {
        // Init ScrollMagic controller
        scrollController = new ScrollMagic.Controller();

        //Create Tween
        scrollTimeline = new TimelineMax();
        scrollTimeline.to( $sliderWrapper, 2, tlParams );
        scrollTimeline.progress( progress );
        
        // Create scene to pin and link animation
        scrollScene = new ScrollMagic.Scene({
            triggerElement: settings.slider,
            triggerHook: "onLeave",
            duration: settings.sliderWidth
        })
        .setPin(settings.slider)
        .setTween(scrollTimeline)
        .addTo(scrollController)
        .on('start', function (event) {
            scrollTimeline.time(0);
        });
    }
        
    }

    $(document).ready(function() {
        scrollSlider(); 
    });

    })(jQuery);


    //footer 효과
    var wave1 = $('#feel-the-wave').wavify({
        height: 100,
        bones: 4,
        amplitude: 60,
        color: '#222',
        speed: .15
    });

    
    //sec03 class추가
    $(window).on("scroll",function(){
        if($("#wrap main .sec03 .skill_box").css("opacity")=="1"){
            $("#wrap main .sec03 .skill_box").addClass("on")
        }
        else {
            $("#wrap main .sec03 .skill_box").removeClass("on")
        }
    })


    //상단으로
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
          $('#go-top').fadeIn(500);
        } else {
          $('#go-top').fadeOut('slow');
        }
    });
    $('#go-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 200);
      });
