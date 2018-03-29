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
	
	var feedbackResponse = document.querySelector('#feedback-response');
	var feedbackForm = document.forms.feedback;
	
	feedbackForm.addEventListener('submit', function (evt) {
	  evt.preventDefault();
	
	  feedbackResponse.innerHTML = 'отправляем...';
	
	  var xhr = new XMLHttpRequest();
	  var data = new FormData(feedbackForm);
	
	  // xhr.open(null, null);
	  // xhr.open('POST', 'https://precedent.herokuapp.com/');
	  xhr.open(feedbackForm.method, feedbackForm.action);
	
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	      var answer = JSON.parse(xhr.responseText);
	
	      feedbackResponse.innerHTML = '\n        \u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 <b>' + answer.name + '</b>,<br>\n        \u0412\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u043F\u043E \u0442\u0435\u043C\u0435 \u043F\u0440\u0438\u043D\u044F\u0442 <b>' + answer.message + '</b> \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u043F\u043E\u0447\u0442\u0443<br>\n        \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0443 <b>' + answer.employee + '</b>,<br>\n        \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u043F\u043E <b>' + answer.contact + '</b><br>\n      ';
	    }
	  };
	  xhr.send(data);
	});

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map