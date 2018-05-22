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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _accordion = __webpack_require__(1);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _sliderBig = __webpack_require__(2);
	
	var _sliderBig2 = _interopRequireDefault(_sliderBig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	// ============= РАБОТАЯ С КОМПАНИЕЙ "ПРЕЦЕДЕНТ" ВЫ ПОЛУЧАЕТЕ: =============
	
	var benefitIcons = document.querySelectorAll('.benefits-icons a');
	var benefitDescriptions = document.querySelectorAll('.benefits-description p');
	
	benefitIcons.forEach(function (icon) {
	  icon.addEventListener('click', function (e) {
	    e.preventDefault();
	    icon.classList.add('benefits-icon__selected');
	
	    benefitIcons.forEach(function (iconItem) {
	      if (icon !== iconItem) {
	        iconItem.classList.remove('benefits-icon--selected');
	      } else {
	        iconItem.classList.add('benefits-icon--selected');
	      }
	    });
	
	    benefitDescriptions.forEach(function (description, index) {
	      if (icon.dataset.icon === benefitDescriptions[index].dataset.description) {
	        description.classList.add('benefits-description--selected');
	      } else {
	        description.classList.remove('benefits-description--selected');
	      }
	    });
	  });
	});
	
	// ============= СТОИТ ЛИ ВЕРИТЬ ОБЕЩАНИЯМ ЮРИДИЧЕСКИХ КОМПАНИЙ =============
	var concurentPromisesItems = document.querySelectorAll('.concurent-promises__item');
	
	var setConcurentItemTimer = function setConcurentItemTimer(item) {
	  item.classList.add('concurent-promises__item--selected');
	  window.setInterval(function () {}, 1000);
	};
	
	concurentPromisesItems.forEach(function (item) {
	  item.addEventListener('click', function () {
	    if (!item.classList.contains('concurent-promises__item--selected')) {
	
	      concurentPromisesItems.forEach(function (item1) {
	        item1.classList.remove('concurent-promises__item--selected');
	        item1.classList.remove('scale-up-center');
	      });
	
	      item.classList.add('scale-up-center');
	      setConcurentItemTimer(item);
	      // item.classList.add('concurent-promises__item--selected');
	    }
	  });
	});
	
	// ============= БОЛЬШОЙ СЛАЙДЕР =============
	
	(0, _sliderBig2.default)();
	
	var myAccordion = new _accordion2.default({
	  elements: '.card article'
	});
	
	myAccordion.on('elementSelected', function (data) {
	  console.log('elementOpened', data);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	/*
	
	
	const myAccordion = new GianniAccordion({
	  elements: '.card article'
	});
	
	myAccordion.on('elementSelected', (data)=>{
	  console.log('elementOpened', data);
	});
	*/
	
	
	exports.default = Accordion;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var markup = {
	
	  dot: {
	    solid: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>',
	    empty: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>'
	  },
	
	  dots: {
	    getSolid: function getSolid() {
	      return '<div class="slider-big__dot slider-big__dot--solid" data-number="0"></div>';
	    },
	    getEmpty: function getEmpty(number) {
	      return '<div class="slider-big__dot slider-big__dot--empty" data-number="' + number + '"></div>';
	    }
	  }
	
	};
	
	var data = [{
	  name: 'Елена Никоненкова',
	  photo: './img/about-elena-nikonenkova.png',
	  slogan: '"В юриспруденции чудес не бывает, есть только знания, опыт и труд!"',
	  job: 'Директор ЮК “Прецедент”',
	  specialization: 'судебное представительство, корпоративное право, поставки для государственных и муниципальных нужд, налоговые споры.',
	  chat: '4',
	  vk: 'https://vk.com/evnikonenkova',
	  mail: '5'
	}, {
	  name: 'Дмитрий Волков',
	  photo: './img/index-about-02.jpg',
	  slogan: 'Все перетрут',
	  job: 'Заместитель директора',
	  specialization: 'Всякое',
	  chat: '1',
	  vk: '2',
	  mail: '3'
	}, {
	  name: 'Елена Никоненкова',
	  photo: './img/about-elena-nikonenkova-2.jpg',
	  slogan: '"Там чудеса..."',
	  job: 'Альтер-эго',
	  specialization: 'судебное представительство, корпоративное право, поставки для государственных и муниципальных нужд, налоговые споры.',
	  chat: '4',
	  vk: 'https://vk.com/evnikonenkova',
	  mail: '5'
	}];
	
	/*
	View должна дать возможность подписаться на:
	 - номер кликнутой точки
	 - на клик по стрелкам (с параметром, по какой именно кликнули)
	
	и предоставить интерфейс, который принимает:
	 - данные для отрисовки (элемент массива - объект данных)
	 - количество элементов (для первоначальной отрисовки точек)
	*/
	
	var SliderView = function () {
	  function SliderView(node) {
	    _classCallCheck(this, SliderView);
	
	    this.sliderNode = node;
	
	    this.info = this.sliderNode.querySelector('.slider-big__info');
	
	    this.slogan = this.sliderNode.querySelector('.slider-big__slogan');
	    this.name = this.sliderNode.querySelector('.slider-big__name');
	    this.photo = this.sliderNode.querySelector('.slider-big__image img');
	    this.job = this.sliderNode.querySelector('.slider-big__job');
	    this.specialization = this.sliderNode.querySelector('.slider-big__specialization');
	
	    this.chat = this.sliderNode.querySelector('.slider-big__chat');
	    this.vk = this.sliderNode.querySelector('.slider-big__vk');
	    this.mail = this.sliderNode.querySelector('.slider-big__mail');
	
	    var _sliderNode$querySele = this.sliderNode.querySelectorAll('.slider-big__button');
	
	    var _sliderNode$querySele2 = _slicedToArray(_sliderNode$querySele, 2);
	
	    this.leftBtn = _sliderNode$querySele2[0];
	    this.rigthBtn = _sliderNode$querySele2[1];
	
	
	    this.dots = this.sliderNode.querySelector('.slider-big__dots');
	  }
	
	  _createClass(SliderView, [{
	    key: 'init',
	    value: function init(quantity, onArrowClickSubscriber, onDotClickSubscriber) {
	      this.quantity = quantity;
	      this.onArrowClickSubscriber = onArrowClickSubscriber;
	      this.onDotClickSubscriber = onDotClickSubscriber;
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var _this = this;
	
	      this.leftBtn.addEventListener('click', function (e) {
	        e.preventDefault();
	        _this.onArrowClickSubscriber('prev');
	        _this.__highlightDot(_this.currentSolidDot.previousElementSibling ? _this.currentSolidDot.previousElementSibling : _this.dots.lastChild);
	      });
	
	      this.rigthBtn.addEventListener('click', function (e) {
	        e.preventDefault();
	        _this.onArrowClickSubscriber('next');
	        _this.__highlightDot(_this.currentSolidDot.nextElementSibling ? _this.currentSolidDot.nextElementSibling : _this.dots.firstChild);
	      });
	
	      this.dots.addEventListener('click', function (e) {
	        if (e.target.classList.contains('slider-big__dot')) {
	          _this.__highlightDot(e.target);
	          _this.onDotClickSubscriber(e.target.dataset.number);
	        }
	      });
	    }
	  }, {
	    key: '__highlightDot',
	    value: function __highlightDot(dot) {
	      this.currentSolidDot.classList.remove('slider-big__dot--solid');
	      this.currentSolidDot.classList.add('slider-big__dot--empty');
	
	      dot.classList.add('slider-big__dot--solid');
	      dot.classList.remove('slider-big__dot--empty');
	
	      this.currentSolidDot = dot;
	    }
	  }, {
	    key: 'renderDots',
	    value: function renderDots() {
	      var markupDots = markup.dots.getSolid();
	      for (var i = 1; i <= this.quantity; i++) {
	        markupDots += markup.dots.getEmpty(i);
	      }
	      this.dots.innerHTML = markupDots;
	      this.currentSolidDot = this.dots.querySelector('.slider-big__dot--solid');
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.renderDots();
	      this.bind();
	    }
	  }, {
	    key: 'draw',
	    value: function draw(item) {
	      var _this2 = this;
	
	      this.photo.classList.add('fade-in');
	      this.info.classList.add('fade-in');
	      window.setTimeout(function () {
	        _this2.photo.classList.remove('fade-in');
	        _this2.info.classList.remove('fade-in');
	      }, 1000);
	
	      this.slogan.innerHTML = item.slogan;
	      this.name.innerHTML = item.name;
	      this.photo.src = item.photo;
	      this.job.innerHTML = item.job;
	      this.specialization.innerHTML = item.specialization;
	      this.chat.href = item.chat;
	      this.vk.href = item.vk;
	      this.mail.href = item.mail;
	    }
	  }]);
	
	  return SliderView;
	}();
	/*
	Model
	*/
	
	
	var SliderModel = function () {
	  function SliderModel(dataSet) {
	    _classCallCheck(this, SliderModel);
	
	    this.dataSet = dataSet;
	    this.currentElement = 0;
	    this.dataLength = data.length - 1;
	  }
	
	  _createClass(SliderModel, [{
	    key: 'increaseCounter',
	    value: function increaseCounter() {
	      this.currentElement = this.currentElement === this.dataLength ? 0 : ++this.currentElement;
	    }
	  }, {
	    key: 'decreaseCounter',
	    value: function decreaseCounter() {
	      this.currentElement = this.currentElement === 0 ? this.dataLength : --this.currentElement;
	    }
	  }, {
	    key: 'counter',
	    set: function set(number) {
	      this.currentElement = number;
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this.dataSet[this.currentElement];
	    }
	  }, {
	    key: 'quantity',
	    get: function get() {
	      return this.dataLength;
	    }
	  }]);
	
	  return SliderModel;
	}();
	
	exports.default = function () {
	
	  var slider = document.querySelector('.slider-big');
	
	  var sliderModel = new SliderModel(data);
	  var sliderView = new SliderView(slider);
	
	  var arrowSubscriber = function arrowSubscriber(direction) {
	    if (direction === 'next') {
	      sliderModel.increaseCounter();
	    } else {
	      sliderModel.decreaseCounter();
	    }
	    console.log(sliderModel);
	    sliderView.draw(sliderModel.data);
	  };
	
	  var dotSubscriber = function dotSubscriber(number) {
	    sliderModel.counter = number;
	    sliderView.draw(sliderModel.data);
	  };
	
	  sliderView.init(sliderModel.quantity, arrowSubscriber, dotSubscriber);
	  sliderView.start();
	  sliderView.draw(sliderModel.data);
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map