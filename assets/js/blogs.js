var button = $(".cat");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var active = this;
    var show = $(".blog-lower").removeClass("show");
    var hide = $(".cat").removeClass("button_active")
    if (active.dataset.cat === "cat1"){
      $("#cat1").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat2"){
      $("#cat2").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat3"){
      $("#cat3").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat4"){
      $("#cat4").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat5"){
      $("#cat5").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat6"){
      $("#cat6").addClass("show");
      $(this).addClass("button_active");
    } else if (active.dataset.cat === "cat7"){
      $("#cat7").addClass("show");
      $(this).addClass("button_active");
    } 
  });
}

var acc = $(".burger__title, .footer-nav-title");
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
$('#open').click(function () {
  $('.burger-menu').addClass('burger-bg');
  $('.burger-list').show(500);
});
$('#close').click(function () {
  $('.burger-menu').removeClass('burger-bg');
  $('.burger-list').hide(500);
});

let screenWidth = $(window).width();

if (screenWidth < 830) {
  $(document).ready(function(){
    $(".blog-carousel").owlCarousel({
      items: 5,
      nav:false,
      dots:false,
      autoWidth: true
    });
  });
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