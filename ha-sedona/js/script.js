'use strict'

var openMenuBtn = document.querySelector('.header-menu__toggle');
var closeMenuBtn = document.querySelector('.close-btn');
var menu = document.querySelector('.main-navigation__list');

closeMenuBtn.addEventListener('click', function() {
  menu.classList.add('visually-hidden');
  openMenuBtn.classList.remove('visually-hidden');
});

openMenuBtn.addEventListener('click', function() {
  menu.classList.remove('visually-hidden');
  openMenuBtn.classList.add('visually-hidden');
});

if(document.querySelector('.btn--find-hotel')) {
  var findBtn = document.querySelector('.btn--find-hotel');
   findBtn.addEventListener('click', function() {
    findBtn.classList.add('btn--shining');
  });
}

if(document.forms[0]) {

  var form = document.forms[0];
  var successWindow = document.querySelector('.popup-success');
  var successBtn = successWindow.querySelector('.btn--popup-success');
  var failureWindow = document.querySelector('.popup-failure');
  var failureBtn = failureWindow.querySelector('.btn--popup-failure');

  console.log(form);
  console.log(successWindow);
  console.log(successBtn);
  console.log(failureWindow);
  console.log(failureBtn);

  successBtn.addEventListener('click', function() {
    successWindow.classList.add('visually-hidden');
  });


  failureBtn.addEventListener('click', function() {
    failureWindow.classList.add('visually-hidden');
  });

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (!form.elements['name'].value) {
      console.log('No way to nameless');
      failureWindow.classList.remove('visually-hidden');
    }
    else {
      successWindow.classList.remove('visually-hidden');
    }
  });
}

function initMap() {
  var myLatLng = {lat: 34.87, lng: -111.761};
  var myMarker = {lat: 34.87, lng: -111.761};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myMarker,
    map: map,
    title: 'Sedona'
  });
}
