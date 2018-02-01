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
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _log = __webpack_require__(14);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _onlineProfile = __webpack_require__(16);
	
	var _onlineProfile2 = _interopRequireDefault(_onlineProfile);
	
	var _referenceEnterprises = __webpack_require__(18);
	
	var _referenceEnterprises2 = _interopRequireDefault(_referenceEnterprises);
	
	var _referenceEnterprisesAdd = __webpack_require__(20);
	
	var _referenceEnterprisesAdd2 = _interopRequireDefault(_referenceEnterprisesAdd);
	
	var _referenceEnterprisesEdit = __webpack_require__(21);
	
	var _referenceEnterprisesEdit2 = _interopRequireDefault(_referenceEnterprisesEdit);
	
	var _referencePoints = __webpack_require__(22);
	
	var _referencePoints2 = _interopRequireDefault(_referencePoints);
	
	var _referencePointsAdd = __webpack_require__(24);
	
	var _referencePointsAdd2 = _interopRequireDefault(_referencePointsAdd);
	
	var _referencePointsEdit = __webpack_require__(25);
	
	var _referencePointsEdit2 = _interopRequireDefault(_referencePointsEdit);
	
	var _referenceContractors = __webpack_require__(26);
	
	var _referenceContractors2 = _interopRequireDefault(_referenceContractors);
	
	var _referenceContractorsAdd = __webpack_require__(29);
	
	var _referenceContractorsAdd2 = _interopRequireDefault(_referenceContractorsAdd);
	
	var _referenceKeywords = __webpack_require__(30);
	
	var _referenceKeywords2 = _interopRequireDefault(_referenceKeywords);
	
	var _referenceKeywordsAdd = __webpack_require__(32);
	
	var _referenceKeywordsAdd2 = _interopRequireDefault(_referenceKeywordsAdd);
	
	var _referenceKeywordsEdit = __webpack_require__(33);
	
	var _referenceKeywordsEdit2 = _interopRequireDefault(_referenceKeywordsEdit);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _catalogGroupsAdd = __webpack_require__(44);
	
	var _catalogGroupsAdd2 = _interopRequireDefault(_catalogGroupsAdd);
	
	var _catalogGroupsEdit = __webpack_require__(45);
	
	var _catalogGroupsEdit2 = _interopRequireDefault(_catalogGroupsEdit);
	
	var _catalogGroupsGoodsAdd = __webpack_require__(46);
	
	var _catalogGroupsGoodsAdd2 = _interopRequireDefault(_catalogGroupsGoodsAdd);
	
	var _catalog__cards = __webpack_require__(47);
	
	var _catalog__cards2 = _interopRequireDefault(_catalog__cards);
	
	var _catalog__search = __webpack_require__(49);
	
	var _catalog__search2 = _interopRequireDefault(_catalog__search);
	
	var _catalog__cardsAddResource = __webpack_require__(50);
	
	var _catalog__cardsAddResource2 = _interopRequireDefault(_catalog__cardsAddResource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('ver: 3D1');
	
	// Отправка без валидации
	
	
	// import goodsButtonFormEdit from './buttons/catalog-groups-goods-edit.js';
	
	console.log('ver: 3A4');
	
	var exit = document.querySelector('#profile-exit');
	var app = document.querySelector('#app');
	var login = document.querySelector('#login');
	
	var showLoginHideApp = function showLoginHideApp() {
	  login.classList.remove('d-none');
	  app.classList.add('d-none');
	};
	
	var showAppHideLogin = function showAppHideLogin() {
	  login.classList.add('d-none');
	  app.classList.remove('d-none');
	};
	
	// чистим меню и вкладки
	var initMarkup = function initMarkup() {
	  document.querySelectorAll('.nav-link').forEach(function (item) {
	    return item.classList.remove('active');
	  });
	  document.querySelectorAll('.nav-item.dropdown').forEach(function (item) {
	    return item.classList.remove('show');
	  });
	  document.querySelectorAll('.tab-pane').forEach(function (item) {
	    return item.classList.add('fade');
	  });
	  document.querySelectorAll('.dropdown-item').forEach(function (item) {
	    return item.classList.remove('active');
	  });
	};
	
	var hashObserver = function hashObserver() {
	  var hash = window.location.hash;
	  if (hash) {
	    document.querySelector(hash + '-list').dispatchEvent(new Event('click'));
	    document.querySelector(hash + '-list').classList.add('active');
	    document.querySelector('' + hash).classList.add('active');
	    document.querySelector('' + hash).classList.remove('fade');
	  }
	};
	
	var mainMenuButtons = [_onlineProfile2.default, _log2.default, _referenceEnterprises2.default, _referencePoints2.default, _referenceContractors2.default, _referenceKeywords2.default, _catalogGroups2.default, _catalog__cards2.default, _catalog__cardsAddResource2.default, _catalog__search2.default];
	
	// ========== ОБНОВЛЕНИЕ/ОТКРЫТИЕ СТРАНИЦЫ ==========
	var start = function start() {
	  if (_storage2.default.isSetFlag) {
	    showAppHideLogin();
	    initMarkup();
	    hashObserver();
	    mainMenuButtons.forEach(function (item) {
	      return item.start();
	    });
	    _referenceEnterprisesAdd2.default.start();
	    _referenceEnterprisesEdit2.default.start();
	    _referencePointsAdd2.default.start();
	    _referencePointsEdit2.default.start();
	    _referenceContractorsAdd2.default.start();
	    _referenceKeywordsAdd2.default.start();
	    _referenceKeywordsEdit2.default.start();
	    _catalogGroupsAdd2.default.start();
	    _catalogGroupsEdit2.default.start();
	    _catalogGroupsGoodsAdd2.default.start();
	    // goodsButtonFormEdit.start();
	  } else {
	    showLoginHideApp();
	    _main_login_window2.default.init();
	  }
	};
	
	// ========== ВЫХОД ==========
	var stop = function stop() {
	  showLoginHideApp();
	  _storage2.default.clean();
	  mainMenuButtons.forEach(function (item) {
	    return item.stop();
	  });
	  window.location.hash = '';
	  document.dispatchEvent(new Event('logoutSuccess'));
	};
	
	// ========== НАЧАЛО РАБОТЫ ==========
	initMarkup();
	hashObserver();
	start();
	document.addEventListener('loginSuccess', start);
	document.addEventListener('authError', stop);
	
	// ========== ЗАВЕРШЕНИЕ РАБОТЫ ==========
	exit.addEventListener('click', stop);

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
	    localStorage.setItem('nickname', loadedData.nickname);
	    localStorage.setItem('lastLogin', loadedData.lastLogin);
	    localStorage.setItem('email', loadedData.email);
	    localStorage.setItem('directory', loadedData.directory);
	    localStorage.setItem('operatorId', loadedData.operator_id);
	    localStorage.setItem('token', loadedData.token);
	    localStorage.setItem('currentBusiness', loadedData.current_business);
	    localStorage.setItem('currentStock', loadedData.current_stock);
	  },
	
	  // возвращаем данные
	  get data() {
	    return {
	      nickname: localStorage.getItem('nickname'),
	      lastLogin: localStorage.getItem('lastLogin'),
	      directory: localStorage.getItem('directory'),
	      email: localStorage.getItem('email'),
	      operatorId: localStorage.getItem('operatorId'),
	      token: localStorage.getItem('token'),
	      currentBusiness: localStorage.getItem('currentBusiness'),
	      currentStock: localStorage.getItem('currentStock')
	    };
	  },
	
	  set currentBusiness(id) {
	    localStorage.setItem('currentBusiness', id);
	  },
	
	  set currentStock(id) {
	    localStorage.setItem('currentStock', id);
	  },
	
	  get isSetFlag() {
	    return Object.values(this.data).some(function (item) {
	      return item !== null;
	    });
	  },
	
	  // чистим хранилище
	  clean: function clean() {
	    localStorage.removeItem('nickname');
	    localStorage.removeItem('lastLogin');
	    localStorage.removeItem('directory');
	    localStorage.removeItem('email');
	    localStorage.removeItem('operatorId');
	    localStorage.removeItem('token');
	    localStorage.removeItem('currentBusiness');
	    localStorage.removeItem('currentStock');
	  },
	
	
	  // ВСЯКОЕ ПРОЧЕЕ
	
	  set currentEnterpriseId(id) {
	    sessionStorage.setItem('currentEnterpriseId', id);
	  },
	
	  get currentEnterpriseId() {
	    return sessionStorage.getItem('currentEnterpriseId');
	  },
	
	  set currentEnterpriseName(name) {
	    sessionStorage.setItem('currentEnterpriseName', name);
	  },
	
	  get currentEnterpriseName() {
	    return sessionStorage.getItem('currentEnterpriseName');
	  },
	
	  set currentStockId(id) {
	    sessionStorage.setItem('currentStockId', id);
	  },
	
	  get currentStockId() {
	    return sessionStorage.getItem('currentStockId');
	  },
	
	  set currentStockName(name) {
	    sessionStorage.setItem('currentStockName', name);
	  },
	
	  get currentStockName() {
	    return sessionStorage.getItem('currentStockName');
	  },
	
	  set currentContractorId(id) {
	    sessionStorage.setItem('currentContractorId', id);
	  },
	
	  get currentContractorId() {
	    return sessionStorage.getItem('currentContractorId');
	  },
	
	  set currentContractorType(type) {
	    sessionStorage.setItem('currentContractorType', type);
	  },
	
	  get currentContractorType() {
	    return sessionStorage.getItem('currentContractorType');
	  },
	
	  set currentContractorOperation(type) {
	    sessionStorage.setItem('currentContractorOperation', type);
	  },
	
	  get currentContractorOperation() {
	    return sessionStorage.getItem('currentContractorOperation');
	  },
	
	  set currentKeywordRgb(rgb) {
	    sessionStorage.setItem('currentKeywordRgb', rgb);
	  },
	
	  get currentKeywordRgb() {
	    return sessionStorage.getItem('currentKeywordRgb');
	  },
	
	  set currentKeywordId(id) {
	    sessionStorage.setItem('currentKeywordId', id);
	  },
	
	  get currentKeywordId() {
	    return sessionStorage.getItem('currentKeywordId');
	  },
	
	  set currentKeywordName(name) {
	    sessionStorage.setItem('currentKeywordName', name);
	  },
	
	  get currentKeywordName() {
	    return sessionStorage.getItem('currentKeywordName');
	  },
	
	  set goodsViewMode(mode) {
	    sessionStorage.setItem('goodsViewMode', mode);
	  },
	
	  get goodsViewMode() {
	    return sessionStorage.getItem('goodsViewMode');
	  },
	
	  set goodsSortMode(mode) {
	    sessionStorage.setItem('goodsSortMode', mode);
	  },
	
	  get goodsSortMode() {
	    return sessionStorage.getItem('goodsSortMode');
	  },
	
	  set currentGroupId(id) {
	    sessionStorage.setItem('currentGroupId', id);
	  },
	
	  get currentGroupId() {
	    return sessionStorage.getItem('currentGroupId');
	  },
	
	  set currentGroupName(name) {
	    sessionStorage.setItem('currentGroupName', name);
	  },
	
	  get currentGroupName() {
	    return sessionStorage.getItem('currentGroupName');
	  },
	
	  set currentGoodId(id) {
	    sessionStorage.setItem('currentGoodId', id);
	  },
	
	  get currentGoodId() {
	    return sessionStorage.getItem('currentGoodId');
	  },
	
	  set currentStockQuantityT2(quantity) {
	    sessionStorage.setItem('currentStockQuantityT2', quantity);
	  },
	
	  get currentStockQuantityT2() {
	    return sessionStorage.getItem('currentStockQuantityT2');
	  },
	
	  set expressOperationType(type) {
	    sessionStorage.setItem('expressOperationType', type);
	  },
	
	  get expressOperationType() {
	    return sessionStorage.getItem('expressOperationType');
	  },
	
	  set currentCardId(id) {
	    sessionStorage.setItem('currentCardId', id);
	  },
	
	  get currentCardId() {
	    return sessionStorage.getItem('currentCardId');
	  },
	
	  set currentCardName(name) {
	    sessionStorage.setItem('currentCardName', name);
	  },
	
	  get currentCardName() {
	    return sessionStorage.getItem('currentCardName');
	  },
	
	  set currentCardOperation(type) {
	    sessionStorage.setItem('currentCardOperation', type);
	  },
	
	  get currentCardOperation() {
	    return sessionStorage.getItem('currentCardOperation');
	  },
	
	  set isGoodCardEdit(flag) {
	    sessionStorage.setItem('isGoodCardEdit', flag);
	  },
	
	  get isGoodCardEdit() {
	    return sessionStorage.getItem('isGoodCardEdit');
	  }
	
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _form_login = __webpack_require__(3);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _form_register = __webpack_require__(8);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	var _form_confirm_email = __webpack_require__(10);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _form_forgot = __webpack_require__(12);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	var _captcha = __webpack_require__(7);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionLoginFormMain = document.querySelector('#sectionLoginFormMain');
	var globalAlert = document.querySelector('#globalAlert');
	
	var inputFields = {
	  'loginLogin': sectionLoginFormMain.querySelector('#loginInputLogin'),
	  'loginPassword': sectionLoginFormMain.querySelector('#loginInputPassword'),
	  'registerLogin': sectionLoginFormMain.querySelector('#registerInputName'),
	  'registerEmail': sectionLoginFormMain.querySelector('#registerInputEmail'),
	  'registerPassword': sectionLoginFormMain.querySelector('#registerInputPassword'),
	  'registerConfirm': sectionLoginFormMain.querySelector('#registerInputConfirmPassword'),
	  'registerUserAgreement': sectionLoginFormMain.querySelector('#registerUserAgreement'),
	  'emailConfirmInputKey': sectionLoginFormMain.querySelector('#emailConfirmInputKey'),
	  'forgotInputEmail': sectionLoginFormMain.querySelector('#forgotInputEmail')
	};
	
	var inputFieldsErrors = {
	  'loginLogin': sectionLoginFormMain.querySelector('#loginInputLoginError'),
	  'loginPassword': sectionLoginFormMain.querySelector('#loginInputPasswordError'),
	  'registerLogin': sectionLoginFormMain.querySelector('#registerInputNameError'),
	  'registerEmail': sectionLoginFormMain.querySelector('#registerInputEmailError'),
	  'registerPassword': sectionLoginFormMain.querySelector('#registerInputPasswordError'),
	  'registerConfirm': sectionLoginFormMain.querySelector('#registerInputConfirmPasswordError'),
	  'registerUserAgreement': sectionLoginFormMain.querySelector('#registerUserAgreementError'),
	  'emailConfirmInputKey': sectionLoginFormMain.querySelector('#emailConfirmInputKeyError'),
	  'forgotInputEmail': sectionLoginFormMain.querySelector('#forgotInputEmailError')
	};
	
	var progressBar = {
	  'loginProgress': sectionLoginFormMain.querySelector('#loginProgress'),
	  'registerProgress': sectionLoginFormMain.querySelector('#registerProgress'),
	  'confirmProgress': sectionLoginFormMain.querySelector('#confirmProgress'),
	  'forgotProgress': sectionLoginFormMain.querySelector('#forgotProgress')
	};
	
	var buttons = {
	  'loginButtonSubmit': sectionLoginFormMain.querySelector('#loginButtonSubmit'),
	  'registerButtonSubmit': sectionLoginFormMain.querySelector('#registerButtonSubmit'),
	  'emailConfirmButtonSubmit': sectionLoginFormMain.querySelector('#emailConfirmButtonSubmit'),
	  'forgotButtonSubmit': sectionLoginFormMain.querySelector('#forgotButtonSubmit')
	};
	
	var setGlobalAlert = function setGlobalAlert(msg, type) {
	  var msgType = void 0;
	  var msgClass = void 0;
	  if (type === 'error') {
	    msgType = 'ОШИБКА! ';
	    msgClass = 'alert-danger';
	  }
	
	  if (type === 'message') {
	    msgType = 'СООБЩЕНИЕ! ';
	    msgClass = 'alert-success';
	  }
	
	  globalAlert.innerHTML = globalAlert.innerHTML + ('<div id="globalAlert" class="alert ' + msgClass + ' fade show" role="alert">\n      <strong>' + msgType + ' </strong> ' + msg + '\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>');
	};
	
	var resetErrors = function resetErrors() {
	  var errObj = Object.keys(inputFieldsErrors);
	  var inObg = Object.keys(inputFields);
	
	  errObj.forEach(function (value) {
	    inputFieldsErrors[value].innerHTML = '';
	  });
	
	  inObg.forEach(function (value) {
	    inputFields[value].classList.remove('border');
	    inputFields[value].classList.remove('border-danger');
	  });
	};
	
	sectionLoginFormMain.addEventListener('change', function (event) {
	
	  inputFieldsErrors[event.target.dataset.erreset].innerHTML = '';
	  event.target.classList.remove('border');
	  event.target.classList.remove('border-danger');
	});
	
	document.addEventListener('logoutSuccess', function () {
	  formInit();
	});
	
	var formInit = function formInit() {
	  globalAlert.innerHTML = '';
	  resetErrors();
	  _form_confirm_email2.default.reset();
	  _form_register2.default.reset();
	  _form_forgot2.default.reset();
	  _form_login2.default.reset();
	  _form_confirm_email2.default.hide();
	  _form_register2.default.hide();
	  _form_forgot2.default.hide();
	  _form_login2.default.show();
	};
	
	_captcha2.default.init();
	
	exports.default = {
	
	  init: formInit,
	
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
	  },
	  setError: function setError(target, msg) {
	    inputFieldsErrors[target].innerHTML = msg;
	    inputFields[target].classList.add('border');
	    inputFields[target].classList.add('border-danger');
	  },
	
	
	  setAlert: setGlobalAlert,
	
	  showProgress: function showProgress(button, progress) {
	    progressBar[progress].classList.remove('invisible');
	    if (button) {
	      buttons[button].disabled = true;
	    }
	  },
	  hideProgress: function hideProgress(button, progress) {
	    progressBar[progress].classList.add('invisible');
	    buttons[button].disabled = false;
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _login = __webpack_require__(4);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _captcha = __webpack_require__(7);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionLogin = document.querySelector('#sectionLogin');
	var loginForm = sectionLogin.querySelector('#loginForm');
	var loginInputLogin = sectionLogin.querySelector('#loginInputLogin');
	var loginInputPassword = sectionLogin.querySelector('#loginInputPassword');
	var loginButtonRegister = loginForm.querySelector('#loginButtonRegister');
	var loginButtonForgot = loginForm.querySelector('#loginButtonForgot');
	var loginCaptcha = loginForm.querySelector('#loginCaptcha');
	
	var captchaCount = 0;
	var captchaId = 'NO';
	var userLogin = void 0;
	
	var captchaCallback = function captchaCallback() {
	
	  _main_login_window2.default.showProgress('loginButtonSubmit', 'loginProgress');
	
	  if (_captcha2.default.getResponse(captchaId)) {
	    _captcha2.default.catchaReset(captchaId);
	  }
	
	  _login2.default.submit(userLogin, loginInputPassword.value);
	};
	
	loginForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	  userLogin = formatLogin(loginInputLogin.value);
	
	  if (_login2.default.validate(userLogin, loginInputPassword.value)) {
	
	    if (!window.captchaErr && captchaCount >= 3) {
	      _main_login_window2.default.showProgress(false, 'loginProgress');
	      _captcha2.default.captchaExec(captchaId);
	    } else {
	      _main_login_window2.default.showProgress('loginButtonSubmit', 'loginProgress');
	      _login2.default.submit(userLogin, loginInputPassword.value);
	    }
	  }
	});
	
	var formatLogin = function formatLogin(userlogin) {
	  userlogin = userlogin.toLowerCase();
	  userlogin = userlogin.replace(/-/g, '');
	  return userlogin;
	};
	
	loginButtonRegister.addEventListener('click', function () {
	  _main_login_window2.default.register();
	});
	
	loginButtonForgot.addEventListener('click', function () {
	  _main_login_window2.default.forgot();
	});
	
	exports.default = {
	  show: function show() {
	    sectionLogin.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionLogin.classList.add('d-none');
	  },
	  reset: function reset() {
	    loginForm.reset();
	    loginInputLogin.setCustomValidity('');
	    loginInputPassword.setCustomValidity('');
	
	    if (captchaId !== 'NO') {
	      _captcha2.default.catchaReset(captchaId);
	    }
	  },
	  addCaptchaCount: function addCaptchaCount() {
	    captchaCount++;
	  },
	  setCaptcha: function setCaptcha() {
	    captchaId = _captcha2.default.getCaptcha(loginCaptcha, captchaCallback);
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _form_login = __webpack_require__(3);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validId = window.appSettings.loginValid.id;
	var validEmail = window.appSettings.loginValid.email;
	var validPassword = window.appSettings.loginValid.password;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _form_login2.default.addCaptchaCount();
	  _main_login_window2.default.hideProgress('loginButtonSubmit', 'loginProgress');
	
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	      _main_login_window2.default.setAlert(window.appSettings.messages.responseStatus.res0, 'message');
	    } else {
	      _storage2.default.data = response.data;
	      document.dispatchEvent(new Event('loginSuccess'));
	    }
	  } else {
	    _main_login_window2.default.setAlert(response.message, 'error');
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('loginButtonSubmit', 'loginProgress');
	  _main_login_window2.default.setAlert(window.appSettings.messages.xhrError, 'error');
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
	    callbackError: window.callbackXhrError
	  };
	};
	
	var validateData = function validateData(template, data) {
	
	  if (template.test(data)) {
	    return true;
	  }
	
	  return false;
	};
	
	var validateForm = function validateForm(userLogin, userPassword) {
	
	  var valid = true;
	
	  if (!validateData(validEmail, userLogin)) {
	    if (!validateData(validId, userLogin)) {
	      valid = false;
	      _main_login_window2.default.setError('loginLogin', window.appSettings.messages.formValidation.login.login);
	    }
	  }
	
	  if (!validateData(validPassword, userPassword)) {
	    valid = false;
	    _main_login_window2.default.setError('loginPassword', window.appSettings.messages.formValidation.login.password);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm(userLogin, userPassword, isEmail) {
	  if (validateData(validEmail, userLogin)) {
	    _xhr2.default.request = getRequestDataEmail(userLogin, userPassword);
	  } else {
	    _xhr2.default.request = getRequestDataId(userLogin, userPassword);
	  }
	};
	
	exports.default = {
	  submit: function submit(login, password) {
	    submitForm(login, password);
	  },
	  validate: function validate(login, password) {
	    return validateForm(login, password);
	  }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	          if (response.status === 280 && response.message === 'Invalid token') {
	            _tools2.default.informationtModal = {
	              title: 'Что-то пошло не так...',
	              message: 'Пожалуйста, авторизуйтесь заново'
	            };
	            document.dispatchEvent(new Event('authError'));
	          }
	        } catch (error) {
	          requestParameters.callbackError(getError(ErrorAttr.MESSADGE.JSON_ERR, 26, error));
	        }
	
	        requestParameters.callbackSuccess(response);
	      } else {
	        requestParameters.callbackError(getError(ErrorAttr.MESSADGE.LOAD_ERR + ' ' + xhr.statusText, 35, ''));
	      }
	    });
	
	    xhr.addEventListener('error', function () {
	      if (requestParameters.callbackError && typeof requestParameters.callbackError === 'function') {
	        requestParameters.callbackError(getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' ' + xhr.statusText, 42, ''));
	      } else {
	        _tools2.default.informationtModal = {
	          title: '400',
	          message: getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' ' + xhr.statusText, 42, '')
	        };
	      }
	    });
	
	    xhr.addEventListener('timeout', function () {
	      if (requestParameters.callbackError && typeof requestParameters.callbackError === 'function') {
	        requestParameters.callbackError(getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' (' + xhr.timeout + 'ms.)', 50, ''));
	      } else {
	        _tools2.default.informationtModal = {
	          title: '400',
	          message: getError(ErrorAttr.MESSADGE.CONNECT_ERR + ' (' + xhr.timeout + 'ms.)', 50, '')
	        };
	      }
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
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var modalActionRequest = document.querySelector('#modal-action-request');
	var modalActionRequestTitle = modalActionRequest.querySelector('#modal-action-request-title');
	var modalActionRequestMessage = modalActionRequest.querySelector('#modal-action-request-message');
	var modalActionRequestSubmit = modalActionRequest.querySelector('#modal-action-request-submit');
	
	var modalInformation = document.querySelector('#modal-information');
	var modalInformationTitle = modalInformation.querySelector('#modal-information-title');
	var modalInformationMessage = modalInformation.querySelector('#modal-information-message');
	
	var modalUniversalAdd = document.querySelector('#universal-add');
	var modalUniversalAddLabel = document.querySelector('#universal-add-label');
	var modalUniversalAddForm = document.querySelector('#universal-add-form');
	var modalUniversalAddName = document.querySelector('#universal-add-name');
	var modalUniversalAddNameLabel = document.querySelector('#universal-add-name-label');
	var modalUniversalAddSubmit = document.querySelector('#universal-add-submit');
	
	exports.default = {
	  getWaitSpinner: function getWaitSpinner(id, message) {
	    return '\n      <div id="loader" class="progress text-white" style="height: 25px;">\n        <div class="progress-bar progress-bar-striped progress-bar-animated text-white font-weight-bold text-uppercase bg-success" style="width: 100%" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">' + message + '</div>\n      </div>';
	  },
	  getLoadSpinner: function getLoadSpinner(id, message) {
	    return '\n      <div id="' + id + '" class="progress text-white" style="height: 25px;">\n        <div class="progress-bar progress-bar-striped progress-bar-animated text-white font-weight-bold text-uppercase" style="width: 100%" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">' + message + '</div>\n      </div>';
	  },
	  getError: function getError(id, message) {
	    return '\n      <div id="loader-fail" class="container-fluid bg-danger text-white text-center mb-5" style="height: 25;">' + message + '</div>';
	  },
	
	
	  set actionRequestModal(setup) {
	
	    var requestHandler = function requestHandler() {
	      setup.submitCallback();
	      modalActionRequestSubmit.removeEventListener('click', requestHandler);
	    };
	
	    $(modalActionRequest).modal('show');
	    modalActionRequestTitle.innerHTML = setup.title;
	    modalActionRequestMessage.innerHTML = setup.message;
	    modalActionRequestSubmit.addEventListener('click', requestHandler);
	  },
	
	  set informationtModal(setup) {
	    $(modalInformation).modal('show');
	    modalInformationTitle.innerHTML = setup.title;
	    modalInformationMessage.innerHTML = setup.message;
	  },
	
	  set informationModalLight(setup) {},
	
	  set runUniversalAdd(setup) {
	    var requestHandler = function requestHandler(evt) {
	      evt.preventDefault();
	      setup.submitCallback(modalUniversalAddName.value);
	      modalUniversalAddForm.removeEventListener('submit', requestHandler);
	      $(modalUniversalAdd).modal('hide');
	    };
	
	    $(modalUniversalAdd).modal('show');
	    modalUniversalAddLabel.innerHTML = setup.title;
	    modalUniversalAddNameLabel.innerHTML = setup.inputLabel;
	    modalUniversalAddName.setAttribute('placeholder', setup.inputPlaceholder);
	    modalUniversalAddName.value = setup.inputValue ? setup.inputValue : '';
	    modalUniversalAddSubmit.innerHTML = setup.submitBtnName;
	    modalUniversalAddForm.addEventListener('submit', requestHandler);
	  }
	
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _form_register = __webpack_require__(8);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	var _form_login = __webpack_require__(3);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _form_confirm_email = __webpack_require__(10);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _form_forgot = __webpack_require__(12);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var captchaErrorCallback = function captchaErrorCallback(response) {
	  window.captchaErr = true;
	  _main_login_window2.default.setAlert(window.appSettings.messages.captchaError, 'error');
	};
	
	exports.default = {
	  init: function init() {
	    window.captchaOnLoadCallback = function () {
	      window.captchaOnLoad = true;
	      window.captchaErr = false;
	
	      _form_login2.default.setCaptcha();
	      _form_register2.default.setCaptcha();
	      _form_confirm_email2.default.setCaptcha();
	      _form_forgot2.default.setCaptcha();
	    };
	  },
	  captchaExec: function captchaExec(captchaId) {
	    window.grecaptcha.execute(captchaId);
	  },
	  catchaReset: function catchaReset(captchaId) {
	    window.grecaptcha.reset(captchaId);
	  },
	  getResponse: function getResponse(captchaId) {
	    return window.grecaptcha.getResponse(captchaId);
	  },
	  getCaptcha: function getCaptcha(elementId, callback) {
	    return window.grecaptcha.render(elementId, {
	      'size': 'invisible',
	      'sitekey': window.appSettings.reCaptchaSiteKey,
	      'callback': callback,
	      'error-callback': captchaErrorCallback
	    });
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _register = __webpack_require__(9);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _captcha = __webpack_require__(7);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionRegister = document.querySelector('#sectionRegister');
	var registerForm = sectionRegister.querySelector('#registerForm');
	var registerInputName = registerForm.querySelector('#registerInputName');
	var registerInputEmail = registerForm.querySelector('#registerInputEmail');
	var registerInputPassword = registerForm.querySelector('#registerInputPassword');
	var registerInputConfirmPassword = registerForm.querySelector('#registerInputConfirmPassword');
	var registerButtonCancel = registerForm.querySelector('#registerButtonCancel');
	var registerUserAgreement = document.querySelector('#registerUserAgreement');
	var registerCaptcha = sectionRegister.querySelector('#registerCaptcha');
	var registerButtonUserAgreement = sectionRegister.querySelector('#registerButtonUserAgreement');
	
	var captchaId = 'NO';
	
	var captchaCallback = function captchaCallback() {
	
	  _main_login_window2.default.showProgress('registerButtonSubmit', 'registerProgress');
	
	  if (_captcha2.default.getResponse(captchaId)) {
	    _captcha2.default.catchaReset(captchaId);
	  }
	
	  _register2.default.submit(registerInputName.value, registerInputEmail.value, registerInputPassword.value);
	};
	
	registerForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	
	  if (_register2.default.validate(registerInputName.value, registerInputEmail.value, registerInputPassword.value, registerInputConfirmPassword.value, registerUserAgreement.checked)) {
	
	    if (!window.captchaErr) {
	      _main_login_window2.default.showProgress(false, 'registerProgress');
	      _captcha2.default.captchaExec(captchaId);
	    } else {
	      _main_login_window2.default.showProgress('registerButtonSubmit', 'registerProgress');
	      _register2.default.submit(registerInputName.value, registerInputEmail.value, registerInputPassword.value);
	    }
	  }
	});
	
	registerButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.init();
	});
	
	registerButtonUserAgreement.addEventListener('click', function () {
	  // window.location = 'http://bidone.ru/lopos_terms_and_agreements';
	  window.open('http://bidone.ru/lopos_terms_and_agreements');
	});
	
	exports.default = {
	  show: function show() {
	    sectionRegister.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionRegister.classList.add('d-none');
	  },
	  reset: function reset() {
	    registerForm.reset();
	    registerInputName.setCustomValidity('');
	    registerInputEmail.setCustomValidity('');
	    registerInputPassword.setCustomValidity('');
	    registerInputConfirmPassword.setCustomValidity('');
	
	    if (captchaId !== 'NO') {
	      _captcha2.default.catchaReset(captchaId);
	    }
	  },
	  submitForm: function submitForm() {
	    _register2.default.submit(registerInputName.value, registerInputEmail.value, registerInputPassword.value, registerInputConfirmPassword.value, registerUserAgreement.checked);
	  },
	  setCaptcha: function setCaptcha() {
	    captchaId = _captcha2.default.getCaptcha(registerCaptcha, captchaCallback);
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var regVal = window.appSettings.registerValid;
	var regUrlApi = window.appSettings.registerUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  _main_login_window2.default.hideProgress('registerButtonSubmit', 'registerProgress');
	  switch (response.status) {
	
	    case 200:
	      _main_login_window2.default.setAlert(response.message, 'message');
	      _main_login_window2.default.confirmEmail();
	      break;
	    case 400:
	      _main_login_window2.default.setAlert(response.message, 'error');
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('registerButtonSubmit', 'registerProgress');
	  _main_login_window2.default.setAlert(window.appSettings.messages.xhrError, 'error');
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
	    _main_login_window2.default.setError('registerLogin', window.appSettings.messages.formValidation.registration.name);
	    valid = false;
	  }
	
	  if (!validateEmail(email)) {
	    _main_login_window2.default.setError('registerEmail', window.appSettings.messages.formValidation.registration.email);
	    valid = false;
	  }
	
	  if (!validatePassword(password)) {
	    _main_login_window2.default.setError('registerPassword', window.appSettings.messages.formValidation.registration.password);
	    valid = false;
	  }
	
	  if (!validateConfirm(password, confirm)) {
	    _main_login_window2.default.setError('registerConfirm', window.appSettings.messages.formValidation.registration.confirmPassword);
	    valid = false;
	  }
	
	  if (!userAgreement) {
	    _main_login_window2.default.setError('registerUserAgreement', window.appSettings.messages.formValidation.registration.UserAgreement);
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
	  submit: function submit(name, email, password) {
	    submitForm(name, email, password);
	  },
	  validate: function validate(name, email, password, confirm, userAgreement) {
	    return validateForm(name, email, password, confirm, userAgreement);
	  }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _confirm_email = __webpack_require__(11);
	
	var _confirm_email2 = _interopRequireDefault(_confirm_email);
	
	var _captcha = __webpack_require__(7);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionConfirmEmail = document.querySelector('#sectionConfirmEmail');
	var emailConfirmForm = sectionConfirmEmail.querySelector('#emailConfirmForm');
	var emailConfirmInputKey = emailConfirmForm.querySelector('#emailConfirmInputKey');
	var emailConfirmButtonCancel = emailConfirmForm.querySelector('#emailConfirmButtonCancel');
	var emailConfirmCaptcha = sectionConfirmEmail.querySelector('#emailConfirmCaptcha');
	
	var registerInputEmail = document.querySelector('#registerInputEmail');
	
	var captchaId = 'NO';
	
	var captchaCallback = function captchaCallback() {
	  _main_login_window2.default.showProgress('emailConfirmButtonSubmit', 'confirmProgress');
	
	  if (_captcha2.default.getResponse(captchaId)) {
	    _captcha2.default.catchaReset(captchaId);
	  }
	
	  _confirm_email2.default.submit(emailConfirmInputKey.value, registerInputEmail.value);
	};
	
	emailConfirmForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	
	  if (_confirm_email2.default.validate(emailConfirmInputKey.value)) {
	
	    if (!window.captchaErr) {
	      _main_login_window2.default.showProgress(false, 'confirmProgress');
	      _captcha2.default.captchaExec(captchaId);
	    } else {
	      _main_login_window2.default.showProgress('emailConfirmButtonSubmit', 'confirmProgress');
	      _confirm_email2.default.submit(emailConfirmInputKey.value, registerInputEmail.value);
	    }
	  }
	});
	
	emailConfirmButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.init();
	});
	
	exports.default = {
	  show: function show() {
	    sectionConfirmEmail.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionConfirmEmail.classList.add('d-none');
	  },
	  reset: function reset() {
	    emailConfirmForm.reset();
	    emailConfirmInputKey.setCustomValidity('');
	
	    if (captchaId !== 'NO') {
	      _captcha2.default.catchaReset(captchaId);
	    }
	  },
	  submitForm: function submitForm() {
	    _confirm_email2.default.submit(emailConfirmInputKey.value, registerInputEmail.value);
	  },
	  setCaptcha: function setCaptcha() {
	    captchaId = _captcha2.default.getCaptcha(emailConfirmCaptcha, captchaCallback);
	  }
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var kodVal = window.appSettings.confirmEmailKodValid;
	var urlApi = window.appSettings.confirmEmailUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _main_login_window2.default.hideProgress('emailConfirmButtonSubmit', 'confirmProgress');
	
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	      _main_login_window2.default.setAlert(window.appSettings.messages.responseStatus.res0, 'message');
	    } else {
	      _storage2.default.data = response.data;
	      document.dispatchEvent(new Event('loginSuccess'));
	    }
	  } else {
	    _main_login_window2.default.setAlert(response.message, 'error');
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('emailConfirmButtonSubmit', 'confirmProgress');
	  _main_login_window2.default.setAlert(window.appSettings.messages.xhrError, 'error');
	};
	
	var validateForm = function validateForm(kod) {
	
	  if (kodVal.test(kod)) {
	    return true;
	  }
	  _main_login_window2.default.setError('emailConfirmInputKey', window.appSettings.messages.formValidation.emailConfirm.key);
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
	    submitForm(kod, email);
	  },
	  validate: function validate(kod) {
	    return validateForm(kod);
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _forgot = __webpack_require__(13);
	
	var _forgot2 = _interopRequireDefault(_forgot);
	
	var _captcha = __webpack_require__(7);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionForgot = document.querySelector('#sectionForgot');
	var forgotForm = sectionForgot.querySelector('#forgotForm');
	var forgotInputEmail = forgotForm.querySelector('#forgotInputEmail');
	var forgotButtonCancel = forgotForm.querySelector('#forgotButtonCancel');
	
	var forgotCaptcha = forgotForm.querySelector('#forgotCaptcha');
	
	var captchaId = 'NO';
	
	var captchaCallback = function captchaCallback() {
	
	  _main_login_window2.default.showProgress('forgotButtonSubmit', 'forgotProgress');
	
	  if (_captcha2.default.getResponse(captchaId)) {
	    _captcha2.default.catchaReset(captchaId);
	  }
	
	  _forgot2.default.submit(forgotInputEmail.value);
	};
	
	forgotForm.addEventListener('submit', function (event) {
	  event.preventDefault();
	
	  if (_forgot2.default.validate(forgotInputEmail.value)) {
	
	    if (!window.captchaErr) {
	      _main_login_window2.default.showProgress(false, 'forgotProgress');
	      _captcha2.default.captchaExec(captchaId);
	    } else {
	      _main_login_window2.default.showProgress('forgotButtonSubmit', 'forgotProgress');
	      _forgot2.default.submit(forgotInputEmail.value);
	    }
	  }
	});
	
	forgotButtonCancel.addEventListener('click', function () {
	  _main_login_window2.default.init();
	});
	
	exports.default = {
	  show: function show() {
	    sectionForgot.classList.remove('d-none');
	  },
	  hide: function hide() {
	    sectionForgot.classList.add('d-none');
	  },
	  reset: function reset() {
	    forgotForm.reset();
	    forgotInputEmail.setCustomValidity('');
	
	    if (captchaId !== 'NO') {
	      _captcha2.default.catchaReset(captchaId);
	    }
	  },
	  submitForm: function submitForm() {
	    _forgot2.default.submit(forgotInputEmail.value);
	  },
	  setCaptcha: function setCaptcha() {
	    captchaId = _captcha2.default.getCaptcha(forgotCaptcha, captchaCallback);
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _main_login_window = __webpack_require__(2);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emailVal = window.appSettings.forgotEmailValid;
	var urlApi = window.appSettings.forgotUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _main_login_window2.default.hideProgress('forgotButtonSubmit', 'forgotProgress');
	
	  if (response.status === 400) {
	    _main_login_window2.default.setAlert(response.message, 'message');
	  } else {
	    _main_login_window2.default.setAlert(response.message, 'error');
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('forgotButtonSubmit', 'forgotProgress');
	  _main_login_window2.default.setAlert(window.appSettings.messages.xhrError, 'error');
	};
	
	var validateForm = function validateForm(email) {
	
	  if (emailVal.test(email)) {
	    return true;
	  }
	  _main_login_window2.default.setError('forgotInputEmail', window.appSettings.messages.formValidation.forgot.email);
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
	    submitForm(email);
	  },
	  validate: function validate(email) {
	    return validateForm(email);
	  }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _log = __webpack_require__(15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _xhr = __webpack_require__(5);
	
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
	  console.log('get.log');
	  if (logCardNodes.length === 0) {
	    loaderWait.classList.remove('d-none');
	    window.removeEventListener('scroll', onMouseScroll);
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/update_log/' + Date.now() + '/story',
	      data: 'position=' + position + '&count=' + count + '&token=' + _storage2.default.data.token,
	      callbackSuccess: onSuccessLogLoad,
	      callbackError: onErrorLogLoad
	    };
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
	    }, 500);
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
	
	    loaderFail.classList.add('d-none');
	    loader.classList.add('d-none');
	    loaderWait.classList.add('d-none');
	    loaderFinish.classList.add('d-none');
	
	    listLog.removeEventListener('click', getLog);
	    window.removeEventListener('scroll', onMouseScroll);
	  }
	};

