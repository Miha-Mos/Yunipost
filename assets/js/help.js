//Accordion
var acc = $(".question__button, .burger__title, .footer-nav-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
}
//Categories
var button = $(".question-nav_button");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var active = this;
    var show = $(".question-info").removeClass("show");
    var hide = $(".question-nav_button").removeClass("button_active")
    if (active.dataset.cat === "service"){
      $("#service").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "delivery"){
      $("#delivery").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "how-delivery"){
      $("#how-delivery").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "shipping-method"){
      $("#shipping-method").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "fullfilment"){
      $("#fullfilment").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "finance"){
      $("#finance").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "partner"){
      $("#partner").addClass("show");
      $(this).addClass("button_active");
    } 
  });
}
//Burger Background
$('#open').click(function () {
  $('.burger-menu').addClass('burger-bg');
  $('.burger-list').show(500);
});
$('#close').click(function () {
  $('.burger-menu').removeClass('burger-bg');
  $('.burger-list').hide(500);
});

let screenWidth = $(window).width();

if (screenWidth < 575) {
  $(document).ready(function(){
    $(".question-carousel").owlCarousel({
      items: 4,
      nav:false,
      dots:false,
      autoWidth: true
    });
  });
  $('.question-wrapper').removeClass('container');
  $('.question-info').addClass('container');
} else{
  if (screenWidth > 675){
    $('.question-nav').css({"display": "flex", "width": "30%"});
  } else{
    $('.question-nav').css({"display": "flex", "width": "45%"});
  }
}

//Login

$('.log-open').click(function () {
  $('.burger-list').hide(500);
  $('.burger-menu').addClass('burger-bg');
  $('.log-in_form').fadeIn(500);
});
$('#log-close').click(function () {
  $('.burger-menu').removeClass('burger-bg');
  $('.log-in_form').fadeOut(500);
});

//Registration

$('.reg-open').click(function () {
  $('.burger-list').hide(500);
  $('.burger-menu').addClass('burger-bg');
  $('.reg_form').fadeIn(500);
});
$('#reg-close').click(function () {
  $('.burger-menu').removeClass('burger-bg');
  $('.reg_form').fadeOut(500);
});
