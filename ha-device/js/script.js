'use strict'

var aboutBlockCollection = document.querySelectorAll('.about .btn');
var aboutUsBtn = aboutBlockCollection[0];
var writeUsBtn = aboutBlockCollection[1];
var writeUsForm = document.querySelector('.popup-write-us');
var bigMap = document.querySelector('.popup-map-big');
var formCloseBtn = writeUsForm.querySelector('.form-close-btn');
var mapCloseBtn = bigMap.querySelector('.map-close-btn');

aboutUsBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  bigMap.classList.remove('hidden');
  bigMap.classList.add('animation');
});


writeUsBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsForm.classList.remove('invisible');
});


formCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsForm.classList.add('invisible');
});

mapCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  bigMap.classList.add('hidden');
  bigMap.classList.remove('animation');
});

function initMap() {
  var myLatLng = {lat: 55.688231, lng: 37.5270293};
  var myMarker = {lat: 55.687031, lng: 37.5297893};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myMarker,
    map: map,
    title: 'Device'
  });
}
