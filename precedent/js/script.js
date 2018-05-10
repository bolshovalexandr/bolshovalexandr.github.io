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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ============= ОБРАТНАЯ СВЯЗЬ =============
	
	var feedbackForm = document.forms.feedback;
	var feedbackSubmitBtn = document.querySelector('#feedback-submit');
	
	feedbackForm.addEventListener('submit', function (evt) {
	  evt.preventDefault();
	
	  feedbackSubmitBtn.value = 'отправляем';
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
	
	  feedbackSubmitBtn.value = 'отправить';
	  startWorkModal.style.display = 'block';
	  startWorkModal.classList.add('fade-in');
	  startWorkModal.classList.remove('fade-out');
	
	  showFeedback();
	  startWorkModal.style.display = 'block';
	};
	
	var onStartWorkCloseBtnClick = function onStartWorkCloseBtnClick() {
	  startWorkModal.classList.remove('fade-in');
	  startWorkModal.classList.add('fade-out');
	  startWorkModal.style.display = 'none';
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
	
	// ============= АККОРДЕОН =============
	/**
	>>>>>>>
	
	Wanna include in your project?
	
	More documentation on github:
	
	https://github.com/cant89/gianni-accordion-js
	
	>>>>>>>
	**/
	
	var GianniAccordion = function () {
	  var Accordion = function () {
	    _createClass(Accordion, [{
	      key: 'transitionendEventName',
	      value: function transitionendEventName() {
	        var i = void 0;
	        var el = document.createElement('div');
	        var transitions = {
	          'transition': 'transitionend',
	          'OTransition': 'otransitionend',
	          'MozTransition': 'transitionend',
	          'WebkitTransition': 'webkitTransitionEnd'
	        };
	
	        for (i in transitions) {
	          if (transitions.hasOwnProperty(i) && el.style[i] !== 'undefined') {
	            return transitions[i];
	          }
	        }
	      }
	    }, {
	      key: 'expand',
	      value: function expand(el) {
	        function resetHeight(ev) {
	          var _this = this;
	
	          if (ev.target !== el.content) {
	            return;
	          }
	          el.content.removeEventListener(this.transitionendevent, bindEvent);
	
	          if (!el.isOpen) {
	            return;
	          }
	
	          requestAnimationFrame(function () {
	            el.content.style.transition = '0';
	            el.content.style.height = 'auto';
	
	            requestAnimationFrame(function () {
	              el.content.style.height = null;
	              el.content.style.transition = null;
	
	              _this.fire('elementOpened', el);
	            });
	          });
	        }
	
	        var bindEvent = resetHeight.bind(this);
	        el.content.addEventListener(this.transitionendevent, bindEvent);
	
	        el.isOpen = true;
	        el.content.style.height = el.content.scrollHeight + 'px';
	      }
	    }, {
	      key: 'collapse',
	      value: function collapse(el) {
	
	        function endTransition(ev) {
	          if (ev.target !== el.content) {
	            return;
	          }
	          el.content.removeEventListener(this.transitionendevent, bindEvent);
	
	          if (el.isOpen) {
	            return;
	          }
	
	          this.fire('elementClosed', el);
	        }
	
	        var bindEvent = endTransition.bind(this);
	        el.content.addEventListener(this.transitionendevent, bindEvent);
	
	        el.isOpen = false;
	
	        requestAnimationFrame(function () {
	          el.content.style.transition = '0';
	          el.content.style.height = el.content.scrollHeight + 'px';
	
	          requestAnimationFrame(function () {
	            el.content.style.transition = null;
	            el.content.style.height = 0;
	          });
	        });
	      }
	    }, {
	      key: 'open',
	      value: function open(el) {
	        el.selected = true;
	        this.fire('elementSelected', el);
	        this.expand(el);
	        el.wrapper.classList.add(this.selectedClass);
	      }
	    }, {
	      key: 'close',
	      value: function close(el) {
	        el.selected = false;
	        this.fire('elementUnselected', el);
	        this.collapse(el);
	        el.wrapper.classList.remove(this.selectedClass);
	      }
	    }, {
	      key: 'toggle',
	      value: function toggle(el) {
	        var _this2 = this;
	
	        if (el.selected) {
	          this.close(el);
	        } else {
	          this.open(el);
	
	          if (this.oneAtATime) {
	            this.els.filter(function (e) {
	              return e !== el && e.selected;
	            }).forEach(function (e) {
	              _this2.close(e);
	            });
	          }
	        }
	      }
	    }, {
	      key: 'attachEvents',
	      value: function attachEvents() {
	        var _this3 = this;
	
	        this.els.forEach(function (el, i) {
	          el.trigger.addEventListener('click', _this3.toggle.bind(_this3, el));
	        });
	      }
	    }, {
	      key: 'setDefaultData',
	      value: function setDefaultData() {
	        this.els = [];
	        this.events = {
	          'elementSelected': [],
	          'elementOpened': [],
	          'elementUnselected': [],
	          'elementClosed': []
	        };
	        this.transitionendevent = this.transitionendEventName();
	        this.oneAtATime = true;
	        this.selectedClass = 'selected';
	        this.trigger = '[data-accordion-element-trigger]';
	        this.content = '[data-accordion-element-content]';
	      }
	    }, {
	      key: 'setCustomData',
	      value: function setCustomData(data) {
	        var keys = Object.keys(data);
	
	        for (var i = 0; i < keys.length; i++) {
	          this[keys[i]] = data[keys[i]];
	        }
	      }
	    }, {
	      key: 'fire',
	      value: function fire(eventName, el) {
	        var callbacks = this.events[eventName];
	        for (var i = 0; i < callbacks.length; i++) {
	          callbacks[i](el);
	        }
	      }
	    }, {
	      key: 'on',
	      value: function on(eventName, cb) {
	        if (!this.events[eventName]) {
	          return;
	        }
	        this.events[eventName].push(cb);
	      }
	    }]);
	
	    function Accordion(data) {
	      var _this4 = this;
	
	      _classCallCheck(this, Accordion);
	
	      this.setDefaultData();
	      this.setCustomData(data); // ES6 => Object.assign(this, data)
	
	      [].forEach.call(document.querySelectorAll(this.elements), function (el, i) {
	        _this4.els.push({
	          wrapper: el,
	          trigger: el.querySelector(_this4.trigger),
	          content: el.querySelector(_this4.content)
	        });
	
	        _this4.els[i].content.style.height = 0;
	      });
	
	      this.attachEvents();
	    }
	
	    return Accordion;
	  }();
	
	  return Accordion;
	}();
	
	var myAccordion = new GianniAccordion({
	  elements: '.card article'
	});
	
	myAccordion.on('elementSelected', function (data) {
	  console.log('elementOpened', data);
	});

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map