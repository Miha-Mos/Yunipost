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