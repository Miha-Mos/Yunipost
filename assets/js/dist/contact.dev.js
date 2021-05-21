"use strict";

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 50.45389352217546,
      lng: 30.64745634453874
    },
    zoom: 15,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 50.4538,
      lng: 30.6474
    },
    map: map
  });
}

var acc = $(".burger__title, .footer-nav-title");
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