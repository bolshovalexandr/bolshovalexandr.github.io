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
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formLogin = document.querySelector('#form-login');
	var formLoginBtn = formLogin.querySelector('BUTTON');
	var listLogin = document.querySelector('#list-login-list');
	var listLog = document.querySelector('#list-log-list');
	var listLogBody = document.querySelector('#log-body');
	var profile = document.querySelector('#profile');
	var profileName = profile.querySelector('#profile-name');
	var profileTime = profile.querySelector('#profile-time');
	var profileDirectory = profile.querySelector('#profile-directory');
	var profileExit = document.querySelector('#profile-exit');
	var unregisteredProfile = document.querySelector('#unregistered-profile');
	var loader = document.querySelector('#loader');
	
	// спрятать форму, показать профиль
	var hideFormShowProfile = function hideFormShowProfile() {
	  formLogin.classList.add('d-none');
	  profile.classList.remove('d-none');
	  profileExit.classList.remove('d-none');
	  unregisteredProfile.classList.add('d-none');
	  _log2.default.cleanContainer();
	};
	
	// спрятать профиль, показать форму
	var hideProfileShowForm = function hideProfileShowForm() {
	  formLogin.classList.remove('d-none');
	  profile.classList.add('d-none');
	  profileExit.classList.add('d-none');
	  unregisteredProfile.classList.remove('d-none');
	  _log2.default.setUnregistered();
	};
	
	// создаем запрос на токен
	var getTocken = function getTocken(body) {
	
	  var xhr = new XMLHttpRequest();
	  xhr.responseType = 'json';
	  xhr.open('POST', formLogin.action, true);
	  xhr.send(body);
	
	  var onSuccessAuthLoad = function onSuccessAuthLoad() {
	    if (xhr.response.status === 200) {
	      formLoginBtn.classList.remove('btn-danger');
	      _storage2.default.data = xhr.response.data;
	      hideFormShowProfile();
	      var _auth$data = _storage2.default.data,
	          nickname = _auth$data.nickname,
	          lastLogin = _auth$data.lastLogin,
	          directory = _auth$data.directory;
	
	      profileName.innerHTML = nickname;
	      profileTime.innerHTML = lastLogin;
	      profileDirectory.innerHTML = directory;
	    } else {
	      formLoginBtn.classList.add('btn-danger');
	    }
	  };
	
	  xhr.addEventListener('load', onSuccessAuthLoad);
	};
	
	// "ленивая отрисовка" журнала
	var logCardNodes = [];
	var lastCall = Date.now();
	
	var isBottomReached = function isBottomReached() {
	  return listLogBody.getBoundingClientRect().bottom - window.innerHeight <= 150;
	};
	
	var onMouseScroll = function onMouseScroll(evt) {
	  if (Date.now() - lastCall >= 100) {
	
	    if (isBottomReached() && logCardNodes.length > 0) {
	      window.removeEventListener('scroll', onMouseScroll);
	      loader.classList.remove('d-none');
	      window.setTimeout(function () {
	        logCardNodes.splice(0, 3).forEach(_log2.default.addCardToContainer);
	        window.addEventListener('scroll', onMouseScroll);
	        loader.classList.add('d-none');
	      }, 1500);
	    }
	
	    lastCall = Date.now();
	  }
	};
	
	window.addEventListener('scroll', onMouseScroll);
	
	// создаем запрос на журнал
	var getLog = function getLog() {
	
	  // ====пока используем API Гитхаба====
	
	  var xhr = new XMLHttpRequest();
	
	  var body = 'position=0&count=200&token=' + sessionStorage.getItem('token');
	  var url = 'https://lopos.bidone.ru/api/v1/lopos_directory/' + sessionStorage.getItem('directory') + '/update_log/' + Date.now() + '/story';
	
	  xhr.open('POST', url, true);
	  xhr.responseType = 'json';
	  xhr.send(body);
	
	  xhr.addEventListener('load', function () {
	
	    if (xhr.response.status === 281) {
	      xhr.response.data.forEach(function (item, index) {
	        logCardNodes.push(_log2.default.getElement(item));
	      });
	      logCardNodes.splice(0, 3).forEach(_log2.default.addCardToContainer);
	      window.addEventListener('scroll', onMouseScroll);
	    }
	  });
	
	  /*
	  let xhr = new XMLHttpRequest();
	  xhr.responseType = 'json';
	  xhr.open('GET', 'https://api.github.com/users/bolshovalexandr/repos');
	  xhr.send();
	    // Событие окончания загрузки
	  xhr.addEventListener('load', function () {
	    if (xhr.status === 200) {
	      xhr.response.forEach(function (item, index) {
	        logCardNodes.push(log.getElement(item));
	      });
	      logCardNodes.splice(0, 3).forEach(log.addCardToContainer);
	      window.addEventListener('scroll', onMouseScroll);
	    }
	  });
	  */
	};
	
	// слушаем кнопку "Журнал"
	listLog.addEventListener('click', function () {
	  if (_storage2.default.isSetFlag) {
	    getLog();
	  } else {
	    _log2.default.setUnregistered();
	  }
	});
	
	// слушаем сабмит отправки логина/пароля
	formLogin.addEventListener('submit', function (evt) {
	  evt.preventDefault();
	  var data = new FormData(formLogin);
	  data.append('deviceToken', '2222');
	  getTocken(data);
	});
	
	// слушаем кнопку "Вход"
	listLogin.addEventListener('click', function () {
	  if (_storage2.default.isSetFlag) {
	    hideFormShowProfile();
	  } else {
	    hideProfileShowForm();
	  }
	});
	
	// слушаем кнопку "Выход"
	profileExit.addEventListener('click', function () {
	  hideProfileShowForm();
	  formLogin.reset();
	  _storage2.default.clean();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  // заполняем хранилище
	  set data(loadedData) {
	    sessionStorage.setItem('nickname', loadedData.nickname);
	    sessionStorage.setItem('lastLogin', loadedData.lastLogin);
	    sessionStorage.setItem('email', loadedData.email);
	    sessionStorage.setItem('directory', loadedData.directory);
	    sessionStorage.setItem('operatorId', loadedData.operator_id);
	    sessionStorage.setItem('token', loadedData.token);
	  },
	
	  // возвращаем данные
	  get data() {
	    return {
	      nickname: sessionStorage.getItem('nickname'),
	      lastLogin: sessionStorage.getItem('lastLogin'),
	      directory: sessionStorage.getItem('directory'),
	      email: sessionStorage.getItem('email'),
	      operatorId: sessionStorage.getItem('operatorId'),
	      token: sessionStorage.getItem('userToken')
	    };
	  },
	
	  get isSetFlag() {
	    return Object.values(this.data).some(function (item) {
	      return item !== null;
	    });
	  },
	
	  // чистим хранилище
	  clean: function clean() {
	    sessionStorage.removeItem('nickname');
	    sessionStorage.removeItem('lastLogin');
	    sessionStorage.removeItem('directory');
	    sessionStorage.removeItem('email');
	    sessionStorage.removeItem('operatorId');
	    sessionStorage.removeItem('token');
	  }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var listLogBody = document.querySelector('#log-body');
	
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listLogBody.innerHTML = '';
	  },
	  setUnregistered: function setUnregistered() {
	    listLogBody.innerHTML = 'Пожалуйста, зарегистрируйтесь...';
	  },
	  getLogTableRowMarkup: function getLogTableRowMarkup(rowElements) {
	    return '<li class="list-group-item"><b>' + rowElements[0] + ': </b>' + rowElements[1] + '</li>';
	  },
	  getElement: function getElement(item) {
	    return '<div class="card m-2" style="width: 100%;"><ul class="list-group list-group-flush">' + Object.entries(item).map(this.getLogTableRowMarkup).join('') + '</ul></div>';
	  },
	  addCardToContainer: function addCardToContainer(cardMarkupItem) {
	    listLogBody.insertAdjacentHTML('beforeend', cardMarkupItem);
	  }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map