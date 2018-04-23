'use strict';

const overlayAdvert = document.querySelector(`.overlay`);
overlayAdvert.style.display = `none`;

const onDataLoad = (data) => {
  console.log(data);
};

window.server.downloadData(onDataLoad);
