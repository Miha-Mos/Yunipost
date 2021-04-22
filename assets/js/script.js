$('.part5-button2').click(function() {
    $('.part5-button1').removeClass('part5-active');
    $('.part5-button2').removeClass('part5-no-active');
	$('.part5-button2').addClass('part5-active');
    $('.part5-button1').addClass('part5-no-active');
    $('.part5-image').removeClass('part5-image-1');
    $('.part5-image').addClass('part5-image-2');
});

$('.part5-button1').click(function() {
	$('.part5-button2').removeClass('part5-active');
    $('.part5-button1').removeClass('part5-no-active');
	$('.part5-button1').addClass('part5-active');
    $('.part5-button2').addClass('part5-no-active');
    $('.part5-image').removeClass('part5-image-2');
    $('.part5-image').addClass('part5-image-1');
});

var nextIcon= '<svg width="14" height="24" viewBox="0 0 14 24" fill="none" class="icon-next" xmlns="http://www.w3.org/2000/svg"><path id="nextIcon" fill-rule="evenodd" clip-rule="evenodd" d="M13.1785 23.1785C12.5276 23.8293 11.4723 23.8293 10.8214 23.1785L0.821449 13.1785C0.170575 12.5276 0.170575 11.4723 0.821449 10.8214L10.8214 0.821445C11.4723 0.170571 12.5276 0.170571 13.1785 0.821446C13.8293 1.47232 13.8293 2.52759 13.1785 3.17847L4.35698 12L13.1785 20.8214C13.8293 21.4723 13.8293 22.5276 13.1785 23.1785Z" fill="#C7CFD9"/></svg>';
var prevIcon= '<svg width="14" height="24" viewBox="0 0 14 24" fill="none" class="icon-prev" xmlns="http://www.w3.org/2000/svg"><path id="prevIcon" fill-rule="evenodd" clip-rule="evenodd" d="M13.1785 23.1785C12.5276 23.8293 11.4723 23.8293 10.8214 23.1785L0.821449 13.1785C0.170575 12.5276 0.170575 11.4723 0.821449 10.8214L10.8214 0.821445C11.4723 0.170571 12.5276 0.170571 13.1785 0.821446C13.8293 1.47232 13.8293 2.52759 13.1785 3.17847L4.35698 12L13.1785 20.8214C13.8293 21.4723 13.8293 22.5276 13.1785 23.1785Z" fill="#C7CFD9"/></svg>';

$(document).ready(function(){
  $(".part6-owl-carousel").owlCarousel({
    items:6,
    loop: true,
    nav:true,
    dots:false,
    margin: 30,
    navElement: 'div',
    navText:[
     prevIcon,
     nextIcon
    ]
  });
});