/***/ }),
/* 15 */
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
	
	    return '\n    <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n      <div class="media">\n        <img class="mr-3 rounded-circle p-1" src="img/user-male-filled-32.png" title="' + item.ha_operator_name + '" style="background-color: #' + getIconColor + '" width="30" alt="' + item.ha_operator_name + '">\n        <img class="mr-3" src="img/' + imgName + '.png" width="30" alt="Generic placeholder image">\n        <div class="media-body">\n          <b>' + cardHeader[0] + '</b>\n          ' + cardHeader[1] + '\n          <div class="badge text-right text-muted float-right">' + new Date(+(item.ha_time + '000')).toLocaleString() + '</div>\n        </div>\n      </div>';
	  },
	  addCardToContainer: function addCardToContainer(cardMarkupItem) {
	    listLogBody.insertAdjacentHTML('beforeend', cardMarkupItem);
	  }
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _onlineProfile = __webpack_require__(17);
	
	var _onlineProfile2 = _interopRequireDefault(_onlineProfile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  start: function start() {
	    _onlineProfile2.default.setProfile();
	  },
	  stop: function stop() {
	    _onlineProfile2.default.clearProfile();
	  }
	};

/***/ }),
/* 17 */
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
	  return '\n  <div id="profile" class="card p-3 w-50 text-dark">\n    <h3>\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h3>\n    <p><span>\u0418\u043C\u044F: </span><span>' + _storage2.default.data.nickname + '</span></p>\n    <p><span>\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0445\u043E\u0434\u0430: </span><span>' + _storage2.default.data.lastLogin + '</span></p>\n    <p><span></span>\u041A\u0430\u0442\u0430\u043B\u043E\u0433: <span>' + _storage2.default.data.directory + '</span></p>\n    <p><span></span>\u041F\u043E\u0447\u0442\u0430: <span>' + _storage2.default.data.email + '</span></p>\n  </div>';
	};
	
	exports.default = {
	  setProfile: function setProfile() {
	    listProfile.innerHTML = _storage2.default.isSetFlag ? prepareProfileMarkup() : '';
	  },
	  clearProfile: function clearProfile() {
	    listProfile.innerHTML = '';
	  }
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _referenceEnterprises = __webpack_require__(19);
	
	var _referenceEnterprises2 = _interopRequireDefault(_referenceEnterprises);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listEnterprises = document.querySelector('#list-enterprises-list');
	var listEnterprisesHeader = document.querySelector('#list-enterprises-header');
	var listEnterprisesBody = document.querySelector('#list-enterprises-body');
	var listEnterprisesCard = document.querySelector('#list-enterprises-card');
	var listEnterprisesCardReturnBtn = document.querySelector('#list-enterprises-card-return-btn');
	
	var listEnterprisesCardName = document.querySelector('#list-enterprises-card-name');
	var listEnterprisesCardBalance = document.querySelector('#list-enterprises-card-balance');
	var listEnterprisesCardIsChecked = document.querySelector('#list-enterprises-card-is-checked');
	var listEnterprisesCardDate = document.querySelector('#list-enterprises-card-date');
	// const listEnterprisesCardNegativeTailings = document.querySelector('#list-enterprises-card-negative-tailings');
	// const listEnterprisesCardNegativeBalance = document.querySelector('#list-enterprises-card-negative-balance');
	var listEnterprisesCardNegativeTailingsSwitch = document.querySelector('#list-enterprises-card-negative-tailings-switch');
	var listEnterprisesCardNegativeBalanceSwitch = document.querySelector('#list-enterprises-card-negative-balance-switch');
	
	var listEnterprisesCardCheckBtn = document.querySelector('#list-enterprises-card-check-btn');
	var listEnterprisesCardDeleteBtn = document.querySelector('#list-enterprises-card-delete-btn');
	var listEnterprisesCardEditName = document.querySelector('#enterprises-card-edit-name');
	
	var onSuccessEnterprisesDelete = function onSuccessEnterprisesDelete(answer) {
	  console.log(answer);
	
	  onListEnterprisesCardReturnBtn();
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: '\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 <b>' + _storage2.default.currentEnterpriseName + '</b> \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E'
	  };
	};
	
	var setRequestToDeleteEnterprise = function setRequestToDeleteEnterprise() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessEnterprisesDelete
	  };
	};
	
	listEnterprisesCardDeleteBtn.addEventListener('click', function () {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 <b>' + _storage2.default.currentEnterpriseName + '</b>?',
	    submitCallback: setRequestToDeleteEnterprise
	  };
	});
	
	var loaderSpinnerId = 'loader-enterprises';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var onSuccessEnterprisesLoad = function onSuccessEnterprisesLoad(loadedEnterprises) {
	  console.log(loadedEnterprises);
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (loadedEnterprises.status === 200) {
	    _referenceEnterprises2.default.drawDataInContainer(loadedEnterprises.data);
	  } else {
	    _referenceEnterprises2.default.drawMarkupInContainer('<p>' + loadedEnterprises.message + '</p>');
	  }
	};
	
	var onErrorEnterprisesLoad = function onErrorEnterprisesLoad(error) {
	  console.log(error);
	};
	
	var getEnterprises = function getEnterprises() {
	  _referenceEnterprises2.default.cleanContainer();
	  _referenceEnterprises2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/1',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessEnterprisesLoad,
	    callbackError: onErrorEnterprisesLoad
	  };
	};
	
	var onSuccessNegativeTailingsSwitch = function onSuccessNegativeTailingsSwitch(loadedEnterpriseCard) {
	  console.log(loadedEnterpriseCard);
	};
	
	var onErrorNegativeTailingsSwitch = function onErrorNegativeTailingsSwitch(error) {
	  console.log(error);
	};
	
	listEnterprisesCardNegativeBalanceSwitch.addEventListener('change', function (evt) {
	
	  // enterprisesMarkup.cleanContainer();
	  // enterprisesMarkup.drawMarkupInContainer(loaderSpinnerMarkup);
	  var value = evt.target.checked ? 1 : 0;
	  // console.log(value);
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId + '/meta',
	    data: 'code=12&token=' + _storage2.default.data.token + '&value=' + value,
	    callbackSuccess: onSuccessNegativeTailingsSwitch,
	    callbackError: onErrorNegativeTailingsSwitch
	  };
	});
	
	listEnterprisesCardNegativeTailingsSwitch.addEventListener('change', function (evt) {
	
	  // enterprisesMarkup.cleanContainer();
	  // enterprisesMarkup.drawMarkupInContainer(loaderSpinnerMarkup);
	  var value = evt.target.checked ? 1 : 0;
	  // console.log(value);
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId + '/meta',
	    data: 'code=11&token=' + _storage2.default.data.token + '&value=' + value,
	    callbackSuccess: onSuccessNegativeTailingsSwitch,
	    callbackError: onErrorNegativeTailingsSwitch
	  };
	});
	
	// listEnterprisesCardNegativeBalanceSwitch
	var onSuccessEnterpriseCardLoad = function onSuccessEnterpriseCardLoad(loadedEnterpriseCard) {
	  console.log(loadedEnterpriseCard);
	
	  if (_storage2.default.data.currentBusiness === loadedEnterpriseCard.data.id) {
	    listEnterprisesCardCheckBtn.classList.add('d-none');
	    listEnterprisesCardIsChecked.classList.remove('d-none');
	  } else {
	    listEnterprisesCardCheckBtn.classList.remove('d-none');
	    listEnterprisesCardIsChecked.classList.add('d-none');
	  }
	
	  console.log(loadedEnterpriseCard.data.id);
	  _storage2.default.currentEnterpriseId = loadedEnterpriseCard.data.id;
	  _storage2.default.currentEnterpriseName = loadedEnterpriseCard.data.name;
	  listEnterprisesCardCheckBtn.addEventListener('click', function () {
	    console.log(_storage2.default.currentEnterpriseId);
	    console.log(loadedEnterpriseCard.data.id);
	    _storage2.default.currentBusiness = loadedEnterpriseCard.data.id;
	    console.log(_storage2.default.data.currentBusiness);
	    listEnterprisesCardCheckBtn.classList.add('d-none');
	    listEnterprisesCardIsChecked.classList.remove('d-none');
	  });
	
	  $('#enterprises-card-edit').on('show.bs.modal', function (e) {
	    listEnterprisesCardEditName.value = loadedEnterpriseCard.data.name;
	  });
	
	  listEnterprisesCardName.innerText = loadedEnterpriseCard.data.name;
	  listEnterprisesCardDate.innerText = new Date(+(loadedEnterpriseCard.data.time_activity + '000')).toLocaleString();
	  listEnterprisesCardBalance.innerText = loadedEnterpriseCard.data.balance;
	
	  for (var i = 0; i < loadedEnterpriseCard.data.meta.length; i++) {
	    console.log(loadedEnterpriseCard.data.meta[i].meta_code === '11' && loadedEnterpriseCard.data.meta[i].meta_value === '1');
	    if (loadedEnterpriseCard.data.meta[i].meta_code === '11' && loadedEnterpriseCard.data.meta[i].meta_value === '1') {
	      listEnterprisesCardNegativeTailingsSwitch.setAttribute('checked', 'checked');
	      // listEnterprisesCardNegativeTailingsSwitch.innerHTML = 'Выключить';
	      listEnterprisesCardNegativeTailingsSwitch.checked = true;
	      break;
	    } else {
	      listEnterprisesCardNegativeTailingsSwitch.checked = false;
	    }
	  }
	
	  for (var _i = 0; _i < loadedEnterpriseCard.data.meta.length; _i++) {
	    if (loadedEnterpriseCard.data.meta[_i].meta_code === '12' && loadedEnterpriseCard.data.meta[_i].meta_value === '1') {
	      listEnterprisesCardNegativeBalanceSwitch.setAttribute('checked', 'checked');
	      listEnterprisesCardNegativeBalanceSwitch.checked = true;
	      break;
	    } else {
	      listEnterprisesCardNegativeBalanceSwitch.checked = false;
	    }
	  }
	
	  // auth.currentEnterpriseId = loadedEnterpriseCard.data.id;
	};
	
	var onErrorEnterpriseCardLoad = function onErrorEnterpriseCardLoad(error) {
	  console.log(error);
	};
	
	var drawEnterpriseCard = function drawEnterpriseCard(enterpriseId) {
	  enterpriseId = enterpriseId || _storage2.default.currentEnterpriseId;
	  listEnterprisesHeader.classList.remove('d-flex');
	  listEnterprisesHeader.classList.add('d-none');
	  listEnterprisesBody.classList.add('d-none');
	  listEnterprisesCard.classList.remove('d-none');
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + enterpriseId + '/info',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessEnterpriseCardLoad,
	    callbackError: onErrorEnterpriseCardLoad
	  };
	};
	
	var onListEnterprisesBodyClick = function onListEnterprisesBodyClick(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.enterpriseId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	
	  drawEnterpriseCard(currentStringElement.dataset.enterpriseId);
	};
	
	var onListEnterprisesCardReturnBtn = function onListEnterprisesCardReturnBtn() {
	  listEnterprisesHeader.classList.add('d-flex');
	  listEnterprisesHeader.classList.remove('d-none');
	  listEnterprisesBody.classList.remove('d-none');
	  listEnterprisesCard.classList.add('d-none');
	  listEnterprisesCardName.innerText = '';
	  listEnterprisesCardDate.innerText = '';
	  listEnterprisesCardBalance.innerText = '';
	  getEnterprises();
	};
	
	listEnterprisesBody.addEventListener('click', onListEnterprisesBodyClick);
	listEnterprisesCardReturnBtn.addEventListener('click', onListEnterprisesCardReturnBtn);
	
	exports.default = {
	  start: function start() {
	    listEnterprises.addEventListener('click', getEnterprises);
	  },
	
	
	  redraw: getEnterprises,
	  updateCard: drawEnterpriseCard,
	
	  stop: function stop() {
	    _referenceEnterprises2.default.cleanContainer();
	    listEnterprises.removeEventListener('click', getEnterprises);
	  }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listEnterprisesBody = document.querySelector('#list-enterprises-body');
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listEnterprisesBody.innerHTML = '';
	  },
	  getElement: function getElement(item, index) {
	    var currentEnterpriseFlag = item.b_id === _storage2.default.data['currentBusiness'] ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-enterprise-id="' + item.b_id + '">\n      <div style="padding-left: 34px;"><span class="reference-row-number">' + (index + 1) + '</span> <span>' + item.b_name + '</span></div>\n      <div class="d-flex justify-content-between align-items-center">\n        ' + currentEnterpriseFlag + '\n\n        <button type="button" class="btn p-0 bg-white icon-btn icon-btn__go"></button>\n      </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(enterprisesData) {
	    var _this = this;
	
	    enterprisesData.forEach(function (item, index) {
	      return listEnterprisesBody.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	    });
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listEnterprisesBody.insertAdjacentHTML('beforeend', markup);
	  }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referenceEnterprises = __webpack_require__(18);
	
	var _referenceEnterprises2 = _interopRequireDefault(_referenceEnterprises);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddEnterprise.UrlApi;
	var messages = window.appSettings.formAddEnterprise.message;
	
	var validPattern = window.appSettings.formAddEnterprise.validPatterns;
	var validMessage = window.appSettings.formAddEnterprise.validMessage;
	
	var body = document.querySelector('body');
	var enterprisesAdd = body.querySelector('#enterprises-add');
	var form = enterprisesAdd.querySelector('#enterprises-add-form');
	
	var name = form.querySelector('#enterprise-name');
	var balance = form.querySelector('#enterprise-balance');
	var currency = form.querySelector('#enterprise-money');
	
	var spinner = form.querySelector('#enterprises-add-spinner');
	
	var buttonSubmit = form.querySelector('#enterprises-add-submit');
	var buttonCancel = form.querySelector('#enterprises-add-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  if (input.type === 'text') {
	    input.classList.add('border');
	    input.classList.add('border-danger');
	    input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	  }
	};
	
	var hideAlert = function hideAlert(input) {
	  if (input.type === 'text') {
	    input.classList.remove('border');
	    input.classList.remove('border-danger');
	    input.nextElementSibling.innerHTML = '';
	  }
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#enterprises-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referenceEnterprises2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	  hideSpinner();
	  formReset();
	  $('#enterprises-card-edit').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	  if (!validPattern.balance.test(balance.value)) {
	    valid = false;
	    showAlert(balance);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var postData = 'name=' + name.value + '&balance=' + balance.value + '&currency=' + currency.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	
	  var response = {
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#enterprises-add').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#enterprises-add').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	    buttonSubmit.disabled = false;
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referenceEnterprises = __webpack_require__(18);
	
	var _referenceEnterprises2 = _interopRequireDefault(_referenceEnterprises);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formEditEnterprise.UrlApi;
	
	var messages = window.appSettings.formEditEnterprise.messages;
	
	var validPattern = window.appSettings.formEditEnterprise.validPatterns;
	var validMessage = window.appSettings.formEditEnterprise.validMessage;
	
	var body = document.querySelector('body');
	var enterprisesCarEedit = body.querySelector('#enterprises-card-edit');
	var form = enterprisesCarEedit.querySelector('#enterprises-card-edit-form');
	
	var name = form.querySelector('#enterprises-card-edit-name');
	
	var spinner = form.querySelector('#enterprises-card-edit-spinner');
	
	var buttonSubmit = form.querySelector('#enterprises-card-edit-submit');
	var buttonCancel = form.querySelector('#enterprises-card-edit-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  input.classList.add('border');
	  input.classList.add('border-danger');
	  input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	};
	
	var hideAlert = function hideAlert(input) {
	  input.classList.remove('border');
	  input.classList.remove('border-danger');
	  input.nextElementSibling.innerHTML = '';
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#enterprises-card-edit').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referenceEnterprises2.default.updateCard();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	
	  hideSpinner();
	  formReset();
	  $('#enterprises-card-edit').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var formIsChange = function formIsChange() {
	  if (name.value !== window.appFormCurrValue.name) {
	    return true;
	  }
	  return false;
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', _storage2.default.currentEnterpriseId);
	
	  var response = {
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#enterprises-card-edit').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#enterprises-card-edit').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	
	    if (formIsChange()) {
	      buttonSubmit.disabled = false;
	    } else {
	      buttonSubmit.disabled = true;
	    }
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _referencePoints = __webpack_require__(23);
	
	var _referencePoints2 = _interopRequireDefault(_referencePoints);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loaderSpinnerId = 'loader-enterprises';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var listPoints = document.querySelector('#list-points-list');
	var listPointsBody = document.querySelector('#list-points-body');
	var pointsCheckBtn = document.querySelector('#points-check');
	var pointsEditBtn = document.querySelector('#points-edit-btn');
	var pointsEditName = document.querySelector('#points-edit-name');
	
	var enableCheckEditButtons = function enableCheckEditButtons() {
	  pointsCheckBtn.removeAttribute('disabled');
	  pointsEditBtn.removeAttribute('disabled');
	};
	
	var disableCheckEditButtons = function disableCheckEditButtons() {
	  pointsCheckBtn.setAttribute('disabled', 'disabled');
	  pointsEditBtn.setAttribute('disabled', 'disabled');
	};
	
	var onSuccessPointsLoad = function onSuccessPointsLoad(loadedPoints) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (loadedPoints.status === 200) {
	    console.log(loadedPoints);
	    _referencePoints2.default.drawDataInContainer(loadedPoints.data);
	  } else {
	    _referencePoints2.default.drawMarkupInContainer('<p>' + loadedPoints.message + '</p>');
	  }
	};
	
	var selectedString = '';
	disableCheckEditButtons();
	
	var onErrorPointsLoad = function onErrorPointsLoad(error) {
	  console.log(error);
	};
	
	listPointsBody.addEventListener('change', function (evt) {
	  console.log(evt);
	  if (selectedString) {
	    selectedString.classList.remove('bg-light');
	  }
	  selectedString = evt.target.labels[0];
	  selectedString.classList.add('bg-light');
	  _storage2.default.currentStockId = selectedString.dataset.stockId;
	  enableCheckEditButtons();
	});
	
	pointsCheckBtn.addEventListener('click', function () {
	  if (!pointsCheckBtn.hasAttribute('disabled')) {
	    _storage2.default.currentStock = selectedString.dataset.stockId;
	    disableCheckEditButtons();
	    getPoints();
	  }
	});
	
	pointsEditBtn.addEventListener('click', function () {
	  if (!pointsEditBtn.hasAttribute('disabled')) {
	    _storage2.default.currentStockId = selectedString.dataset.stockId;
	    _storage2.default.currentStockName = selectedString.dataset.stockName;
	    pointsEditName.value = selectedString.dataset.stockName;
	  }
	});
	
	var getPoints = function getPoints() {
	  disableCheckEditButtons();
	
	  _referencePoints2.default.cleanContainer();
	  _referencePoints2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessPointsLoad,
	    callbackError: onErrorPointsLoad
	  };
	};
	
	exports.default = {
	  start: function start() {
	    listPoints.addEventListener('click', getPoints);
	  },
	
	
	  redraw: getPoints,
	
	  stop: function stop() {
	    _referencePoints2.default.cleanContainer();
	    listPoints.removeEventListener('click', getPoints);
	  }
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listPointsBody = document.querySelector('#list-points-body');
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listPointsBody.innerHTML = '';
	  },
	  getElement: function getElement(item, index) {
	    // const currentStockFlag = (item.id === auth.data['currentStock']) ? '<button type="button" class="btn p-0 bg-white icon-btn icon-btn__check--green"></button>' : '';
	    var currentStockFlag = item.id === _storage2.default.data['currentStock'] ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	
	    return '\n\n    <input type="radio" id="' + item.id + '" name="contact" value="email" class="d-none">\n\n    <label style="padding-left: 34px;" for="' + item.id + '"  class="d-flex justify-content-between align-items-center reference-string" data-stock-id="' + item.id + '" data-stock-name="' + item.name + '">\n      <div><span class="reference-row-number">' + (index + 1) + '</span> ' + item.name + '</div>\n      <div class="d-flex justify-content-between align-items-center">\n        ' + currentStockFlag + '\n      </div>\n      </label>';
	  },
	  drawDataInContainer: function drawDataInContainer(enterprisesData) {
	    var _this = this;
	
	    enterprisesData.forEach(function (item, index) {
	      return listPointsBody.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	    });
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listPointsBody.insertAdjacentHTML('beforeend', markup);
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referencePoints = __webpack_require__(22);
	
	var _referencePoints2 = _interopRequireDefault(_referencePoints);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddPoint.UrlApi;
	
	var validPattern = window.appSettings.formAddPoint.validPatterns;
	var validMessage = window.appSettings.formAddPoint.validMessage;
	
	var messages = window.appSettings.formAddPoint.messages;
	
	var body = document.querySelector('body');
	var enterprisesAdd = body.querySelector('#points-add');
	var form = enterprisesAdd.querySelector('#points-add-form');
	
	var name = form.querySelector('#points-add-name');
	
	var spinner = form.querySelector('#points-add-spinner');
	
	var buttonSubmit = form.querySelector('#points-add-submit');
	var buttonCancel = form.querySelector('#points-add-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  if (input.type === 'text') {
	    input.classList.add('border');
	    input.classList.add('border-danger');
	    input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	  }
	};
	
	var hideAlert = function hideAlert(input) {
	  if (input.type === 'text') {
	    input.classList.remove('border');
	    input.classList.remove('border-danger');
	    input.nextElementSibling.innerHTML = '';
	  }
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#points-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referencePoints2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	  hideSpinner();
	  formReset();
	  $('#points-add').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  var response = {
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#points-add').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#points-add').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	    buttonSubmit.disabled = false;
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referencePoints = __webpack_require__(22);
	
	var _referencePoints2 = _interopRequireDefault(_referencePoints);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formEditPoint.UrlApi;
	
	var validPattern = window.appSettings.formEditPoint.validPatterns;
	var validMessage = window.appSettings.formEditPoint.validMessage;
	
	var messages = window.appSettings.formEditPoint.messages;
	
	var body = document.querySelector('body');
	var enterprisesAdd = body.querySelector('#points-edit');
	var form = enterprisesAdd.querySelector('#points-edit-form');
	
	var name = form.querySelector('#points-edit-name');
	
	var spinner = form.querySelector('#points-edit-spinner');
	
	var buttonSubmit = form.querySelector('#points-edit-submit');
	var buttonCancel = form.querySelector('#points-edit-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  input.classList.add('border');
	  input.classList.add('border-danger');
	  input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	};
	
	var hideAlert = function hideAlert(input) {
	  input.classList.remove('border');
	  input.classList.remove('border-danger');
	  input.nextElementSibling.innerHTML = '';
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#points-edit').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referencePoints2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	
	  hideSpinner();
	  formReset();
	  $('#points-edit').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var formIsChange = function formIsChange() {
	  if (name.value !== window.appFormCurrValue.name) {
	    return true;
	  }
	  return false;
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{stId}}', _storage2.default.currentStockId);
	
	  var response = {
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  console.dir(response);
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#points-edit').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#points-edit').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	
	    if (formIsChange()) {
	      buttonSubmit.disabled = false;
	    } else {
	      buttonSubmit.disabled = true;
	    }
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _referenceContractors = __webpack_require__(27);
	
	var _referenceContractors2 = _interopRequireDefault(_referenceContractors);
	
	var _referenceContractorsCard = __webpack_require__(28);
	
	var _referenceContractorsCard2 = _interopRequireDefault(_referenceContractorsCard);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loaderSpinnerId = 'loader-contractors';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var listBuyers = document.querySelector('#list-contractor-buyers-list');
	var listSuppliers = document.querySelector('#list-contractor-suppliers-list');
	
	var listContractorsHeaderType = document.querySelector('#list-contractors-header-type');
	var listContractorsAddBtn = document.querySelector('#contractors-add-btn');
	var listContractorsAddForm = document.querySelector('#contractors-add-form');
	var listContractorsHeader = document.querySelector('#list-contractors-header');
	var listContractorsBody = document.querySelector('#list-contractors-body');
	var listContractorsCard = document.querySelector('#list-contractors-card');
	var listContractorsCardReturnBtn = document.querySelector('#list-contractors-card-return-btn');
	var listContractorsCardName = document.querySelector('#list-contractors-card-name');
	
	var listContractorsFormEditLabel = document.querySelector('#contractors-add-label');
	var listContractorsFormEditName = document.querySelector('#contractors-name');
	var listContractorsFormEditDescribe = document.querySelector('#contractors-describe');
	var listContractorsFormEditContact = document.querySelector('#contractors-contact');
	var listContractorsFormEditPhone = document.querySelector('#contractors-phone');
	var listContractorsFormEditEmail = document.querySelector('#contractors-email');
	var listContractorsFormSubmit = document.querySelector('#contractors-add-submit');
	var listContractorsFormBill = document.querySelector('#contractors-add-bill');
	
	var contractorsData = [];
	
	var ContractorType = {
	  SUPPLIER: 1,
	  BUYER: 2
	};
	
	var showBodyHideCard = function showBodyHideCard() {
	  listContractorsBody.classList.remove('d-none');
	  listContractorsCard.classList.add('d-none');
	  listContractorsHeader.classList.add('d-flex');
	  listContractorsHeader.classList.remove('d-none');
	};
	
	var hideBodyShowCard = function hideBodyShowCard() {
	  listContractorsBody.classList.add('d-none');
	  listContractorsCard.classList.remove('d-none');
	};
	
	listContractorsAddBtn.addEventListener('click', function () {
	  listContractorsAddForm.reset();
	  _storage2.default.currentContractorOperation = 'add';
	  listContractorsFormSubmit.innerHTML = 'Создать';
	});
	
	/*
	listContractorsCardEditBtn.addEventListener('click', function () {
	  auth.currentContractorOperation = 'edit';
	  listContractorsFormSubmit.innerHTML = 'Изменить';
	});
	*/
	
	listContractorsCardReturnBtn.addEventListener('click', function () {
	  showBodyHideCard();
	  getContractors(_storage2.default.currentContractorType);
	});
	
	var onSuccessContractorsLoad = function onSuccessContractorsLoad(loadedContractors) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (loadedContractors.status === 200) {
	    console.log(loadedContractors);
	    if (loadedContractors.data.length) {
	      contractorsData = loadedContractors.data.slice(0);
	    }
	    _referenceContractorsCard2.default.cleanContainer();
	    if (loadedContractors.data) {
	      _referenceContractors2.default.drawDataInContainer(loadedContractors.data);
	    }
	    // listContractorsFormSubmit.innerHTML = 'Создать';
	    // auth.currentContractorOperation = 'add';
	  } else {
	    _referenceContractors2.default.drawMarkupInContainer('<p>' + loadedContractors.message + '</p>');
	  }
	};
	
	var onErrorContractorsLoad = function onErrorContractorsLoad(error) {
	  console.log(error);
	};
	
	var onSuccessBuyerCardLoad = function onSuccessBuyerCardLoad(loadedBuyerCard) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (loadedBuyerCard.status === 200) {
	    console.log(loadedBuyerCard);
	    _referenceContractorsCard2.default.cleanContainer();
	    _referenceContractorsCard2.default.drawDataInContainer(loadedBuyerCard.data);
	    // auth.currentContractorOperation = 'edit';
	    // listContractorsFormSubmit.innerHTML = 'Изменить';
	  } else {
	    _referenceContractorsCard2.default.drawMarkupInContainer('<p>' + loadedBuyerCard.message + '</p>');
	  }
	};
	
	var onErrorBuyerCardLoad = function onErrorBuyerCardLoad(error) {
	  console.log(error);
	};
	
	var onListContractorsBodyClick = function onListContractorsBodyClick(evt) {
	  var currentStringElement = evt.target;
	
	  while (!currentStringElement.dataset.buyerId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	
	  var _contractorsData$curr = contractorsData[currentStringElement.dataset.index],
	      id = _contractorsData$curr.id,
	      name = _contractorsData$curr.name,
	      description = _contractorsData$curr.description,
	      phone = _contractorsData$curr.phone,
	      fio = _contractorsData$curr.fio,
	      email = _contractorsData$curr.email;
	
	
	  $('#contractors-add').modal('show');
	
	  _storage2.default.currentContractorId = id;
	
	  listContractorsFormEditName.value = name ? name : '';
	  listContractorsFormEditDescribe.value = description ? description : '';
	  listContractorsFormEditContact.value = fio ? fio : '';
	  listContractorsFormEditPhone.value = phone ? phone : '';
	  listContractorsFormEditEmail.value = email ? email : '';
	  listContractorsFormSubmit.innerHTML = 'Изменить';
	  _storage2.default.currentContractorOperation = 'edit';
	
	  listContractorsFormBill.classList.remove('d-none');
	
	  console.log(_storage2.default.currentContractorId);
	  console.log(_storage2.default.currentContractorOperation);
	  console.log(contractorsData);
	
	  var onListContractorsFormBillClick = function onListContractorsFormBillClick() {
	    hideBodyShowCard();
	    listContractorsCardName.innerHTML = name;
	    listContractorsHeader.classList.remove('d-flex');
	    listContractorsHeader.classList.add('d-none');
	
	    _referenceContractorsCard2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/kontr_agent/' + currentStringElement.dataset.buyerId + '/last_naklads',
	      data: 'token=' + _storage2.default.data.token + '&count_doc=4&shift_doc=0',
	      callbackSuccess: onSuccessBuyerCardLoad,
	      callbackError: onErrorBuyerCardLoad
	    };
	    listContractorsFormBill.removeEventListener('click', onListContractorsFormBillClick);
	  };
	
	  listContractorsFormBill.addEventListener('click', onListContractorsFormBillClick);
	};
	
	listContractorsBody.addEventListener('click', onListContractorsBodyClick);
	
	var getContractors = function getContractors(type) {
	  showBodyHideCard();
	  console.log('hi');
	  console.log(type);
	  console.log(_storage2.default.currentContractorType);
	  type = type || _storage2.default.currentContractorType;
	  console.log(type);
	
	  listContractorsHeaderType.innerHTML = Number(type) === ContractorType.SUPPLIER ? _referenceContractors2.default.getSuppliersHeader() : _referenceContractors2.default.getBuyersHeader();
	  listContractorsFormEditLabel.innerHTML = Number(type) === ContractorType.SUPPLIER ? 'Поставщики' : 'Покупатели';
	  _storage2.default.currentContractorType = type;
	
	  _referenceContractors2.default.cleanContainer();
	  _referenceContractors2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/kontr_agent',
	    data: 'view_last=0&token=' + _storage2.default.data.token + '&type=' + type,
	    callbackSuccess: onSuccessContractorsLoad,
	    callbackError: onErrorContractorsLoad
	  };
	};
	
	$('#contractors-add').on('hidden.bs.modal', function (e) {
	  listContractorsFormBill.classList.add('d-none');
	});
	$('#contractors-add').on('show.bs.modal', function (e) {
	  listContractorsFormSubmit.innerHTML = _storage2.default.currentContractorOperation === 'edit' ? 'Изменить' : 'Создать';
	  console.log(_storage2.default.currentContractorId);
	  console.log(_storage2.default.currentContractorOperation);
	});
	
	exports.default = {
	  start: function start() {
	    listBuyers.addEventListener('click', getContractors.bind(null, ContractorType.BUYER));
	    listSuppliers.addEventListener('click', getContractors.bind(null, ContractorType.SUPPLIER));
	  },
	
	
	  redraw: getContractors,
	
	  stop: function stop() {
	    _referenceContractors2.default.cleanContainer();
	    listBuyers.removeEventListener('click', getContractors);
	    listSuppliers.addEventListener('click', getContractors);
	  }
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var listContractorsBody = document.querySelector('#list-contractors-body');
	
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listContractorsBody.innerHTML = '';
	  },
	  getElement: function getElement(item, index) {
	
	    return '\n\n      <div class="d-flex justify-content-between align-items-center reference-string"  data-buyer-id="' + item.id + '"  data-index="' + index + '">\n        <div style="padding-left: 34px;"><span class="reference-row-number">' + (index + 1) + '</span> <span>' + item.name + '</span></div>\n        <div class="d-flex justify-content-between align-items-center">\n\n          <button type="button" class="btn p-0 bg-white icon-btn icon-btn__go"></button>\n        </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(buyersBodyData) {
	    var _this = this;
	
	    buyersBodyData.forEach(function (item, index) {
	      return listContractorsBody.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	    });
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listContractorsBody.insertAdjacentHTML('beforeend', markup);
	  },
	  getBuyersHeader: function getBuyersHeader() {
	    return '\n        <img src="img/buyers.png" alt="">\n        <h2>\u041F\u041E\u041A\u0423\u041F\u0410\u0422\u0415\u041B\u0418</h2>';
	  },
	  getSuppliersHeader: function getSuppliersHeader() {
	    return '\n        <img src="img/suppliers.png" alt="">\n        <h2>\u041F\u041E\u0421\u0422\u0410\u0412\u0429\u0418\u041A\u0418</h2>';
	  }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var listContractorsCardBody = document.querySelector('#list-contractors-card-body');
	// import auth from '../tools/storage.js';
	
	/*
	const drawHeaderInContainer = (data) => {
	  return `
	    <div class="d-flex justify-content-between">
	      <div class="border">${data.name}</div>
	      <div class="border">${data.phone}</div>
	      <div class="border">${data.email}</div>
	    </div>
	    <div class="d-flex border">${data.description}</div>
	  `;
	};
	*/
	/*
	const drawHeaderInContainer = (data) => {
	  return `
	    <div class="d-flex justify-content-between">
	      <div class="border">${auth.currentContractorName}</div>
	    </div>
	  `;
	};
	*/
	
	var BillTypes = {
	  'type0': 'suppliers',
	  'type1': 'admission',
	  'type2': 'buyers',
	  'type3': 'sale',
	  'type8': 'ic_my_production'
	};
	
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listContractorsCardBody.innerHTML = '';
	  },
	  getElement: function getElement(item) {
	    // const currentStockFlag = (item.id === auth.data['currentStock']) ? 'V' : '';
	
	    return '\n    <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n      <div class="media">\n        <img class="mr-3" src="img/' + BillTypes['type' + item.type] + '.png" width="30" alt="Generic placeholder image">\n        <div class="media-body">\n          <b>ID: </b>' + item.id + '\n          <b> \u0421\u0442\u0430\u0442\u0443\u0441: </b>' + item.status + '\n          <b> \u0412\u0440\u0435\u043C\u044F: </b>' + new Date(+(item.time_activity + '000')).toLocaleString() + '\n          <b> \u0412\u0441\u0435\u0433\u043E: </b>' + item.total + '\n          <b> \u0422\u0438\u043F: </b>' + item.type + '\n        </div>\n      </div>';
	    /*
	        return `
	            <div class="border">
	              <b>ID: </b>${item.id}
	              <b> Статус: </b>${item.status}
	              <b> Время: </b>${new Date(+(item.time_activity + '000')).toLocaleString()}
	              <b> Всего: </b>${item.total}
	              <b> Тип: </b>${item.type}
	            </div>
	    `;*/
	  },
	  drawDataInContainer: function drawDataInContainer(buyersCardData) {
	    var _this = this;
	
	    console.log(buyersCardData);
	    // listContractorsCardBody.insertAdjacentHTML('beforeend', drawHeaderInContainer(buyersCardData));
	    if (buyersCardData) {
	      buyersCardData.forEach(function (item) {
	        return listContractorsCardBody.insertAdjacentHTML('beforeend', _this.getElement(item));
	      });
	    } else {
	      listContractorsCardBody.insertAdjacentHTML('beforeend', '<p class="border">Накладных нет</p>');
	    }
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listContractorsCardBody.insertAdjacentHTML('beforeend', markup);
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _referenceContractors = __webpack_require__(26);
	
	var _referenceContractors2 = _interopRequireDefault(_referenceContractors);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddContractor.UrlApi;
	var validPattern = window.appSettings.formAddContractor.validPatterns;
	var validMessage = window.appSettings.formAddContractor.validMessage;
	var messages = window.appSettings.formAddContractor.messages;
	
	var body = document.querySelector('body');
	var contractorsAdd = body.querySelector('#contractors-add');
	var form = contractorsAdd.querySelector('#contractors-add-form');
	
	var name = form.querySelector('#contractors-name');
	var describe = form.querySelector('#contractors-describe');
	var contact = form.querySelector('#contractors-contact');
	var phone = form.querySelector('#contractors-phone');
	var email = form.querySelector('#contractors-email');
	
	var spinner = form.querySelector('#contractors-add-spinner');
	
	var buttonSubmit = form.querySelector('#contractors-add-submit');
	var buttonCancel = form.querySelector('#contractors-add-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  input.classList.add('border');
	  input.classList.add('border-danger');
	  input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	};
	
	var hideAlert = function hideAlert(input) {
	  input.classList.remove('border');
	  input.classList.remove('border-danger');
	  input.nextElementSibling.innerHTML = '';
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	  hideAlert(describe);
	  hideAlert(contact);
	  hideAlert(phone);
	  hideAlert(email);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  console.dir(response);
	
	  hideSpinner();
	  formReset();
	  $('#contractors-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referenceContractors2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	
	  hideSpinner();
	  formReset();
	  $('#enterprises-card-edit').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	  if (!validPattern.describe.test(describe.value)) {
	    valid = false;
	    showAlert(describe);
	  }
	  if (!validPattern.contact.test(contact.value)) {
	    valid = false;
	    showAlert(contact);
	  }
	  if (!validPattern.phone.test(phone.value)) {
	    valid = false;
	    showAlert(phone);
	  }
	  if (!validPattern.email.test(email.value)) {
	    valid = false;
	    showAlert(email);
	  }
	
	  return valid;
	};
	
	var formIsChange = function formIsChange() {
	  if (name.value !== window.appFormCurrValue.name) {
	    return true;
	  }
	  if (describe.value !== window.appFormCurrValue.describe) {
	    return true;
	  }
	  if (contact.value !== window.appFormCurrValue.contact) {
	    return true;
	  }
	  if (phone.value !== window.appFormCurrValue.phone) {
	    return true;
	  }
	  if (email.value !== window.appFormCurrValue.email) {
	    return true;
	  }
	  return false;
	};
	
	var getUrl = function getUrl() {
	  var url = '';
	
	  switch (_storage2.default.currentContractorOperation) {
	    case 'add':
	      url = appUrl.add.replace('{{dir}}', stor.directory);
	      url = url.replace('{{oper}}', stor.operatorId);
	      url = url.replace('{{busId}}', stor.currentBusiness);
	      break;
	    case 'edit':
	      url = appUrl.edit.replace('{{dir}}', stor.directory);
	      url = url.replace('{{oper}}', stor.operatorId);
	      url = url.replace('{{busId}}', stor.currentBusiness);
	      url = url.replace('{{agentId}}', _storage2.default.currentContractorId);
	      break;
	  }
	  return url;
	};
	
	var submitForm = function submitForm() {
	  var appLink = getUrl();
	
	  var postData = 'token=' + stor.token + '&type=' + _storage2.default.currentContractorType + '&name=' + name.value + '&email=' + email.value + '&description=' + describe.value + '&phone=' + phone.value + '&FIO=' + contact.value;
	
	  var response = {
	    url: appLink,
	    metod: _storage2.default.currentContractorOperation === 'add' ? 'POST' : 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  console.log('response:');
	  console.dir(response);
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#contractors-add').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#contractors-add').on('shown.bs.modal', function () {
	
	    if (_storage2.default.currentContractorOperation === 'edit') {
	      window.appFormCurrValue = {
	        'name': name.value,
	        'describe': describe.value,
	        'contact': contact.value,
	        'phone': phone.value,
	        'email': email.value
	      };
	    }
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	
	    if (_storage2.default.currentContractorOperation === 'edit') {
	      if (formIsChange()) {
	        buttonSubmit.disabled = false;
	      } else {
	        buttonSubmit.disabled = true;
	      }
	    } else {
	      buttonSubmit.disabled = false;
	    }
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _universalKeywords = __webpack_require__(31);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listKeywords = document.querySelector('#list-keywords-list');
	var listKeywordsReturnBtn = document.querySelector('#list-keywords-card-return-btn');
	var listKeywordsCardEditRGBForm = document.querySelector('#keywords-card-edit-rgb-form');
	var listKeywordsCardDeleteBtn = document.querySelector('#list-keywords-card-delete-btn');
	var listKeywordsCardEditBtn = document.querySelector('#list-keywords-card-edit-btn');
	var listKeywordsCardEditName = document.querySelector('#keywords-card-edit-name');
	
	// здесь был дубль в модуле с разметкой
	var listKeywordsHeader = document.querySelector('#list-keywords-header');
	var listKeywordsBody = document.querySelector('#list-keywords-body');
	var listKeywordsCard = document.querySelector('#list-keywords-card');
	var listKeywordsCardEdit = document.querySelector('#list-keywords-card-edit');
	
	// функция прячет страницу "справочники -> ключевые слова"
	var hideReferenceKeywordsMain = function hideReferenceKeywordsMain() {
	  listKeywordsHeader.classList.add('d-none');
	  listKeywordsHeader.classList.remove('d-flex');
	  listKeywordsBody.classList.add('d-none');
	};
	// функция показывает страницу "справочники -> ключевые слова"
	var showReferenceKeywordsMain = function showReferenceKeywordsMain() {
	  listKeywordsHeader.classList.remove('d-none');
	  listKeywordsHeader.classList.add('d-flex');
	  listKeywordsBody.classList.remove('d-none');
	};
	
	// функция показывает карточку редактирования ключевого слова
	var showEditKeywordCard = function showEditKeywordCard() {
	  listKeywordsCardEdit.innerHTML = '';
	  listKeywordsCard.classList.remove('d-none');
	  _universalKeywords2.default.getDataAndDraw(listKeywordsCardEdit, null, { color: _storage2.default.currentKeywordRgb, name: _storage2.default.currentKeywordName });
	};
	
	// обработчик
	var onKeywordClick = function onKeywordClick(evt) {
	  var clickedKeywordNode = evt.target;
	  _storage2.default.currentKeywordId = clickedKeywordNode.dataset.keywordId;
	  _storage2.default.currentKeywordName = clickedKeywordNode.innerText.slice(1);
	  _storage2.default.currentKeywordRgb = clickedKeywordNode.dataset.keywordRgb;
	  hideReferenceKeywordsMain();
	  showEditKeywordCard();
	};
	
	// ================== удаление ключевго слова ============================
	var onSuccessKeywordDelete = function onSuccessKeywordDelete() {
	  getKeywords();
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: '\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E <b>' + _storage2.default.currentKeywordName + '</b> \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E'
	  };
	};
	
	var setRequestToDeleteKeyword = function setRequestToDeleteKeyword() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/tag/' + _storage2.default.currentKeywordId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessKeywordDelete
	  };
	};
	
	listKeywordsCardDeleteBtn.addEventListener('click', function () {
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E <b>' + _storage2.default.currentKeywordName + '</b>?',
	    submitCallback: setRequestToDeleteKeyword
	  };
	});
	
	// ================== редактирование ключевго слова ============================
	listKeywordsCardEditBtn.addEventListener('click', function () {
	  listKeywordsCardEditName.value = _storage2.default.currentKeywordName;
	});
	
	var onListKeywordsCardEditRGBFormSubmit = function onListKeywordsCardEditRGBFormSubmit(evt) {
	  evt.preventDefault();
	  var newRGB = listKeywordsCardEditRGBForm.querySelector('input:checked').value;
	  _storage2.default.currentKeywordRgb = newRGB;
	  document.querySelector('#list-keywords-card-edit > h3').style.backgroundColor = '#' + _storage2.default.currentKeywordRgb;
	  $('#keywords-card-edit-rgb').modal('hide');
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/tag/' + _storage2.default.currentKeywordId,
	    data: 'color=' + _storage2.default.currentKeywordRgb + '&token=' + _storage2.default.data.token,
	    callbackSuccess: showEditKeywordCard
	  };
	};
	
	listKeywordsCardEditRGBForm.addEventListener('submit', onListKeywordsCardEditRGBFormSubmit);
	listKeywordsReturnBtn.addEventListener('click', getKeywords);
	
	var getKeywords = function getKeywords() {
	  _universalKeywords2.default.downloadAndDraw(listKeywordsBody, onKeywordClick);
	  showReferenceKeywordsMain();
	
	  listKeywordsCard.classList.add('d-none');
	  listKeywordsReturnBtn.addEventListener('click', getKeywords);
	};
	
	// функция для перехода из других модулей, меняет обработчик возврата
	var showKeywordEdit = function showKeywordEdit(evt, handler) {
	  onKeywordClick(evt);
	  listKeywordsReturnBtn.removeEventListener('click', getKeywords);
	  listKeywordsReturnBtn.addEventListener('click', handler);
	};
	
	exports.default = {
	  start: function start() {
	    listKeywords.addEventListener('click', getKeywords);
	  },
	
	
	  redraw: showEditKeywordCard,
	  update: getKeywords,
	  showKeywordEdit: showKeywordEdit,
	
	  stop: function stop() {
	    listKeywordsBody.innerHTML = '';
	    listKeywords.removeEventListener('click', getKeywords);
	  }
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Вызываем спиннер
	var loaderSpinnerId = 'loader-goods';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	// контейнер для отрисовки
	var container = null;
	
	// обработчик клика по клюслову
	var keywordHandler = null;
	
	// модификатор отображения при отрисовке ключевого слова
	var keywordModificator = null;
	
	// установка прозрачности
	var setKeywordModificator = function setKeywordModificator(keywordId, keywordNode) {
	  if (keywordModificator) {
	    keywordModificator(keywordId, keywordNode);
	  }
	};
	
	// УНИФИЦИРОВАННАЯ ОТРИСОВКА КЛЮЧЕВОГО СЛОВА
	var getKeywordMarkup = function getKeywordMarkup(keyword) {
	  return '<h3 class="keyword" style="background-color: #' + keyword.color + ';"; data-keyword-Id=' + keyword.id + ' data-keyword-rgb=' + keyword.color + '>#' + keyword.name + '</h3>';
	};
	
	// принимает необязательный параметр handler на тот случай, когда массив не загружается обычным способом (например, ключевые слова, ассоциированные с товаром)
	var drawKeywordsToContainerExternalData = function drawKeywordsToContainerExternalData(containerToDraw, handler, keyword) {
	  containerToDraw.insertAdjacentHTML('beforeend', getKeywordMarkup(keyword));
	  containerToDraw.lastChild.addEventListener('click', handler);
	};
	
	// принимает необязательный параметр handler на тот случай, когда массив не загружается обычным способом (например, ключевые слова, ассоциированные с товаром)
	var drawKeywordsToContainer = function drawKeywordsToContainer(keyword) {
	  console.log(keyword);
	  container.insertAdjacentHTML('beforeend', getKeywordMarkup(keyword));
	  setKeywordModificator(keyword.id, container.lastChild);
	  container.lastChild.addEventListener('click', keywordHandler);
	};
	
	// обработка успеха загрузки клюслов для ситуации с тегами товаров
	var onSuccessKeywordsLoad = function onSuccessKeywordsLoad(loadedKeywords) {
	
	  document.querySelector('#' + loaderSpinnerId).remove();
	
	  if (loadedKeywords.status === 200 && loadedKeywords.data) {
	    loadedKeywords.data.forEach(function (keyword) {
	      return drawKeywordsToContainer(keyword);
	    });
	  } else if (loadedKeywords.status === 200 && !loadedKeywords.data) {
	    container.innerHTML = '<p>' + (loadedKeywords.message || 'Что-то в поле message пусто и в data лежит false') + '</p>';
	  }
	};
	
	var getKeywords = function getKeywords(containerToDraw, handler, modificator) {
	
	  container = containerToDraw;
	  keywordHandler = handler;
	  keywordModificator = modificator;
	  container.innerHTML = loaderSpinnerMarkup;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/tag',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessKeywordsLoad
	  };
	};
	
	exports.default = {
	  downloadAndDraw: getKeywords,
	  getDataAndDraw: drawKeywordsToContainerExternalData
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referenceKeywords = __webpack_require__(30);
	
	var _referenceKeywords2 = _interopRequireDefault(_referenceKeywords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddKeywords.UrlApi;
	var validPattern = window.appSettings.formAddKeywords.validPatterns;
	var validMessage = window.appSettings.formAddKeywords.validMessage;
	var messages = window.appSettings.formAddKeywords.messages;
	
	var body = document.querySelector('body');
	var enterprisesAdd = body.querySelector('#keywords-add');
	var form = enterprisesAdd.querySelector('#keywords-add-form');
	
	var name = form.querySelector('#keywords-add-name');
	
	var spinner = form.querySelector('#keywords-add-spinner');
	
	var buttonSubmit = form.querySelector('#keywords-add-submit');
	var buttonCancel = form.querySelector('#keywords-add-cancel');
	
	// const stor = dataStorage.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  if (input.type === 'text') {
	    input.classList.add('border');
	    input.classList.add('border-danger');
	    input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	  }
	};
	
	var hideAlert = function hideAlert(input) {
	  if (input.type === 'text') {
	    input.classList.remove('border');
	    input.classList.remove('border-danger');
	    input.nextElementSibling.innerHTML = '';
	  }
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#keywords-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referenceKeywords2.default.update();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	
	  hideSpinner();
	  formReset();
	  $('#keywords-add').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  /*
	  let postData = `name=${name.value}&token=${stor.token}`;
	  let urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  console.log(stor);
	  console.log(dataStorage.data);
	  console.log(stor.currentBusiness);
	  console.log(urlApp);
	  */
	  var _dataStorage$data = _storage2.default.data,
	      token = _dataStorage$data.token,
	      directory = _dataStorage$data.directory,
	      operatorId = _dataStorage$data.operatorId,
	      currentBusiness = _dataStorage$data.currentBusiness;
	
	  var postData = 'name=' + name.value + '&token=' + token;
	  var urlApp = appUrl.replace('{{dir}}', directory);
	  urlApp = urlApp.replace('{{oper}}', operatorId);
	  urlApp = urlApp.replace('{{busId}}', currentBusiness);
	
	  var response = {
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#keywords-add').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#keywords-add').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	    buttonSubmit.disabled = false;
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _referenceKeywords = __webpack_require__(30);
	
	var _referenceKeywords2 = _interopRequireDefault(_referenceKeywords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formEditKeywords.UrlApi;
	
	var messages = window.appSettings.formEditKeywords.messages;
	
	var validPattern = window.appSettings.formEditKeywords.validPatterns;
	var validMessage = window.appSettings.formEditKeywords.validMessage;
	
	var body = document.querySelector('body');
	var enterprisesCarEedit = body.querySelector('#keywords-card-edit');
	var form = enterprisesCarEedit.querySelector('#keywords-card-edit-form');
	
	var name = form.querySelector('#keywords-card-edit-name');
	
	var spinner = form.querySelector('#keywords-card-edit-spinner');
	
	var buttonSubmit = form.querySelector('#keywords-card-edit-submit');
	var buttonCancel = form.querySelector('#keywords-card-edit-cancel');
	
	var stor = _storage2.default.data;
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  input.classList.add('border');
	  input.classList.add('border-danger');
	  input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	};
	
	var hideAlert = function hideAlert(input) {
	  input.classList.remove('border');
	  input.classList.remove('border-danger');
	  input.nextElementSibling.innerHTML = '';
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  console.dir(response);
	  _storage2.default.currentKeywordName = name.value;
	  hideSpinner();
	  formReset();
	  $('#keywords-card-edit').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _referenceKeywords2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	
	  hideSpinner();
	  formReset();
	  $('#keywords-card-edit').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var formIsChange = function formIsChange() {
	  if (name.value !== window.appFormCurrValue.name) {
	    return true;
	  }
	  return false;
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{tagId}}', _storage2.default.currentKeywordId);
	
	  var response = {
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  console.dir(response);
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#keywords-card-edit').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#keywords-card-edit').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	
	    if (formIsChange()) {
	      buttonSubmit.disabled = false;
	    } else {
	      buttonSubmit.disabled = true;
	    }
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalogGroups = __webpack_require__(35);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroupsDelete = __webpack_require__(36);
	
	var _catalogGroupsDelete2 = _interopRequireDefault(_catalogGroupsDelete);
	
	var _catalogGroupsEdit = __webpack_require__(37);
	
	var _catalogGroupsEdit2 = _interopRequireDefault(_catalogGroupsEdit);
	
	var _catalogGroupsGoods = __webpack_require__(38);
	
	var _catalogGroupsGoods2 = _interopRequireDefault(_catalogGroupsGoods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listGroups = document.querySelector('#list-groups-list');
	var listGroupsCardAddBtn = document.querySelector('#list-groups-card-add-btn');
	var listGroupsCardDeleteBtn = document.querySelector('#list-groups-card-delete-btn');
	var listGroupsCardEditBtn = document.querySelector('#list-groups-card-edit-btn');
	var listGroupGoodsAddModal = document.querySelector('#group-goods-add');
	var listGroupGoodsAddModalName = document.querySelector('#group-goods-name');
	var listGroupGoodsAddModalDescribe = document.querySelector('#group-goods-describe');
	var listGroupGoodsAddModalPurchase = document.querySelector('#group-goods-price-purchase');
	var listGroupGoodsAddModalExtra = document.querySelector('#group-goods-price-extra');
	var listGroupGoodsAddModalSell = document.querySelector('#group-goods-price-sell');
	var listGroupGoodsAddModalBarcode = document.querySelector('#group-goods-barcode');
	var listGroupGoodsCardCopyBtn = document.querySelector('#group-goods-copy-btn');
	var listGroupsCard = document.querySelector('#list-groups-card');
	var listGroupsCardBody = document.querySelector('#list-groups-card-body');
	var listGroupsCardCheckMessage = document.querySelector('#list-groups-header-check-message');
	var listGroupsGoodsCardCheckMessage = document.querySelector('#list-groups-goods-header-check-message');
	var groupGoodsCard = document.querySelector('#group-goods-card');
	var groupGoodsReturnBtn = document.querySelector('#group-goods-return-btn');
	var groupGoodsViewBtn = document.querySelector('#group-goods-view-btn');
	var groupGoodsAddSubmitBtn = document.querySelector('#group-goods-add-submit');
	var groupGoodsAddLabel = document.querySelector('#group-goods-add-label');
	var groupName = document.querySelector('#group-name');
	
	var goodsSortModal = document.querySelector('#group-goods-sort');
	var goodsSortAbcUpBtn = document.querySelector('#group-goods-sort-abc-up');
	var goodsSortAbcDownBtn = document.querySelector('#group-goods-sort-abc-down');
	var goodsSortTailingsUpBtn = document.querySelector('#group-goods-sort-tailings-up');
	var goodsSortTailingsDownBtn = document.querySelector('#group-goods-sort-tailings-down');
	var groupGoodsCardBody = document.querySelector('#group-goods-card-body');
	
	var SELECT_DELAY = 2000;
	
	var loaderSpinnerId = 'loader-groups';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	var loadedData = [];
	var loadedGoods = [];
	var currentGroupName = '';
	
	// поиск по группам
	var listGroupSearchInput = document.querySelector('#list-groups-search-input');
	listGroupSearchInput.addEventListener('input', function (evt) {
	  var selectedData = [];
	  loadedData.data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(listGroupSearchInput.value.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  _catalogGroups2.default.cleanContainer();
	  _catalogGroups2.default.drawDataInContainer(selectedData);
	});
	
	// поиск по товарам
	var goodsCardSearch = document.querySelector('#list-groups-goods-search-input');
	goodsCardSearch.addEventListener('input', function (evt) {
	  var loadedGoodsBackup = loadedGoods.data.slice(0);
	  var selectedData = [];
	  loadedGoods.data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(goodsCardSearch.value.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  loadedGoods.data = selectedData;
	  drawGoods();
	  loadedGoods.data = loadedGoodsBackup;
	});
	
	// обработчики кликов редактирования/удаления
	var onEditDeleteClick = function onEditDeleteClick(evt) {
	  var currentHandler = evt.target === listGroupsCardEditBtn ? _catalogGroupsEdit2.default.handler : _catalogGroupsDelete2.default.handler;
	
	  listGroupsCardCheckMessage.innerHTML = 'Выберите группу';
	  listGroupsCardBody.removeEventListener('click', onListGroupsCardBodyClick);
	  listGroupsCardBody.addEventListener('click', currentHandler);
	
	  window.setTimeout(function () {
	    listGroupsCardCheckMessage.innerHTML = '';
	    listGroupsCardBody.addEventListener('click', onListGroupsCardBodyClick);
	    listGroupsCardBody.removeEventListener('click', currentHandler);
	  }, SELECT_DELAY);
	};
	listGroupsCardEditBtn.addEventListener('click', onEditDeleteClick);
	listGroupsCardDeleteBtn.addEventListener('click', onEditDeleteClick);
	
	// РАБОТА С ТОВАРАМИ
	
	// заполнение карточки копирования товара
	var fillCopyCard = function fillCopyCard(loadedGoodData) {
	  var _loadedGoodData$data = loadedGoodData.data,
	      name = _loadedGoodData$data.name,
	      description = _loadedGoodData$data.description,
	      barcode = _loadedGoodData$data.barcode,
	      purchasePrice = _loadedGoodData$data.purchase_price,
	      sellingPrice = _loadedGoodData$data.selling_price;
	
	  purchasePrice = Number(purchasePrice).toFixed(2);
	  sellingPrice = Number(sellingPrice).toFixed(2);
	  listGroupGoodsAddModalName.value = name;
	  listGroupGoodsAddModalDescribe.value = description;
	  listGroupGoodsAddModalPurchase.value = +purchasePrice;
	  listGroupGoodsAddModalSell.value = +sellingPrice;
	  listGroupGoodsAddModalExtra.value = ((+sellingPrice - +purchasePrice) / (+purchasePrice / 100)).toFixed(2);
	  listGroupGoodsAddModalBarcode.value = barcode;
	};
	
	var onListGroupGoodsCardCopy = function onListGroupGoodsCardCopy(evt) {
	  $(listGroupGoodsAddModal).modal('show');
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.goodId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	  _storage2.default.currentGoodId = currentStringElement.dataset.goodId;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good/' + _storage2.default.currentGoodId + '/card_info',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: fillCopyCard
	  };
	};
	
	var onListGroupGoodsCardCopyBtn = function onListGroupGoodsCardCopyBtn(evt) {
	
	  listGroupsGoodsCardCheckMessage.innerHTML = 'Выберите товар';
	  groupGoodsAddSubmitBtn.innerHTML = 'Скопировать';
	  groupGoodsAddLabel.innerHTML = 'Копирование товара';
	  groupGoodsCardBody.removeEventListener('click', onGroupGoodsCardBodyClick);
	  groupGoodsCardBody.addEventListener('click', onListGroupGoodsCardCopy);
	  window.setTimeout(function () {
	    listGroupsGoodsCardCheckMessage.innerHTML = '';
	    groupGoodsCardBody.addEventListener('click', onGroupGoodsCardBodyClick);
	    groupGoodsCardBody.removeEventListener('click', onListGroupGoodsCardCopy);
	  }, SELECT_DELAY);
	};
	
	listGroupsCardAddBtn.addEventListener('click', function () {
	  groupGoodsAddSubmitBtn.innerHTML = 'Создание';
	  groupGoodsAddLabel.innerHTML = 'Создание товара';
	});
	
	listGroupGoodsCardCopyBtn.addEventListener('click', onListGroupGoodsCardCopyBtn);
	
	// отрисовка товаров (данные через замыкание)
	var drawGoods = function drawGoods() {
	  if (_storage2.default.goodsViewMode === 'string') {
	    _catalogGroups2.default.drawGoodsTable(loadedGoods.data);
	    groupGoodsViewBtn.classList.remove('icon-btn__view-tiles');
	  } else if (_storage2.default.goodsViewMode === 'metro') {
	    _catalogGroups2.default.drawGoodsMetro(loadedGoods.data);
	    groupGoodsViewBtn.classList.add('icon-btn__view-tiles');
	  }
	};
	
	// переключение режимов отрисовки товаров
	var onGroupGoodsViewBtnClick = function onGroupGoodsViewBtnClick() {
	  if (_storage2.default.goodsViewMode === 'string') {
	    _catalogGroups2.default.drawGoodsMetro(loadedGoods.data);
	    _storage2.default.goodsViewMode = 'metro';
	    groupGoodsViewBtn.classList.add('icon-btn__view-tiles');
	  } else if (_storage2.default.goodsViewMode === 'metro') {
	    _catalogGroups2.default.drawGoodsTable(loadedGoods.data);
	    _storage2.default.goodsViewMode = 'string';
	    groupGoodsViewBtn.classList.remove('icon-btn__view-tiles');
	  }
	};
	groupGoodsViewBtn.addEventListener('click', onGroupGoodsViewBtnClick);
	
	var onSuccessGroupGood = function onSuccessGroupGood(goodsData) {
	  loadedGoods = goodsData;
	  if (_storage2.default.goodsSortMode && loadedGoods.data) {
	    goodsSortMode[_storage2.default.goodsSortMode]();
	  }
	  _storage2.default.goodsViewMode = _storage2.default.goodsViewMode === 'null' ? 'string' : _storage2.default.goodsViewMode;
	  drawGoods();
	};
	
	var onListGroupsCardBodyClick = function onListGroupsCardBodyClick(evt) {
	  groupGoodsCard.classList.remove('d-none');
	  listGroupsCard.classList.add('d-none');
	
	  if (evt) {
	    var currentStringElement = evt.target;
	    while (!currentStringElement.dataset.groupId) {
	      currentStringElement = currentStringElement.parentNode;
	    }
	
	    currentGroupName = loadedData.data[currentStringElement.dataset.groupIndex].name;
	    groupName.innerHTML = currentGroupName;
	
	    _storage2.default.currentGroupId = currentStringElement.dataset.groupId;
	    _storage2.default.currentGroupName = currentGroupName;
	  }
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupGood
	  };
	};
	
	var onGroupGoodsReturnBtnClick = function onGroupGoodsReturnBtnClick() {
	  groupGoodsCard.classList.add('d-none');
	  listGroupsCard.classList.remove('d-none');
	};
	
	listGroupsCardBody.addEventListener('click', onListGroupsCardBodyClick);
	groupGoodsReturnBtn.addEventListener('click', onGroupGoodsReturnBtnClick);
	
	// сортировка товаров
	var onGoodsSortAbcUpBtn = function onGoodsSortAbcUpBtn() {
	  loadedGoods.data.sort(function (a, b) {
	    return a.name > b.name ? 1 : -1;
	  });
	  drawGoods();
	  $(goodsSortModal).modal('hide');
	  _storage2.default.goodsSortMode = 'abcUp';
	};
	
	var onGoodsSortAbcDownBtn = function onGoodsSortAbcDownBtn() {
	  loadedGoods.data.sort(function (a, b) {
	    return b.name > a.name ? 1 : -1;
	  });
	  drawGoods();
	  $(goodsSortModal).modal('hide');
	  _storage2.default.goodsSortMode = 'abcDown';
	};
	
	var onGoodsSortTailingsUpBtn = function onGoodsSortTailingsUpBtn() {
	  loadedGoods.data.sort(function (a, b) {
	    return a.count - b.count;
	  });
	  drawGoods();
	  $(goodsSortModal).modal('hide');
	  _storage2.default.goodsSortMode = 'sortTailingsUp';
	};
	
	var onGoodsSortTailingsDownBtn = function onGoodsSortTailingsDownBtn() {
	  loadedGoods.data.sort(function (a, b) {
	    return b.count - a.count;
	  });
	  drawGoods();
	  $(goodsSortModal).modal('hide');
	  _storage2.default.goodsSortMode = 'sortTailingsDown';
	};
	
	goodsSortAbcUpBtn.addEventListener('click', onGoodsSortAbcUpBtn);
	goodsSortAbcDownBtn.addEventListener('click', onGoodsSortAbcDownBtn);
	goodsSortTailingsUpBtn.addEventListener('click', onGoodsSortTailingsUpBtn);
	goodsSortTailingsDownBtn.addEventListener('click', onGoodsSortTailingsDownBtn);
	
	var goodsSortMode = {
	  abcUp: onGoodsSortAbcUpBtn,
	  abcDown: onGoodsSortAbcDownBtn,
	  sortTailingsUp: onGoodsSortTailingsUpBtn,
	  sortTailingsDown: onGoodsSortTailingsDownBtn
	};
	
	var onGroupGoodsCardBodyClick = function onGroupGoodsCardBodyClick(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.goodId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	  _storage2.default.currentGoodId = currentStringElement.dataset.goodId;
	  _catalogGroupsGoods2.default.fill();
	};
	
	// РАБОТА С ГРУППАМИ
	var onSuccessGroupsLoad = function onSuccessGroupsLoad(loadedGroups) {
	  loadedData = loadedGroups;
	  document.querySelector('#' + loaderSpinnerId).remove();
	  _catalogGroups2.default.drawDataInContainer(loadedGroups.data);
	};
	
	var getGroups = function getGroups() {
	  _catalogGroups2.default.cleanContainer();
	  _catalogGroups2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	  _storage2.default.currentGroupId = false;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupsLoad
	  };
	};
	
	groupGoodsCardBody.addEventListener('click', onGroupGoodsCardBodyClick);
	
	exports.default = {
	  start: function start() {
	    listGroups.addEventListener('click', getGroups);
	  },
	
	
	  redraw: getGroups,
	  redrawGoods: onListGroupsCardBodyClick,
	
	  stop: function stop() {
	    _catalogGroups2.default.cleanContainer();
	    listGroups.removeEventListener('click', getGroups);
	  }
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var listGroupsBody = document.querySelector('#list-groups-card-body');
	var groupGoodsBody = document.querySelector('#group-goods-card-body');
	// import auth from '../tools/storage.js';
	
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listGroupsBody.innerHTML = '';
	  },
	  getElement: function getElement(item, index) {
	    // const currentEnterpriseFlag = (item.b_id === auth.data['currentBusiness']) ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	    // ${currentEnterpriseFlag}
	    console.log(item, index);
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-group-id="' + item.id + '" data-group-index="' + index + '" data-group-level="' + item.level + '" data-group-name="' + item.name + '">\n      <div style="padding-left: 34px;">\n        <span class="reference-row-number">' + (index + 1) + '</span> ||\n        <span>' + item.name + '</span> ||\n        <span>' + item.id + '</span> ||\n        <span>' + item.level + '</span> ||\n      </div>\n      <div class="d-flex justify-content-between align-items-center">\n      </div>\n    </div>';
	  },
	  getGoodString: function getGoodString(item, index) {
	    // const currentEnterpriseFlag = (item.b_id === auth.data['currentBusiness']) ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	    // ${currentEnterpriseFlag}
	
	    return '\n    <div class="goods-string" data-good-id="' + item.id + '">\n      <div>\n        <span class="reference-row-number">' + (index + 1) + '</span> <span>' + item.name + '</span>\n      </div>\n      <div>\n        ' + (item.count ? item.count : '') + '\n        <button type="button" class="btn p-0 bg-white icon-btn icon-btn__go"></button>\n      </div>\n    </div>';
	  },
	  getGoodTile: function getGoodTile(item, index) {
	    // const currentEnterpriseFlag = (item.b_id === auth.data['currentBusiness']) ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	    // ${currentEnterpriseFlag}
	
	    var getImg = function getImg(imgUrl) {
	      if (imgUrl) {
	        return 'https://lopos.bidone.ru/users/600a5357/images/' + imgUrl + '_preview150.jpg';
	      } else {
	        return './img/not-available.png';
	      }
	    };
	
	    return '\n    <div class="card goods-tile-card" data-good-id="' + item.id + '">\n      <img class="card-img-top" src="' + getImg(item.img_url) + '" alt="' + item.name + '" title="' + item.name + '">\n      <div class="card-body goods-tile-title">\n        <p class="card-text">' + item.count + '</p>\n      </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(groupsData) {
	    var _this = this;
	
	    groupsData.forEach(function (item, index) {
	      return listGroupsBody.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	    });
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listGroupsBody.insertAdjacentHTML('beforeend', markup);
	  },
	  drawGoodsTable: function drawGoodsTable(goodsData) {
	    var _this2 = this;
	
	    console.log(goodsData);
	    console.log(typeof goodsData === 'undefined' ? 'undefined' : _typeof(goodsData));
	    groupGoodsBody.innerHTML = '';
	    if (goodsData) {
	      goodsData.forEach(function (item, index) {
	        return groupGoodsBody.insertAdjacentHTML('beforeend', _this2.getGoodString(item, index));
	      });
	    } else {
	      groupGoodsBody.innerHTML = 'Пусто';
	    }
	  },
	  drawGoodsMetro: function drawGoodsMetro(goodsData) {
	    var _this3 = this;
	
	    if (goodsData) {
	      groupGoodsBody.innerHTML = '<div class="goods-tile"></div>';
	      goodsData.forEach(function (item, index) {
	        return groupGoodsBody.firstChild.insertAdjacentHTML('beforeend', _this3.getGoodTile(item, index));
	      });
	    } else {
	      groupGoodsBody.innerHTML = 'Пусто';
	    }
	  }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// удаление группы
	var onSuccessGroupDelete = function onSuccessGroupDelete(answer) {
	
	  var message = '';
	  if (answer.status === 271) {
	    message = answer.message + ', удалить никак невозможно-с';
	  } else {
	    message = 'Группа успешно удалена';
	    _catalogGroups2.default.redraw();
	  }
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: message
	  };
	};
	
	var setRequestToDeleteGroup = function setRequestToDeleteGroup() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId,
	    data: 'token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupDelete
	  };
	};
	
	var onListGroupsCardBodyClickRemove = function onListGroupsCardBodyClickRemove(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.groupIndex) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	  _storage2.default.currentGroupId = currentStringElement.dataset.groupId;
	  _storage2.default.currentGroupName = currentStringElement.dataset.groupName;
	
	  if (+currentStringElement.dataset.groupLevel >= 9000) {
	    _tools2.default.informationtModal = {
	      title: 'Уведомление',
	      message: '<b>NO! IT\'S OVER NINE THOUSAAAAAND!!!</b>'
	    };
	  } else {
	    _tools2.default.actionRequestModal = {
	      title: 'Удаление',
	      message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 <b>' + _storage2.default.currentGroupName + '</b>?',
	      submitCallback: setRequestToDeleteGroup
	    };
	  }
	};
	
	exports.default = {
	  handler: onListGroupsCardBodyClickRemove
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var groupsEditForm = document.querySelector('#groups-edit');
	var groupsEditName = document.querySelector('#groups-edit-name');
	
	var onListGroupsCardBodyClickEdit = function onListGroupsCardBodyClickEdit(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.groupIndex) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	  $(groupsEditForm).modal('show');
	  groupsEditName.value = currentStringElement.dataset.groupName;
	
	  _storage2.default.currentGroupId = currentStringElement.dataset.groupId;
	  _storage2.default.currentGroupName = currentStringElement.dataset.groupName;
	};
	
	exports.default = {
	  handler: onListGroupsCardBodyClickEdit
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _universalKeywords = __webpack_require__(31);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	var _referenceKeywords = __webpack_require__(30);
	
	var _referenceKeywords2 = _interopRequireDefault(_referenceKeywords);
	
	var _catalogGroupsGoodsExpress = __webpack_require__(39);
	
	var _catalogGroupsGoodsExpress2 = _interopRequireDefault(_catalogGroupsGoodsExpress);
	
	var _catalogGroupsGoodsStock = __webpack_require__(41);
	
	var _catalogGroupsGoodsStock2 = _interopRequireDefault(_catalogGroupsGoodsStock);
	
	var _catalogGroupsGoodsEdit = __webpack_require__(42);
	
	var _catalogGroupsGoodsEdit2 = _interopRequireDefault(_catalogGroupsGoodsEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goodsCard = document.querySelector('#goods-card');
	// const goodsCardForm = document.querySelector('#goods-card-form');
	
	var goodsCardName = document.querySelector('#goods-card-name');
	var goodsCardDescribe = document.querySelector('#goods-card-describe');
	var goodsCardBarcode = document.querySelector('#goods-card-barcode');
	var goodsCardGroup = document.querySelector('#goods-card-group');
	
	var goodsCardImage = document.querySelector('#goods-card-image');
	var goodsCardImageUpload = document.querySelector('#goods-card-image-upload');
	var goodsCardPurchase = document.querySelector('#goods-card-price-purchase');
	var goodsCardSell = document.querySelector('#goods-card-price-sell');
	var goodsCardExtra = document.querySelector('#goods-card-price-extra');
	var goodsStock = document.querySelector('#goods-stock-body');
	var goodsKeywords = document.querySelector('#goods-keywords');
	var goodsCardKeywordsModal = document.querySelector('#goods-card-keywords');
	var goodsCardKeywordsBody = document.querySelector('#goods-card-keywords-body');
	
	var expressContainer = document.querySelector('#express-container');
	var expressModal = document.querySelector('#express-modal');
	var expressModalLabel = document.querySelector('#express-modal-label');
	var expressModalStock = document.querySelector('#express-modal-stock');
	var expressModalPrice = document.querySelector('#express-modal-price');
	var expressModalQuantity = document.querySelector('#express-modal-quantity');
	var stockModal = document.querySelector('#set-stock-modal');
	var stockModalName = document.querySelector('#set-stock-modal-stock');
	var stockModalQuantity = document.querySelector('#set-stock-modal-quantity');
	
	var formSave = {};
	
	var saveForm = function saveForm() {
	  formSave = {
	    name: goodsCardName.value,
	    describe: goodsCardDescribe.value,
	    barcode: goodsCardBarcode.value,
	    group: goodsCardGroup.value
	  };
	};
	
	var restoreForm = function restoreForm() {
	  if (_storage2.default.isGoodCardEdit === 'true') {
	    goodsCardName.value = formSave.name;
	    goodsCardDescribe.value = formSave.describe;
	    goodsCardBarcode.value = formSave.barcode;
	    goodsCardGroup.value = formSave.group;
	  }
	  _storage2.default.isGoodCardEdit = false;
	};
	
	var goodTags = [];
	var onSuccessGoodsLoad = function onSuccessGoodsLoad(loadedGood) {
	  console.log(loadedGood);
	
	  // разбираем данные
	  var _loadedGood$data = loadedGood.data,
	      name = _loadedGood$data.name,
	      description = _loadedGood$data.description,
	      barcode = _loadedGood$data.barcode,
	      allGroups = _loadedGood$data.all_groups,
	      allStocks = _loadedGood$data.all_stocks,
	      currentValue = _loadedGood$data.current_value,
	      purchasePrice = _loadedGood$data.purchase_price,
	      sellingPrice = _loadedGood$data.selling_price,
	      tags = _loadedGood$data.tags,
	      imgUrl = _loadedGood$data.img_url,
	      groupId = _loadedGood$data.group_id;
	
	  purchasePrice = Number(purchasePrice).toFixed(2);
	  sellingPrice = Number(sellingPrice).toFixed(2);
	
	  // заполняем форму - сведения о товаре
	  goodsCardName.value = name;
	  goodsCardDescribe.value = description;
	  goodsCardBarcode.value = barcode;
	  goodsCardPurchase.value = purchasePrice;
	  goodsCardSell.value = sellingPrice;
	  goodsCardExtra.innerHTML = ((+sellingPrice - +purchasePrice) / (+purchasePrice / 100)).toFixed(2) + '%';
	  goodsCardGroup.innerHTML = allGroups.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === groupId ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	  goodsCardImage.title = name;
	  goodsCardImage.alt = name;
	  goodsCardImage.src = imgUrl ? 'https://lopos.bidone.ru/users/600a5357/images/' + imgUrl + '.jpg' : './img/not-available.png';
	
	  // заполняем форму - остатки
	  var totalCount = 0;
	  var checkedStock = false;
	
	  if (allStocks.length) {
	    allStocks.forEach(function (stockItem) {
	      stockItem.values = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
	      if (currentValue.length) {
	        currentValue.map(function (valueItem) {
	          return valueItem.stock_id === stockItem.id ? stockItem.values[valueItem.type] = [valueItem.value, valueItem.type] : '';
	        });
	      }
	    });
	    goodsStock.insertAdjacentHTML('beforeend', allStocks.map(function (item) {
	      totalCount += +item.values[4][0] + +item.values[2][0] + +item.values[3][0];
	      if (!_storage2.default.currentStockId) {
	        checkedStock = item.id === _storage2.default.data.currentStock ? item.id : checkedStock;
	      } else {
	        checkedStock = _storage2.default.currentStockId;
	      }
	      return '\n      <input type="radio" id="stock-' + item.id + '" name="stock" value="email" class="d-none">\n      <label style="padding-left: 34px;" for="stock-' + item.id + '"  class="d-flex justify-content-between align-items-center reference-string" data-stock-id="' + item.id + '" data-stock-name="' + item.name + '" data-stock-t2="' + item.values[2][0] + '">\n        <div class="row w-100 h-100">\n          <div class="col-8">' + item.name + '</div>\n          <div class="col-4 d-flex justify-content-between">\n            <div class="w-100 text-center">' + item.values[3][0] + '</div>\n            <div class="w-100 text-center">' + item.values[2][0] + '</div>\n            <div class="w-100 text-center">' + item.values[4][0] + '</div>\n          </div>\n          </div>\n        </label>';
	    }).join(''));
	    console.log(allStocks);
	  }
	
	  if (allStocks.length > 1) {
	    goodsStock.insertAdjacentHTML('beforeend', '\n      <div class="row border">\n        <div class="col-8 border">\u0418\u0442\u043E\u0433\u043E</div>\n        <div class="col-4 text-center">\n          ' + totalCount + '\n        </div>\n      </div>');
	  }
	
	  if (checkedStock) {
	    goodsStock.querySelector('#stock-' + checkedStock).checked = true;
	    _storage2.default.currentStockId = checkedStock;
	    _storage2.default.currentStockName = goodsStock.querySelector('#stock-' + checkedStock).nextElementSibling.dataset.stockName;
	    _storage2.default.currentStockQuantityT2 = goodsStock.children[1].dataset.stockT2;
	  } else if (goodsStock.firstChild.id) {
	    goodsStock.firstChild.checked = true;
	    _storage2.default.currentStockId = goodsStock.firstChild.id.split('-')[1];
	    _storage2.default.currentStockName = goodsStock.children[1].dataset.stockName;
	    _storage2.default.currentStockQuantityT2 = goodsStock.children[1].dataset.stockT2;
	  }
	
	  // keywordsUniversal.downloadAndDraw(goodsCardKeywordsBody, onKeywordClick, keywordModificator);
	
	  /*
	  const onGoodKeywordClick = (evt) => {
	    auth.isGoodCardEdit = true;
	    saveForm();
	    const returnHandler = (e) => {
	      getGood();
	      $('#list-groups-list').tab('show');
	      $('#goods-card').modal('show');
	      e.target.removeEventListener('click', returnHandler);
	      };
	    referenceKeywords.showKeywordEdit(evt, returnHandler);
	    $('#goods-card').modal('hide');
	    $('#list-keywords-list').tab('show');
	  };
	  */
	
	  // заполняем форму - ключевые слова и работа с ними
	  goodTags = tags ? tags : [];
	
	  goodsKeywords.innerHTML = '';
	  if (goodTags.length) {
	    goodTags.forEach(function (item) {
	      return _universalKeywords2.default.getDataAndDraw(goodsKeywords, onGoodKeywordClick, item);
	    });
	  } else {
	    goodsKeywords.innerHTML = 'Ключевых слов нет';
	  }
	  console.log('fillForm');
	  if (_storage2.default.isGoodCardEdit === 'true') {
	    restoreForm();
	  }
	  _storage2.default.isGoodCardEdit = false;
	
	  _catalogGroupsGoodsEdit2.default.start(goodsCard);
	
	  // восстановление состояния формы
	  restoreForm();
	};
	
	var onGoodKeywordClick = function onGoodKeywordClick(evt) {
	  _storage2.default.isGoodCardEdit = true;
	  saveForm();
	  var returnHandler = function returnHandler(e) {
	    getGood();
	    $('#list-groups-list').tab('show');
	    $('#goods-card').modal('show');
	    e.target.removeEventListener('click', returnHandler);
	  };
	  _referenceKeywords2.default.showKeywordEdit(evt, returnHandler);
	  $('#goods-card').modal('hide');
	  $('#list-keywords-list').tab('show');
	};
	
	// обработчик клика по ключевому слову (пока внутри карточки связей "товар-слово")
	var onKeywordClick = function onKeywordClick(evt) {
	  var clickedKeywordNode = evt.target;
	  var onSuccessKeywordsCompare = function onSuccessKeywordsCompare(keywordNode) {
	    return clickedKeywordNode.classList.toggle('keyword__mute');
	  };
	  var xhrType = goodTags.every(function (tagItem) {
	    return tagItem.id !== clickedKeywordNode.dataset.keywordId;
	  }) ? 'POST' : 'DELETE';
	  _xhr2.default.request = {
	    metod: xhrType,
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/tag/' + clickedKeywordNode.dataset.keywordId + '/compare_meta',
	    data: 'good=' + _storage2.default.currentGoodId + '&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessKeywordsCompare
	  };
	};
	
	// установка прозрачности
	var keywordModificator = function keywordModificator(keywordId, keywordNode) {
	  if (goodTags.every(function (tagItem) {
	    return tagItem.id !== keywordId;
	  })) {
	    keywordNode.classList.add('keyword__mute');
	  }
	};
	
	$(goodsCardKeywordsModal).on('shown.bs.modal', function () {
	  _storage2.default.isGoodCardEdit = true;
	  saveForm();
	  _universalKeywords2.default.downloadAndDraw(goodsCardKeywordsBody, onKeywordClick, keywordModificator);
	  $(goodsCard).modal('hide');
	  _catalogGroupsGoodsEdit2.default.removeHandlers();
	});
	
	$(goodsCardKeywordsModal).on('hidden.bs.modal', function () {
	  getGood();
	});
	
	goodsStock.addEventListener('change', function (evt) {
	  _storage2.default.currentStockId = Number(evt.target.id.split('-')[1]);
	  _storage2.default.currentStockName = evt.target.labels[0].dataset.stockName;
	  _storage2.default.currentStockQuantityT2 = evt.target.labels[0].dataset.stockT2;
	});
	
	var currentExpressBtn = '';
	
	var onSuccessExpressExecute = function onSuccessExpressExecute(answer) {
	  console.log(answer);
	  $(currentExpressBtn).popover({
	    content: answer.message,
	    placement: 'top'
	  }).popover('show');
	  getGood();
	  window.setTimeout(function () {
	    $(currentExpressBtn).popover('dispose');
	    expressContainer.querySelectorAll('BUTTON').forEach(function (btn) {
	      return btn.removeAttribute('disabled', 'disabled');
	    });
	  }, 1000);
	};
	var onExpressContainerClick = function onExpressContainerClick(evt) {
	  var multiplier = null;
	  var value = null;
	  var price = null;
	  console.log(evt.target.id);
	  console.log(evt.target.id.indexOf('express-operation'));
	  if (evt.target.tagName === 'BUTTON') {
	    var currentBtnId = evt.target.id;
	    multiplier = currentBtnId.indexOf('minus') !== -1 ? -1 : 1;
	    price = currentBtnId.indexOf('purchase') !== -1 ? Number(goodsCardPurchase.value) : Number(goodsCardSell.value);
	    value = currentBtnId.indexOf('express-operation') !== -1 ? Number(currentBtnId.split('-')[3]) * multiplier : '';
	    currentExpressBtn = evt.target;
	
	    if (currentBtnId.indexOf('operation') !== -1) {
	      expressContainer.querySelectorAll('BUTTON').forEach(function (btn) {
	        return btn.setAttribute('disabled', 'disabled');
	      });
	      _xhr2.default.request = {
	        metod: 'POST',
	        url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good/' + _storage2.default.currentGoodId + '/stock/' + _storage2.default.currentStockId + '/express',
	        data: 'value=' + value + '&price=' + price + '&token=' + _storage2.default.data.token,
	        callbackSuccess: onSuccessExpressExecute
	      };
	    } else if (currentBtnId.indexOf('custom') !== -1) {
	      $(expressModal).modal('show');
	
	      console.log(formSave);
	      $(goodsCard).modal('toggle');
	
	      _catalogGroupsGoodsEdit2.default.removeHandlers();
	
	      expressModalLabel.innerHTML = currentBtnId.indexOf('purchase') !== -1 ? 'Экспресс-закупка' : 'Экспресс-продажа';
	      expressModalStock.innerHTML = _storage2.default.currentStockName;
	      expressModalPrice.value = currentBtnId.indexOf('purchase') !== -1 ? goodsCardPurchase.value : goodsCardSell.value;
	      expressModalQuantity.value = '';
	      expressModalQuantity.focus();
	      _storage2.default.expressOperationType = multiplier;
	      // goodsExpressValidityAndSend.start(expressModal);
	    }
	    _storage2.default.isGoodCardEdit = true;
	    saveForm();
	  }
	};
	
	expressContainer.addEventListener('click', onExpressContainerClick);
	
	$(expressModal).on('hidden.bs.modal', function () {
	  console.log(formSave);
	  _catalogGroupsGoodsExpress2.default.stop();
	  getGood();
	  $(goodsCard).modal('toggle');
	});
	
	var getGood = function getGood() {
	  $(goodsCard).modal('show');
	  goodsStock.innerHTML = '';
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good/' + _storage2.default.currentGoodId + '/card_info',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGoodsLoad
	  };
	};
	
	$(stockModal).on('hidden.bs.modal', function () {
	  _catalogGroupsGoodsStock2.default.stop();
	  getGood();
	});
	
	$(stockModal).on('shown.bs.modal', function () {
	  $(goodsCard).modal('hide');
	
	  _catalogGroupsGoodsEdit2.default.removeHandlers();
	
	  stockModalName.innerHTML = _storage2.default.currentStockName;
	  stockModalQuantity.value = _storage2.default.currentStockQuantityT2;
	  _storage2.default.isGoodCardEdit = true;
	  saveForm();
	  _catalogGroupsGoodsStock2.default.start(stockModal);
	});
	
	var showPreview = function showPreview(file) {
	  var fileName = file.name.toLowerCase();
	  var fileSize = (file.size / 1024 / 1024).toFixed(2);
	
	  if (fileName.endsWith('jpg') && fileSize < 2) {
	    var reader = new FileReader();
	
	    reader.addEventListener('load', function () {
	      goodsCardImage.src = reader.result;
	    });
	    reader.readAsDataURL(file);
	  } else if (!fileName.endsWith('jpg')) {
	    goodsCardImage.src = '';
	    goodsCardImageUpload.value = '';
	    goodsCardImage.alt = '\u0424\u043E\u0440\u043C\u0430\u0442 ' + fileName.slice(-3) + ' \u043D\u0435 \u043A\u0430\u0442\u0438\u0442, \u0442\u043E\u043B\u044C\u043A\u043E jpg';
	  } else if (fileSize > 2) {
	    goodsCardImage.src = '';
	    goodsCardImageUpload.value = '';
	    goodsCardImage.alt = '\u0420\u0430\u0437\u043C\u0435\u0440 ' + fileSize + 'Mb \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A';
	  }
	};
	
	goodsCardImageUpload.addEventListener('change', function () {
	  showPreview(goodsCardImageUpload.files[0]);
	});
	
	// ================= превью картинки =================
	
	exports.default = {
	  start: function start() {
	    // вешаем обработчики на кнопки
	    // listGroups.addEventListener('click', getGroups);
	  },
	
	
	  // заполняем карточку
	  fill: getGood,
	
	  stop: function stop() {
	    // снимаем обработчики
	    // groupsMarkup.cleanContainer();
	    // listGroups.removeEventListener('click', getGroups);
	  }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(40);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var price = void 0;
	var amount = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  price = form.querySelector('*[data-valid="price"]');
	  amount = form.querySelector('*[data-valid="amount"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].message;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 270:
	      $(modal).modal('hide');
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	  var value = amount.value * Number(_storage2.default.expressOperationType);
	
	  var postData = 'token=' + stor.token + '&value=' + value + '&price=' + price.value;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{goodId}}', _storage2.default.currentGoodId);
	  urlApp = urlApp.replace('{{stockId}}', _storage2.default.currentStockId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	exports.default = {
	  start: function start(remModal) {
	    initVar(remModal);
	    _formTools2.default.work(modal, submitForm);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var butSubmit = void 0; // теги в разметке:
	//   <form>
	//      data-formName = appSettings.{formName}
	//   <input>
	//      data-valid = appSettings.formName.validPatterns.{valid}
	//      data-validLabelName = data-validLabel на сообщении о валидации
	//   <сообщение>
	//      data-validLabel = appSettings.formName.validMessage.{data-validLabel}
	//   <спиннер>
	//      data-spinner
	//   <кнопка отмены>
	//      data-butCancel
	
	
	// Параметры work:
	// -----------------------------------------------------------------------------
	//   remoteForm - форма
	// -----------------------------------------------------------------------------
	//   remoteSubmitCallback - массив функций должны возвращать объект:
	//     {
	//       url: ссылка на апи,
	//       metod: метод http,
	//       data: строка data,
	//     }
	//   Массив нужен для отправок отправок разных полей по разным адресам
	// -----------------------------------------------------------------------------
	//   remoteXhrCallbackSuccess - функция, в которую передается управление при
	//      успешном запросе
	// -----------------------------------------------------------------------------
	//   remoteValidCallback - параметр validCallback передается для дополнительной
	//      проверки
	//     (когда недостаточно проверить текстовые поля по шаблонам).
	//     Должен возвращать true или false.
	//
	
	var butCancel = void 0;
	var spinner = void 0;
	
	var modal = void 0;
	var form = void 0;
	var pattern = void 0;
	var message = void 0;
	var submitCallback = void 0;
	var validCallback = void 0;
	
	var elSaveValues = void 0;
	
	var showAlert = function showAlert(el) {
	  if (el.dataset.valid) {
	    el.classList.add('border');
	    el.classList.add('border-danger');
	    form.querySelector('*[data-validLabel="' + el.dataset.validlabelname + '"]').innerHTML = message[el.dataset.valid];
	  }
	};
	
	var hideAlert = function hideAlert(el) {
	  if (el.dataset.valid) {
	    el.classList.remove('border');
	    el.classList.remove('border-danger');
	    form.querySelector('*[data-validLabel="' + el.dataset.validlabelname + '"]').innerHTML = '';
	  }
	};
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  butSubmit.disabled = true;
	  butCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  butSubmit.disabled = false;
	  butCancel.disabled = false;
	};
	
	var delHandlers = function delHandlers() {
	  console.log('FORM ID = ' + form.id);
	  console.log('DEL HANDLERS');
	  modal.removeEventListener('click', modalClickHandler);
	  form.removeEventListener('submit', formSubmitHandler);
	  form.removeEventListener('input', formInputHandler);
	  form.querySelectorAll('*[data-cancel]').forEach(function (el) {
	    el.removeEventListener('click', modalClickHandler);
	  });
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  form.querySelectorAll('*[data-valid]').forEach(function (el) {
	    hideAlert(el);
	  });
	
	  hideSpinner();
	  butSubmit.disabled = true;
	  delHandlers();
	};
	
	var validateForm = function validateForm() {
	
	  var valid = true;
	  var otherValid = validCallback ? validCallback() : true;
	  var elements = form.querySelectorAll('*[data-valid]');
	
	  elements.forEach(function (el) {
	    if (!pattern[el.dataset.valid].test(el.value)) {
	      valid = false;
	      showAlert(el);
	    }
	  });
	
	  return valid && otherValid;
	};
	
	var formIsChange = function formIsChange() {
	  var change = false;
	
	  form.querySelectorAll('*[data-valid]').forEach(function (el, index) {
	    if (el.value !== elSaveValues[index]) {
	      change = true;
	    }
	  });
	
	  return change;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitCallback();
	  }
	};
	
	var submitForm = function submitForm(data) {
	  _xhr2.default.request = data;
	};
	
	var formInputHandler = function formInputHandler(evt) {
	  hideAlert(evt.target);
	
	  if (formIsChange()) {
	    butSubmit.disabled = false;
	  } else {
	    butSubmit.disabled = true;
	  }
	};
	
	var cancelClickHandler = function cancelClickHandler(evt) {
	  formReset();
	};
	
	var modalClickHandler = function modalClickHandler(evt) {
	  if (evt.target === modal) {
	    formReset();
	  }
	};
	
	var addHandlersFunc = function addHandlersFunc(remoteModal, remoteSubmitCallback, remoteValidCallback) {
	  modal = remoteModal;
	  form = modal.querySelector('*[data-formName]');
	  submitCallback = remoteSubmitCallback;
	  validCallback = remoteValidCallback;
	  pattern = window.appSettings[form.dataset.formname].validPatterns;
	  message = window.appSettings[form.dataset.formname].validMessage;
	
	  butSubmit = form.querySelector('button[type="submit"]');
	  butCancel = form.querySelector('*[data-butCancel]');
	  spinner = form.querySelector('*[data-spinner]');
	
	  elSaveValues = [];
	
	  form.querySelectorAll('*[data-valid]').forEach(function (el) {
	    elSaveValues.push(el.value);
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	  form.addEventListener('input', formInputHandler);
	  form.querySelectorAll('*[data-cancel]').forEach(function (el) {
	    el.addEventListener('click', cancelClickHandler);
	  });
	  modal.addEventListener('click', modalClickHandler);
	
	  console.log('FORM ID = ' + form.id);
	  console.log('ADD HANDLERS');
	};
	
	var valEl = function valEl(el) {
	  if (pattern[el.dataset.valid].test(el.value)) {
	    return true;
	  }
	  showAlert(el);
	  return false;
	};
	
	exports.default = {
	
	  work: addHandlersFunc,
	  reset: formReset,
	  removeHandlers: delHandlers,
	  validElement: valEl,
	  submit: submitForm
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(40);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var amount = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  amount = form.querySelector('*[data-valid="amount"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].message;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	  var value = amount.value;
	
	  var postData = 'token=' + stor.token + '&value=' + value;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{goodId}}', _storage2.default.currentGoodId);
	  urlApp = urlApp.replace('{{stockId}}', _storage2.default.currentStockId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	exports.default = {
	  start: function start(remModal) {
	    initVar(remModal);
	
	    _formTools2.default.work(modal, submitForm);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(40);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _tools3 = __webpack_require__(43);
	
	var _tools4 = _interopRequireDefault(_tools3);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modal = void 0;
	// import catalogGroupsGoods from './catalog-groups-goods.js';
	
	var appUrl1 = void 0;
	var appUrl2 = void 0;
	var appUrl3 = void 0;
	var messages = void 0;
	var form = void 0;
	var name = void 0;
	var describe = void 0;
	var groupId = void 0;
	var img = void 0;
	var purchase = void 0;
	var sell = void 0;
	var percent = void 0;
	var barcode = void 0;
	var priceBlock = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('#goods-card-form');
	  name = form.querySelector('#goods-card-name');
	  describe = form.querySelector('#goods-card-describe');
	  groupId = form.querySelector('#goods-card-group');
	  img = form.querySelector('#goods-card-image-upload');
	  priceBlock = form.querySelector('#goods-card-price-block');
	  purchase = form.querySelector('#goods-card-price-purchase');
	  sell = form.querySelector('#goods-card-price-sell');
	  percent = form.querySelector('#goods-card-price-extra');
	  barcode = form.querySelector('#goods-card-barcode');
	
	  appUrl1 = window.appSettings[form.dataset.formname].UrlApi1;
	  appUrl2 = window.appSettings[form.dataset.formname].UrlApi2;
	  appUrl3 = window.appSettings[form.dataset.formname].UrlApi3;
	  messages = window.appSettings[form.dataset.formname].message;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  console.log('callbackXhr1');
	  console.dir(response);
	
	  _formTools2.default.reset();
	  $('#goods-card').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _catalogGroups2.default.redrawGoods();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrSuccess2 = function callbackXhrSuccess2(response) {
	  console.log('callbackXhr2');
	  console.dir(response);
	
	  _formTools2.default.reset();
	  $(modal).modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _catalogGroups2.default.redrawGoods();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrImgLoadSuccess = function callbackXhrImgLoadSuccess(response) {
	  console.log('callbackXhr2');
	  console.dir(response);
	
	  switch (response.status) {
	    case 200:
	      console.log('img load - ok');break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	
	  var postData = 'token=' + stor.token + '&name=' + name.value + '&description=' + describe.value + '&group=' + groupId.value + '&barcode=' + barcode.value;
	  var urlApp = appUrl1.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{goodId}}', _storage2.default.currentGoodId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	
	  postData = 'token=' + stor.token + '&purchase_price=' + purchase.value + '&selling_price=' + sell.value;
	  urlApp = appUrl2.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{goodId}}', _storage2.default.currentGoodId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess2
	  });
	};
	
	var calcPr = function calcPr() {
	  return _tools4.default.calcPercent(purchase.value, sell.value) + '%';
	};
	
	var calcPrice = function calcPrice(evt) {
	  if (!evt.target.type === 'text') {
	    return false;
	  }
	  if (_formTools2.default.validElement(evt.target)) {
	    percent.innerHTML = calcPr();
	  }
	  return true;
	};
	
	var imgChangeHandler = function imgChangeHandler(evt) {
	  var stor = _storage2.default.data;
	
	  var postData = new FormData();
	  postData.append('token', stor.token);
	  postData.append('good', _storage2.default.currentGoodId);
	  postData.append('file', img.files[0]);
	  var urlApp = appUrl3.replace('{{dir}}', stor.directory);
	
	  var data = {
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrImgLoadSuccess
	  };
	
	  console.dir(data);
	  _formTools2.default.submit(data);
	};
	
	exports.default = {
	  start: function start(remModal) {
	    console.log('Card-Edit-START!');
	    initVar(remModal);
	    percent.innerHTML = calcPr();
	    _formTools2.default.work(modal, submitForm);
	
	    priceBlock.addEventListener('change', calcPrice);
	    img.addEventListener('change', imgChangeHandler);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  },
	
	
	  removeHandlers: _formTools2.default.removeHandlers
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  // рассчитывает процент по стоимости и цене
	  calcPercent: function calcPercent(purchase, price) {
	    return ((price - purchase) * 100 / purchase).toFixed(2);
	  },
	
	  // рассчитывает цену по стоимости и проценту
	  calcPrice: function calcPrice(purchase, percent) {
	    return (Number(purchase) + purchase / 100 * percent).toFixed(2);
	  }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddGroup.UrlApi;
	var messages = window.appSettings.formAddGroup.message;
	
	var validPattern = window.appSettings.formAddGroup.validPatterns;
	var validMessage = window.appSettings.formAddGroup.validMessage;
	
	var body = document.querySelector('body');
	var enterprisesAdd = body.querySelector('#groups-add');
	var form = enterprisesAdd.querySelector('#groups-add-form');
	
	var name = form.querySelector('#groups-add-name');
	
	var spinner = form.querySelector('#groups-add-spinner');
	
	var buttonSubmit = form.querySelector('#groups-add-submit');
	var buttonCancel = form.querySelector('#groups-add-cancel');
	
	var showSpinner = function showSpinner() {
	  spinner.classList.remove('invisible');
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = true;
	};
	
	var hideSpinner = function hideSpinner() {
	  spinner.classList.add('invisible');
	  buttonSubmit.disabled = false;
	  buttonCancel.disabled = false;
	};
	
	var showAlert = function showAlert(input) {
	  if (input.type === 'text') {
	    input.classList.add('border');
	    input.classList.add('border-danger');
	    input.nextElementSibling.innerHTML = validMessage[input.id.match(/[\w]+$/)];
	  }
	};
	
	var hideAlert = function hideAlert(input) {
	  if (input.type === 'text') {
	    input.classList.remove('border');
	    input.classList.remove('border-danger');
	    input.nextElementSibling.innerHTML = '';
	  }
	};
	
	var formReset = function formReset() {
	  form.reset();
	
	  hideAlert(name);
	
	  hideSpinner();
	
	  buttonSubmit.disabled = true;
	  buttonCancel.disabled = false;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  hideSpinner();
	  formReset();
	  $('#groups-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _catalogGroups2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError() {
	  hideSpinner();
	  formReset();
	  $('#groups-add').modal('hide');
	
	  _tools2.default.informationtModal = {
	    'title': 'Error',
	    'messages': window.appSettings.messagess.xhrError
	  };
	};
	
	var validateForm = function validateForm() {
	  var valid = true;
	
	  if (!validPattern.name.test(name.value)) {
	    valid = false;
	    showAlert(name);
	  }
	
	  return valid;
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  var response = {
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	
	  _xhr2.default.request = response;
	};
	
	var formSubmitHandler = function formSubmitHandler(evt) {
	  evt.preventDefault();
	
	  if (validateForm()) {
	    showSpinner();
	    submitForm();
	  }
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#groups-add').on('hidden.bs.modal', function () {
	    formReset();
	  });
	
	  $('#groups-add').on('shown.bs.modal', function () {
	    window.appFormCurrValue = {
	      'name': name.value
	    };
	  });
	
	  form.addEventListener('input', function (evt) {
	    hideAlert(evt.target);
	    buttonSubmit.disabled = false;
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _formTools = __webpack_require__(40);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formEditGroups.UrlApi;
	var messages = window.appSettings.formEditGroups.messages;
	var form = document.querySelector('#groups-edit-form');
	var name = form.querySelector('#groups-edit-name');
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  _formTools2.default.reset();
	  $('#groups-edit').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _catalogGroups2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{groupId}}', _storage2.default.currentGroupId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	var addHandlers = function addHandlers() {
	
	  $('#groups-edit').on('hidden.bs.modal', function () {
	    _formTools2.default.reset();
	  });
	  $('#groups-edit').on('shown.bs.modal', function () {
	    _formTools2.default.work(form, submitForm);
	  });
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroups = __webpack_require__(34);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _formTools = __webpack_require__(40);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = window.appSettings.formAddGoods.UrlApi;
	var messages = window.appSettings.formAddGoods.message;
	
	var form = document.querySelector('#group-goods-add-form');
	
	var name = form.querySelector('#group-goods-name');
	var describe = form.querySelector('#group-goods-describe');
	var priceGroup = form.querySelector('#group-goods-price');
	var purchase = form.querySelector('#group-goods-price-purchase');
	var extra = form.querySelector('#group-goods-price-extra');
	var sell = form.querySelector('#group-goods-price-sell');
	var barcode = form.querySelector('#group-goods-barcode');
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  _formTools2.default.reset();
	  $('#group-goods-add').modal('hide');
	
	  switch (response.status) {
	    case 200:
	      _catalogGroups2.default.redrawGoods();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'messages': response.messages
	      };
	      break;
	  }
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	  var groupId = _storage2.default.currentGroupId;
	
	  var postData = 'token=' + stor.token + '&name=' + name.value + '&description=' + describe.value + '&purchase_price=' + purchase.value + '&selling_price=' + sell.value + '&group=' + groupId + '&barcode=' + barcode.value;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	var calcExtra = function calcExtra() {
	  sell.value = (Number(purchase.value) + purchase.value / 100 * extra.value).toFixed(2);
	};
	
	var calcPercent = function calcPercent() {
	  extra.value = ((sell.value - purchase.value) * 100 / purchase.value).toFixed(2);
	};
	
	var priceChangeHandler = function priceChangeHandler(evt) {
	  if (!evt.target.type === 'text') {
	    return false;
	  }
	
	  if (_formTools2.default.validElement(evt.target)) {
	
	    switch (evt.target.id) {
	      case 'group-goods-price-purchase':
	        calcExtra();break;
	
	      case 'group-goods-price-extra':
	        calcExtra();break;
	
	      case 'group-goods-price-sell':
	        calcPercent();break;
	    }
	  }
	
	  return true;
	};
	
	var addHandlers = function addHandlers() {
	  $('#group-goods-add').on('hidden.bs.modal', function () {
	    _formTools2.default.reset();
	  });
	
	  $('#group-goods-add').on('shown.bs.modal', function () {
	    document.querySelector('#group-goods-group').value = _storage2.default.currentGroupName;
	    _formTools2.default.work(form, submitForm);
	  });
	
	  priceGroup.addEventListener('change', priceChangeHandler);
	};
	
	exports.default = {
	  start: addHandlers
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalogCards = __webpack_require__(48);
	
	var _catalogCards2 = _interopRequireDefault(_catalogCards);
	
	var _catalogGroups = __webpack_require__(35);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listCards = document.querySelector('#list-cards-list');
	var listCardsCard = document.querySelector('#list-cards-card');
	var listCardBody = document.querySelector('#list-cards-card-body');
	var listCardAddBtn = document.querySelector('#list-cards-card-add-btn');
	var listCardEditBtn = document.querySelector('#card-resources-edit-btn');
	var cardResources = document.querySelector('#card-resources');
	var cardResourcesReturnBtn = document.querySelector('#card-resources-return-btn');
	var cardResourcesDeleteBtn = document.querySelector('#card-resources-delete-btn');
	var cardName = document.querySelector('#card-resources-name');
	
	var cardResourcesResources = document.querySelector('#card-resources-body-resources');
	var cardResourcesProduct = document.querySelector('#card-resources-body-product');
	
	var cardResourcesOldCost = document.querySelector('#card-resources-old-cost');
	var cardResourcesNewPrice = document.querySelector('#card-resources-new-price');
	
	var resourcesAddBtn = document.querySelector('#resources-add-btn');
	var productAddBtn = document.querySelector('#product-add-btn');
	var cardResourcesGroupModal = document.querySelector('#card-resources-group');
	var cardResourcesGroupModalTitle = document.querySelector('#card-resources-title');
	var cardResourcesGroupModalBody = document.querySelector('#card-resources-groups-body');
	var cardResourcesGroupModalReturnBtn = document.querySelector('#card-resources-modal-return-btn');
	
	var addResourcesModal = document.querySelector('#add-resources-modal');
	var addResourcesModalLabel = document.querySelector('#add-resources-modal-label');
	
	var loadedGoods = [];
	var loadedGroups = [];
	
	// поиск по товару внутри группы
	var cardResourcesSearchInput = document.querySelector('#card-resources-search-input');
	
	var drawGoods = function drawGoods(data) {
	  cardResourcesGroupModalReturnBtn.classList.remove('invisible');
	  cardResourcesSearchInput.addEventListener('input', onGoodsSearch);
	  cardResourcesSearchInput.removeEventListener('input', onGroupsSearch);
	  cardResourcesGroupModalBody.innerHTML = '';
	  data.forEach(function (item, index) {
	    cardResourcesGroupModalBody.insertAdjacentHTML('beforeend', _catalogGroups2.default.getGoodString(item, index));
	
	    cardResourcesGroupModalBody.lastChild.addEventListener('click', function (evt) {
	
	      var currentStringElement = evt.target;
	      while (!currentStringElement.dataset.goodId) {
	        currentStringElement = currentStringElement.parentNode;
	      }
	      $(cardResourcesGroupModal).modal('hide');
	      $(addResourcesModal).modal('show');
	      addResourcesModalLabel.innerHTML = item.name;
	      _storage2.default.currentGoodId = currentStringElement.dataset.goodId;
	    });
	  });
	};
	
	var drawGroups = function drawGroups(groupsData) {
	  console.log(groupsData);
	  cardResourcesGroupModalReturnBtn.classList.add('invisible');
	  cardResourcesSearchInput.removeEventListener('input', onGoodsSearch);
	  cardResourcesSearchInput.addEventListener('input', onGroupsSearch);
	  cardResourcesGroupModalBody.innerHTML = '';
	  groupsData.forEach(function (item, index) {
	    cardResourcesGroupModalBody.insertAdjacentHTML('beforeend', _catalogGroups2.default.getElement(item, index));
	    cardResourcesGroupModalBody.lastChild.addEventListener('click', function (evt) {
	
	      var currentStringElement = evt.target;
	      cardResourcesSearchInput.value = '';
	      cardResourcesSearchInput.focus();
	      while (!currentStringElement.dataset.groupId) {
	        currentStringElement = currentStringElement.parentNode;
	      }
	
	      var currentGroupName = loadedGroups.data[currentStringElement.dataset.groupIndex].name;
	      _storage2.default.currentGroupId = currentStringElement.dataset.groupId;
	      _storage2.default.currentGroupName = currentGroupName;
	
	      _xhr2.default.request = {
	        metod: 'POST',
	        url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods_light',
	        data: 'view_last=0&token=' + _storage2.default.data.token,
	        callbackSuccess: onSuccessGroupGood
	      };
	    });
	  });
	};
	
	var onGoodsSearch = function onGoodsSearch(evt) {
	  var selectedData = [];
	  loadedGoods.data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(cardResourcesSearchInput.value.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  drawGoods(selectedData);
	};
	
	var onGroupsSearch = function onGroupsSearch(evt) {
	  var selectedData = [];
	  loadedGroups.data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(cardResourcesSearchInput.value.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  drawGroups(selectedData);
	};
	
	// cardResourcesSearchInput.addEventListener('input', onGoodsSearch);
	
	var onSuccessGroupGood = function onSuccessGroupGood(goodsData) {
	  loadedGoods = goodsData;
	  cardResourcesGroupModalTitle.innerHTML = '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440 \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "' + _storage2.default.currentGroupName + '"';
	  cardResourcesGroupModalReturnBtn.addEventListener('click', getGroups);
	  drawGoods(goodsData.data);
	};
	
	$(addResourcesModal).on('hidden.bs.modal', function () {
	  $(cardResourcesGroupModal).modal('show');
	});
	
	var onSuccessGroupsLoad = function onSuccessGroupsLoad(groupsData) {
	  loadedGroups = groupsData;
	  cardResourcesGroupModalBody.innerHTML = '';
	  cardResourcesGroupModalTitle.innerHTML = 'Выберите группу';
	  cardResourcesSearchInput.focus();
	  drawGroups(groupsData.data);
	};
	
	var getGroups = function getGroups() {
	  console.log('hi');
	  _catalogGroups2.default.cleanContainer();
	  _storage2.default.currentGroupId = false;
	  cardResourcesSearchInput.value = '';
	  $(cardResourcesGroupModal).modal('show');
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupsLoad
	  };
	};
	
	var onResourcesAddBtn = function onResourcesAddBtn() {
	  _storage2.default.currentCardOperation = -1;
	
	  getGroups();
	};
	
	var onProductAddBtn = function onProductAddBtn() {
	  _storage2.default.currentCardOperation = 1;
	  getGroups();
	};
	
	resourcesAddBtn.addEventListener('click', onResourcesAddBtn);
	productAddBtn.addEventListener('click', onProductAddBtn);
	
	var loaderSpinnerId = 'loader-cards';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var cardData = [];
	
	var onSuccessCardResourcesLoad = function onSuccessCardResourcesLoad(cardResourcesData) {
	  console.log(cardResourcesData);
	  cardResourcesResources.innerHTML = '';
	  cardResourcesProduct.innerHTML = '';
	  cardResourcesOldCost.innerHTML = +cardResourcesData.data.old_cost ? cardResourcesData.data.old_cost : '';
	  cardResourcesNewPrice.innerHTML = +cardResourcesData.data.new_price ? cardResourcesData.data.new_price : '';
	  if (cardResourcesData.data.resours.length) {
	    cardResourcesData.data.resours.forEach(function (item) {
	      if (item.value < 0) {
	        cardResourcesResources.insertAdjacentHTML('beforeend', _catalogCards2.default.getResourceElement(item));
	      } else {
	        cardResourcesProduct.insertAdjacentHTML('beforeend', _catalogCards2.default.getResourceElement(item));
	      }
	    });
	  } else {
	    cardResourcesResources.innerHTML = 'Nothig left, but hope';
	    cardResourcesProduct.innerHTML = 'Nothig left, but hope';
	  }
	};
	
	var onCardResourcesReturnBtn = function onCardResourcesReturnBtn() {
	  cardResources.classList.add('d-none');
	  listCardsCard.classList.remove('d-none');
	  getCards();
	};
	
	cardResourcesReturnBtn.addEventListener('click', onCardResourcesReturnBtn);
	
	var onListCardBodyClick = function onListCardBodyClick(evt) {
	
	  if (evt) {
	
	    cardResources.classList.remove('d-none');
	    listCardsCard.classList.add('d-none');
	
	    var currentStringElement = evt.target;
	    while (!currentStringElement.dataset.cardId) {
	      currentStringElement = currentStringElement.parentNode;
	    }
	
	    var currentCardName = cardData.data[currentStringElement.dataset.cardIndex].name;
	    cardName.innerHTML = currentCardName;
	    _storage2.default.currentCardName = currentCardName;
	    _storage2.default.currentCardId = currentStringElement.dataset.cardId;
	  }
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card/' + _storage2.default.currentCardId + '/card_info',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessCardResourcesLoad
	  };
	};
	
	listCardBody.addEventListener('click', onListCardBodyClick);
	
	var onSuccessCardsLoad = function onSuccessCardsLoad(loadedCards) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  console.log(loadedCards);
	  cardData = loadedCards;
	  _catalogCards2.default.drawDataInContainer(loadedCards.data);
	};
	
	var getCards = function getCards() {
	  listCardBody.innerHTML = loaderSpinnerMarkup;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessCardsLoad
	  };
	};
	
	var onSuccessCardResourcesDelete = function onSuccessCardResourcesDelete(answer) {
	  console.log(answer);
	
	  onCardResourcesReturnBtn();
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 <b>' + _storage2.default.currentCardName + '</b> \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430'
	  };
	};
	
	var setRequestToDeleteCardResources = function setRequestToDeleteCardResources(evt) {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card/' + _storage2.default.currentCardId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessCardResourcesDelete
	  };
	};
	
	var onCardResourcesDeleteBtnClick = function onCardResourcesDeleteBtnClick(evt) {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 <b>' + _storage2.default.currentCardName + '</b>?',
	    submitCallback: setRequestToDeleteCardResources
	  };
	};
	
	cardResourcesDeleteBtn.addEventListener('click', onCardResourcesDeleteBtnClick);
	
	var setRequestToAddCard = function setRequestToAddCard(name) {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card',
	    data: 'name=' + name + '&token=' + _storage2.default.data.token,
	    callbackSuccess: getCards
	  };
	};
	
	var setupUniversalAdd = function setupUniversalAdd() {
	  _tools2.default.runUniversalAdd = {
	    title: 'Создание карточки (БЕЗ ВАЛИДАЦИИ)',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    submitBtnName: 'Создать',
	    submitCallback: setRequestToAddCard
	  };
	};
	
	var setRequestToAddEditCard = function setRequestToAddEditCard(name) {
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card/' + _storage2.default.currentCardId,
	    data: 'name=' + name + '&token=' + _storage2.default.data.token,
	    callbackSuccess: function callbackSuccess() {
	      cardName.innerHTML = name;
	      _storage2.default.currentCardName = name;
	    }
	  };
	};
	
	var setupUniversalAddEdit = function setupUniversalAddEdit() {
	  _tools2.default.runUniversalAdd = {
	    title: 'Редактирование карточки (БЕЗ ВАЛИДАЦИИ)',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    inputValue: _storage2.default.currentCardName,
	    submitBtnName: 'Изменить',
	    submitCallback: setRequestToAddEditCard
	  };
	};
	
	listCardAddBtn.addEventListener('click', setupUniversalAdd);
	listCardEditBtn.addEventListener('click', setupUniversalAddEdit);
	
	exports.default = {
	  start: function start() {
	    listCards.addEventListener('click', getCards);
	  },
	
	
	  redraw: onListCardBodyClick,
	
	  stop: function stop() {
	    _catalogCards2.default.cleanContainer();
	    listCards.removeEventListener('click', getCards);
	  }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var listCardsBody = document.querySelector('#list-cards-card-body');
	// import auth from '../tools/storage.js';
	
	exports.default = {
	  cleanContainer: function cleanContainer() {
	    listCardsBody.innerHTML = '';
	  },
	  getElement: function getElement(item, index) {
	    // const currentEnterpriseFlag = (item.b_id === auth.data['currentBusiness']) ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	    // ${currentEnterpriseFlag}
	
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-card-id="' + item.id + '" data-card-index="' + index + '"">\n      <div style="padding-left: 34px;">\n        <span class="reference-row-number">' + (index + 1) + '</span> ||\n        <span>' + item.name + '</span> ||\n        <span>' + item.id + '</span> ||\n      </div>\n      <div class="d-flex justify-content-between align-items-center">\n      </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(cardsData) {
	    var _this = this;
	
	    cardsData.forEach(function (item, index) {
	      return listCardsBody.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	    });
	  },
	  getResourceElement: function getResourceElement(item) {
	    // const currentEnterpriseFlag = (item.b_id === auth.data['currentBusiness']) ? '<div class="p-0 bg-white icon icon__check"></div>' : '';
	    // ${currentEnterpriseFlag}
	
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-card-id="' + item.good_id + '"">\n      <div style="padding-left: 34px;">\n        <span>' + item.good_id + '</span> ||\n        <span>' + item.name + '</span> ||\n        <span>' + item.value + '</span> ||\n      </div>\n      <div class="d-flex justify-content-between align-items-center">\n      </div>\n    </div>';
	  },
	  drawMarkupInContainer: function drawMarkupInContainer(markup) {
	    listCardsBody.insertAdjacentHTML('beforeend', markup);
	  }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalogCards = __webpack_require__(48);
	
	var _catalogCards2 = _interopRequireDefault(_catalogCards);
	
	var _tools = __webpack_require__(6);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogGroups = __webpack_require__(35);
	
	var _catalogGroups2 = _interopRequireDefault(_catalogGroups);
	
	var _catalogGroupsGoods = __webpack_require__(38);
	
	var _catalogGroupsGoods2 = _interopRequireDefault(_catalogGroupsGoods);
	
	var _universalKeywords = __webpack_require__(31);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listSearch = document.querySelector('#list-search-list');
	var listSearchBody = document.querySelector('#list-search-card-body');
	var listSearchBtn = document.querySelector('#list-search-btn');
	var listSearchForm = document.querySelector('#list-search-form');
	var listSearchInput = document.querySelector('#list-search-input');
	
	var listSearchKeywordsBtn = document.querySelector('#list-search-keywords-btn');
	var listSearchKeywordsModal = document.querySelector('#search-card-keywords');
	var listSearchKeywordsModalBody = document.querySelector('#search-card-keywords-body');
	var listSearchKeywordsResetBtn = document.querySelector('#list-search-card-reset-btn');
	var listSearchKeywordsModalSubmit = document.querySelector('#search-card-keywords-submit');
	
	var listSearchBarcodeBtn = document.querySelector('#list-search-card-barcode-btn');
	
	var loaderSpinnerId = 'loader-cards';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var fullSearch = [];
	
	var drawResult = function drawResult(selectedData) {
	  listSearchBody.innerHTML = '';
	  if (selectedData.length) {
	    selectedData.forEach(function (item, index) {
	      return listSearchBody.insertAdjacentHTML('beforeend', _catalogGroups2.default.getGoodString(item, index));
	    });
	  } else {
	    listSearchBody.innerHTML = '\u041D\u0435 \u0437\u0430\u0432\u0435\u0437\u043B\u0438 \u043F\u043E\u043A\u0430 <b>' + listSearchInput.value + '</b>, \u0445\u043E\u0442\u044F \u0438 \u0436\u0434\u0430\u043B\u0438 \u043D\u0430\u043C\u0435\u0434\u043D\u0438...';
	  }
	};
	
	var onlistSearchFormSubmit = function onlistSearchFormSubmit(evt) {
	  evt.preventDefault();
	  listSearchBody.innerHTML = '';
	  var selectedData = [];
	  console.log(!listSearchInput.value);
	  if (!listSearchInput.value) {
	    listSearchBody.innerHTML = 'Ну скажите хоть что-нибудь...';
	  } else {
	    fullSearch.data.forEach(function (item) {
	      if (item.name.toLowerCase().indexOf(listSearchInput.value.toLowerCase()) !== -1) {
	        selectedData.push(item);
	      }
	    });
	    drawResult(selectedData);
	  }
	};
	
	var onSuccessFullSearchLoad = function onSuccessFullSearchLoad(fullSearchLoad) {
	  console.log(fullSearchLoad);
	  fullSearch = fullSearchLoad;
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (fullSearchLoad.status === 271) {
	    listSearchBody.innerHTML = fullSearchLoad.message;
	  }
	  listSearchBody.innerHTML = '';
	};
	
	var getFullSearch = function getFullSearch() {
	  listSearchBody.innerHTML = loaderSpinnerMarkup;
	  console.log(listSearchInput);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good_full_list',
	    data: 'token=' + _storage2.default.data.token + '&name=' + listSearchInput.value,
	    callbackSuccess: onSuccessFullSearchLoad
	  };
	};
	
	var onSuccessKeywordSearch = function onSuccessKeywordSearch(keywordSearchData) {
	  console.log(keywordSearchData);
	  if (keywordSearchData.status === 271) {
	    listSearchBody.innerHTML = 'Ключевые слова: ' + keywordSearchData.message;
	    getFullSearch();
	    listSearchInput.value = '';
	  } else {
	    listSearchBody.innerHTML = '';
	    drawResult(keywordSearchData.data);
	    fullSearch = keywordSearchData;
	    listSearchInput.value = '';
	  }
	};
	
	var selectedKeywords = [];
	
	listSearchKeywordsModalSubmit.addEventListener('click', function () {
	  listSearchBody.innerHTML = loaderSpinnerMarkup;
	  var selectedKeywordsNodes = listSearchKeywordsModalBody.querySelectorAll('.keyword:not(.keyword__mute)');
	  selectedKeywords = [];
	  selectedKeywordsNodes.forEach(function (keywordNode) {
	    return selectedKeywords.push(keywordNode.dataset.keywordId);
	  });
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good_search',
	    data: 'token=' + _storage2.default.data.token + '&tags=[' + selectedKeywords + ']',
	    callbackSuccess: onSuccessKeywordSearch
	  };
	});
	
	// обработчик клика по ключевому слову (пока внутри карточки связей "товар-слово")
	var onKeywordClick = function onKeywordClick(evt) {
	  return evt.target.classList.toggle('keyword__mute');
	};
	
	// установка прозрачности
	var keywordModificator = function keywordModificator(keywordId, keywordNode) {
	  if (selectedKeywords.every(function (tagItem) {
	    return tagItem !== keywordId;
	  })) {
	    keywordNode.classList.add('keyword__mute');
	  }
	};
	
	listSearchKeywordsBtn.addEventListener('click', function () {
	  _universalKeywords2.default.downloadAndDraw(listSearchKeywordsModalBody, onKeywordClick, keywordModificator);
	  $(listSearchKeywordsModal).modal('show');
	  listSearchKeywordsResetBtn.removeAttribute('disabled');
	});
	
	listSearchKeywordsResetBtn.addEventListener('click', function () {
	  selectedKeywords = [];
	  listSearchInput.value = '';
	  getFullSearch();
	  listSearchKeywordsResetBtn.setAttribute('disabled', 'disabled');
	});
	
	var onBarcodeSuccessLoad = function onBarcodeSuccessLoad(barcodeResult) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  $('#universal-add').on('hidden.bs.modal', function (e) {
	    console.log(barcodeResult.data.length);
	    if (barcodeResult.data.length === 1) {
	      _storage2.default.currentGoodId = barcodeResult.data[0].id;
	      _catalogGroupsGoods2.default.fill();
	      barcodeResult.data = 0;
	    } else if (barcodeResult.data.length > 1) {
	      drawResult(barcodeResult.data);
	    }
	  });
	};
	
	var setRequestToFindBarcode = function setRequestToFindBarcode(barcode) {
	  listSearchBody.innerHTML = loaderSpinnerMarkup;
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good_search',
	    data: 'token=' + _storage2.default.data.token + '&barcode=' + barcode,
	    callbackSuccess: onBarcodeSuccessLoad
	  };
	};
	
	listSearchBarcodeBtn.addEventListener('click', function () {
	  selectedKeywords = [];
	  listSearchInput.value = '';
	  _tools2.default.runUniversalAdd = {
	    title: 'Поиск по штрихкоду',
	    inputLabel: 'Штрихкод',
	    inputPlaceholder: 'введите штрихкод',
	    submitBtnName: 'Поиск',
	    submitCallback: setRequestToFindBarcode
	  };
	});
	
	var onListSearchBodyClick = function onListSearchBodyClick(evt) {
	
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.goodId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	
	  _storage2.default.currentGoodId = currentStringElement.dataset.goodId;
	  _catalogGroupsGoods2.default.fill();
	};
	
	listSearchBody.addEventListener('click', onListSearchBodyClick);
	
	exports.default = {
	  start: function start() {
	    // listSearchBtn.addEventListener('click', getSearch);
	    // listSearchForm.addEventListener('submit', getSearch);
	    listSearchBtn.addEventListener('click', onlistSearchFormSubmit);
	    listSearchForm.addEventListener('submit', onlistSearchFormSubmit);
	    listSearch.addEventListener('click', getFullSearch);
	  },
	
	
	  // redraw: onListCardBodyClick,
	
	  stop: function stop() {
	    _catalogCards2.default.cleanContainer();
	    // listSearchBtn.removeEventListener('click', getSearch);
	  }
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalog__cards = __webpack_require__(47);
	
	var _catalog__cards2 = _interopRequireDefault(_catalog__cards);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addResourcesModal = document.querySelector('#add-resources-modal'); // Экспресс-операция БЕЗ ВАЛИДАЦИИ
	
	var addResourcesModalForm = document.querySelector('#add-resources-modal-form');
	var addResourcesModalSubmit = document.querySelector('#add-resources-modal-submit');
	var addResourcesModalQuantity = document.querySelector('#add-resources-modal-quantity');
	
	/*
	const expressModal = document.querySelector('#express-modal');
	const expressModalPrice = document.querySelector('#express-modal-price');
	*/
	
	var onSuccessExpressExecute = function onSuccessExpressExecute(answer) {
	  console.log(answer);
	  $(addResourcesModal).modal('hide');
	  _catalog__cards2.default.redraw();
	};
	
	var onExpressModalSubmit = function onExpressModalSubmit(evt) {
	  evt.preventDefault();
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/nomenclature_card/' + _storage2.default.currentCardId + '/compare',
	    data: 'good=' + _storage2.default.currentGoodId + '&value=' + addResourcesModalQuantity.value * +_storage2.default.currentCardOperation + '&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessExpressExecute
	  };
	};
	
	var start = function start() {
	  addResourcesModalSubmit.removeAttribute('disabled');
	  addResourcesModalForm.addEventListener('submit', onExpressModalSubmit);
	};
	
	var stop = function stop() {
	  addResourcesModalSubmit.addAttribute('disabled', 'disabled');
	  addResourcesModalForm.addEventListener('submit', onExpressModalSubmit);
	};
	
	exports.default = {
	  start: start,
	  stop: stop
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map