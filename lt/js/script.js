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
	
	var _onlineProfile = __webpack_require__(5);
	
	var _onlineProfile2 = _interopRequireDefault(_onlineProfile);
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var exit = document.querySelector('#profile-exit');
	var app = document.querySelector('#app');
	var login = document.querySelector('#login');
	
	// ========== F5/АВТОРИЗАЦИЯ ==========
	if (_storage2.default.isSetFlag) {
	  app.classList.remove('d-none');
	} else {
	  login.classList.remove('d-none');
	  _main_login_window2.default.firstScreen();
	}
	
	// ========== ЖУРНАЛ ==========
	_log2.default.start();
	
	// ========== ОНЛАЙН/ПРОФИЛЬ ==========
	_onlineProfile2.default.start();
	
	// ========== ВЫХОД ==========
	exit.addEventListener('click', function () {
	  app.classList.add('d-none');
	  login.classList.remove('d-none');
	  _log2.default.stop();
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
	      token: sessionStorage.getItem('token')
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listLog = document.querySelector('#list-log-list');
	var listLogBody = document.querySelector('#log-body');
	var loader = document.querySelector('#loader');
	var loaderWait = document.querySelector('#loader-wait');
	var loaderFinish = document.querySelector('#loader-finish');
	var loaderFail = document.querySelector('#loader-fail');
	
	// начальная позиция и смещение
	var logCardNodes = [];
	var position = 0;
	var count = 200;
	var drawSet = count / 4;
	
	// отрисовка порции карточек
	var drawCardSet = function drawCardSet() {
	  return logCardNodes.splice(0, drawSet).forEach(_log2.default.addCardToContainer);
	};
	
	// создание нод по полученной порции данных
	var createCardNodes = function createCardNodes(cardData) {
	  return cardData.forEach(function (item, index) {
	    return logCardNodes.push(_log2.default.getElement(item, index));
	  });
	};
	
	// успех загрузки
	var onSuccessLogLoad = function onSuccessLogLoad(logResponse) {
	  var loadedLog = logResponse.data;
	
	  loaderWait.classList.add('d-none');
	  if (loadedLog.length) {
	    createCardNodes(loadedLog);
	  } else {
	    loaderFinish.classList.remove('d-none');
	    window.removeEventListener('scroll', onMouseScroll);
	    return;
	  }
	  if (position === 0) {
	    drawCardSet();
	  }
	  window.addEventListener('scroll', onMouseScroll);
	};
	
	// ошибка загрузки
	var onErrorLogLoad = function onErrorLogLoad() {
	  loaderFail.classList.remove('d-none');
	  loader.classList.add('d-none');
	  loaderWait.classList.add('d-none');
	  loaderFinish.classList.add('d-none');
	};
	
	// отправка запроса на новую порцию
	var getLog = function getLog() {
	  if (logCardNodes.length === 0) {
	    loaderWait.classList.remove('d-none');
	    window.removeEventListener('scroll', onMouseScroll);
	
	    window.setTimeout(function () {
	      _xhr2.default.request = {
	        metod: 'POST',
	        url: 'lopos_directory/' + _storage2.default.data.directory + '/update_log/' + Date.now() + '/story',
	        data: 'position=' + position + '&count=' + count + '&token=' + _storage2.default.data.token,
	        callbackSuccess: onSuccessLogLoad,
	        callbackError: onErrorLogLoad
	      };
	    }, 2000);
	  }
	};
	
	// "ленивая отрисовка" журнала
	var isBottomReached = function isBottomReached() {
	  return listLogBody.getBoundingClientRect().bottom - window.innerHeight <= 150;
	};
	
	var onMouseScroll = function onMouseScroll(evt) {
	
	  if (isBottomReached() && logCardNodes.length > 0) {
	    loader.classList.remove('d-none');
	    window.removeEventListener('scroll', onMouseScroll);
	
	    window.setTimeout(function () {
	      window.addEventListener('scroll', onMouseScroll);
	      loader.classList.add('d-none');
	      drawCardSet();
	    }, 1500);
	  } else if (logCardNodes.length === 0) {
	    position += count;
	    getLog();
	  }
	};
	
	exports.default = {
	  start: function start() {
	    listLog.addEventListener('click', getLog);
	  },
	  stop: function stop() {
	    _log2.default.cleanContainer();
	    logCardNodes = [];
	    position = 0;
	    listLog.removeEventListener('click', getLog);
	    window.removeEventListener('scroll', onMouseScroll);
	  }
	};

/***/ }),
/* 3 */
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
	    return rowElements[1] ? '<li class="list-group-item"><b>' + rowElements[0] + ': </b>' + rowElements[1] + '</li>' : null;
	  },
	  getElement: function getElement(item, index) {
	    var getIconColor = item.ha_operator_hex ? item.ha_operator_hex : 'F4002C';
	    var hasMinusInComments = item.ha_comment.includes('-');
	    var imgName = '';
	
	    if (item.ha_kontr_agent_id_fk) {
	      imgName = 'buyers';
	    }
	    if (item.ha_nomenclature_card_id_fk) {
	      imgName = 'ic_my_nomenclature';
	    }
	    if (item.ha_group_good_id_fk) {
	      imgName = 'groups';
	    }
	    if (item.ha_good_id_fk || item.ha_price_id_fk) {
	      imgName = 'goods';
	    }
	    if (item.ha_tag_id_fk) {
	      imgName = 'ic_my_tag';
	    }
	
	    if (item.ha_balance_act_id_fk && hasMinusInComments) {
	      imgName = 'expenses';
	    } else if (item.ha_balance_act_id_fk && !hasMinusInComments) {
	      imgName = 'revenue';
	    }
	
	    if (item.ha_naklad_id_fk && hasMinusInComments) {
	      imgName = 'admission';
	    } else if (item.ha_naklad_id_fk && !hasMinusInComments) {
	      imgName = 'sale';
	    }
	
	    imgName = imgName ? imgName : 'other_ic_history';
	
	    var cardHeader = item.ha_comment.split('\n');
	    cardHeader[1] = cardHeader[1] ? cardHeader[1] : '';
	
	    return '\n    <div class="card mb-2 p-1" style="width: 100%">\n      <div class="media">\n        <img class="mr-3 rounded-circle p-1" src="img/user-male-filled-32.png" title="' + item.ha_operator_name + '" style="background-color: #' + getIconColor + '" width="50" alt="' + item.ha_operator_name + '">\n        <img class="mr-3" src="img/' + imgName + '.png" width="50" alt="Generic placeholder image">\n        <div class="media-body">\n          <h6 class="mt-0">' + cardHeader[0] + '</h5>\n          ' + cardHeader[1] + '\n          <span class="badge text-right text-muted w-100">' + new Date(+(item.ha_time + '000')).toLocaleString() + ' *' + index + ' *' + item.ha_id + '</span>\n        </div>\n      </div>\n    <!--\n    <div id="exampleAccordion" data-children=".item">\n      <div class="item">\n        <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion' + item.ha_id + '" role="button" aria-expanded="false" aria-controls="exampleAccordion1">\n          <p class="text-right">\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445</p>\n        </a>\n        <div id="exampleAccordion' + item.ha_id + '" class="collapse" role="tabpanel">\n          <p class="mb-3">\n            <div class="card m-2" style="width: 100%;"><ul class="list-group list-group-flush">' + Object.entries(item).map(this.getLogTableRowMarkup).join('') + '</ul></div>\n          </p>\n        </div>\n      </div>\n    </div>\n    -->';
	  },
	  addCardToContainer: function addCardToContainer(cardMarkupItem) {
	    listLogBody.insertAdjacentHTML('beforeend', cardMarkupItem);
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  set request(requestParameters) {
	
	    var ErrorAttr = {
	      FILE: 'xhr.js',
	      MESSADGE: {
	        JSON_ERR: 'XHR: JSON error converting response.',
	        LOAD_ERR: 'Load Error.',
	        CONNECT_ERR: 'Connection error.',
	        TIMEOUT_ERR: 'Сonnection timeout exceeded'
	      }
	    };
	
	    var getError = function getError(messadge, row, error) {
	      var newError = new SyntaxError(messadge, ErrorAttr.FILE, row);
	      newError.cause = error;
	      return newError;
	    };
	
	    var xhr = new XMLHttpRequest();
	
	    xhr.addEventListener('load', function () {
	
	      if (xhr.status === 200) {
	        var response = '';
	
	        try {
	
	          response = JSON.parse(xhr.response);
	        } catch (error) {
	          requestParameters.callbackError(getError(ErrorAttr.MESSADGE.JSON_ERR, 26, error));
	        }
	
	        requestParameters.callbackSuccess(response);
	      } else {
	        requestParameters.callbackError(getError(ErrorAttr.MESSADGE.LOAD_ERR + ' ' + xhr.statusText, 35, ''));
	      }
	    });
	
	    xhr.addEventListener('error', function () {
	      requestParameters.callbackError(getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' ' + xhr.statusText, 42, ''));
	    });
	
	    xhr.addEventListener('timeout', function () {
	      requestParameters.callbackError(getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' (' + xhr.timeout + 'ms.)', 50, ''));
	    });
	
	    xhr.timeout = window.appSettings.xhrSettings.timeout;
	    xhr.open(requestParameters.metod, window.appSettings.xhrSettings.urlApi + requestParameters.url, true);
	    xhr.setRequestHeader('Content-Type', window.appSettings.xhrSettings.contentType);
	
	    if (requestParameters.metod === 'GET') {
	      requestParameters.data = '';
	    }
	
	    xhr.send(requestParameters.data);
	  }
	
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _onlineProfile = __webpack_require__(6);
	
	var _onlineProfile2 = _interopRequireDefault(_onlineProfile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var profile = document.querySelector('#list-profile-list');
	
	exports.default = {
	  start: function start() {
	    profile.addEventListener('click', _onlineProfile2.default.setProfile);
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listProfile = document.querySelector('#list-profile');
	
	var prepareProfileMarkup = function prepareProfileMarkup() {
	  return '\n  <div id="profile" class="card" style="width: 20rem;">\n    <div class="card-header">\n      \u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\n    </div>\n    <ul class="list-group list-group-flush">\n      <li id="profile-name" class="list-group-item">' + _storage2.default.data.nickname + '</li>\n      <li id="profile-time" class="list-group-item">' + _storage2.default.data.lastLogin + '</li>\n      <li id="profile-directory" class="list-group-item">' + _storage2.default.data.directory + '</li>\n      <li id="profile-email" class="list-group-item">' + _storage2.default.data.email + '</li>\n    </ul>\n  </div>';
	};
	
	exports.default = {
	  setProfile: function setProfile() {
	    listProfile.innerHTML = _storage2.default.isSetFlag ? prepareProfileMarkup() : '<p id="unregistered-profile">ПРОФИЛЬ (Пожалуйста, зарегистрируйтесь...)</p>';
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _form_login = __webpack_require__(8);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _form_register = __webpack_require__(10);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	var _form_confirm_email = __webpack_require__(12);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _form_forgot = __webpack_require__(14);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionLoginFormMain = document.querySelector('#sectionLoginFormMain');
	
	sectionLoginFormMain.addEventListener('change', function (event) {
	  event.target.setCustomValidity('');
	});
	
	exports.default = {
	  init: function init() {},
	  firstScreen: function firstScreen() {
	    _form_confirm_email2.default.reset();
	    _form_register2.default.reset();
	    _form_forgot2.default.reset();
	    _form_login2.default.reset();
	    _form_confirm_email2.default.hide();
	    _form_register2.default.hide();
	    _form_forgot2.default.hide();
	    _form_login2.default.show();
	  },
	  confirmEmail: function confirmEmail() {
	    _form_register2.default.hide();
	    _form_confirm_email2.default.show();
	  },
	  register: function register() {
	    _form_login2.default.hide();
	    _form_register2.default.show();
	  },
	  forgot: function forgot() {
	    _form_login2.default.hide();
	    _form_forgot2.default.show();
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _login = __webpack_require__(9);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionLogin = document.querySelector('#sectionLogin');
	var loginForm = sectionLogin.querySelector('#loginForm');
	var loginButtonRegister = loginForm.querySelector('#loginButtonRegister');
	var loginButtonForgot = loginForm.querySelector('#loginButtonForgot');
	
	var inputFields = {
	  'login': loginForm.querySelector('#loginInputLogin'),
	  'password': loginForm.querySelector('#loginInputPassword')
	};
	
	loginForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	  _login2.default.submit(inputFields.login.value, inputFields.password.value);
	});
	
	loginButtonRegister.addEventListener('click', function () {
	  _main_login_window2.default.register();
	});
	
	loginButtonForgot.addEventListener('click', function () {
	  _main_login_window2.default.forgot();
	});
	
	exports.default = {
	  setError: function setError(target, msg) {
	    inputFields[target].setCustomValidity(msg);
	  },
	  show: function show() {
	    sectionLogin.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionLogin.classList.add('d-none');
	  },
	  reset: function reset() {
	    loginForm.reset();
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _form_login = __webpack_require__(8);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validId = window.appSettings.loginValid.id;
	var validEmail = window.appSettings.loginValid.email;
	var validPassword = window.appSettings.loginValid.password;
	
	// let capcha = 0;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  console.dir(response);
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	      alert('Ваш пользователь заблокирован, обратитесь к администратору');
	      // сброс на страницу загрузки
	    } else {
	      _storage2.default.data = response.data;
	      // Загрузка приложения
	      document.querySelector('#login').classList.add('d-none');
	      document.querySelector('#app').classList.remove('d-none');
	    }
	  } else {
	    // capcha++;
	    // показ ошибки
	    alert(response.message);
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  alert('error');
	};
	
	var getRequestDataEmail = function getRequestDataEmail(userLogin, userPassword) {
	  var dataApi = 'email=' + userLogin + '&deviceToken=-&password=' + userPassword;
	  return {
	    url: window.appSettings.loginUrlApi.email,
	    metod: 'POST',
	    data: dataApi,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var getRequestDataId = function getRequestDataId(userLogin, userPassword) {
	
	  var folder = userLogin.substr(0, 8);
	  var operator = userLogin.substr(8);
	
	  var urlApi = window.appSettings.loginUrlApi.id.replace('{{dir}}', folder);
	  var dataApi = 'operator=' + operator + '&deviceToken=-&password=' + userPassword;
	
	  return {
	    url: urlApi,
	    metod: 'POST',
	    data: dataApi,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var submitForm = function submitForm(userLogin, userPassword, isEmail) {
	  if (isEmail) {
	    _xhr2.default.request = getRequestDataEmail(userLogin, userPassword);
	  } else {
	    _xhr2.default.request = getRequestDataId(userLogin, userPassword);
	  }
	};
	
	var validateData = function validateData(template, data) {
	
	  if (template.test(data)) {
	    return true;
	  }
	
	  return false;
	};
	
	var validateForm = function validateForm(userLogin, userPassword) {
	
	  var valid = {
	    valid: true,
	    loginEmail: true
	  };
	
	  if (!validateData(validEmail, userLogin)) {
	    valid.loginEmail = false;
	    if (!validateData(validId, userLogin)) {
	      valid.valid = false;
	      _form_login2.default.setError('login', 'Неверный формат логина');
	    }
	  }
	
	  if (!validateData(validPassword, userPassword)) {
	    valid.valid = false;
	    _form_login2.default.setError('password', 'Пароль должен быть длиннее 3-х символов');
	  }
	
	  return valid;
	};
	
	exports.default = {
	  submit: function submit(login, password) {
	
	    // if (capcha === 3) {
	    //   form.showLoginCaptcha();
	    // }
	
	    login = login.toLowerCase();
	    login = login.replace(/-/g, '');
	
	    var valid = validateForm(login, password);
	
	    if (valid.valid) {
	      submitForm(login, password, valid.loginEmail);
	    }
	  }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _register = __webpack_require__(11);
	
	var _register2 = _interopRequireDefault(_register);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionRegister = document.querySelector('#sectionRegister');
	var registerForm = sectionRegister.querySelector('#registerForm');
	var registerButtonCancel = registerForm.querySelector('#registerButtonCancel');
	var registerUserAgreement = document.querySelector('#registerUserAgreement');
	
	var inputFields = {
	  'name': registerForm.querySelector('#registerInputName'),
	  'email': registerForm.querySelector('#registerInputEmail'),
	  'password': registerForm.querySelector('#registerInputPassword'),
	  'confirm': registerForm.querySelector('#registerInputConfirmPassword')
	};
	
	registerForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	
	  _register2.default.submit(inputFields.name.value, inputFields.email.value, inputFields.password.value, inputFields.confirm.value, registerUserAgreement.checked);
	});
	
	registerButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.firstScreen();
	});
	
	exports.default = {
	  setError: function setError(target, msg) {
	    inputFields[target].setCustomValidity(msg);
	  },
	  show: function show() {
	    sectionRegister.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionRegister.classList.add('d-none');
	  },
	  reset: function reset() {
	    registerForm.reset();
	  }
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _form_register = __webpack_require__(10);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var regVal = window.appSettings.registerValid;
	var regUrlApi = window.appSettings.registerUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  console.dir(response);
	
	  switch (response.status) {
	
	    case 200:
	      _main_login_window2.default.confirmEmail();
	      break;
	    case 400:
	      alert(response.message);
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  alert('error');
	};
	
	var validateName = function validateName(name) {
	
	  if (regVal.name.test(name)) {
	    return true;
	  }
	  return false;
	};
	
	var validateEmail = function validateEmail(email) {
	
	  if (regVal.email.test(email)) {
	    return true;
	  }
	  return false;
	};
	
	var validatePassword = function validatePassword(password) {
	
	  if (regVal.password.test(password)) {
	    return true;
	  }
	  return false;
	};
	
	var validateConfirm = function validateConfirm(password, confirm) {
	
	  if (password !== confirm || confirm === '') {
	    return false;
	  }
	  return true;
	};
	
	var validateForm = function validateForm(name, email, password, confirm, userAgreement) {
	  var valid = true;
	
	  if (!validateName(name)) {
	    _form_register2.default.setError('name', 'Имя!');
	    valid = false;
	  }
	
	  if (!validateEmail(email)) {
	    _form_register2.default.setError('email', 'Почта!');
	    valid = false;
	  }
	
	  if (!validatePassword(password)) {
	    _form_register2.default.setError('password', 'Пароль!');
	    valid = false;
	  }
	
	  if (!validateConfirm(password, confirm)) {
	    _form_register2.default.setError('confirm', 'Не совпадает!');
	    valid = false;
	  }
	
	  if (!userAgreement) {
	    alert('Соглашение!');
	    valid = false;
	  }
	
	  return valid;
	};
	
	var getRequestData = function getRequestData(name, email, password) {
	  var requestData = 'email=' + email + '&phone=&password=' + password + '&nickname=' + name + '&prefer_language=ru';
	  return {
	    url: regUrlApi,
	    metod: 'POST',
	    data: requestData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var submitForm = function submitForm(name, email, password) {
	  _xhr2.default.request = getRequestData(name, email, password);
	};
	
	exports.default = {
	  submit: function submit(name, email, password, confirm, userAgreement) {
	
	    if (validateForm(name, email, password, confirm, userAgreement)) {
	      submitForm(name, email, password);
	    }
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _confirm_email = __webpack_require__(13);
	
	var _confirm_email2 = _interopRequireDefault(_confirm_email);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionConfirmEmail = document.querySelector('#sectionConfirmEmail');
	var emailConfirmForm = sectionConfirmEmail.querySelector('#emailConfirmForm');
	var emailConfirmInputKey = emailConfirmForm.querySelector('#emailConfirmInputKey');
	var emailConfirmButtonCancel = emailConfirmForm.querySelector('#emailConfirmButtonCancel');
	
	var registerInputEmail = document.querySelector('#registerInputEmail');
	
	emailConfirmForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	  _confirm_email2.default.submit(emailConfirmInputKey.value, registerInputEmail.value);
	});
	
	emailConfirmButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.firstScreen();
	});
	
	exports.default = {
	  setError: function setError(msg) {
	    emailConfirmInputKey.setCustomValidity(msg);
	  },
	  show: function show() {
	    sectionConfirmEmail.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionConfirmEmail.classList.add('d-none');
	  },
	  reset: function reset() {
	    emailConfirmForm.reset();
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _form_confirm_email = __webpack_require__(12);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var kodVal = window.appSettings.confirmEmailKodValid;
	var urlApi = window.appSettings.confirmEmailUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	      alert('Ваш пользователь заблокирован, обратитесь к администратору');
	      // сброс на страницу загрузки
	    } else {
	      _storage2.default.data = response.data;
	      // Загрузка приложения
	    }
	  } else {
	    // показ ошибки
	    alert(response.message);
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  // показ ошибки
	  alert('error');
	};
	
	var validateForm = function validateForm(kod) {
	
	  if (kodVal.test(kod)) {
	    return true;
	  }
	  _form_confirm_email2.default.setError('Неверный формат кода!');
	  return false;
	};
	
	var getRequestData = function getRequestData(kod, email) {
	
	  var requestData = 'email=' + email + '&validate_code=' + kod + '&preferable_language=ru';
	  return {
	    url: urlApi,
	    metod: 'POST',
	    data: requestData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var submitForm = function submitForm(kod, email) {
	  _xhr2.default.request = getRequestData(kod, email);
	};
	
	exports.default = {
	  submit: function submit(kod, email) {
	
	    if (validateForm(kod)) {
	      submitForm(kod, email);
	    }
	  }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _forgot = __webpack_require__(15);
	
	var _forgot2 = _interopRequireDefault(_forgot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionForgot = document.querySelector('#sectionForgot');
	var forgotForm = sectionForgot.querySelector('#forgotForm');
	var forgotInputEmail = forgotForm.querySelector('#forgotInputEmail');
	var forgotButtonCancel = forgotForm.querySelector('#forgotButtonCancel');
	
	forgotForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	  _forgot2.default.submit(forgotInputEmail.value);
	});
	
	forgotButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.firstScreen();
	});
	
	exports.default = {
	  setError: function setError(msg) {
	    forgotInputEmail.setCustomValidity(msg);
	  },
	  show: function show() {
	    sectionForgot.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionForgot.classList.add('d-none');
	  },
	  reset: function reset() {
	    forgotForm.reset();
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(7);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _form_forgot = __webpack_require__(14);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emailVal = window.appSettings.forgotEmailValid;
	var urlApi = window.appSettings.forgotUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  console.dir(response);
	
	  if (response.status === 400) {
	    alert(response.message);
	    _main_login_window2.default.firstScreen();
	  } else {
	    // показ ошибки
	    alert('Ошибка восстановления пароля');
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  // показ ошибки
	  alert('error');
	};
	
	var validateForm = function validateForm(email) {
	
	  if (emailVal.test(email)) {
	    return true;
	  }
	  _form_forgot2.default.setError('Введите корректный email');
	  return false;
	};
	
	var getRequestData = function getRequestData(email) {
	
	  var requestData = 'email=' + email;
	  return {
	    url: urlApi,
	    metod: 'POST',
	    data: requestData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var submitForm = function submitForm(email) {
	  _xhr2.default.request = getRequestData(email);
	};
	
	exports.default = {
	  submit: function submit(email) {
	
	    if (validateForm(email)) {
	      submitForm(email);
	    }
	  }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map