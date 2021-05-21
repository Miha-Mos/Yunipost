"use strict";

var acc = $(".question__button, .burger__title, .footer-nav-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
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