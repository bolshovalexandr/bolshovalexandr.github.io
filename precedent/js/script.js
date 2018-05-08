/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	// ============= ОБРАТНАЯ СВЯЗЬ =============
	
	var feedbackForm = document.forms.feedback;
	var feedbackSubmitBtn = document.querySelector('#feedback-submit');
	
	feedbackForm.addEventListener('submit', function (evt) {
	  evt.preventDefault();
	
	  feedbackSubmitBtn.value = 'отправляем...';
	  feedbackSubmitBtn.classList.add('color-change-3x');
	
	  var xhr = new XMLHttpRequest();
	  var data = new FormData(feedbackForm);
	
	  xhr.open(feedbackForm.method, feedbackForm.action);
	
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	      feedbackSubmitBtn.value = 'Готово!';
	      feedbackSubmitBtn.classList.remove('color-change-3x');
	    }
	  };
	  xhr.send(data);
	});
	
	// ============= МОДАЛЬНОЕ ОКНО "НАЧАТЬ РАБОТУ" =============
	
	var startWorkModal = document.querySelector('#start-work-modal');
	var startWorkModalFeedback = document.querySelector('#start-work-modal-feedback');
	var startWorkModalInfo = document.querySelector('#start-work-modal-info');
	
	var startWorkOpenBtn = document.querySelector('#start-work-open');
	var startWorkCloseBtn = document.querySelector('#start-work-close');
	var startWorkChangeBtn = document.querySelector('#start-work__change');
	
	var viewMode = '';
	
	var showFeedback = function showFeedback() {
	
	  startWorkModalInfo.classList.remove('fade-in');
	  startWorkModalInfo.classList.add('fade-out');
	  startWorkModalInfo.style.display = 'none';
	
	  startWorkModalFeedback.style.display = 'flex';
	  startWorkModalFeedback.classList.remove('fade-out');
	  startWorkModalFeedback.classList.add('fade-in');
	
	  startWorkChangeBtn.classList.add('tracking-out-contract');
	  window.setTimeout(function () {
	    startWorkChangeBtn.innerHTML = 'Узнать нас немного больше';
	    startWorkChangeBtn.classList.remove('tracking-out-contract');
	    startWorkChangeBtn.classList.add('tracking-in-expand');
	  }, 700);
	
	  viewMode = 'feedback';
	};
	
	var showInfo = function showInfo() {
	
	  startWorkModalFeedback.classList.remove('fade-in');
	  startWorkModalFeedback.classList.add('fade-out');
	  startWorkModalFeedback.style.display = 'none';
	
	  startWorkModalInfo.style.display = 'flex';
	  startWorkModalInfo.classList.remove('fade-out');
	  startWorkModalInfo.classList.add('fade-in');
	
	  startWorkChangeBtn.classList.remove('tracking-in-expand');
	  startWorkChangeBtn.classList.add('tracking-out-contract');
	
	  window.setTimeout(function () {
	    startWorkChangeBtn.innerHTML = 'Написать прямо сейчас';
	    startWorkChangeBtn.classList.add('tracking-in-expand');
	    startWorkChangeBtn.classList.remove('tracking-out-contract');
	  }, 700);
	  viewMode = 'learnmore';
	};
	
	var onStartWorkOpenBtnClick = function onStartWorkOpenBtnClick() {
	
	  startWorkModal.style.display = 'block';
	  startWorkModal.classList.add('fade-in');
	  startWorkModal.classList.remove('fade-out');
	
	  showFeedback();
	};
	
	var onStartWorkCloseBtnClick = function onStartWorkCloseBtnClick() {
	  startWorkModal.classList.remove('fade-in');
	  startWorkModal.classList.add('fade-out');
	};
	
	startWorkOpenBtn.addEventListener('click', onStartWorkOpenBtnClick);
	startWorkCloseBtn.addEventListener('click', onStartWorkCloseBtnClick);
	
	// ============= СМЕНА МОДАЛЬНЫХ ОКОН "СПРАВКА"/"ЗАДАТЬ ВОПРОС" =============
	
	
	startWorkChangeBtn.addEventListener('click', function () {
	
	  if (viewMode === 'feedback') {
	    showInfo();
	  } else if (viewMode === 'learnmore') {
	    showFeedback();
	  }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map