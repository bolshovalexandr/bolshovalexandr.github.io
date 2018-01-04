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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _storage2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
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
	
	  // чистим хранилище
	  var cleanStorage = function cleanStorage() {
	    sessionStorage.removeItem('userNickname');
	    sessionStorage.removeItem('userLastLogin');
	    sessionStorage.removeItem('userToken');
	  };
	
	  // заполняем хранилище
	  var setLocalStorage = function setLocalStorage(loadedData) {
	    sessionStorage.setItem('userNickname', loadedData.nickname);
	    sessionStorage.setItem('userLastLogin', loadedData.lastLogin);
	    sessionStorage.setItem('userDirectory', loadedData.directory);
	    sessionStorage.setItem('userToken', loadedData.token);
	  };
	
	  // спрятать форму, показать профиль
	  var hideFormShowProfile = function hideFormShowProfile() {
	    formLogin.classList.add('d-none');
	    profile.classList.remove('d-none');
	    profileExit.classList.remove('invisible');
	  };
	
	  // спрятать профиль, показать форму
	  var hideProfileShowForm = function hideProfileShowForm() {
	    formLogin.classList.remove('d-none');
	    profile.classList.add('d-none');
	    profileExit.classList.add('invisible');
	  };
	
	  // создаем запрос на токен
	  var getTocken = function getTocken(body) {
	
	    var xhr = new XMLHttpRequest();
	    xhr.responseType = 'json';
	    xhr.open('POST', formLogin.action, true);
	    xhr.send(body);
	
	    xhr.addEventListener('load', function () {
	      if (xhr.response.status === 200) {
	        formLoginBtn.classList.remove('btn-danger');
	        setLocalStorage(xhr.response.data);
	        hideFormShowProfile();
	        profileName.innerHTML = sessionStorage.getItem('userNickname');
	        profileTime.innerHTML = sessionStorage.getItem('userLastLogin');
	        profileDirectory.innerHTML = sessionStorage.getItem('userDirectory');
	      } else {
	        formLoginBtn.classList.add('btn-danger');
	      }
	    });
	  };
	
	  // создаем запрос на журнал
	  var getLog = function getLog() {
	
	    var xhr = new XMLHttpRequest();
	    var body = 'position=0&count=50&token=' + sessionStorage.getItem('userToken');
	    var url = 'https://lopos.bidone.ru/api/v1/lopos_directory/' + sessionStorage.getItem('userDirectory') + '/update_log/' + Date.now() + '/story';
	
	    xhr.open('POST', url, true);
	    xhr.responseType = 'json';
	    xhr.send(body);
	
	    xhr.addEventListener('load', function () {
	
	      if (xhr.response.status === 281) {
	        listLogBody.innerHTML = '';
	        xhr.response.data.forEach(function (item, index) {
	          listLogBody.innerHTML += '<div>' + index + ' ' + item.ha_comment + '</div>';
	        });
	      }
	    });
	  };
	
	  // слушаем сабмит отправки логина/пароля
	  formLogin.addEventListener('submit', function (evt) {
	    evt.preventDefault();
	    var data = new FormData(formLogin);
	    data.append('deviceToken', '2222');
	    getTocken(data);
	  });
	
	  // слушаем кнопку "Вход"
	  listLogin.addEventListener('click', function () {
	    if (sessionStorage.getItem('userNickname')) {
	      hideFormShowProfile();
	    } else {
	      hideProfileShowForm();
	    }
	  });
	
	  // слушаем кнопку "Выход"
	  profileExit.addEventListener('click', function () {
	    hideProfileShowForm();
	    formLogin.reset();
	    cleanStorage();
	  });
	
	  // слушаем кнопку "Журнал"
	  listLog.addEventListener('click', function () {
	    if (sessionStorage.getItem('userNickname')) {
	      getLog();
	    } else {
	      listLogBody.innerHTML = 'Пожалуйста, зарегистрируйтесь...';
	    }
	  });
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map