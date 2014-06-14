console.log("custom.js");

var sideBarStatus;
var mobileNavStatus;

$(document).ready(function(){

    // RESPONSIVE NAV 

    mobileNavStatus = 0;

    $("#mobile-button").click(mobileNavToggle);

    // SLIDER

	$('.bxslider').bxSlider({
        touchEnabled: true,
        swipeThreshold: 50,
		controls: true,
		pager: false,
		responsive: true,
        auto: true,
        pause: 6500
	});

    // SIDE BAR

    sideBarStatus = 0;

	var sideBarButton = document.getElementById("open-nav");
    sideBarButton.style.cursor = "pointer";
    $("#open-nav").click(sideBarToggle);
    $(".page-wrap").click(sideBarClose);

    // OVERLAYS

    $("#play").click(function() {
        window.open("http://dev.bradmurphydev.com/play", "_blank");
    });

    $("#videos").click(function() {
        window.open("https://www.youtube.com/channel/UCN7wcK6AtZaM88ocQm9n7ow", "_blank");
    });

    // SCROLL FUNCTION

    var playSection = false;

    $(window).on("scroll", function() {

        var h = $(window).scrollTop() + $(window).innerHeight();

        if (h > 1000 && h < 1300) {

            $("#play").animate({
                opacity: "1"
            }, 500);

            console.log("working");

        } 

        playSection = true;

    });


});

// SIDE BAR FUNCTION

function sideBarToggle() {

    if (sideBarStatus == 0) {

        $(".side-menu")
            .clearQueue()
            .animate({
                left: "+=200" 
            }, 1000, "easeOutQuint");

        $(".side-menu-button")
            .clearQueue()
            .animate({
                left: "+=200" 
            }, 1000, "easeOutQuint");

        $(".page-wrap")
            .clearQueue()
            .animate({
                left: "+=200"
            }, 1000, "easeOutQuint");

        sideBarStatus = 1;

    } else {

        $(".side-menu")
            .clearQueue()
            .animate({
                left: "-=200" 
            }, 500, "easeOutExpo");

        $(".side-menu-button")
            .clearQueue()
            .animate({
                left: "-=200" 
            }, 500, "easeOutExpo");
        
        $(".page-wrap")
            .clearQueue()
            .animate({
                left: "-=200"
            }, 500, "easeOutExpo");

        sideBarStatus = 0;

    };

};

function sideBarClose() {

    if (sideBarStatus == 1) {

        $(".side-menu")
            .clearQueue()
            .animate({
                left: "-=200" 
            }, 500, "easeOutExpo");

        $(".side-menu-button")
            .clearQueue()
            .animate({
                left: "-=200" 
            }, 500, "easeOutExpo");
        
        $(".page-wrap")
            .clearQueue()
            .animate({
                left: "-=200"
            }, 500, "easeOutExpo");

        sideBarStatus = 0;

    };

};

function mobileNavToggle() {

    if (mobileNavStatus == 0) {

        $(".mobile-nav ul").animate({
            margin: "0px 0 0 0"
        }, 500);

        mobileNavStatus = 1;

    } else {

        $(".mobile-nav ul").animate({
            margin: "-250px 0 0 0"
        }, 500);

        mobileNavStatus = 0;

    };

};