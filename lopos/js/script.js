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
	
	var _permissions = __webpack_require__(2);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _log = __webpack_require__(15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _online__profile = __webpack_require__(17);
	
	var _online__profile2 = _interopRequireDefault(_online__profile);
	
	var _reference__enterprises = __webpack_require__(19);
	
	var _reference__enterprises2 = _interopRequireDefault(_reference__enterprises);
	
	var _reference__enterprisesAdd = __webpack_require__(21);
	
	var _reference__enterprisesAdd2 = _interopRequireDefault(_reference__enterprisesAdd);
	
	var _reference__enterprisesEdit = __webpack_require__(22);
	
	var _reference__enterprisesEdit2 = _interopRequireDefault(_reference__enterprisesEdit);
	
	var _reference__points = __webpack_require__(23);
	
	var _reference__points2 = _interopRequireDefault(_reference__points);
	
	var _reference__pointsAdd = __webpack_require__(25);
	
	var _reference__pointsAdd2 = _interopRequireDefault(_reference__pointsAdd);
	
	var _reference__pointsEdit = __webpack_require__(26);
	
	var _reference__pointsEdit2 = _interopRequireDefault(_reference__pointsEdit);
	
	var _reference__contractors = __webpack_require__(27);
	
	var _reference__contractors2 = _interopRequireDefault(_reference__contractors);
	
	var _reference__contractorsAdd = __webpack_require__(30);
	
	var _reference__contractorsAdd2 = _interopRequireDefault(_reference__contractorsAdd);
	
	var _reference__keywords = __webpack_require__(31);
	
	var _reference__keywords2 = _interopRequireDefault(_reference__keywords);
	
	var _reference__keywordsAdd = __webpack_require__(33);
	
	var _reference__keywordsAdd2 = _interopRequireDefault(_reference__keywordsAdd);
	
	var _reference__keywordsEdit = __webpack_require__(34);
	
	var _reference__keywordsEdit2 = _interopRequireDefault(_reference__keywordsEdit);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	var _reference__debitCredit = __webpack_require__(51);
	
	var _reference__debitCredit2 = _interopRequireDefault(_reference__debitCredit);
	
	var _operations__manufacture = __webpack_require__(53);
	
	var _operations__manufacture2 = _interopRequireDefault(_operations__manufacture);
	
	var _operations__balance = __webpack_require__(56);
	
	var _operations__balance2 = _interopRequireDefault(_operations__balance);
	
	var _operations__inventory = __webpack_require__(57);
	
	var _operations__inventory2 = _interopRequireDefault(_operations__inventory);
	
	var _online__users = __webpack_require__(58);
	
	var _online__users2 = _interopRequireDefault(_online__users);
	
	var _accounting__allDocs = __webpack_require__(59);
	
	var _accounting__allDocs2 = _interopRequireDefault(_accounting__allDocs);
	
	var _catalog__cards = __webpack_require__(61);
	
	var _catalog__cards2 = _interopRequireDefault(_catalog__cards);
	
	var _catalog__search = __webpack_require__(64);
	
	var _catalog__search2 = _interopRequireDefault(_catalog__search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Отправка без валидации
	// import cardsResourcesButton from './buttons/catalog__cards--add-resource.js';
	
	// import goodsButtonFormEdit from './buttons/catalog__goods--edit.js';
	console.log('3D3 (07.02.18_13:30)');
	console.log('ver: 4А1');
	
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
	
	var mainMenuButtons = [_online__profile2.default, _log2.default, _reference__enterprises2.default, _reference__points2.default, _reference__contractors2.default, _reference__keywords2.default, _catalog__groups2.default, _catalog__cards2.default,
	// cardsResourcesButton,
	_catalog__search2.default, _reference__debitCredit2.default, _operations__manufacture2.default, _operations__balance2.default, _operations__inventory2.default, _online__users2.default, _accounting__allDocs2.default];
	
	// ========== ОБНОВЛЕНИЕ/ОТКРЫТИЕ СТРАНИЦЫ ==========
	var start = function start() {
	  if (_storage2.default.isSetFlag) {
	    showAppHideLogin();
	    initMarkup();
	    hashObserver();
	    mainMenuButtons.forEach(function (item) {
	      return item.start();
	    });
	    _reference__enterprisesAdd2.default.start();
	    _reference__enterprisesEdit2.default.start();
	    _reference__pointsAdd2.default.start();
	    _reference__pointsEdit2.default.start();
	    _reference__contractorsAdd2.default.start();
	    _reference__keywordsAdd2.default.start();
	    _reference__keywordsEdit2.default.start();
	
	    _permissions2.default.read();
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
	
	  // отдельные сеттеры для бизнеса и склада
	  set currentBusiness(id) {
	    localStorage.setItem('currentBusiness', id);
	  },
	
	  set currentStock(id) {
	    localStorage.setItem('currentStock', id);
	  },
	
	  // работа с правами доступа
	  set currentScreen(screen) {
	    sessionStorage.setItem('currentScreen', screen);
	  },
	
	  get currentScreen() {
	    return sessionStorage.getItem('currentScreen');
	  },
	
	  set permissions(data) {
	    localStorage.setItem('permissions', data.map(function (item) {
	      return item.kod_operation;
	    }).join());
	  },
	
	  get permissions() {
	    return localStorage.getItem('permissions');
	  },
	
	  // проверка хранилища
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
	
	  set currentGroupLevel(level) {
	    sessionStorage.setItem('currentGroupLevel', level);
	  },
	
	  get currentGroupLevel() {
	    return sessionStorage.getItem('currentGroupLevel');
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
	    return Number(sessionStorage.getItem('currentStockQuantityT2')).toFixed(2);
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
	  },
	
	  set searchMode(type) {
	    sessionStorage.setItem('searchMode', type);
	  },
	
	  get searchMode() {
	    return sessionStorage.getItem('searchMode');
	  },
	
	  set goodListOperationType(type) {
	    sessionStorage.setItem('goodListOperationType', type);
	  },
	
	  get goodListOperationType() {
	    return sessionStorage.getItem('goodListOperationType');
	  },
	
	  set groupListOperationType(type) {
	    sessionStorage.setItem('groupListOperationType', type);
	  },
	
	  get groupListOperationType() {
	    return sessionStorage.getItem('groupListOperationType');
	  },
	
	  set debitCreditType(type) {
	    sessionStorage.setItem('debitCreditType', type);
	  },
	
	  get debitCreditType() {
	    return sessionStorage.getItem('debitCreditType');
	  },
	
	  set debitCreditName(name) {
	    sessionStorage.setItem('debitCreditName', name);
	  },
	
	  get debitCreditName() {
	    return sessionStorage.getItem('debitCreditName');
	  },
	
	  set debitCreditId(id) {
	    sessionStorage.setItem('debitCreditId', id);
	  },
	
	  get debitCreditId() {
	    return sessionStorage.getItem('debitCreditId');
	  },
	
	  set currentUserId(id) {
	    sessionStorage.setItem('currentUserId', id);
	  },
	
	  get currentUserId() {
	    return sessionStorage.getItem('currentUserId');
	  },
	
	  set allDocsOperationType(type) {
	    sessionStorage.setItem('allDocsOperationType', type);
	  },
	
	  get allDocsOperationType() {
	    return sessionStorage.getItem('allDocsOperationType');
	  },
	
	  set currentBillId(id) {
	    sessionStorage.setItem('currentBillId', id);
	  },
	
	  get currentBillId() {
	    return sessionStorage.getItem('currentBillId');
	  }
	
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Пользовательские права доступа на чтение в зависимости от кодов
	var permissionEngToRus = {
	
	  // операции
	  'receipt': 'Операции/Поступление',
	  'sell': 'Операции/Продажа',
	  'inventory': 'Операции/Инвентаризация',
	  'balance': 'Операции/Балансовые операции',
	  'manufacture': 'Операции/Производство',
	
	  // каталог
	  'groups': 'Каталог/Группы товаров',
	  'cards': 'Каталог/Производственные карточки',
	
	  // учет
	  'docs': 'Учет/Все документы',
	  'reports': 'Учет/Отчеты и аналитика',
	
	  // справочники
	  'contractor-suppliers': 'Справочники/Поставщики',
	  'contractor-buyers': 'Справочники/Покупатели',
	  'points': 'Справочники/Точки продаж',
	  'keywords': 'Справочники/Ключевые слова',
	  'enterprises': 'Справочники/Предприятия',
	  'debit': 'Справочники/Категории доходов',
	  'credit': 'Справочники/Категории расходов',
	
	  // журнал
	  'log': 'Журнал/Журнал операций'
	};
	
	var permissionRead = {
	
	  // операции
	  'receipt': 111,
	  'sell': 121,
	  'inventory': 141,
	  'balance': 131,
	  'manufacture': 181,
	
	  // каталог
	  'groups': 221,
	  'cards': 231,
	
	  // учет
	  'docs': 321,
	  'reports': 331,
	
	  // справочники
	  'contractor-suppliers': 411,
	  'contractor-buyers': 421,
	  'points': 431,
	  'keywords': 441,
	  'enterprises': 511,
	  'debit': 451,
	  'credit': 461,
	
	  // журнал
	  'log': 541
	};
	
	/*
	const permissionEdit = {
	
	  // каталог
	  'groups': 222,
	  'cards': 232,
	
	  // учет
	  'docs': 322,
	
	  // справочники
	  'contractor-suppliers': 412,
	  'contractor-buyers': 422,
	  'points': 432,
	  'keywords': 442,
	  'enterprises': 512,
	  'debit': 452,
	  'credit': 462,
	};
	*/
	
	var permissionReadAdminOnly = ['users', 'support'];
	
	var read = function read() {
	  if (_storage2.default.data.operatorId !== '1') {
	    Object.keys(permissionRead).forEach(function (itemId) {
	      return document.querySelector('#list-' + itemId + '-list').classList.remove('disabled');
	    });
	    Object.keys(permissionRead).forEach(function (itemId) {
	      return !_storage2.default.permissions.includes(permissionRead[itemId]) && document.querySelector('#list-' + itemId + '-list').classList.add('disabled');
	    });
	    permissionReadAdminOnly.forEach(function (itemId) {
	      return document.querySelector('#list-' + itemId + '-list').classList.add('disabled');
	    });
	  } else {
	    Object.keys(permissionRead).forEach(function (itemId) {
	      return document.querySelector('#list-' + itemId + '-list').classList.remove('disabled');
	    });
	    permissionReadAdminOnly.forEach(function (itemId) {
	      return document.querySelector('#list-' + itemId + '-list').classList.remove('disabled');
	    });
	  }
	};
	
	exports.default = {
	  read: read,
	  permissionRead: permissionRead,
	  permissionEngToRus: permissionEngToRus
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _form_login = __webpack_require__(4);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _form_register = __webpack_require__(9);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	var _form_confirm_email = __webpack_require__(11);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _form_forgot = __webpack_require__(13);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	var _captcha = __webpack_require__(8);
	
	var _captcha2 = _interopRequireDefault(_captcha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sectionLoginFormMain = document.querySelector('#sectionLoginFormMain');
	
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
	  _captcha2.default.init();
	  // globalAlert.innerHTML = '';
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _login = __webpack_require__(5);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _captcha = __webpack_require__(8);
	
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _form_login = __webpack_require__(4);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validId = window.appSettings.loginValid.id;
	var validEmail = window.appSettings.loginValid.email;
	var validPassword = window.appSettings.loginValid.password;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _form_login2.default.addCaptchaCount();
	  _main_login_window2.default.hideProgress('loginButtonSubmit', 'loginProgress');
	
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	
	      _tools2.default.informationtModal = {
	        'title': 'ОШИБКА: ',
	        'message': window.appSettings.messages.responseStatus.res0
	      };
	    } else {
	      _storage2.default.data = response.data;
	      _storage2.default.permissions = response.data.list_of_permissions;
	      document.dispatchEvent(new Event('loginSuccess'));
	    }
	  } else {
	    _tools2.default.informationtModal = {
	      'title': 'ОШИБКА: ',
	      'message': response.message
	    };
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('loginButtonSubmit', 'loginProgress');
	};
	
	var getRequestDataEmail = function getRequestDataEmail(userLogin, userPassword) {
	  // let dataApi = `email=${userLogin}&deviceToken=-&password=${userPassword}`;
	  var requestData = new FormData();
	  requestData.append('email', userLogin);
	  requestData.append('deviceToken', '-');
	  requestData.append('password', userPassword);
	
	  return {
	    url: window.appSettings.loginUrlApi.email,
	    metod: 'POST',
	    data: requestData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  };
	};
	
	var getRequestDataId = function getRequestDataId(userLogin, userPassword) {
	
	  var folder = userLogin.substr(0, 8);
	  var operator = userLogin.substr(8);
	
	  var urlApi = window.appSettings.loginUrlApi.id.replace('{{dir}}', folder);
	  urlApi = urlApi.replace('{{oper}}', operator);
	  // let requestData = new FormData();
	  // requestData.append('password', userPassword);
	  var requestData = 'password=' + userPassword;
	
	  return {
	    url: urlApi,
	    metod: 'POST',
	    data: requestData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  set request(parameters) {
	    var xhr = void 0;
	    var messages = window.appSettings.messages;
	
	    // mess - сообщение, type = true/false - сообщение/ошибка
	    var setMessage = function setMessage(mess, type) {
	      _tools2.default.informationtModal = {
	        'title': type ? 'MESSAGE: ' : 'ERROR: ',
	        'message': mess,
	        'isMess': type
	      };
	    };
	
	    var setError = function setError(msg) {
	      setMessage(msg, false);
	      // Если есть errorCallback - вызываем
	      if (parameters.callbackError && typeof parameters.callbackError === 'function') {
	        parameters.callbackError();
	      }
	    };
	
	    var parseRespCodes = function parseRespCodes(response) {
	      switch (response.status) {
	        case 200:
	          parameters.callbackSuccess(response);
	          break;
	        case 270:
	          setMessage(response.message, true);
	          parameters.callbackSuccess(response);
	          break;
	        case 271:
	          setError(response.message);
	          break;
	        case 272:
	          parameters.callbackSuccess(response);
	          break;
	        case 273:
	          setError(response.message);
	          break;
	        case 280:
	          setMessage(response.message, false);
	          document.dispatchEvent(new Event('authError'));
	          break;
	        case 281:
	          parameters.callbackSuccess(response);
	          break;
	        case 400:
	          setError(messages.responseStatus.res400);
	          break;
	      }
	    };
	
	    var xhrLoadHandler = function xhrLoadHandler() {
	      if (xhr.readyState === 4) {
	        if (xhr.status === 200) {
	          var response = '';
	
	          try {
	            response = JSON.parse(xhr.response);
	          } catch (error) {
	            // Вывод ошибки парсинга
	            setError(messages.xhrJsonError);
	          }
	
	          // Разбираем коды ответа APILopos
	          parseRespCodes(response);
	        } else {
	          // Внутренняя ошибка HTTP
	          setError(messages.xhrError);
	        }
	      }
	    };
	
	    var xhrErrorHandler = function xhrErrorHandler() {
	      // Ошибка, которую возвращает сервер
	      setError(messages.xhrError);
	    };
	
	    var xhrTimeoutHandler = function xhrTimeoutHandler() {
	      // Ошибка, которую возвращает сервер
	      setError(messages.xhrTimeoutError);
	    };
	
	    // const xhrRun = () => {
	    xhr = new XMLHttpRequest();
	
	    xhr.addEventListener('load', xhrLoadHandler);
	    // Слушаем событие ошибки XHR
	    xhr.addEventListener('error', xhrErrorHandler);
	    // Слушаем событие таймаута связи
	    xhr.addEventListener('timeout', xhrTimeoutHandler);
	
	    xhr.timeout = window.appSettings.xhrSettings.timeout;
	    xhr.open(parameters.metod, window.appSettings.xhrSettings.urlApi + parameters.url, true);
	    xhr.send(parameters.data);
	    // };
	
	    // xhrRun();
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var modalActionRequest = document.querySelector('#modal-action-request');
	var modalActionRequestTitle = modalActionRequest.querySelector('#modal-action-request-title');
	var modalActionRequestMessage = modalActionRequest.querySelector('#modal-action-request-message');
	var modalActionRequestSubmit = modalActionRequest.querySelector('#modal-action-request-submit');
	
	var modalUniversalAdd = document.querySelector('#universal-add');
	var modalUniversalAddLabel = document.querySelector('#universal-add-label');
	var modalUniversalAddForm = document.querySelector('#universal-add-form');
	var modalUniversalAddName = document.querySelector('#universal-add-name');
	var modalUniversalAddNameLabel = document.querySelector('#universal-add-name-label');
	var modalUniversalAddSubmit = document.querySelector('#universal-add-submit');
	
	var modalUniversalMicro = document.querySelector('#universal-modal-micro');
	var modalUniversalMicroLabel = document.querySelector('#universal-modal-micro-label');
	var modalUniversalMicroForm = document.querySelector('#universal-modal-micro-form');
	var modalUniversalMicroName = document.querySelector('#universal-modal-micro-name');
	var modalUniversalMicroNameLabel = document.querySelector('#universal-modal-micro-name-label');
	var modalUniversalMicroSubmit = document.querySelector('#universal-modal-micro-submit');
	
	var alertBlock = document.querySelector('#alertBlock');
	
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
	
	    var type = setup.isMess === true ? 'alert-success' : 'alert-danger';
	
	    alertBlock.innerHTML = alertBlock.innerHTML + ('<div id="alert" class="alert ' + type + ' fade show" role="alert">\n        <strong>' + setup.title + ' </strong> ' + setup.message + '\n        <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>');
	    window.setTimeout(function () {
	      var block = alertBlock.firstChild;
	      if (block) {
	        block.remove();
	      }
	    }, 2000);
	  },
	
	  set runUniversalAdd(setup) {
	    var requestHandler = function requestHandler(evt) {
	      evt.preventDefault();
	      setup.submitCallback(modalUniversalAddName.value);
	      modalUniversalAddForm.removeEventListener('submit', requestHandler);
	      $(modalUniversalAdd).modal('hide');
	    };
	
	    $(modalUniversalAdd).modal('show');
	    $(modalUniversalAdd).on('shown.bs.modal', function () {
	      $('#universal-add-name').trigger('focus');
	    });
	    modalUniversalAddLabel.innerHTML = setup.title;
	    modalUniversalAddNameLabel.innerHTML = setup.inputLabel;
	    modalUniversalAddName.setAttribute('placeholder', setup.inputPlaceholder);
	    modalUniversalAddName.value = setup.inputValue ? setup.inputValue : '';
	    modalUniversalAddSubmit.innerHTML = setup.submitBtnName;
	  },
	
	  set runUniversalModalMicro(setup) {
	    var requestHandler = function requestHandler(evt) {
	      evt.preventDefault();
	      setup.submitCallback(modalUniversalAddName.value);
	      modalUniversalAddForm.removeEventListener('submit', requestHandler);
	    };
	
	    $(modalUniversalMicro).modal('show');
	    $(modalUniversalMicro).on('shown.bs.modal', function () {
	      $(modalUniversalMicro).trigger('focus');
	    });
	    modalUniversalMicroLabel.innerHTML = setup.title;
	    modalUniversalMicroNameLabel.innerHTML = setup.inputLabel;
	    modalUniversalMicroName.setAttribute('placeholder', setup.inputPlaceholder);
	    modalUniversalMicroName.value = setup.inputValue ? setup.inputValue : '';
	    modalUniversalMicroSubmit.innerHTML = setup.submitBtnName;
	    modalUniversalMicroForm.addEventListener('submit', requestHandler);
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _form_register = __webpack_require__(9);
	
	var _form_register2 = _interopRequireDefault(_form_register);
	
	var _form_login = __webpack_require__(4);
	
	var _form_login2 = _interopRequireDefault(_form_login);
	
	var _form_confirm_email = __webpack_require__(11);
	
	var _form_confirm_email2 = _interopRequireDefault(_form_confirm_email);
	
	var _form_forgot = __webpack_require__(13);
	
	var _form_forgot2 = _interopRequireDefault(_form_forgot);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var captchaErrorCallback = function captchaErrorCallback(response) {
	  window.captchaErr = true;
	
	  _tools2.default.informationtModal = {
	    title: 'ОШИБКА: ',
	    message: window.appSettings.messages.captchaError
	  };
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _register = __webpack_require__(10);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _captcha = __webpack_require__(8);
	
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var regVal = window.appSettings.registerValid;
	var regUrlApi = window.appSettings.registerUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	
	  _main_login_window2.default.hideProgress('registerButtonSubmit', 'registerProgress');
	  switch (response.status) {
	
	    case 200:
	      _tools2.default.informationtModal = {
	        'title': 'MESSAGE: ',
	        'message': response.message,
	        'isMess': true
	      };
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
	  // let requestData = `email=${email}&phone=&password=${password}&nickname=${name}&prefer_language=ru`;
	  var requestData = new FormData();
	  requestData.append('email', email);
	  requestData.append('phone', '');
	  requestData.append('password', password);
	  requestData.append('nickname', name);
	  requestData.append('prefer_language', 'ru');
	
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _confirm_email = __webpack_require__(12);
	
	var _confirm_email2 = _interopRequireDefault(_confirm_email);
	
	var _captcha = __webpack_require__(8);
	
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var kodVal = window.appSettings.confirmEmailKodValid;
	var urlApi = window.appSettings.confirmEmailUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _main_login_window2.default.hideProgress('emailConfirmButtonSubmit', 'confirmProgress');
	
	  if (response.status === 200) {
	    if (response.data.status === '0') {
	
	      _tools2.default.informationtModal = {
	        'title': 'ОШИБКА: ',
	        'message': window.appSettings.messages.responseStatus.res0
	      };
	    } else {
	      _storage2.default.data = response.data;
	      document.dispatchEvent(new Event('loginSuccess'));
	    }
	  } else {
	
	    _tools2.default.informationtModal = {
	      'title': 'ОШИБКА: ',
	      'message': response.message
	    };
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('emailConfirmButtonSubmit', 'confirmProgress');
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА: ',
	    'message': window.appSettings.messages.xhrError
	  };
	};
	
	var validateForm = function validateForm(kod) {
	
	  if (kodVal.test(kod)) {
	    return true;
	  }
	  _main_login_window2.default.setError('emailConfirmInputKey', window.appSettings.messages.formValidation.emailConfirm.key);
	  return false;
	};
	
	var getRequestData = function getRequestData(kod, email) {
	
	  // let requestData = `email=${email}&validate_code=${kod}&preferable_language=ru`;
	  var requestData = new FormData();
	  requestData.append('email', email);
	  requestData.append('validate_code', kod);
	  requestData.append('preferable_language', 'ru');
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _forgot = __webpack_require__(14);
	
	var _forgot2 = _interopRequireDefault(_forgot);
	
	var _captcha = __webpack_require__(8);
	
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _main_login_window = __webpack_require__(3);
	
	var _main_login_window2 = _interopRequireDefault(_main_login_window);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emailVal = window.appSettings.forgotEmailValid;
	var urlApi = window.appSettings.forgotUrlApi;
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  _main_login_window2.default.hideProgress('forgotButtonSubmit', 'forgotProgress');
	
	  if (response.status === 400) {
	
	    _tools2.default.informationtModal = {
	      'title': 'ОШИБКА: ',
	      'message': response.message
	    };
	  } else {
	    // зеленое сообщение
	    _tools2.default.informationtModal = {
	      'title': 'УСПЕХ: ',
	      'message': response.message,
	      'isMess': true
	    };
	  }
	};
	
	var callbackXhrError = function callbackXhrError(response) {
	  _main_login_window2.default.hideProgress('forgotButtonSubmit', 'forgotProgress');
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА: ',
	    'message': window.appSettings.messages.xhrError
	  };
	};
	
	var validateForm = function validateForm(email) {
	
	  if (emailVal.test(email)) {
	    return true;
	  }
	  _main_login_window2.default.setError('forgotInputEmail', window.appSettings.messages.formValidation.forgot.email);
	  return false;
	};
	
	var getRequestData = function getRequestData(email) {
	
	  var requestData = new FormData();
	  requestData.append('email', email);
	
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _log = __webpack_require__(16);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _xhr = __webpack_require__(6);
	
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _online__profile = __webpack_require__(18);
	
	var _online__profile2 = _interopRequireDefault(_online__profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  start: function start() {
	    _online__profile2.default.setProfile();
	  },
	  stop: function stop() {
	    _online__profile2.default.clearProfile();
	  }
	};

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _reference__enterprises = __webpack_require__(20);
	
	var _reference__enterprises2 = _interopRequireDefault(_reference__enterprises);
	
	var _tools = __webpack_require__(7);
	
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
	    _reference__enterprises2.default.drawDataInContainer(loadedEnterprises.data);
	  } else {
	    _reference__enterprises2.default.drawMarkupInContainer('<p>' + loadedEnterprises.message + '</p>');
	  }
	};
	
	var onErrorEnterprisesLoad = function onErrorEnterprisesLoad(error) {
	  console.log(error);
	};
	
	var getEnterprises = function getEnterprises() {
	  _reference__enterprises2.default.cleanContainer();
	  _reference__enterprises2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/1',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessEnterprisesLoad,
	    callbackError: onErrorEnterprisesLoad
	  };
	};
	
	var onSuccessNegativeTailingsSwitch = function onSuccessNegativeTailingsSwitch(loadedEnterpriseCard) {
	  return console.log(loadedEnterpriseCard);
	};
	
	listEnterprisesCardNegativeBalanceSwitch.addEventListener('change', function (evt) {
	
	  var value = evt.target.checked ? 1 : 0;
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId + '/meta',
	    data: 'code=12&token=' + _storage2.default.data.token + '&value=' + value,
	    callbackSuccess: onSuccessNegativeTailingsSwitch
	  };
	});
	
	listEnterprisesCardNegativeTailingsSwitch.addEventListener('change', function (evt) {
	
	  var value = evt.target.checked ? 1 : 0;
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId + '/meta',
	    data: 'code=11&token=' + _storage2.default.data.token + '&value=' + value,
	    callbackSuccess: onSuccessNegativeTailingsSwitch
	  };
	});
	
	var enterpriseCheckSuccess = function enterpriseCheckSuccess(answer) {
	  return console.log(answer);
	};
	
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
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.currentEnterpriseId + '/select',
	      data: 'token=' + _storage2.default.data.token,
	      callbackSuccess: enterpriseCheckSuccess
	    };
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
	    _reference__enterprises2.default.cleanContainer();
	    listEnterprises.removeEventListener('click', getEnterprises);
	  }
	};

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__enterprises = __webpack_require__(19);
	
	var _reference__enterprises2 = _interopRequireDefault(_reference__enterprises);
	
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
	      _reference__enterprises2.default.redraw();
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__enterprises = __webpack_require__(19);
	
	var _reference__enterprises2 = _interopRequireDefault(_reference__enterprises);
	
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
	      _reference__enterprises2.default.updateCard();
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _reference__points = __webpack_require__(24);
	
	var _reference__points2 = _interopRequireDefault(_reference__points);
	
	var _tools = __webpack_require__(7);
	
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
	    _reference__points2.default.drawDataInContainer(loadedPoints.data);
	  } else {
	    _reference__points2.default.drawMarkupInContainer('<p>' + loadedPoints.message + '</p>');
	  }
	};
	
	var selectedString = '';
	disableCheckEditButtons();
	
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
	
	var onSuccessPointCheck = function onSuccessPointCheck(answer) {
	  return console.log(answer);
	};
	
	pointsCheckBtn.addEventListener('click', function () {
	  if (!pointsCheckBtn.hasAttribute('disabled')) {
	    _storage2.default.currentStock = selectedString.dataset.stockId;
	    disableCheckEditButtons();
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock/' + _storage2.default.currentStockId + '/select',
	      data: 'token=' + _storage2.default.data.token,
	      callbackSuccess: onSuccessPointCheck
	    };
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
	
	  _reference__points2.default.cleanContainer();
	  _reference__points2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessPointsLoad
	  };
	};
	
	exports.default = {
	  start: function start() {
	    listPoints.addEventListener('click', getPoints);
	  },
	
	
	  redraw: getPoints,
	
	  stop: function stop() {
	    _reference__points2.default.cleanContainer();
	    listPoints.removeEventListener('click', getPoints);
	  }
	};

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__points = __webpack_require__(23);
	
	var _reference__points2 = _interopRequireDefault(_reference__points);
	
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
	      _reference__points2.default.redraw();
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__points = __webpack_require__(23);
	
	var _reference__points2 = _interopRequireDefault(_reference__points);
	
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
	      _reference__points2.default.redraw();
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _reference__contractors = __webpack_require__(28);
	
	var _reference__contractors2 = _interopRequireDefault(_reference__contractors);
	
	var _reference__contractorsCard = __webpack_require__(29);
	
	var _reference__contractorsCard2 = _interopRequireDefault(_reference__contractorsCard);
	
	var _tools = __webpack_require__(7);
	
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
	    _reference__contractorsCard2.default.cleanContainer();
	    if (loadedContractors.data) {
	      _reference__contractors2.default.drawDataInContainer(loadedContractors.data);
	    }
	  } else {
	    _reference__contractors2.default.drawMarkupInContainer('<p>' + loadedContractors.message + '</p>');
	  }
	};
	
	var onErrorContractorsLoad = function onErrorContractorsLoad(error) {
	  console.log(error);
	};
	
	var onSuccessBuyerCardLoad = function onSuccessBuyerCardLoad(loadedBuyerCard) {
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (loadedBuyerCard.status === 200) {
	    console.log(loadedBuyerCard);
	    _reference__contractorsCard2.default.cleanContainer();
	    _reference__contractorsCard2.default.drawDataInContainer(loadedBuyerCard.data);
	  } else {
	    _reference__contractorsCard2.default.drawMarkupInContainer('<p>' + loadedBuyerCard.message + '</p>');
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
	
	  var onListContractorsFormBillClick = function onListContractorsFormBillClick() {
	    hideBodyShowCard();
	    listContractorsCardName.innerHTML = name;
	    listContractorsHeader.classList.remove('d-flex');
	    listContractorsHeader.classList.add('d-none');
	
	    _reference__contractorsCard2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
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
	/*
	 */
	
	var getContractors = function getContractors(type) {
	
	  _storage2.default.currentScreen = Number(type) === ContractorType.SUPPLIER ? 'reference__contractors--Suppliers' : 'reference__contractors--Buyers';
	
	  showBodyHideCard();
	  document.querySelector('#list-contractors').classList.remove('d-none');
	  type = type || _storage2.default.currentContractorType;
	
	  listContractorsHeaderType.innerHTML = Number(type) === ContractorType.SUPPLIER ? _reference__contractors2.default.getSuppliersHeader() : _reference__contractors2.default.getBuyersHeader();
	  listContractorsFormEditLabel.innerHTML = Number(type) === ContractorType.SUPPLIER ? 'Поставщики' : 'Покупатели';
	  _storage2.default.currentContractorType = type;
	
	  _reference__contractors2.default.cleanContainer();
	  _reference__contractors2.default.drawMarkupInContainer(loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/kontr_agent',
	    data: 'view_last=0&token=' + _storage2.default.data.token + '&type=' + type,
	    callbackSuccess: onSuccessContractorsLoad,
	    callbackError: onErrorContractorsLoad
	  };
	
	  $('#contractors-add').on('hidden.bs.modal', function (e) {
	    listContractorsFormBill.classList.add('d-none');
	  });
	
	  $('#contractors-add').on('show.bs.modal', function (e) {
	    listContractorsFormSubmit.innerHTML = _storage2.default.currentContractorOperation === 'edit' ? 'Изменить' : 'Создать';
	  });
	};
	
	exports.default = {
	  start: function start() {
	    listBuyers.addEventListener('click', getContractors.bind(null, ContractorType.BUYER));
	    listSuppliers.addEventListener('click', getContractors.bind(null, ContractorType.SUPPLIER));
	  },
	
	
	  redraw: getContractors,
	
	  stop: function stop() {
	    _reference__contractors2.default.cleanContainer();
	    listBuyers.removeEventListener('click', getContractors);
	    listSuppliers.addEventListener('click', getContractors);
	  }
	};

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var listContractorsCardBody = document.querySelector('#list-contractors-card-body');
	
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
	
	    return '\n    <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n      <div class="media">\n        <img class="mr-3" src="img/' + BillTypes['type' + item.type] + '.png" width="30" alt="Generic placeholder image">\n        <div class="media-body">\n          <b>ID: </b>' + item.id + '\n          <b> \u0421\u0442\u0430\u0442\u0443\u0441: </b>' + item.status + '\n          <b> \u0412\u0440\u0435\u043C\u044F: </b>' + new Date(+(item.time_activity + '000')).toLocaleString() + '\n          <b> \u0412\u0441\u0435\u0433\u043E: </b>' + item.total + '\n          <b> \u0422\u0438\u043F: </b>' + item.type + '\n        </div>\n      </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(buyersCardData) {
	    var _this = this;
	
	    console.log(buyersCardData);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _reference__contractors = __webpack_require__(27);
	
	var _reference__contractors2 = _interopRequireDefault(_reference__contractors);
	
	var _tools = __webpack_require__(7);
	
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
	      _reference__contractors2.default.redraw();
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _universalKeywords = __webpack_require__(32);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listKeywords = document.querySelector('#list-keywords-list');
	var listKeywordsReturnBtn = document.querySelector('#list-keywords-card-return-btn');
	var listKeywordsCardEditRGBForm = document.querySelector('#keywords-card-edit-rgb-form');
	var listKeywordsCardDeleteBtn = document.querySelector('#list-keywords-card-delete-btn');
	var listKeywordsCardEditBtn = document.querySelector('#list-keywords-card-edit-btn');
	var listKeywordsCardEditName = document.querySelector('#keywords-card-edit-name');
	
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__keywords = __webpack_require__(31);
	
	var _reference__keywords2 = _interopRequireDefault(_reference__keywords);
	
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
	      _reference__keywords2.default.update();
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__keywords = __webpack_require__(31);
	
	var _reference__keywords2 = _interopRequireDefault(_reference__keywords);
	
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
	      _reference__keywords2.default.redraw();
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _universalSearch = __webpack_require__(36);
	
	var _universalSearch2 = _interopRequireDefault(_universalSearch);
	
	var _catalog__groupsDelete = __webpack_require__(37);
	
	var _catalog__groupsDelete2 = _interopRequireDefault(_catalog__groupsDelete);
	
	var _catalog__groupsAdd = __webpack_require__(38);
	
	var _catalog__groupsAdd2 = _interopRequireDefault(_catalog__groupsAdd);
	
	var _catalog__goods = __webpack_require__(40);
	
	var _catalog__goods2 = _interopRequireDefault(_catalog__goods);
	
	var _universalGroupsList = __webpack_require__(49);
	
	var _universalGroupsList2 = _interopRequireDefault(_universalGroupsList);
	
	var _catalog__groupsEdit = __webpack_require__(50);
	
	var _catalog__groupsEdit2 = _interopRequireDefault(_catalog__groupsEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var groupsEditForm = document.querySelector('#groups-edit');
	var groupsEditName = document.querySelector('#groups-edit-name');
	
	var listGroups = document.querySelector('#list-groups-list');
	var listGroupsCardAddBtn = document.querySelector('#list-groups-card-add-btn');
	var listGroupsCardDeleteBtn = document.querySelector('#list-groups-card-delete-btn');
	var listGroupsCardEditBtn = document.querySelector('#list-groups-card-edit-btn');
	var listGroupsCard = document.querySelector('#list-groups-card');
	var listGroupsCardBody = document.querySelector('#list-groups-card-body');
	var listGroupsCardCheckMessage = document.querySelector('#list-groups-header-check-message');
	var groupsAddModal = document.querySelector('#groups-add');
	var groupGoodsCard = document.querySelector('#group-goods-card');
	var groupName = document.querySelector('#group-name');
	
	var SELECT_DELAY = 2000;
	
	var loaderSpinnerId = 'loader-groups';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	// ############################## РАБОТА С ГРУППАМИ (СПИСОК) ##############################
	
	var loadedData = [];
	
	// поиск по группам
	var listGroupSearchInput = document.querySelector('#list-groups-search-input');
	listGroupSearchInput.addEventListener('input', function (evt) {
	  _universalGroupsList2.default.draw(_universalSearch2.default.make(loadedData.data, evt.target.value), listGroupsCardBody, onGroupClick);
	});
	
	listGroupsCardAddBtn.addEventListener('click', function () {
	  _catalog__groupsAdd2.default.start(groupsAddModal);
	});
	
	// обработка успеха загрузки групп
	var onSuccessGroupsLoad = function onSuccessGroupsLoad(loadedGroups) {
	  loadedData = loadedGroups;
	  document.querySelector('#' + loaderSpinnerId).remove();
	  _universalGroupsList2.default.draw(loadedGroups.data, listGroupsCardBody, onGroupClick);
	};
	
	// получение групп
	var getGroups = function getGroups() {
	  listGroupsCardBody.innerHTML = '';
	  listGroupsCardBody.insertAdjacentHTML('beforeend', loaderSpinnerMarkup);
	  _storage2.default.currentGroupId = false;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupsLoad
	  };
	};
	
	// обработчики кликов редактирования/удаления
	var onEditDeleteClick = function onEditDeleteClick(evt) {
	  _storage2.default.groupListOperationType = evt.target === listGroupsCardEditBtn ? 'edit' : 'delete';
	  listGroupsCardCheckMessage.innerHTML = 'Выберите группу';
	
	  window.setTimeout(function () {
	    listGroupsCardCheckMessage.innerHTML = '';
	    _storage2.default.groupListOperationType = 'open';
	  }, SELECT_DELAY);
	};
	listGroupsCardEditBtn.addEventListener('click', onEditDeleteClick);
	listGroupsCardDeleteBtn.addEventListener('click', onEditDeleteClick);
	
	var getGoodsForGroup = function getGoodsForGroup() {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: _catalog__goods2.default.onSuccessGroupGood
	  };
	};
	
	// обработчик клика по ноде группы
	var onGroupClick = function onGroupClick() {
	
	  if (_storage2.default.groupListOperationType === 'edit') {
	    $(groupsEditForm).modal('show');
	    groupsEditName.value = _storage2.default.currentGroupName;
	    _catalog__groupsEdit2.default.start(groupsEditForm);
	  } else if (_storage2.default.groupListOperationType === 'delete') {
	    _catalog__groupsDelete2.default.make();
	  } else if (_storage2.default.groupListOperationType === 'open' || !_storage2.default.groupListOperationType) {
	    groupName.innerHTML = _storage2.default.currentGroupName;
	    groupGoodsCard.classList.remove('d-none');
	    listGroupsCard.classList.add('d-none');
	    // getGoodsForGroup();
	    _catalog__goods2.default.redraw();
	  }
	};
	
	$('#list-groups-search-input').focus();
	
	$('#groups-add').on('shown.bs.modal', function () {
	  $('#groups-add-name').trigger('focus');
	});
	
	$('#groups-edit').on('shown.bs.modal', function () {
	  $('#groups-edit-name').trigger('focus');
	});
	
	$('#add-resources-modal').on('shown.bs.modal', function () {
	  $('#add-resources-modal-quantity').trigger('focus');
	});
	
	$('#points-edit').on('shown.bs.modal', function () {
	  $('#points-edit-name').trigger('focus');
	});
	
	$('#points-add').on('shown.bs.modal', function () {
	  $('#points-add-name').trigger('focus');
	});
	
	$('#keywords-add').on('shown.bs.modal', function () {
	  $('#keywords-add-name').trigger('focus');
	});
	
	exports.default = {
	  start: function start() {
	    listGroups.addEventListener('click', getGroups);
	  },
	
	
	  redraw: getGroups,
	  getGoodsForGroup: getGoodsForGroup,
	
	  stop: function stop() {
	    // groupsMarkup.cleanContainer();
	    listGroups.removeEventListener('click', getGroups);
	  }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var search = function search(data, keyword) {
	  var selectedData = [];
	  data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  return selectedData;
	};
	
	exports.default = {
	  make: search
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// удаление группы
	var onSuccessGroupDelete = function onSuccessGroupDelete(answer) {
	
	  var message = '';
	  if (answer.status === 271) {
	    message = answer.message + ', удалить никак невозможно-с';
	  } else {
	    message = 'Группа успешно удалена';
	    _catalog__groups2.default.redraw();
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
	
	var deleteGroup = function deleteGroup(evt) {
	
	  if (+_storage2.default.currentGroupLevel >= 9000) {
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
	  make: deleteGroup
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var name = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  name = form.querySelector('*[data-valid="name"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _catalog__groups2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	
	  var postData = 'name=' + name.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
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
	//   Тег для всех элементов отмены (по клику на них сбрасывается форма)
	//      data-cancel
	
	
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
	  if (el.dataset.valid && el.dataset.valid !== 'none') {
	    el.classList.add('border');
	    el.classList.add('border-danger');
	    form.querySelector('*[data-validLabel="' + el.dataset.validlabelname + '"]').innerHTML = message[el.dataset.valid];
	  }
	};
	
	var hideAlert = function hideAlert(el) {
	  if (el.dataset.valid && el.dataset.valid !== 'none') {
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
	
	  modal.querySelectorAll('*[data-cancel]').forEach(function (el) {
	    el.removeEventListener('click', cancelClickHandler);
	  });
	
	  modal.removeEventListener('keydown', modalKeyDownHandler);
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
	    if (el.dataset.valid !== 'none') {
	      if (!pattern[el.dataset.valid].test(el.value)) {
	        valid = false;
	        showAlert(el);
	      }
	    }
	  });
	
	  return valid && otherValid;
	};
	
	var elementIsChange = function elementIsChange(el, index) {
	  if (el.value !== elSaveValues[index]) {
	    return true;
	  }
	  return false;
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
	  if (evt.target.type !== 'file') {
	    hideAlert(evt.target);
	
	    var change = false;
	
	    form.querySelectorAll('*[data-valid]').forEach(function (el, index) {
	      if (elementIsChange(el, index)) {
	        change = true;
	      }
	    });
	
	    if (change) {
	      butSubmit.disabled = false;
	    } else {
	      butSubmit.disabled = true;
	    }
	  }
	};
	
	var formChangeHandler = function formChangeHandler(evt) {
	  if (evt.target.tagName === 'INPUT' && evt.target.type === 'file') {
	    hideAlert(evt.target);
	
	    var change = false;
	
	    form.querySelectorAll('*[data-valid]').forEach(function (el, index) {
	      if (elementIsChange(el, index)) {
	        change = true;
	      }
	    });
	
	    if (change) {
	      butSubmit.disabled = false;
	    } else {
	      butSubmit.disabled = true;
	    }
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
	
	var modalKeyDownHandler = function modalKeyDownHandler(evt) {
	  if (evt.keyCode === 27) {
	    formReset();
	  }
	};
	
	var setSettingsVar = function setSettingsVar() {
	  pattern = window.appSettings[form.dataset.formname].validPatterns;
	  message = window.appSettings[form.dataset.formname].validMessage;
	};
	
	var addHandlersFunc = function addHandlersFunc(remoteModal, remoteSubmitCallback, remoteValidCallback) {
	  modal = remoteModal;
	  form = modal.querySelector('*[data-formName]');
	  submitCallback = remoteSubmitCallback;
	  validCallback = remoteValidCallback;
	
	  setSettingsVar();
	
	  butSubmit = form.querySelector('button[type="submit"]');
	  butCancel = form.querySelector('*[data-butCancel]');
	  spinner = form.querySelector('*[data-spinner]');
	
	  elSaveValues = [];
	
	  var elements = form.querySelectorAll('*[data-valid]');
	  elements.forEach(function (el) {
	    elSaveValues.push(el.value);
	  });
	
	  form.addEventListener('submit', formSubmitHandler);
	  form.addEventListener('input', formInputHandler);
	  form.addEventListener('change', formChangeHandler);
	  modal.querySelectorAll('*[data-cancel]').forEach(function (el) {
	    el.addEventListener('click', cancelClickHandler);
	  });
	  modal.addEventListener('click', modalClickHandler);
	  modal.addEventListener('keydown', modalKeyDownHandler);
	
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalog__goodsExpress = __webpack_require__(41);
	
	var _catalog__goodsExpress2 = _interopRequireDefault(_catalog__goodsExpress);
	
	var _catalog__goodsStock = __webpack_require__(42);
	
	var _catalog__goodsStock2 = _interopRequireDefault(_catalog__goodsStock);
	
	var _catalog__goodsEdit = __webpack_require__(43);
	
	var _catalog__goodsEdit2 = _interopRequireDefault(_catalog__goodsEdit);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	var _catalog__goodsGetStock = __webpack_require__(45);
	
	var _catalog__goodsGetStock2 = _interopRequireDefault(_catalog__goodsGetStock);
	
	var _catalog__goodsGetKeywords = __webpack_require__(46);
	
	var _catalog__goodsGetKeywords2 = _interopRequireDefault(_catalog__goodsGetKeywords);
	
	var _catalog__goodsAdd = __webpack_require__(47);
	
	var _catalog__goodsAdd2 = _interopRequireDefault(_catalog__goodsAdd);
	
	var _universalGoodsList = __webpack_require__(48);
	
	var _universalGoodsList2 = _interopRequireDefault(_universalGoodsList);
	
	var _universalSearch = __webpack_require__(36);
	
	var _universalSearch2 = _interopRequireDefault(_universalSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goodsCard = document.querySelector('#goods-card');
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
	var goodsCardKeywordsModal = document.querySelector('#goods-card-keywords');
	
	var expressContainer = document.querySelector('#express-container');
	var expressModal = document.querySelector('#express-modal');
	var expressModalLabel = document.querySelector('#express-modal-label');
	var expressModalStock = document.querySelector('#express-modal-stock');
	var expressModalPrice = document.querySelector('#express-modal-price');
	var expressModalQuantity = document.querySelector('#express-modal-quantity');
	var stockModal = document.querySelector('#set-stock-modal');
	var stockModalName = document.querySelector('#set-stock-modal-stock');
	var stockModalQuantity = document.querySelector('#set-stock-modal-quantity');
	
	// ############################## РАБОТА С ТОВАРАМИ (СПИСОК) ##############################
	
	
	var listGroupGoodsAddModal = document.querySelector('#group-goods-add');
	var listGroupGoodsAddModalName = document.querySelector('#group-goods-name');
	var listGroupGoodsAddModalDescribe = document.querySelector('#group-goods-describe');
	var listGroupGoodsAddModalPurchase = document.querySelector('#group-goods-price-purchase');
	var listGroupGoodsAddModalExtra = document.querySelector('#group-goods-price-extra');
	var listGroupGoodsAddModalSell = document.querySelector('#group-goods-price-sell');
	var listGroupGoodsAddModalBarcode = document.querySelector('#group-goods-barcode');
	var listGroupGoodsCardCopyBtn = document.querySelector('#group-goods-copy-btn');
	var listGroupGoodsCardAddBtn = document.querySelector('#group-goods-add-btn');
	var listGroupsGoodsCardCheckMessage = document.querySelector('#list-groups-goods-header-check-message');
	var groupGoodsReturnBtn = document.querySelector('#group-goods-return-btn');
	var groupGoodsAddSubmitBtn = document.querySelector('#group-goods-add-submit');
	var groupGoodsAddLabel = document.querySelector('#group-goods-add-label');
	var goodsSortModal = document.querySelector('#group-goods-sort');
	var groupGoodsBody = document.querySelector('#group-goods-card-body');
	
	var groupGoodsCard = document.querySelector('#group-goods-card');
	var listGroupsCard = document.querySelector('#list-groups-card');
	
	var SELECT_DELAY = 2000;
	
	var loadedGoods = [];
	
	// поиск по товарам
	var goodsCardSearch = document.querySelector('#list-groups-goods-search-input');
	goodsCardSearch.addEventListener('input', function (evt) {
	  _universalGoodsList2.default.draw(_universalSearch2.default.make(loadedGoods.data, evt.target.value), groupGoodsBody, onGoodClick);
	});
	
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
	
	var onListGroupGoodsCardAddBtn = function onListGroupGoodsCardAddBtn() {
	  groupGoodsAddSubmitBtn.innerHTML = 'Создать';
	  groupGoodsAddLabel.innerHTML = 'Создание товара';
	  _catalog__goodsAdd2.default.start(listGroupGoodsAddModal);
	};
	
	var onListGroupGoodsCardCopyBtn = function onListGroupGoodsCardCopyBtn(evt) {
	  _storage2.default.goodListOperationType = 'copy';
	  listGroupsGoodsCardCheckMessage.innerHTML = 'Выберите товар';
	  groupGoodsAddSubmitBtn.innerHTML = 'Скопировать';
	  groupGoodsAddLabel.innerHTML = 'Копирование товара';
	  window.setTimeout(function () {
	    listGroupsGoodsCardCheckMessage.innerHTML = '';
	    _storage2.default.goodListOperationType = 'open';
	  }, SELECT_DELAY);
	};
	
	listGroupGoodsCardCopyBtn.addEventListener('click', onListGroupGoodsCardCopyBtn);
	listGroupGoodsCardAddBtn.addEventListener('click', onListGroupGoodsCardAddBtn);
	
	// получения списка товаров в группе и его отрисовка
	var onSuccessGroupGood = function onSuccessGroupGood(goodsData) {
	  loadedGoods = goodsData;
	  if (_storage2.default.goodsSortMode && loadedGoods.data) {
	    universalSort(_storage2.default.goodsSortMode);
	  }
	  _storage2.default.goodsViewMode = _storage2.default.goodsViewMode === 'null' ? 'string' : _storage2.default.goodsViewMode;
	  _universalGoodsList2.default.draw(goodsData.data, groupGoodsBody, onGoodClick);
	};
	
	// обработчик клика по ноде товара
	var onGoodClick = function onGoodClick() {
	  if (_storage2.default.goodListOperationType === 'copy') {
	    listGroupsGoodsCardCheckMessage.innerHTML = 'Выберите товар';
	    groupGoodsAddSubmitBtn.innerHTML = 'Скопировать';
	    groupGoodsAddLabel.innerHTML = 'Копирование товара';
	    $(listGroupGoodsAddModal).modal('show');
	    _catalog__goodsAdd2.default.start(listGroupGoodsAddModal);
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good/' + _storage2.default.currentGoodId + '/card_info',
	      data: 'view_last=0&token=' + _storage2.default.data.token,
	      callbackSuccess: fillCopyCard
	    };
	  } else if (_storage2.default.goodListOperationType === 'open' || !_storage2.default.goodListOperationType) {
	    getGood();
	  }
	};
	
	// сортировка товаров (массив данных пока по замыканию)
	var universalSort = function universalSort(sortType) {
	  switch (sortType) {
	    case 'group-goods-sort-abc-up':
	      loadedGoods.data.sort(function (a, b) {
	        return a.name > b.name ? 1 : -1;
	      });
	      break;
	    case 'group-goods-sort-abc-down':
	      loadedGoods.data.sort(function (a, b) {
	        return b.name > a.name ? 1 : -1;
	      });
	      break;
	    case 'group-goods-sort-tailings-up':
	      loadedGoods.data.sort(function (a, b) {
	        return a.count - b.count;
	      });
	      break;
	    case 'group-goods-sort-tailings-down':
	      loadedGoods.data.sort(function (a, b) {
	        return b.count - a.count;
	      });
	      break;
	  }
	  _storage2.default.goodsSortMode = sortType;
	  _universalGoodsList2.default.draw(loadedGoods.data, groupGoodsBody, onGoodClick);
	  $(goodsSortModal).modal('hide');
	};
	
	var onGoodsSortModalClick = function onGoodsSortModalClick(evt) {
	  if (evt.target.tagName === 'BUTTON') {
	    universalSort(evt.target.id);
	  }
	};
	goodsSortModal.addEventListener('click', onGoodsSortModalClick);
	
	// кнопка возврата на список групп
	var onGroupGoodsReturnBtnClick = function onGroupGoodsReturnBtnClick() {
	  groupGoodsCard.classList.add('d-none');
	  listGroupsCard.classList.remove('d-none');
	  _catalog__groups2.default.redraw();
	};
	groupGoodsReturnBtn.addEventListener('click', onGroupGoodsReturnBtnClick);
	
	// переключение режимов отрисовки товаров
	var groupGoodsViewBtn = document.querySelector('#group-goods-view-btn');
	var onGroupGoodsViewBtnClick = function onGroupGoodsViewBtnClick() {
	  if (_storage2.default.goodsViewMode === 'string') {
	    _storage2.default.goodsViewMode = 'metro';
	    groupGoodsViewBtn.classList.add('icon-btn__view-tiles');
	  } else if (_storage2.default.goodsViewMode === 'metro') {
	    _storage2.default.goodsViewMode = 'string';
	    groupGoodsViewBtn.classList.remove('icon-btn__view-tiles');
	  }
	  _universalGoodsList2.default.draw(loadedGoods.data, groupGoodsBody, onGoodClick);
	};
	groupGoodsViewBtn.addEventListener('click', onGroupGoodsViewBtnClick);
	
	// ############################## РАБОТА С ТОВАРАМИ (Карточка) ##############################
	
	
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
	  _catalog__goodsGetStock2.default.getStock(allStocks, currentValue);
	
	  // заполняем форму - ключевые слова и работа с ними
	  goodTags = tags ? tags : [];
	
	  _catalog__goodsGetKeywords2.default.getKeywords(goodTags);
	
	  if (_storage2.default.isGoodCardEdit === 'true') {
	    restoreForm();
	  }
	  _storage2.default.isGoodCardEdit = false;
	
	  _catalog__goodsEdit2.default.start(goodsCard);
	
	  // восстановление состояния формы
	  restoreForm();
	};
	
	$(goodsCardKeywordsModal).on('shown.bs.modal', function () {
	  saveForm();
	});
	
	_catalog__goodsGetKeywords2.default.getKeywords(goodTags);
	
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
	  getGoodsForGroup();
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
	      $(goodsCard).modal('toggle');
	      _catalog__goodsEdit2.default.removeHandlers();
	
	      expressModalLabel.innerHTML = currentBtnId.indexOf('purchase') !== -1 ? 'Экспресс-закупка' : 'Экспресс-продажа';
	      expressModalStock.innerHTML = _storage2.default.currentStockName;
	      expressModalPrice.value = currentBtnId.indexOf('purchase') !== -1 ? goodsCardPurchase.value : goodsCardSell.value;
	      expressModalQuantity.value = '';
	      expressModalQuantity.focus();
	      _storage2.default.expressOperationType = multiplier;
	      _catalog__goodsExpress2.default.start(expressModal);
	    }
	    _storage2.default.isGoodCardEdit = true;
	    saveForm();
	  }
	};
	
	expressContainer.addEventListener('click', onExpressContainerClick);
	
	$(expressModal).on('hidden.bs.modal', function () {
	  console.log(formSave);
	  _catalog__goodsExpress2.default.stop();
	  getGood();
	  getGoodsForGroup();
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
	  _catalog__goodsStock2.default.stop();
	  getGood();
	});
	
	$(stockModal).on('shown.bs.modal', function () {
	  $(goodsCard).modal('hide');
	
	  _catalog__goodsEdit2.default.removeHandlers();
	
	  stockModalName.innerHTML = _storage2.default.currentStockName;
	  stockModalQuantity.value = _storage2.default.currentStockQuantityT2;
	  _storage2.default.isGoodCardEdit = true;
	  saveForm();
	  _catalog__goodsStock2.default.start(stockModal);
	});
	
	var getGoodsForGroup = function getGoodsForGroup() {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupGood
	  };
	};
	
	// ================= превью картинки =================
	var showPreview = function showPreview(file) {
	  var fileName = file.name.toLowerCase();
	  var fileSize = (file.size / 1024 / 1024).toFixed(2);
	
	  if ((fileName.endsWith('jpg') || fileName.endsWith('png')) && fileSize < 2) {
	    var reader = new FileReader();
	
	    reader.addEventListener('load', function () {
	      goodsCardImage.src = reader.result;
	    });
	    reader.readAsDataURL(file);
	  } else if (!fileName.endsWith('jpg')) {
	    goodsCardImage.src = '';
	    goodsCardImageUpload.value = '';
	    goodsCardImage.alt = '\u0424\u043E\u0440\u043C\u0430\u0442 ' + fileName.slice(-3) + ' \u043D\u0435 \u043A\u0430\u0442\u0438\u0442, \u0442\u043E\u043B\u044C\u043A\u043E jpg \u0438\u043B\u0438 png';
	  } else if (fileSize > 2) {
	    goodsCardImage.src = '';
	    goodsCardImageUpload.value = '';
	    goodsCardImage.alt = '\u0420\u0430\u0437\u043C\u0435\u0440 ' + fileSize + 'Mb \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A';
	  }
	};
	
	goodsCardImageUpload.addEventListener('change', function () {
	  showPreview(goodsCardImageUpload.files[0]);
	});
	
	exports.default = {
	  fill: getGood,
	  onSuccessGroupGood: onSuccessGroupGood,
	  redraw: getGoodsForGroup
	
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
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
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
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 270:
	      $(modal).modal('hide');
	      _tools2.default.informationtModal = {
	        'title': 'MESSAGE: ',
	        'message': response.message,
	        'isMess': true
	      };
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'ERROR: ',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'ERROR: ',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
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
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
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
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
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
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _tools3 = __webpack_require__(44);
	
	var _tools4 = _interopRequireDefault(_tools3);
	
	var _catalog__goods = __webpack_require__(40);
	
	var _catalog__goods2 = _interopRequireDefault(_catalog__goods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modal = void 0;
	// import catalogGroups from './catalog__groups.js';
	
	// import catalogGroupsGoods from './catalog__groups-goods.js';
	
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
	
	var inputInitValues = void 0;
	
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
	  barcode = form.querySelector('#goods-card-barcode');
	
	  appUrl1 = window.appSettings[form.dataset.formname].UrlApi1;
	  appUrl2 = window.appSettings[form.dataset.formname].UrlApi2;
	  appUrl3 = window.appSettings[form.dataset.formname].UrlApi3;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrError = function callbackXhrError() {
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	};
	
	var submitForm2 = function submitForm2() {
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
	    callbackSuccess: callbackXhrSuccess2,
	    callbackError: callbackXhrError
	  });
	};
	
	var submitImg = function submitImg() {
	  var stor = _storage2.default.data;
	  var postData = new FormData();
	  postData.append('token', stor.token);
	  postData.append('good', _storage2.default.currentGoodId);
	  postData.append('file', img.files[0]);
	
	  var urlApp = appUrl3.replace('{{dir}}', stor.directory);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrImgLoadSuccess,
	    callbackError: callbackXhrError
	  });
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess() {
	  if (name.value !== inputInitValues[0] || describe.value !== inputInitValues[1] || barcode.value !== inputInitValues[2] || groupId.value !== inputInitValues[3]) {
	    submitForm2();
	  } else if (img.files.length !== 0) {
	    submitImg();
	  } else {
	    $('#goods-card').modal('hide');
	    _formTools2.default.reset();
	    // catalogGroups.getGoodsForGroup();
	    _catalog__goods2.default.redraw();
	  }
	};
	
	var callbackXhrSuccess2 = function callbackXhrSuccess2(response) {
	  console.log('callbackXhr2');
	  console.dir(response);
	
	  switch (response.status) {
	    case 200:
	      if (img.files.length !== 0) {
	        submitImg();
	      } else {
	        $('#goods-card').modal('hide');
	        _formTools2.default.reset();
	        // catalogGroups.getGoodsForGroup();
	        _catalog__goods2.default.redraw();
	      }
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
	  console.log('callbackImg');
	  console.dir(response);
	
	  switch (response.status) {
	    case 200:
	      console.log('img load - ok');
	
	      $('#goods-card').modal('hide');
	      _formTools2.default.reset();
	      // catalogGroups.getGoodsForGroup();
	      _catalog__goods2.default.redraw();
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
	
	  var postData = 'token=' + stor.token + '&purchase_price=' + purchase.value + '&selling_price=' + sell.value;
	  var urlApp = appUrl2.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{goodId}}', _storage2.default.currentGoodId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
	
	exports.default = {
	  start: function start(remModal) {
	    console.log('Card-Edit-START!');
	    initVar(remModal);
	    percent.innerHTML = calcPr();
	
	    inputInitValues = [];
	    inputInitValues[0] = name.value;
	    inputInitValues[1] = describe.value;
	    inputInitValues[2] = barcode.value;
	    inputInitValues[3] = groupId.value;
	
	    _formTools2.default.work(modal, submitForm);
	
	    priceBlock.addEventListener('change', calcPrice);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  },
	
	
	  removeHandlers: _formTools2.default.removeHandlers
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  // рассчитывает процент по стоимости и цене
	  calcPercent: function calcPercent(purchase, price) {
	    var precent = ((price - purchase) * 100 / purchase).toFixed(2);
	
	    if (!isFinite(precent)) {
	      return 0;
	    }
	
	    return precent;
	  },
	
	  // рассчитывает цену по стоимости и проценту
	  calcPrice: function calcPrice(purchase, percent) {
	    return (Number(purchase) + purchase / 100 * percent).toFixed(2);
	  }
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goodsStock = document.querySelector('#goods-stock-body');
	
	var getStock = function getStock(allStocks, currentValue) {
	
	  console.log('getstocks');
	
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
	
	  // переписать на storage
	  if (checkedStock) {
	    goodsStock.querySelector('#stock-' + checkedStock).checked = true;
	    _storage2.default.currentStockId = checkedStock;
	    _storage2.default.currentStockName = goodsStock.querySelector('#stock-' + checkedStock).nextElementSibling.dataset.stockName;
	    _storage2.default.currentStockQuantityT2 = goodsStock.querySelector('#stock-' + checkedStock).nextElementSibling.dataset.stockT2;
	  } else if (goodsStock.firstChild.id) {
	    goodsStock.firstChild.checked = true;
	    _storage2.default.currentStockId = goodsStock.firstChild.id.split('-')[1];
	    _storage2.default.currentStockName = goodsStock.children[1].dataset.stockName;
	    _storage2.default.currentStockQuantityT2 = goodsStock.children[1].dataset.stockT2;
	  }
	};
	
	exports.default = {
	  getStock: getStock
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
	
	var _catalog__goods = __webpack_require__(40);
	
	var _catalog__goods2 = _interopRequireDefault(_catalog__goods);
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _universalKeywords = __webpack_require__(32);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	var _reference__keywords = __webpack_require__(31);
	
	var _reference__keywords2 = _interopRequireDefault(_reference__keywords);
	
	var _catalog__goodsEdit = __webpack_require__(43);
	
	var _catalog__goodsEdit2 = _interopRequireDefault(_catalog__goodsEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goodsKeywords = document.querySelector('#goods-keywords');
	var goodsCardKeywordsBody = document.querySelector('#goods-card-keywords-body');
	var goodsCardKeywordsModal = document.querySelector('#goods-card-keywords');
	var goodsCard = document.querySelector('#goods-card');
	
	var goodTags = [];
	
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
	  _universalKeywords2.default.downloadAndDraw(goodsCardKeywordsBody, onKeywordClick, keywordModificator);
	  $(goodsCard).modal('hide');
	  _catalog__goodsEdit2.default.removeHandlers();
	});
	
	$(goodsCardKeywordsModal).on('hidden.bs.modal', function () {
	  _catalog__goods2.default.fill();
	});
	
	var getKeywords = function getKeywords(tags) {
	
	  goodTags = tags;
	
	  var onGoodKeywordClick = function onGoodKeywordClick(evt) {
	    _storage2.default.isGoodCardEdit = true;
	    var returnHandler = function returnHandler(e) {
	      _catalog__goods2.default.fill();
	      $('#list-groups-list').tab('show');
	      $('#goods-card').modal('show');
	      e.target.removeEventListener('click', returnHandler);
	    };
	    _reference__keywords2.default.showKeywordEdit(evt, returnHandler);
	    $('#goods-card').modal('hide');
	    $('#list-keywords-list').tab('show');
	  };
	
	  console.log(goodsKeywords);
	  goodsKeywords.innerHTML = '';
	  if (goodTags.length) {
	    goodTags.forEach(function (item) {
	      return _universalKeywords2.default.getDataAndDraw(goodsKeywords, onGoodKeywordClick, item);
	    });
	  } else {
	    goodsKeywords.innerHTML = 'Ключевых слов нет';
	  }
	};
	
	exports.default = {
	  getKeywords: getKeywords
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	var _tools3 = __webpack_require__(44);
	
	var _tools4 = _interopRequireDefault(_tools3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var name = void 0;
	var modal = void 0;
	var describe = void 0;
	var purchase = void 0;
	var percent = void 0;
	var price = void 0;
	var barcode = void 0;
	var priceBlock = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  name = form.querySelector('*[data-valid="name"]');
	  describe = form.querySelector('*[data-valid="describe"]');
	  purchase = form.querySelector('*[data-valid="purchase"]');
	  percent = form.querySelector('*[data-valid="percent"]');
	  price = form.querySelector('*[data-valid="price"]');
	  barcode = form.querySelector('*[data-valid="barcode"]');
	
	  priceBlock = form.querySelector('#group-goods-price');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _catalog__groups2.default.getGoodsForGroup();
	      break;
	    case 400:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	  var groupId = _storage2.default.currentGroupId;
	
	  var postData = 'token=' + stor.token + '&name=' + name.value + '&description=' + describe.value + '&purchase_price=' + purchase.value + '&selling_price=' + price.value + '&group=' + groupId + '&barcode=' + barcode.value;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  });
	};
	
	var calcPrice = function calcPrice(evt) {
	  if (!evt.target.type === 'text') {
	    return false;
	  }
	  if (_formTools2.default.validElement(evt.target)) {
	
	    switch (evt.target.dataset.valid) {
	      case 'percent':
	        price.value = _tools4.default.calcPrice(purchase.value, percent.value);
	        break;
	      case 'purchase':
	        if (price.value === '') {
	          price.value = purchase.value;
	        }
	        percent.value = _tools4.default.calcPercent(purchase.value, price.value);
	        break;
	      case 'price':
	        if (purchase.value === '') {
	          purchase.value = price.value;
	        }
	        percent.value = _tools4.default.calcPercent(purchase.value, price.value);
	        break;
	    }
	  }
	  return true;
	};
	
	exports.default = {
	  start: function start(remModal) {
	    initVar(remModal);
	    priceBlock.addEventListener('change', calcPrice);
	    document.querySelector('#group-goods-group').value = _storage2.default.currentGroupName;
	    _formTools2.default.work(modal, submitForm);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var markup = {
	  getGoodString: function getGoodString(item, index) {
	    return '\n    <div class="goods-string" data-good-id="' + item.id + '">\n      <div>\n        <span class="reference-row-number">' + (index + 1) + '</span> <span>' + item.name + '</span>\n      </div>\n      <div>\n        ' + (Number(item.count) ? Number(item.count).toFixed(2) : '') + '\n        <button type="button" class="btn p-0 bg-white icon-btn icon-btn__go"></button>\n      </div>\n    </div>';
	  },
	  getGoodTile: function getGoodTile(item, index) {
	
	    var getImg = function getImg(imgUrl) {
	      return imgUrl ? 'https://lopos.bidone.ru/users/600a5357/images/' + imgUrl + '_preview150.jpg' : './img/not-available.png';
	    };
	
	    return '\n    <div class="card goods-tile-card" data-good-id="' + item.id + '">\n      <img class="card-img-top" src="' + getImg(item.img_url) + '" alt="' + item.name + '" title="' + item.name + '">\n      <div class="card-body ' + (Number(item.count) ? 'goods-tile-title' : '') + '">\n        <p class="card-text">' + (Number(item.count) ? Number(item.count).toFixed(2) : '') + '</p>\n      </div>\n    </div>';
	  },
	  drawGoodsTable: function drawGoodsTable(goodsData, container, handler) {
	    var _this = this;
	
	    container.innerHTML = '';
	    if (goodsData) {
	      goodsData.forEach(function (good, index) {
	        container.insertAdjacentHTML('beforeend', _this.getGoodString(good, index));
	        container.lastChild.addEventListener('click', function () {
	          _storage2.default.currentGoodId = good.id;
	          handler(good);
	        });
	      });
	    } else {
	      container.innerHTML = 'Пусто';
	    }
	  },
	  drawGoodsMetro: function drawGoodsMetro(goodsData, container, handler) {
	    var _this2 = this;
	
	    if (goodsData) {
	      container.innerHTML = '<div class="goods-tile"></div>';
	      goodsData.forEach(function (good, index) {
	        container.firstChild.insertAdjacentHTML('beforeend', _this2.getGoodTile(good, index));
	        container.firstChild.lastChild.addEventListener('click', function () {
	          _storage2.default.currentGoodId = good.id;
	          handler(good);
	        });
	      });
	    } else {
	      container.innerHTML = 'Пусто';
	    }
	  }
	};
	
	// отрисовка списка товаров по данным
	var drawGoods = function drawGoods(goodsList, container, handler, viewFlag) {
	  console.log(goodsList);
	  if (_storage2.default.goodsViewMode === 'string' || viewFlag === 'string') {
	    markup.drawGoodsTable(goodsList, container, handler);
	  } else if (_storage2.default.goodsViewMode === 'metro') {
	    markup.drawGoodsMetro(goodsList, container, handler);
	  }
	};
	
	exports.default = {
	  draw: drawGoods
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var markup = {
	  getElement: function getElement(item, index) {
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-group-id="' + item.id + '" data-group-index="' + index + '" data-group-level="' + item.level + '" data-group-name="' + item.name + '">\n      <div style="padding-left: 34px;">\n        <span class="reference-row-number">' + (index + 1) + '</span>\n        <span>' + item.name + '</span>\n      </div>\n      <div class="d-flex justify-content-between align-items-center" style="padding-right: 34px;">\n        <span> ' + (item.count ? item.count : '') + ' </span>\n      </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(groupsData, container, handler) {
	    var _this = this;
	
	    groupsData.forEach(function (group, index) {
	      container.insertAdjacentHTML('beforeend', _this.getElement(group, index));
	      container.lastChild.addEventListener('click', function () {
	        _storage2.default.currentGroupId = group.id;
	        _storage2.default.currentGroupName = group.name;
	        _storage2.default.currentGroupLevel = group.level;
	        handler();
	      });
	    });
	  }
	};
	
	// отрисовка списка групп по данным
	var drawGroups = function drawGroups(groupsList, container, handler) {
	  container.innerHTML = '';
	  if (groupsList.length > 0) {
	    markup.drawDataInContainer(groupsList, container, handler);
	  } else {
	    container.innerHTML = 'Списка групп для этого предприятия еще нет';
	  }
	};
	
	exports.default = {
	  draw: drawGroups
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var name = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  name = form.querySelector('*[data-valid="name"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _catalog__groups2.default.redraw();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
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
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _reference__debitCreditAddEditU = __webpack_require__(52);
	
	var _reference__debitCreditAddEditU2 = _interopRequireDefault(_reference__debitCreditAddEditU);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debitList = document.querySelector('#list-debit-list');
	var creditList = document.querySelector('#list-credit-list');
	var debitCreditBody = document.querySelector('#list-debit-credit-card-body');
	
	var debitCreditIcon = document.querySelector('#list-debit-credit-icon');
	var debitCreditTitle = document.querySelector('#list-debit-credit-title');
	
	var debitCreditAddBtn = document.querySelector('#list-debit-credit-card-add-btn');
	var debitCreditEditBtn = document.querySelector('#list-debit-credit-card-edit-btn');
	var debitCreditDeleteBtn = document.querySelector('#list-debit-credit-card-delete-btn');
	var universalAdd = document.querySelector('#universal-add');
	
	var loaderSpinnerId = 'loader-groups';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	var enableCheckEditButtons = function enableCheckEditButtons() {
	  debitCreditEditBtn.removeAttribute('disabled');
	  debitCreditDeleteBtn.removeAttribute('disabled');
	};
	
	var disableCheckEditButtons = function disableCheckEditButtons() {
	  debitCreditEditBtn.setAttribute('disabled', 'disabled');
	  debitCreditDeleteBtn.setAttribute('disabled', 'disabled');
	};
	
	// ############################## РАЗМЕТКА ##############################
	var getElement = function getElement(item, index) {
	
	  return '\n  <input type="radio" id="reference-' + item.id + '" class="d-none">\n  <label style="padding-left: 34px;" for="reference-' + item.id + '" class="d-flex justify-content-between align-items-center reference-string" data-debit-credit-id="' + item.id + '" data-debit-credit-name="' + item.name + '">\n    <div><span class="reference-row-number">' + (index + 1) + '</span> ' + item.name + '</div>\n    <div class="d-flex justify-content-between align-items-center">\n    </div>\n  </label>';
	};
	
	var drawDataInContainer = function drawDataInContainer(enterprisesData) {
	  enterprisesData.forEach(function (item, index) {
	    return debitCreditBody.insertAdjacentHTML('beforeend', getElement(item, index));
	  });
	};
	
	// ############################## ЗАПРОС НА УДАЛЕНИЕ ##############################
	var onSuccessdebitCreditDelete = function onSuccessdebitCreditDelete(answer) {
	  console.log(answer);
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F <b>' + _storage2.default.debitCreditName + '</b> \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E'
	  };
	  getdebitCredit();
	};
	
	var setRequestToDeletedebitCredit = function setRequestToDeletedebitCredit() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/reason/' + _storage2.default.debitCreditId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessdebitCreditDelete
	  };
	};
	
	debitCreditDeleteBtn.addEventListener('click', function () {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E <b>' + _storage2.default.debitCreditName + '</b>?',
	    submitCallback: setRequestToDeletedebitCredit
	  };
	});
	// ############################## НАСТРОЙКА УНИВЕРСАЛЬНОЙ ФОРМЫ ДОБАВЛЕНИЯ ##############################
	var setupUniversalAdd = function setupUniversalAdd() {
	  _storage2.default.currentCardName = '';
	  _tools2.default.runUniversalAdd = {
	    title: 'Создание категории',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    submitBtnName: 'Создать'
	  };
	  _reference__debitCreditAddEditU2.default.start(universalAdd, 'add');
	};
	
	var setupUniversalAddEdit = function setupUniversalAddEdit() {
	  _tools2.default.runUniversalAdd = {
	    title: 'Редактирование категории',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    inputValue: _storage2.default.debitCreditName,
	    submitBtnName: 'Изменить'
	  };
	  _reference__debitCreditAddEditU2.default.start(universalAdd, 'edit');
	};
	
	debitCreditAddBtn.addEventListener('click', setupUniversalAdd);
	debitCreditEditBtn.addEventListener('click', setupUniversalAddEdit);
	
	// ############################## РАБОТА С ГРУППАМИ (СПИСОК) ##############################
	
	var selectedString = '';
	
	debitCreditBody.addEventListener('change', function (evt) {
	  console.log(evt);
	  if (selectedString) {
	    selectedString.classList.remove('bg-light');
	  }
	  console.log(evt.target.labels[0]);
	  selectedString = evt.target.labels[0];
	  selectedString.classList.add('bg-light');
	  _storage2.default.debitCreditId = selectedString.dataset.debitCreditId;
	  _storage2.default.debitCreditName = selectedString.dataset.debitCreditName;
	  enableCheckEditButtons();
	});
	
	var onSuccessdebitCreditLoad = function onSuccessdebitCreditLoad(debitCreditData) {
	  console.log(debitCreditData);
	  document.querySelector('#' + loaderSpinnerId).remove();
	  drawDataInContainer(debitCreditData.data);
	  disableCheckEditButtons();
	};
	
	var getdebitCredit = function getdebitCredit() {
	
	  debitCreditBody.innerHTML = '';
	  debitCreditBody.insertAdjacentHTML('beforeend', loaderSpinnerMarkup);
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/reason/' + _storage2.default.debitCreditType,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessdebitCreditLoad
	  };
	};
	
	var initDebit = function initDebit() {
	  _storage2.default.debitCreditType = 'debit';
	  debitCreditIcon.src = 'img/revenue.png';
	  debitCreditTitle.innerHTML = 'Категории доходов';
	  getdebitCredit();
	};
	
	var initCredit = function initCredit() {
	  _storage2.default.debitCreditType = 'credit';
	  debitCreditIcon.src = 'img/expenses.png';
	  debitCreditTitle.innerHTML = 'Категории расходов';
	  getdebitCredit();
	};
	
	exports.default = {
	  start: function start() {
	    debitList.addEventListener('click', initDebit);
	    creditList.addEventListener('click', initCredit);
	  },
	
	
	  redraw: getdebitCredit,
	
	  stop: function stop() {
	    // groupsMarkup.cleanContainer();
	    debitList.removeEventListener('click', initDebit);
	    creditList.removeEventListener('click', initCredit);
	  }
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _reference__debitCredit = __webpack_require__(51);
	
	var _reference__debitCredit2 = _interopRequireDefault(_reference__debitCredit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let appUrlAdd;
	// let appUrlEdit;
	var messages = void 0;
	
	var form = void 0;
	var field1 = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	
	  form.dataset.formname = 'nomenclatureAddEdit';
	  field1 = form.querySelector('*[data-valid="field1"]');
	
	  // appUrlAdd = window.appSettings[form.dataset.formname].UrlApiAdd;
	  // appUrlEdit = window.appSettings[form.dataset.formname].UrlApiEdit;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _reference__debitCredit2.default.redraw();
	      /*
	      if (dataStorage.currentCardName === '') {
	        catalogCard.redrawList();
	      } else {
	        catalogCard.redrawCard();
	      }
	      */
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitFormAdd = function submitFormAdd() {
	  var stor = _storage2.default.data;
	
	  /*
	  let urlApp = appUrlAdd.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  */
	  var postData = 'name=' + field1.value + '&token=' + stor.token;
	  var urlApp = 'lopos_directory/' + stor.directory + '/operator/1/business/' + stor.currentBusiness + '/reason/' + _storage2.default.debitCreditType;
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  });
	};
	
	var submitFormEdit = function submitFormEdit() {
	  var stor = _storage2.default.data;
	
	  /*
	  let urlApp = appUrlEdit.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{NCid}}', dataStorage.currentCardId);
	  */
	  var postData = 'name=' + field1.value + '&token=' + stor.token;
	  var urlApp = 'lopos_directory/' + stor.directory + '/operator/1/business/' + stor.currentBusiness + '/reason/' + _storage2.default.debitCreditId;
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	exports.default = {
	  start: function start(remModal, type) {
	    initVar(remModal);
	
	    if (type === 'add') {
	      _formTools2.default.work(modal, submitFormAdd);
	    } else if (type === 'edit') {
	      _formTools2.default.work(modal, submitFormEdit);
	    }
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _universalValidityMicro = __webpack_require__(54);
	
	var _universalValidityMicro2 = _interopRequireDefault(_universalValidityMicro);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalogCards = __webpack_require__(55);
	
	var _catalogCards2 = _interopRequireDefault(_catalogCards);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var manufactureList = document.querySelector('#list-manufacture-list');
	var manufactureStocks = document.querySelector('#manufacture-stocks');
	var manufactureAddBtn = document.querySelector('#list-manufacture-card-add-btn');
	var manufactureCountBtn = document.querySelector('#list-manufacture-count');
	var manufactureMaterialCheck = document.querySelector('#manufacture-material-check');
	var manufactureMakeBtn = document.querySelector('#list-manufacture-make');
	var manufactureColumnBody = document.querySelector('#manufacture-card-manufacture');
	var materialColumnBody = document.querySelector('#manufacture-card-material');
	var goodColumnBody = document.querySelector('#manufacture-card-good');
	
	var nomenklatureCardModal = document.querySelector('#select-nomenklature-card');
	var nomenklatureCardModalBody = document.querySelector('#select-nomenklature-card-body');
	
	var loadedNomenklatureCards = '';
	var selectedNomenklatureCards = '';
	var currentGoods = [];
	// #################### РАЗМЕТКА ДЛЯ ПОМЕЩЕНИЯ ТОВАРОВ В КОЛОНКИ ######################
	
	var getGoodString = function getGoodString(id, name, good, index, value, classDanger) {
	  return '\n  <div class="goods-string ' + classDanger + '" data-good-id="' + id + '">\n    <div>\n      <span class="reference-row-number">' + index + '</span> <span>' + name + '</span>\n    </div>\n    <div>\n      <span>' + (good ? good : 'X') + '</span>\n      <span>' + value + '</span>\n    </div>\n  </div>';
	};
	
	var drawGoodsToColumns = function drawGoodsToColumns() {
	  var materialNumber = 0;
	  var goodNumber = 0;
	  materialColumnBody.innerHTML = '';
	  goodColumnBody.innerHTML = '';
	  manufactureCountBtn.removeAttribute('disabled');
	  currentGoods = [];
	  selectedNomenklatureCards.forEach(function (card) {
	    if (card.content) {
	      card.content.forEach(function (good) {
	        currentGoods.push(good);
	        if (good.value < 0) {
	          materialNumber++;
	          materialColumnBody.insertAdjacentHTML('beforeend', getGoodString(good.id, good.name, good.good, materialNumber, good.value * card.k, ''));
	        } else {
	          goodNumber++;
	          goodColumnBody.insertAdjacentHTML('beforeend', getGoodString(good.id, good.name, '', goodNumber, good.value * card.k, ''));
	        }
	      });
	    }
	  });
	};
	// #################### КНОПКА ВЫПОЛНИТЬ ####################
	var onManufactureMakeBtnClick = function onManufactureMakeBtnClick() {
	  var data = currentGoods.map(function (good) {
	    return [JSON.stringify({
	      value: good.value,
	      good: good.id,
	      price: 0
	    })];
	  });
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock/' + _storage2.default.currentStockId + '/temp_naklad_provesti',
	    data: 'content=[' + data + ']&token=' + _storage2.default.data.token + '&delivery=0&type=8&kontr_agent=2',
	    callbackSuccess: getManufacture
	  };
	};
	
	manufactureMakeBtn.addEventListener('click', onManufactureMakeBtnClick);
	// #################### КНОПКА ПОДСЧЕТ ######################
	var onSuccessCountLoad = function onSuccessCountLoad(data) {
	  var materialNumber = 0;
	  var goodNumber = 0;
	  materialColumnBody.innerHTML = '';
	  goodColumnBody.innerHTML = '';
	  for (var i = 0; i < data.data.length; i++) {
	    if (currentGoods[i].value < 0) {
	      materialNumber++;
	      var classDanger = +data.data[i].value + +currentGoods[i].value < 0 ? 'bg-danger' : '';
	      materialColumnBody.insertAdjacentHTML('beforeend', getGoodString(currentGoods[i].id, currentGoods[i].name, data.data[i].value, materialNumber, currentGoods[i].value, classDanger));
	    } else {
	      goodNumber++;
	      goodColumnBody.insertAdjacentHTML('beforeend', getGoodString(currentGoods[i].id, currentGoods[i].name, data.data[i].value, goodNumber, currentGoods[i].value));
	    }
	  }
	  if (materialColumnBody.querySelectorAll('.bg-danger').length === 0) {
	    manufactureMaterialCheck.classList.remove('d-none');
	    manufactureMakeBtn.removeAttribute('disabled');
	  } else {
	    manufactureMaterialCheck.classList.add('d-none');
	    manufactureMakeBtn.setAttribute('disabled', 'disabled');
	  }
	};
	
	var onManufactureCountBtnClick = function onManufactureCountBtnClick() {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock/' + _storage2.default.currentStockId + '/some_goods/',
	    data: 'content=[' + currentGoods.map(function (good) {
	      return good.id;
	    }) + ']&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessCountLoad
	  };
	};
	manufactureCountBtn.addEventListener('click', onManufactureCountBtnClick);
	
	// #################### ОБРАБАТЫВАЕМ КЛИКИ ПО СПИСКУ В ПЕРВОЙ КОЛОНКЕ ######################
	
	var onManufactureColumnBodyClick = function onManufactureColumnBodyClick(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.cardId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	
	  _tools2.default.runUniversalModalMicro = {
	    title: 'Укажите коэффициент',
	    inputLabel: 'Коэффициент',
	    inputPlaceholder: 'введите коэффициент',
	    submitBtnName: 'Изменить',
	    submitCallback: function submitCallback() {
	      // if (/^\-?\d+$/.test(document.querySelector('#universal-modal-micro-name').value)) {
	      if (_universalValidityMicro2.default.check([document.querySelector('#universal-modal-micro-name')])) {
	        if (+document.querySelector('#universal-modal-micro-name').value === 0) {
	          selectedNomenklatureCards.splice([currentStringElement.dataset.cardIndex], 1);
	          document.querySelectorAll('.manufacture-nomenklature-card--muted')[currentStringElement.dataset.cardIndex].classList.remove('manufacture-nomenklature-card--muted');
	        } else {
	          selectedNomenklatureCards[currentStringElement.dataset.cardIndex].k = document.querySelector('#universal-modal-micro-name').value;
	        }
	
	        manufactureColumnBody.innerHTML = '';
	        _catalogCards2.default.drawDataInContainer(selectedNomenklatureCards, manufactureColumnBody);
	        drawGoodsToColumns();
	        manufactureMakeBtn.setAttribute('disabled', 'disabled');
	        document.querySelector('#universal-modal-micro-valid').innerHTML = '';
	        $('#universal-modal-micro').modal('hide');
	      }
	      /*
	      } else {
	        document.querySelector('#universal-modal-micro-valid').innerHTML = 'Целое число';
	      }
	      */
	    }
	  };
	};
	
	manufactureColumnBody.addEventListener('click', onManufactureColumnBodyClick);
	
	// #################### ОБРАБАТЫВАЕМ КЛИКИ ПО СПИСКУ КАРТОЧКЕ В МОДАЛЬНОМ ОКНЕ #############
	$(nomenklatureCardModal).on('hidden.bs.modal', function () {
	  selectedNomenklatureCards = [].map.call(document.querySelectorAll('.manufacture-nomenklature-card--muted'), function (item) {
	    return Object.assign(loadedNomenklatureCards[item.dataset.cardIndex], {
	      k: 1
	    });
	  });
	  if (selectedNomenklatureCards.length !== 0) {
	    manufactureColumnBody.innerHTML = '';
	    _catalogCards2.default.drawDataInContainer(selectedNomenklatureCards, manufactureColumnBody);
	    manufactureMaterialCheck.classList.add('d-none');
	    drawGoodsToColumns();
	  }
	});
	
	var onListCardBodyClick = function onListCardBodyClick(evt) {
	  var currentStringElement = evt.target;
	  while (!currentStringElement.dataset.cardId) {
	    currentStringElement = currentStringElement.parentNode;
	  }
	  currentStringElement.classList.toggle('manufacture-nomenklature-card--muted');
	};
	
	nomenklatureCardModalBody.addEventListener('click', onListCardBodyClick);
	
	// ############################## ЗАГРУЗКА И ОТРИСОВКА ДАННЫХ ##############################
	
	manufactureAddBtn.addEventListener('click', function () {
	  return $(nomenklatureCardModal).modal('show');
	});
	
	manufactureStocks.addEventListener('change', function (evt) {
	  _storage2.default.currentStockId = evt.target.value;
	  manufactureMakeBtn.setAttribute('disabled', 'disabled');
	});
	
	var onSuccessManufactureLoad = function onSuccessManufactureLoad(manufactureData) {
	  loadedNomenklatureCards = manufactureData.data.all_nomenclature_cards;
	  nomenklatureCardModalBody.innerHTML = '';
	  _catalogCards2.default.drawDataInContainer(loadedNomenklatureCards, nomenklatureCardModalBody);
	
	  manufactureStocks.innerHTML = manufactureData.data.all_stocks.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === _storage2.default.data.currentStock ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	  currentGoods = [];
	};
	
	var getManufacture = function getManufacture() {
	
	  manufactureColumnBody.innerHTML = '';
	  materialColumnBody.innerHTML = '';
	  goodColumnBody.innerHTML = '';
	  _storage2.default.currentStockId = _storage2.default.data.currentStock;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/operation/manufacture',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessManufactureLoad
	  };
	};
	
	exports.default = {
	  start: function start() {
	    manufactureList.addEventListener('click', getManufacture);
	  },
	  stop: function stop() {
	    manufactureList.removeEventListener('click', getManufacture);
	  }
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var validityRelations = {
	  'balance-amount': {
	    pattern: /(^\d+$)|(^\d+[.]\d+$)/,
	    message: 'денежный формат<br>( 000, 000.000 )'
	  },
	  'balance-set-describe': {
	    pattern: /^[а-яёА-ЯЁA-Za-z\s\d\.\,\:\;]{0,300}$/,
	    message: 'Не более 300 символов со знаками препинания (. , : ;) без спецсимволов'
	  },
	  'universal-modal-micro-name': {
	    pattern: /^\-?\d+$/,
	    message: 'Целое число (0 удалит карточку)'
	  },
	  'change-password': {
	    pattern: /^[а-яёА-ЯЁA-Za-z0-9\s\d]{2,20}$/,
	    message: 'От 2-х до 20 символов без спецсимволов'
	  },
	  'change-user-name': {
	    pattern: /^[а-яёА-ЯЁA-Za-z0-9\s\d]{2,20}$/,
	    message: 'От 2-х до 20 символов без спецсимволов'
	  }
	
	};
	
	exports.default = {
	  check: function check(fields, presetNames) {
	    var result = [];
	    fields.forEach(function (field, i) {
	      var relationType = presetNames[i] || field.id;
	      field.nextElementSibling.innerHTML = !validityRelations[relationType].pattern.test(field.value) ? validityRelations[relationType].message : '';
	      result.push(validityRelations[relationType].pattern.test(field.value));
	    });
	    return result.every(function (item) {
	      return item;
	    });
	  }
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  getElement: function getElement(item, index) {
	
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-card-id="' + item.id + '" data-card-index="' + index + '"">\n      <div style="padding-left: 34px;">\n        <span class="reference-row-number">' + (index + 1) + '</span>\n        <span>' + item.name + '</span>\n      </div>\n      <div class="d-flex justify-content-between align-items-center">' + (item.k ? item.k : '') + '\n      </div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(cardsData, container) {
	    var _this = this;
	
	    if (cardsData.length > 0) {
	      cardsData.forEach(function (item, index) {
	        return container.insertAdjacentHTML('beforeend', _this.getElement(item, index));
	      });
	    } else {
	      container.innerHTML = 'Производственных карточек еще не создано';
	    }
	  },
	  getResourceElement: function getResourceElement(item) {
	    return '\n    <div class="d-flex justify-content-between reference-string" data-card-id="' + item.good_id + '"">\n      <div style="padding-left: 34px;">\n        ' + item.name + '\n      </div>\n      <div style="padding-right: 10px;">\n        ' + item.value + '\n      </div>\n\n    </div>';
	  }
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _universalValidityMicro = __webpack_require__(54);
	
	var _universalValidityMicro2 = _interopRequireDefault(_universalValidityMicro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import toolsMarkup from '../markup/tools.js';
	
	var balanceList = document.querySelector('#list-balance-list');
	var balanceCardPlusBody = document.querySelector('#balance-card-plus-data');
	var balanceCardMinusBody = document.querySelector('#balance-card-minus');
	var balanceCardPlusTab = document.querySelector('#balance-card-plus-tab');
	var balanceCardMinusTab = document.querySelector('#balance-card-minus-tab');
	
	var balanceAmount = document.querySelector('#balance-amount');
	var balanceAmountValid = document.querySelector('#balance-amount-valid');
	var balanceSetDescribe = document.querySelector('#balance-set-describe');
	var balanceSetDescribeValid = document.querySelector('#balance-set-valid');
	var balanceStocks = document.querySelector('#balance-stocks');
	
	var balanceForm = document.querySelector('#balance-set-form');
	var balanceFormSend = document.querySelector('#list-balance-make');
	
	// ############################## РАЗМЕТКА ##############################
	var getElement = function getElement(item, index) {
	
	  return '\n  <input type="radio" id="operations-' + item.id + '" name="contact" value="email" class="d-none">\n  <label style="padding-left: 34px;" for="operations-' + item.id + '"  class="d-flex justify-content-between align-items-center reference-string" data-debit-credit-id="' + item.id + '" data-debit-credit-name="' + item.name + '">\n    <div><span class="reference-row-number">' + (index + 1) + '</span> ' + item.name + '</div>\n    <div class="d-flex justify-content-between align-items-center">\n    </div>\n  </label>';
	};
	
	var drawDataInContainer = function drawDataInContainer(balanceData, container) {
	  balanceData.forEach(function (item, index) {
	    return container.insertAdjacentHTML('beforeend', getElement(item, index));
	  });
	};
	
	var onSuccessBalanceFormSend = function onSuccessBalanceFormSend() {
	  balanceAmount.value = '';
	  balanceSetDescribe.value = '';
	  balanceFormSend.setAttribute('disabled', 'disabled');
	};
	
	var onBalanceFormSendSubmit = function onBalanceFormSendSubmit(evt) {
	  evt.preventDefault();
	  if (_universalValidityMicro2.default.check([balanceAmount, balanceSetDescribe])) {
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/stock/' + _storage2.default.currentStockId + '/balance_act',
	      data: 'value=' + (_storage2.default.debitCreditType === 'credit' ? '-' : '') + balanceAmount.value + '&reason=' + _storage2.default.debitCreditId + '&comment=' + balanceSetDescribe.value + '&token=' + _storage2.default.data.token,
	      callbackSuccess: onSuccessBalanceFormSend
	    };
	  }
	};
	
	balanceFormSend.addEventListener('click', onBalanceFormSendSubmit);
	balanceForm.addEventListener('submit', onBalanceFormSendSubmit);
	
	balanceStocks.addEventListener('change', function (evt) {
	  _storage2.default.currentStockId = evt.target.value;
	});
	
	balanceForm.addEventListener('input', function () {
	  return balanceFormSend.removeAttribute('disabled');
	});
	
	var selectedString = '';
	balanceCardPlusBody.addEventListener('change', function (evt) {
	  if (selectedString) {
	    selectedString.classList.remove('bg-light');
	  }
	  selectedString = evt.target.labels[0];
	  selectedString.classList.add('bg-light');
	  balanceAmount.removeAttribute('disabled', 'disabled');
	  balanceSetDescribe.removeAttribute('disabled', 'disabled');
	  if (balanceAmount.value || balanceSetDescribe.value) {
	    balanceFormSend.removeAttribute('disabled');
	  } else {
	    balanceFormSend.setAttribute('disabled', 'disabled');
	  }
	  _storage2.default.debitCreditId = selectedString.dataset.debitCreditId;
	});
	
	balanceCardMinusBody.addEventListener('change', function (evt) {
	  console.log(evt);
	  if (selectedString) {
	    selectedString.classList.remove('bg-light');
	  }
	  selectedString = evt.target.labels[0];
	  selectedString.classList.add('bg-light');
	  balanceAmount.removeAttribute('disabled', 'disabled');
	  balanceSetDescribe.removeAttribute('disabled', 'disabled');
	  if (balanceAmount.value || balanceSetDescribe.value) {
	    balanceFormSend.removeAttribute('disabled');
	  } else {
	    balanceFormSend.setAttribute('disabled', 'disabled');
	  }
	  _storage2.default.debitCreditId = selectedString.dataset.debitCreditId;
	});
	// ############################## ЗАГРУЗКА И ОТРИСОВКА ДАННЫХ ##############################
	
	
	var onSuccessBalanceMinusLoad = function onSuccessBalanceMinusLoad(balanceData) {
	  drawDataInContainer(balanceData.data.all_reasons, balanceCardMinusBody);
	  _storage2.default.debitCreditType = 'credit';
	  balanceAmount.setAttribute('disabled', 'disabled');
	  balanceSetDescribe.setAttribute('disabled', 'disabled');
	  balanceStocks.innerHTML = balanceData.data.all_stocks.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === _storage2.default.data.currentStock ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	  balanceFormSend.setAttribute('disabled', 'disabled');
	};
	
	var onSuccessBalancePlusLoad = function onSuccessBalancePlusLoad(balanceData) {
	  drawDataInContainer(balanceData.data.all_reasons, balanceCardPlusBody);
	  _storage2.default.debitCreditType = 'debit';
	  balanceAmount.setAttribute('disabled', 'disabled');
	  balanceSetDescribe.setAttribute('disabled', 'disabled');
	  balanceStocks.innerHTML = balanceData.data.all_stocks.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === _storage2.default.data.currentStock ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	  balanceFormSend.setAttribute('disabled', 'disabled');
	};
	
	var getCredit = function getCredit() {
	  balanceCardMinusBody.innerHTML = '';
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/operation/credit',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessBalanceMinusLoad
	  };
	};
	var getDebit = function getDebit() {
	
	  balanceCardPlusBody.innerHTML = '';
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/operation/debit',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessBalancePlusLoad
	  };
	};
	
	var init = function init() {
	  balanceCardMinusBody.innerHTML = '';
	  balanceCardPlusBody.innerHTML = '';
	  balanceCardPlusTab.classList.remove('active');
	  balanceCardMinusTab.classList.remove('active');
	  balanceAmount.setAttribute('disabled', 'disabled');
	  balanceSetDescribe.setAttribute('disabled', 'disabled');
	  balanceAmount.value = '';
	  balanceSetDescribe.value = '';
	  balanceAmountValid.innerHTML = '';
	  balanceSetDescribeValid.innerHTML = '';
	  _storage2.default.currentStockId = _storage2.default.data.currentStock;
	};
	
	exports.default = {
	  start: function start() {
	    balanceList.addEventListener('click', init);
	    balanceCardPlusTab.addEventListener('click', getDebit);
	    balanceCardMinusTab.addEventListener('click', getCredit);
	  },
	  stop: function stop() {
	    balanceList.removeEventListener('click', init);
	    balanceCardPlusTab.removeEventListener('click', getDebit);
	    balanceCardMinusTab.removeEventListener('click', getCredit);
	  }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _universalSearch = __webpack_require__(36);
	
	var _universalSearch2 = _interopRequireDefault(_universalSearch);
	
	var _universalGroupsList = __webpack_require__(49);
	
	var _universalGroupsList2 = _interopRequireDefault(_universalGroupsList);
	
	var _universalGoodsList = __webpack_require__(48);
	
	var _universalGoodsList2 = _interopRequireDefault(_universalGoodsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listInventory = document.querySelector('#list-inventory-list');
	var inventoryStocks = document.querySelector('#inventory-stocks');
	
	// const listGroupsCard = document.querySelector('#list-groups-card');
	var inventoryGroups = document.querySelector('#inventory-groups');
	var inventoryGroupsBody = document.querySelector('#inventory-groups-body');
	var inventoryGoods = document.querySelector('#inventory-goods');
	var inventoryGoodsBody = document.querySelector('#inventory-goods-body');
	
	var inventoryGoodsReturnBtn = document.querySelector('#inventory-goods-return-btn');
	var inventoryGroupName = document.querySelector('#inventory-group-name');
	// const groupGoodsCard = document.querySelector('#group-goods-card');
	
	
	var loaderSpinnerId = 'loader-groups';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	// ############################## РАБОТА С ГРУППАМИ (СПИСОК) ##############################
	
	var loadedGroups = [];
	var loadedGoods = [];
	
	// поиск по группам
	var listGroupSearchInput = document.querySelector('#list-groups-search-input');
	listGroupSearchInput.addEventListener('input', function (evt) {
	  _universalGroupsList2.default.draw(_universalSearch2.default.make(loadedGroups, evt.target.value), inventoryGroupsBody, onGroupClick);
	});
	
	// кнопка возврата на список групп
	var onInventoryGoodsReturnBtnlick = function onInventoryGoodsReturnBtnlick() {
	  inventoryGoods.classList.add('d-none');
	  inventoryGroups.classList.remove('d-none');
	  // groups.redraw();
	};
	inventoryGoodsReturnBtn.addEventListener('click', onInventoryGoodsReturnBtnlick);
	
	// обработка успеха загрузки групп
	var onSuccessDataLoad = function onSuccessDataLoad(loadedData) {
	  console.log(loadedData);
	  loadedGroups = loadedData.data.all_groups;
	  document.querySelector('#' + loaderSpinnerId).remove();
	
	  _universalGroupsList2.default.draw(loadedGroups, inventoryGroupsBody, onGroupClick);
	  inventoryStocks.innerHTML = loadedData.data.all_stocks.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === _storage2.default.data.currentStock ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	};
	
	// получение групп
	var getData = function getData() {
	  inventoryGroupsBody.innerHTML = '';
	  inventoryGroupsBody.insertAdjacentHTML('beforeend', loaderSpinnerMarkup);
	  _storage2.default.currentGroupId = false;
	  _storage2.default.currentStockId = _storage2.default.data.currentStock;
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/operation/inventory',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessDataLoad
	  };
	};
	
	var onSuccessGroupGood = function onSuccessGroupGood(goodsData) {
	  loadedGoods = goodsData.data;
	  /*
	  if (auth.goodsSortMode && loadedGoods.data) {
	    universalSort(auth.goodsSortMode);
	  }
	  */
	  // auth.goodsViewMode = (auth.goodsViewMode === 'null') ? 'string' : auth.goodsViewMode;
	  console.log(loadedGoods);
	  _universalGoodsList2.default.draw(loadedGoods, inventoryGoodsBody, null);
	};
	
	var getGoodsForGroup = function getGoodsForGroup() {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupGood
	  };
	};
	
	// обработчик клика по ноде группы
	var onGroupClick = function onGroupClick() {
	  inventoryGroupName.innerHTML = _storage2.default.currentGroupName;
	  inventoryGoods.classList.remove('d-none');
	  inventoryGroups.classList.add('d-none');
	  getGoodsForGroup();
	};
	
	exports.default = {
	  start: function start() {
	    listInventory.addEventListener('click', getData);
	  },
	
	
	  // redraw: getData,
	  // getGoodsForGroup,
	
	  stop: function stop() {
	    // groupsMarkup.cleanContainer();
	    listInventory.removeEventListener('click', getData);
	  }
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _universalValidityMicro = __webpack_require__(54);
	
	var _universalValidityMicro2 = _interopRequireDefault(_universalValidityMicro);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _permissions = __webpack_require__(2);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var usersList = document.querySelector('#list-users-list');
	var usersHeader = document.querySelector('#list-users-header');
	var usersBody = document.querySelector('#list-users-body');
	var usersAddBtn = document.querySelector('#users-add');
	var usersReturnBtn = document.querySelector('#user-card-return-btn');
	var usersPasswordBtn = document.querySelector('#user-card-password-btn');
	var usersEditBtn = document.querySelector('#user-card-edit-btn');
	var usersLockBtn = document.querySelector('#user-card-lock-btn');
	
	var userCard = document.querySelector('#user-card');
	var userCardData = document.querySelector('#user-card-data');
	var userProfileName = userCardData.querySelector('#user-profile-name');
	var userProfileStatus = userCardData.querySelector('#user-profile-status');
	var userProfileId = userCardData.querySelector('#user-profile-id');
	var userProfileImage = userCardData.querySelector('#user-profile-image');
	var userStockList = userCardData.querySelector('#user-stock-list');
	var userStockPermissions = userCardData.querySelector('#user-stock-permissions');
	var userOtherPermissions = userCardData.querySelector('#user-other-permissions');
	var userRGBForm = document.querySelector('#user-card-edit-rgb');
	
	var permissionsStock = {
	  // операции
	  'receipt': 111,
	  'sell': 121,
	  'inventory': 141,
	  'balance': 131,
	  'manufacture': 181
	};
	
	var permissionsOther = {
	
	  // каталог
	  'groups': [221, 222],
	  'cards': [231, 232],
	
	  // учет
	  'docs': [321, 322],
	  'reports': [331, 0],
	
	  // справочники
	  'contractor-suppliers': [411, 412],
	  'contractor-buyers': [421, 422],
	  'points': [431, 432],
	  'keywords': [441, 442],
	  'enterprises': [511, 512],
	  'debit': [451, 452],
	  'credit': [461, 462],
	
	  // журнал
	  'log': [541, '']
	};
	
	// ############################## РАЗМЕТКА ##############################
	var markup = {
	  getElement: function getElement(item, index) {
	    return '\n    <div class="d-flex justify-content-between align-items-center reference-string" data-user-id="' + item.id + '">\n      <div style="padding-left: 34px;">\n        <span class="reference-row-number">' + (index + 1) + '</span>\n        <img class="ml-2 mr-1 rounded-circle p-1" src="img/user-male-filled-32.png" title="' + item.name + '" style="background-color: #' + item.color + '" width="30" alt="' + item.name + '">\n        <span>' + item.name + '</span>\n      </div>\n      <div class="user-status" style="background-color: #' + (item.status === '0' ? 'dc3545' : '28a745') + '"></div>\n    </div>';
	  },
	  drawDataInContainer: function drawDataInContainer(users, container, handler) {
	    var _this = this;
	
	    users.forEach(function (user, index) {
	      container.insertAdjacentHTML('beforeend', _this.getElement(user, index));
	      container.lastChild.addEventListener('click', function () {
	        _storage2.default.currentUserId = user.id;
	        handler();
	      });
	    });
	  }
	};
	
	// отрисовка списка групп по данным
	var drawUsers = function drawUsers(users, container, handler) {
	  container.innerHTML = '';
	  if (users.length > 0) {
	    markup.drawDataInContainer(users, container, handler);
	  } else {
	    container.innerHTML = 'Пользователей нет, все ушли на базу';
	  }
	};
	
	// ############################## БЛОКИРОВКА ПОЛЬЗОВАТЕЛЯ #########################
	var lockSuccess = function lockSuccess(answer) {
	  userProfileStatus.innerText = +userProfileStatus.innerText === 0 ? '1' : '0';
	  console.log(answer);
	};
	
	var onUsersLockBtnClick = function onUsersLockBtnClick() {
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId,
	    data: 'status=' + (+userProfileStatus.innerText === 0 ? '1' : '0') + '&token=' + _storage2.default.data.token,
	    callbackSuccess: lockSuccess
	  };
	};
	
	usersLockBtn.addEventListener('click', onUsersLockBtnClick);
	// ############################## ИЗМЕНЕНИЕ ИМЕНИ ПОЛЬЗОВАТЕЛЯ #########################
	var editedName = '';
	var editSuccess = function editSuccess(answer) {
	  userProfileName.innerText = editedName;
	  console.log(answer);
	};
	var onUsersEditBtnClick = function onUsersEditBtnClick() {
	  _tools2.default.runUniversalModalMicro = {
	    title: 'Новое имя',
	    inputLabel: 'Имя',
	    inputPlaceholder: 'введите имя',
	    inputValue: userProfileName.innerText,
	    submitBtnName: 'Изменить',
	    submitCallback: function submitCallback() {
	      if (_universalValidityMicro2.default.check([document.querySelector('#universal-modal-micro-name')], ['change-user-name'])) {
	        _xhr2.default.request = {
	          metod: 'PUT',
	          url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId,
	          data: 'nickname=' + document.querySelector('#universal-modal-micro-name').value + '&token=' + _storage2.default.data.token,
	          callbackSuccess: editSuccess
	        };
	        editedName = document.querySelector('#universal-modal-micro-name').value;
	        $('#universal-modal-micro').modal('hide');
	      }
	    }
	  };
	};
	usersEditBtn.addEventListener('click', onUsersEditBtnClick);
	// ############################## ИЗМЕНЕНИЕ ПАРОЛЯ ПОЛЬЗОВАТЕЛЯ #########################
	var changePassSuccess = function changePassSuccess(answer) {
	  return console.log(answer);
	};
	var onUsersPasswordBtnClick = function onUsersPasswordBtnClick() {
	  _tools2.default.runUniversalModalMicro = {
	    title: 'Новый пароль',
	    inputLabel: 'Пароль',
	    inputPlaceholder: 'введите пароль',
	    submitBtnName: 'Изменить',
	    submitCallback: function submitCallback() {
	      if (_universalValidityMicro2.default.check([document.querySelector('#universal-modal-micro-name')], ['change-password'])) {
	        _xhr2.default.request = {
	          metod: 'PUT',
	          url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId,
	          data: 'password=' + document.querySelector('#universal-modal-micro-name').value + '&token=' + _storage2.default.data.token,
	          callbackSuccess: changePassSuccess
	        };
	        $('#universal-modal-micro').modal('hide');
	      }
	    }
	  };
	};
	
	usersPasswordBtn.addEventListener('click', onUsersPasswordBtnClick);
	// ############################## ИЗМЕНЕНИЕ ЦВЕТА ПОЛЬЗОВАТЕЛЯ #########################
	var editedRGB = '';
	var updateColor = function updateColor() {
	  userProfileImage.style.backgroundColor = '#' + editedRGB;
	};
	
	var onListKeywordsCardEditRGBFormSubmit = function onListKeywordsCardEditRGBFormSubmit(evt) {
	  evt.preventDefault();
	  console.log(userRGBForm.querySelector('input:checked'));
	  var newRGB = userRGBForm.querySelector('input:checked').value;
	  editedRGB = newRGB;
	  // document.querySelector('#list-keywords-card-edit > h3').style.backgroundColor = '#' + auth.currentKeywordRgb;
	  $(userRGBForm).modal('hide');
	
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId,
	    data: 'color=' + newRGB + '&token=' + _storage2.default.data.token,
	    callbackSuccess: updateColor
	  };
	};
	
	userRGBForm.addEventListener('submit', onListKeywordsCardEditRGBFormSubmit);
	// ############################## ДОБАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯ ##############################
	
	var addUser = function addUser() {
	  var onSuccessAddUser = function onSuccessAddUser(answer) {
	    console.log(answer);
	    getUsers();
	  };
	
	  var setRequestToAddUser = function setRequestToAddUser() {
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId,
	      data: 'token=' + _storage2.default.data.token,
	      callbackSuccess: onSuccessAddUser
	    };
	  };
	
	  _tools2.default.actionRequestModal = {
	    title: 'Добавление',
	    message: 'Вы точно хотите добавить пользователя?',
	    submitCallback: setRequestToAddUser
	  };
	};
	
	// ############################## СЛУШАЕМ ЧЕКБОКСЫ ##############################
	var onSuccessChangePermission = function onSuccessChangePermission(answer) {
	  userStockPermissions.querySelectorAll('INPUT').forEach(function (elem) {
	    return elem.removeAttribute('disabled');
	  });
	  userOtherPermissions.querySelectorAll('INPUT').forEach(function (elem) {
	    return elem.removeAttribute('disabled');
	  });
	  onUserClick();
	};
	
	var changeStockPermission = function changeStockPermission(evt) {
	  userStockPermissions.querySelectorAll('INPUT').forEach(function (elem) {
	    return elem.setAttribute('disabled', 'disabled');
	  });
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId + '/permission',
	    data: 'business=' + _storage2.default.data.currentBusiness + '&code=' + evt.target.value + '&value=' + (evt.target.checked ? 1 : 0) + '&stock=' + _storage2.default.currentStockId + '&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessChangePermission
	  };
	};
	var changeOtherPermission = function changeOtherPermission(evt) {
	  userOtherPermissions.querySelectorAll('INPUT').forEach(function (elem) {
	    return elem.setAttribute('disabled', 'disabled');
	  });
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId + '/permission',
	    data: 'business=' + _storage2.default.data.currentBusiness + '&code=' + evt.target.value + '&value=' + (evt.target.checked ? 1 : 0) + '&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessChangePermission
	  };
	};
	
	userStockPermissions.addEventListener('change', changeStockPermission);
	userOtherPermissions.addEventListener('change', changeOtherPermission);
	
	// ############################## ЗАГРУЗКА СПИСКА ПОЛЬЗОВАТЕЛЕЙ ##############################
	usersReturnBtn.addEventListener('click', function () {
	  getUsers();
	  usersBody.classList.remove('d-none');
	  userCard.classList.add('d-none');
	  usersHeader.classList.remove('d-none');
	});
	
	var onSuccessUserInfoLoad = function onSuccessUserInfoLoad(userData) {
	  console.log('userData --> ', userData);
	  var permissionList = {
	    stock: {},
	    other: []
	  };
	  var _userData$data = userData.data,
	      name = _userData$data.name,
	      status = _userData$data.status,
	      id = _userData$data.id,
	      color = _userData$data.color,
	      permissions = _userData$data.operator_permissons,
	      allSocks = _userData$data.all_stocks;
	
	  userProfileName.innerHTML = name;
	  userProfileStatus.innerHTML = status;
	  userProfileId.innerHTML = _storage2.default.data.directory + '-' + id;
	  userProfileImage.style.backgroundColor = '#' + color;
	
	  if (permissions) {
	    /*
	    permissions.forEach((item) => {
	      // permissionList.stock = item;
	      if (item.stock === '00') {
	        permissionList.other.push(item.code);
	      } else if (permissionList.stock[`stock-${item.stock}`]) {
	        permissionList.stock[`stock-${item.stock}`].push(item.code);
	      } else {
	        permissionList.stock[`stock-${item.stock}`] = [item.code];
	      }
	    });
	    */
	    permissions.forEach(function (item) {
	      // permissionList.stock = item;
	      if (item.stock === '00') {
	        permissionList.other.push(item.code);
	      } else if (permissionList.stock[item.stock]) {
	        permissionList.stock[item.stock].push(item.code);
	      } else {
	        permissionList.stock[item.stock] = [item.code];
	      }
	    });
	
	    console.log(permissionList);
	    var screenNamesStock = Object.keys(permissionsStock);
	    userStockList.innerHTML = '';
	    Object.keys(permissionList.stock).forEach(function (stockName) {
	      var a = allSocks.find(function (item) {
	        console.log(item.id);
	        console.log(Number(stockName).toFixed());
	        return item.id === Number(stockName).toFixed();
	      });
	      console.log(a);
	      var stock = allSocks.find(function (item) {
	        return item.id === Number(stockName).toFixed();
	      });
	      userStockList.insertAdjacentHTML('beforeEnd', '<span class="user-permissions-stock" data-stock-id=' + Number(stockName).toFixed() + '>' + (stock ? stock.name : '') + '</span>');
	
	      userStockList.lastChild.addEventListener('click', function () {
	        console.log(Number(stockName.split('-')[1]).toFixed());
	        _storage2.default.currentStockId = Number(stockName).toFixed();
	        onUserClick();
	        var screens = screenNamesStock.map(function (screen) {
	          return permissionList.stock[stockName].includes(permissionsStock[screen].toString()) ? [screen, 'checked'] : [screen, ''];
	        });
	        userStockPermissions.innerHTML = screens.map(function (screen) {
	          return '\n          <div class="user-permissions-string">\n            <span>' + _permissions2.default.permissionEngToRus[screen[0]] + '</span>\n            <div>\n              <input class="form-check-input position-static user-permissions-switch" type="checkbox" value="' + permissionsStock[screen[0]] + '" ' + screen[1] + '>\n            </div>\n          </div>';
	        }).join('');
	      });
	    });
	    userOtherPermissions.innerHTML = Object.keys(permissionsOther).map(function (screen) {
	      console.log(screen);
	      return '\n      <div class="user-permissions-string">\n        <span>' + _permissions2.default.permissionEngToRus[screen] + '</span>\n        <div>\n          <input class="form-check-input position-static user-permissions-switch" type="checkbox" value="' + permissionsOther[screen][0] + '" ' + (permissionList.other.includes(permissionsOther[screen][0].toString()) ? 'checked' : '') + '>\n          <input class="form-check-input position-static user-permissions-switch" type="checkbox" value="' + permissionsOther[screen][1] + '" ' + (permissionList.other.includes(permissionsOther[screen][1].toString()) ? 'checked' : '') + '>\n        </div>\n      </div>';
	    }).join('');
	  } else {
	    userStockList.innerHTML = '';
	    userStockPermissions.innerHTML = '';
	    userOtherPermissions.innerHTML = '';
	  }
	
	  // drawUsers(usersData.data, usersBody, onUserClick);
	};
	
	// обработчик клика по пользователю
	var onUserClick = function onUserClick() {
	  usersBody.classList.add('d-none');
	  usersHeader.classList.add('d-none');
	  userCard.classList.remove('d-none');
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.currentUserId + '/info',
	    data: 'business=' + _storage2.default.data.currentBusiness + '&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessUserInfoLoad
	  };
	};
	
	var onSuccessUsersLoad = function onSuccessUsersLoad(usersData) {
	  console.log(usersData);
	  drawUsers(usersData.data, usersBody, onUserClick);
	};
	
	var getUsers = function getUsers() {
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessUsersLoad
	  };
	};
	
	exports.default = {
	  start: function start() {
	    usersList.addEventListener('click', getUsers);
	    usersAddBtn.addEventListener('click', addUser);
	  },
	
	
	  // redraw: getdebitCredit,
	
	  stop: function stop() {
	    usersList.removeEventListener('click', getUsers);
	    usersAddBtn.removeEventListener('click', addUser);
	  }
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _universalBillsList = __webpack_require__(60);
	
	var _universalBillsList2 = _interopRequireDefault(_universalBillsList);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var START_YEAR = 2015;
	// import goods from './universal-goods-list.js';
	// import uValid from './universal-validity-micro.js';
	
	
	var docsList = document.querySelector('#list-docs-list');
	// const docsHeader = document.querySelector('#list-docs-header');
	var docsBody = document.querySelector('#list-docs-body');
	var docsStocks = document.querySelector('#docs-stocks');
	
	var docsYear = document.querySelector('#docs-year');
	var docsMonth = document.querySelector('#docs-month');
	var docsDay = document.querySelector('#docs-day');
	
	var docsBillBtn = document.querySelector('#docs-bill-btn');
	var docsBalanceBtn = document.querySelector('#docs-balance-btn');
	// const docsReturnBtn = document.querySelector('#user-card-return-btn');
	var billCard = document.querySelector('#bill-card');
	
	var billCardType = document.querySelector('#bill-card-type');
	var billCardStock = document.querySelector('#bill-card-stock');
	var billCardId = document.querySelector('#bill-card-id');
	var billCardTime = document.querySelector('#bill-card-time');
	var billCardUser = document.querySelector('#bill-card-user');
	var billCardGoods = document.querySelector('#bill-card-goods');
	var billDeliveryBtn = document.querySelector('#bill-delivery-btn');
	var billDeleteBtn = document.querySelector('#bill-delete-btn');
	
	var balanceCard = document.querySelector('#balance-act-card');
	
	var balanceCardStock = document.querySelector('#balance-act-card-stock');
	var balanceCardId = document.querySelector('#balance-act-card-id');
	var balanceCardUser = document.querySelector('#balance-act-card-user');
	var balanceCardTime = document.querySelector('#balance-act-card-time');
	var balanceCardTotal = document.querySelector('#balance-act-total');
	var balanceCardReason = document.querySelector('#balance-act-reason');
	var balanceCardComment = document.querySelector('#balance-act-comment');
	var balanceDeleteBtn = document.querySelector('#balance-act-delete-btn');
	
	// ############################## РАЗМЕТКА ТОВАРОВ #############
	var getGoodString = function getGoodString(item, index) {
	  return '\n  <div class="goods-string"">\n    <div>\n      <span class="reference-row-number">' + (index + 1) + '</span> <span>\u2116 ' + item.good + '</span>\n    </div>\n    <div>\n      ' + Number(item.count).toFixed(2) + ' x ' + Number(item.price).toFixed(2) + ' = ' + Number(item.count).toFixed(2) * Number(item.price).toFixed(2) + '\n    </div>\n  </div>';
	};
	
	// ############################## ОБРАБОТЧИКИ КЛИКОВ ПРИ ВЫВОДЕ ЗА ДЕНЬ#############
	// let billStatus = '';
	
	var onSuccessBillGet = function onSuccessBillGet(answer) {
	  console.log(answer);
	  var _answer$data = answer.data,
	      id = _answer$data.id,
	      operatorName = _answer$data.operator_name,
	      stockName = _answer$data.stock_name,
	      time = _answer$data.time,
	      type = _answer$data.type,
	      goodsContent = _answer$data.content;
	  // billStatus = status;
	
	  billCardStock.innerHTML = stockName;
	  billCardType.src = 'img/' + _universalBillsList2.default.BillTypes['type' + type] + '.png';
	  billCardId.innerHTML = '№' + id;
	  billCardTime.innerHTML = '|| ' + new Date(+(time + '000')).toLocaleString();
	  billCardUser.title = operatorName;
	
	  goodsContent.forEach(function (good, index) {
	    return billCardGoods.insertAdjacentHTML('beforeend', getGoodString(good, index));
	  });
	  if (+type === 0 || +type === 2) {
	    billDeliveryBtn.classList.remove('d-none');
	  } else {
	    billDeliveryBtn.classList.add('d-none');
	  }
	  $(billCard).modal('show');
	};
	
	// ############################## УДАЛЕНИЕ НАКЛАДНОЙ #############
	var onSuccessBillDelete = function onSuccessBillDelete(answer) {
	  console.log(answer);
	
	  // onListEnterprisesCardReturnBtn();
	  $(billCard).modal('hide');
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: 'Накладная успешно удалена'
	  };
	};
	
	var setRequestToDeleteBill = function setRequestToDeleteBill() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.currentEnterpriseId + '/' + _storage2.default.allDocsOperationType + '/' + _storage2.default.currentBillId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessBillDelete
	  };
	};
	
	billDeleteBtn.addEventListener('click', function () {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u0443\u044E <b>' + _storage2.default.currentBillId + '</b>?',
	    submitCallback: setRequestToDeleteBill
	  };
	});
	
	// ############################## ЗАВЕРШЕНИЕ ДОСТАВКИ #############
	var onSuccessBillDelivery = function onSuccessBillDelivery(answer) {
	  console.log(answer);
	
	  // onListEnterprisesCardReturnBtn();
	  $(billCard).modal('hide');
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: 'Накладная успешно доставлена'
	  };
	};
	
	var setRequestToDeliveryBill = function setRequestToDeliveryBill() {
	  _xhr2.default.request = {
	    metod: 'PUT',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.currentEnterpriseId + '/' + _storage2.default.allDocsOperationType + '/' + _storage2.default.currentBillId,
	    data: 'status=3&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessBillDelivery
	  };
	};
	
	billDeliveryBtn.addEventListener('click', function () {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0439 <b>' + _storage2.default.currentBillId + '</b> \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430? (\u0434\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u044B\u043C)',
	    submitCallback: setRequestToDeliveryBill
	  };
	});
	
	var onBillClick = function onBillClick(id) {
	  // auth.currentBillId = id;
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.data.currentBusiness + '/' + _storage2.default.allDocsOperationType + '/' + _storage2.default.currentBillId + '/info',
	    data: 'token=' + _storage2.default.data.token + (_storage2.default.currentStockId ? '&stock=' + _storage2.default.currentStockId : ''),
	    callbackSuccess: onSuccessBillGet
	  };
	};
	// ############################## УДАЛЕНИЕ БАЛАНСОВОЙ ОПЕРАЦИИ #############
	var onSuccessBalanceDelete = function onSuccessBalanceDelete(answer) {
	  console.log(answer);
	
	  $(balanceCard).modal('hide');
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	
	  _tools2.default.informationtModal = {
	    title: 'Уведомление',
	    message: 'Балансова операция успешно удалена'
	  };
	};
	
	var setRequestToDeleteBalance = function setRequestToDeleteBalance() {
	  _xhr2.default.request = {
	    metod: 'DELETE',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.currentEnterpriseId + '/balance_act/' + _storage2.default.currentBillId,
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessBalanceDelete
	  };
	};
	
	balanceDeleteBtn.addEventListener('click', function () {
	
	  _tools2.default.actionRequestModal = {
	    title: 'Удаление',
	    message: '\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441\u043E\u0432\u0443\u044E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E <b>' + _storage2.default.currentBillId + '</b>?',
	    submitCallback: setRequestToDeleteBalance
	  };
	});
	
	var onSuccessBalanceGet = function onSuccessBalanceGet(answer) {
	  console.log(answer);
	  var _answer$data2 = answer.data,
	      id = _answer$data2.id,
	      comment = _answer$data2.comment,
	      reasonName = _answer$data2.reason_name,
	      operatorName = _answer$data2.operator_name,
	      stockName = _answer$data2.stock_name,
	      time = _answer$data2.time,
	      value = _answer$data2.value;
	
	  balanceCardStock.innerHTML = stockName;
	  balanceCardTotal.innerHTML = value;
	  balanceCardReason.innerHTML = reasonName;
	  balanceCardComment.innerHTML = comment;
	  balanceCardId.innerHTML = '№' + id;
	  balanceCardTime.innerHTML = '|| ' + new Date(+(time + '000')).toLocaleString();
	  balanceCardUser.title = operatorName;
	
	  $(balanceCard).modal('show');
	};
	
	var onBalanceActClick = function onBalanceActClick() {
	  console.log('hi');
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.data.currentBusiness + '/balance_act/' + _storage2.default.currentBillId + '/info',
	    data: 'token=' + _storage2.default.data.token + (_storage2.default.currentStockId ? '&stock=' + _storage2.default.currentStockId : ''),
	    callbackSuccess: onSuccessBalanceGet
	  };
	};
	
	// ############################## ЗАГРУЖАЕМ ДОКУМЕНТЫ ##############################
	
	var onSuccessBillsGet = function onSuccessBillsGet(billsData) {
	  console.log(billsData);
	
	  docsBody.innerHTML = '';
	  if (billsData.data.length > 0) {
	
	    if (billsData.data[0].month_number) {
	      _universalBillsList2.default.drawYear(billsData.data, docsBody, null);
	    } else if (billsData.data[0].day_number) {
	      _universalBillsList2.default.drawMonth(billsData.data, docsBody, null);
	    } else if (billsData.data[0].stock_name && _storage2.default.allDocsOperationType === 'naklad') {
	      _universalBillsList2.default.drawDay(billsData.data, docsBody, onBillClick);
	    } else if (billsData.data[0].stock_name && _storage2.default.allDocsOperationType === 'balance') {
	      _universalBillsList2.default.drawDayBalance(billsData.data, docsBody, onBalanceActClick);
	    }
	  } else {
	    docsBody.innerHTML = _storage2.default.allDocsOperationType === 'naklad' ? 'Накладных нет' : 'Балансовых операций нет';
	  }
	};
	var getDocs = function getDocs(year, month, day, type) {
	  var interval = 'year/' + year + (month !== 'all' ? '/month/' + (+month + 1) : '') + (day !== 'all' ? '/day/' + day : '');
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.data.currentBusiness + '/documents/' + _storage2.default.allDocsOperationType + '/' + interval,
	    data: 'token=' + _storage2.default.data.token + (_storage2.default.currentStockId ? '&stock=' + _storage2.default.currentStockId : ''),
	    callbackSuccess: onSuccessBillsGet
	  };
	};
	// ############################## ВЫСТАВЛЯЕМ ДАТЫ ##############################
	var drawDates = function drawDates(year, month, day) {
	  var thisYear = new Date().getFullYear();
	  var thisMonth = month || new Date().getMonth();
	  var numberOfDays = 33 - new Date(thisYear, thisMonth, 33).getDate();
	
	  docsYear.innerHTML = '';
	  docsDay.innerHTML = '';
	
	  for (var i = START_YEAR; i <= thisYear; i++) {
	    docsYear.insertAdjacentHTML('afterBegin', '<option value="' + i + '">' + i + '</option>');
	  }
	
	  for (var _i = 1; _i <= numberOfDays; _i++) {
	    var currentDayNumber = new Date(thisYear, thisMonth, _i).getUTCDay();
	    var holidayFlag = currentDayNumber === 5 || currentDayNumber === 6 ? 'class="text-danger"' : '';
	    docsDay.insertAdjacentHTML('afterBegin', '<option value="' + _i + '" ' + holidayFlag + '>' + _i + '</option>');
	  }
	  docsDay.insertAdjacentHTML('afterBegin', '<option value="all">---------</option>');
	
	  docsYear.value = year || thisYear;
	  docsMonth.value = thisMonth;
	  docsDay.value = day || new Date().getUTCDate();
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	};
	
	docsYear.addEventListener('change', function (evt) {
	  return drawDates(evt.target.value, 'all', 'all');
	});
	docsMonth.addEventListener('change', function (evt) {
	  return drawDates(docsYear.value, evt.target.value, 'all');
	});
	docsDay.addEventListener('change', function (evt) {
	  return drawDates(docsYear.value, docsMonth.value, evt.target.value);
	});
	docsStocks.addEventListener('change', function (evt) {
	  _storage2.default.currentStockId = evt.target.value;
	  drawDates(docsYear.value, docsMonth.value, docsDay.value);
	});
	
	docsBillBtn.addEventListener('click', function () {
	  _storage2.default.allDocsOperationType = 'naklad';
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	});
	
	docsBalanceBtn.addEventListener('click', function () {
	  _storage2.default.allDocsOperationType = 'balance';
	  getDocs(docsYear.value, docsMonth.value, docsDay.value);
	});
	
	var onSuccessStocksLoad = function onSuccessStocksLoad(docsData) {
	  console.log(docsData);
	  docsStocks.innerHTML = docsData.data.map(function (item) {
	    return '<option value="' + item.id + '" ' + (item.id === _storage2.default.data.currentStock ? 'selected' : '') + '>' + item.name + '</option>';
	  }).join('');
	  if (docsData.data.length > 1) {
	    docsStocks.innerHTML += '<option value="all">Все склады</option';
	  }
	
	  // drawDocs(docsData.data, docsBody, onDocClick);
	};
	
	var getStocks = function getStocks() {
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/' + _storage2.default.data.operatorId + '/business/' + _storage2.default.data.currentBusiness + '/stock',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessStocksLoad
	  };
	};
	
	exports.default = {
	  start: function start() {
	    docsList.addEventListener('click', getStocks);
	    drawDates();
	    getDocs(docsYear.value, docsMonth.value, docsDay.value);
	    _storage2.default.allDocsOperationType = 'naklad';
	  },
	
	
	  // redraw: getdebitCredit,
	
	  stop: function stop() {
	    docsList.removeEventListener('click', getStocks);
	  }
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BillTypes = {
	  'type0': 'suppliers',
	  'type1': 'admission',
	  'type2': 'buyers',
	  'type3': 'sale',
	  'type8': 'ic_my_production'
	};
	
	var getYearElement = function getYearElement(item, index) {
	  return '\n  <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n    <div class="media">\n      <div class="media-body">\n        <b> \u041D\u043E\u043C\u0435\u0440 \u043C\u0435\u0441\u044F\u0446\u0430: </b>' + item.month_number + '\n        <b> \u0412\u0440\u0435\u043C\u044F (\u043F\u0435\u0440\u0432\u0430\u044F) </b>' + new Date(+(item.doc_time_first + '000')).toLocaleString() + '\n        <b> \u0412\u0440\u0435\u043C\u044F (\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F) </b>' + new Date(+(item.doc_time_last + '000')).toLocaleString() + '\n        <b> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432: </b>' + item.count_documents + '\n        <b> \u0412\u0441\u0435\u0433\u043E: </b>' + item.total + '\n      </div>\n    </div>';
	};
	
	var getMonthElement = function getMonthElement(item, index) {
	  return '\n  <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n    <div class="media">\n      <div class="media-body">\n        <b> \u041D\u043E\u043C\u0435\u0440 \u0434\u043D\u044F: </b>' + item.day_number + '\n        <b> \u0412\u0440\u0435\u043C\u044F (\u043F\u0435\u0440\u0432\u0430\u044F) </b>' + new Date(+(item.doc_time_first + '000')).toLocaleString() + '\n        <b> \u0412\u0440\u0435\u043C\u044F (\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F) </b>' + new Date(+(item.doc_time_last + '000')).toLocaleString() + '\n        <b> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432: </b>' + item.count_documents + '\n      </div>\n    </div>';
	};
	var getDayElement = function getDayElement(item, index) {
	  return '\n  <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n    <div class="media">\n      <img class="mr-3" src="img/' + BillTypes['type' + item.type] + '.png" width="30" alt="Generic placeholder image">\n      <div class="media-body">\n        <b>ID: </b>' + item.id + '\n        <b> \u0421\u0442\u0430\u0442\u0443\u0441: </b>' + item.status + '\n        <b> ID \u0441\u043A\u043B\u0430\u0434\u0430: </b>' + item.stock_id + '\n        <b> \u0418\u043C\u044F \u0441\u043A\u043B\u0430\u0434\u0430: </b>' + item.stock_name + '\n        <b> \u0412\u0440\u0435\u043C\u044F: </b>' + new Date(+(item.time + '000')).toLocaleString() + '\n        <b> \u0412\u0441\u0435\u0433\u043E: </b>' + item.total + '\n        <b> \u0422\u0438\u043F: </b>' + item.type + '\n      </div>\n    </div>';
	};
	var getDayBalanceElement = function getDayBalanceElement(item, index) {
	  return '\n  <div id="log-row" class="card mb-0 p-1 rounded-0" style="width: 100%">\n    <div class="media">\n\n      <div class="media-body">\n        <b>ID: </b>' + item.id + '\n        <b> ID \u0441\u043A\u043B\u0430\u0434\u0430: </b>' + item.stock_id + '\n        <b> \u0418\u043C\u044F \u0441\u043A\u043B\u0430\u0434\u0430: </b>' + item.stock_name + '\n        <b> \u0412\u0440\u0435\u043C\u044F: </b>' + new Date(+(item.time + '000')).toLocaleString() + '\n        <b> \u0412\u0441\u0435\u0433\u043E: </b>' + item.total + '\n        <b> \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: </b>' + item.comment + '\n        <b> \u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435: </b>' + item.reason + '\n      </div>\n    </div>';
	};
	
	var markup = {
	  drawBillsYear: function drawBillsYear(billsData, container, handler) {
	    billsData.forEach(function (group, index) {
	      container.insertAdjacentHTML('beforeend', getYearElement(group, index));
	      /*
	      container.lastChild.addEventListener('click', function () {
	        auth.currentGroupId = group.id;
	        auth.currentGroupName = group.name;
	        auth.currentGroupLevel = group.level;
	        handler();
	      });
	      */
	    });
	  },
	  drawBillsMonth: function drawBillsMonth(billsData, container, handler) {
	    billsData.forEach(function (bill, index) {
	      container.insertAdjacentHTML('beforeend', getMonthElement(bill, index));
	      /*
	      container.lastChild.addEventListener('click', function () {
	        auth.currentGroupId = group.id;
	        auth.currentGroupName = group.name;
	        auth.currentGroupLevel = group.level;
	        handler();
	      });
	      */
	    });
	  },
	  drawBillsDay: function drawBillsDay(billsData, container, handler) {
	    billsData.forEach(function (bill, index) {
	      container.insertAdjacentHTML('beforeend', getDayElement(bill, index));
	
	      container.lastChild.addEventListener('click', function () {
	        // auth.currentGroupId = group.id;
	        // auth.currentGroupName = group.name;
	        _storage2.default.currentBillId = bill.id;
	        // handler(bill.id);
	        handler();
	      });
	    });
	  },
	  drawBalanceDay: function drawBalanceDay(billsData, container, handler) {
	    billsData.forEach(function (bill, index) {
	      container.insertAdjacentHTML('beforeend', getDayBalanceElement(bill, index));
	
	      container.lastChild.addEventListener('click', function () {
	        /*
	        auth.currentGroupId = group.id;
	        auth.currentGroupName = group.name;
	        auth.currentGroupLevel = group.level;
	        */
	        _storage2.default.currentBillId = bill.id;
	        // handler(bill.id);
	        handler();
	      });
	    });
	  }
	};
	
	exports.default = {
	  drawYear: markup.drawBillsYear,
	  drawMonth: markup.drawBillsMonth,
	  drawDay: markup.drawBillsDay,
	  drawDayBalance: markup.drawBalanceDay,
	  BillTypes: BillTypes
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _catalogCards = __webpack_require__(55);
	
	var _catalogCards2 = _interopRequireDefault(_catalogCards);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalog__cardsAddEdit = __webpack_require__(62);
	
	var _catalog__cardsAddEdit2 = _interopRequireDefault(_catalog__cardsAddEdit);
	
	var _catalog__cardsAddResource = __webpack_require__(63);
	
	var _catalog__cardsAddResource2 = _interopRequireDefault(_catalog__cardsAddResource);
	
	var _universalGoodsList = __webpack_require__(48);
	
	var _universalGoodsList2 = _interopRequireDefault(_universalGoodsList);
	
	var _universalSearch = __webpack_require__(36);
	
	var _universalSearch2 = _interopRequireDefault(_universalSearch);
	
	var _universalGroupsList = __webpack_require__(49);
	
	var _universalGroupsList2 = _interopRequireDefault(_universalGroupsList);
	
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
	
	var universalAdd = document.querySelector('#universal-add');
	
	var loadedGoods = [];
	var loadedGroups = [];
	
	var fastEditFlag = false;
	
	// поиск по товару внутри группы
	var cardResourcesSearchInput = document.querySelector('#card-resources-search-input');
	
	var onGoodClick = function onGoodClick(good) {
	  $(cardResourcesGroupModal).modal('hide');
	  $(addResourcesModal).modal('show');
	  addResourcesModalLabel.innerHTML = good.name;
	  _catalog__cardsAddResource2.default.start(addResourcesModal);
	};
	
	var drawGoods = function drawGoods(data) {
	
	  cardResourcesGroupModalReturnBtn.classList.remove('invisible');
	  cardResourcesSearchInput.addEventListener('input', onGoodsSearch);
	  cardResourcesSearchInput.removeEventListener('input', onGroupsSearch);
	  _universalGoodsList2.default.draw(data, cardResourcesGroupModalBody, onGoodClick, 'string');
	};
	
	var onGroupClick = function onGroupClick() {
	
	  cardResourcesSearchInput.focus();
	  cardResourcesSearchInput.value = '';
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/group/' + _storage2.default.currentGroupId + '/goods_light',
	    data: 'view_last=0&token=' + _storage2.default.data.token,
	    callbackSuccess: onSuccessGroupGood
	  };
	};
	
	var drawGroups = function drawGroups(groupsData) {
	  console.log(groupsData);
	  cardResourcesGroupModalReturnBtn.classList.add('invisible');
	  cardResourcesSearchInput.removeEventListener('input', onGoodsSearch);
	  cardResourcesSearchInput.addEventListener('input', onGroupsSearch);
	  _universalGroupsList2.default.draw(groupsData, cardResourcesGroupModalBody, onGroupClick);
	};
	
	var onGoodsSearch = function onGoodsSearch(evt) {
	  drawGoods(_universalSearch2.default.make(loadedGoods.data, cardResourcesSearchInput.value));
	};
	
	var onGroupsSearch = function onGroupsSearch(evt) {
	  drawGroups(_universalSearch2.default.make(loadedGroups.data, cardResourcesSearchInput.value));
	};
	
	var onSuccessGroupGood = function onSuccessGroupGood(goodsData) {
	  loadedGoods = goodsData;
	  cardResourcesGroupModalTitle.innerHTML = '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440 \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "' + _storage2.default.currentGroupName + '"';
	  cardResourcesGroupModalReturnBtn.addEventListener('click', getGroups);
	  drawGoods(goodsData.data);
	};
	
	$(addResourcesModal).on('hidden.bs.modal', function () {
	  if (fastEditFlag === false) {
	    $(cardResourcesGroupModal).modal('show');
	  }
	});
	
	var onSuccessGroupsLoad = function onSuccessGroupsLoad(groupsData) {
	  loadedGroups = groupsData;
	  cardResourcesGroupModalBody.innerHTML = '';
	  cardResourcesGroupModalTitle.innerHTML = 'Выберите группу';
	  cardResourcesSearchInput.focus();
	  drawGroups(groupsData.data);
	};
	
	var getGroups = function getGroups() {
	  _storage2.default.currentGroupId = false;
	  cardResourcesSearchInput.value = '';
	  $(cardResourcesGroupModal).modal('show');
	  fastEditFlag = false;
	
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
	  cardName.innerHTML = cardResourcesData.data.name;
	
	  if (cardResourcesData.data.resours.length) {
	    cardResourcesData.data.resours.forEach(function (item) {
	
	      var onResourcesGoodClick = function onResourcesGoodClick(good) {
	        $(cardResourcesGroupModal).modal('hide');
	        $(addResourcesModal).modal('show');
	        addResourcesModalLabel.innerHTML = item.name;
	        _storage2.default.currentGoodId = item.good_id;
	        _storage2.default.currentCardOperation = item.value < 0 ? -1 : 1;
	        _catalog__cardsAddResource2.default.start(addResourcesModal);
	        fastEditFlag = true;
	      };
	      console.log(item.value < 0);
	      if (item.value < 0) {
	        cardResourcesResources.insertAdjacentHTML('beforeend', _catalogCards2.default.getResourceElement(item));
	        cardResourcesResources.lastChild.addEventListener('click', onResourcesGoodClick);
	      } else {
	        console.log('hi');
	        console.log(_catalogCards2.default.getResourceElement(item));
	        cardResourcesProduct.insertAdjacentHTML('beforeend', _catalogCards2.default.getResourceElement(item));
	        cardResourcesProduct.lastChild.addEventListener('click', onResourcesGoodClick);
	      }
	      console.log(cardResourcesProduct);
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
	  console.log(evt);
	  console.log('onListCardBodyClick');
	  if (evt) {
	
	    cardResources.classList.remove('d-none');
	    listCardsCard.classList.add('d-none');
	
	    var currentStringElement = evt.target;
	    while (!currentStringElement.dataset.cardId) {
	      currentStringElement = currentStringElement.parentNode;
	    }
	
	    var currentCardName = cardData.data[currentStringElement.dataset.cardIndex].name;
	    // cardName.innerHTML = currentCardName;
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
	  _catalogCards2.default.drawDataInContainer(loadedCards.data, listCardBody);
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
	
	var setupUniversalAdd = function setupUniversalAdd() {
	  _storage2.default.currentCardName = '';
	  _tools2.default.runUniversalAdd = {
	    title: 'Создание карточки',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    submitBtnName: 'Создать'
	  };
	  _catalog__cardsAddEdit2.default.start(universalAdd);
	};
	
	var setupUniversalAddEdit = function setupUniversalAddEdit() {
	  _tools2.default.runUniversalAdd = {
	    title: 'Редактирование карточки',
	    inputLabel: 'Название',
	    inputPlaceholder: 'введите название',
	    inputValue: _storage2.default.currentCardName,
	    submitBtnName: 'Изменить'
	  };
	  _catalog__cardsAddEdit2.default.start(universalAdd);
	};
	
	listCardAddBtn.addEventListener('click', setupUniversalAdd);
	listCardEditBtn.addEventListener('click', setupUniversalAddEdit);
	
	exports.default = {
	  start: function start() {
	    listCards.addEventListener('click', getCards);
	  },
	
	
	  redrawList: getCards,
	  redrawCard: onListCardBodyClick,
	
	  stop: function stop() {
	    listCards.removeEventListener('click', getCards);
	  }
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__cards = __webpack_require__(61);
	
	var _catalog__cards2 = _interopRequireDefault(_catalog__cards);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrlAdd = void 0;
	var appUrlEdit = void 0;
	var messages = void 0;
	
	var form = void 0;
	var field1 = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	
	  form.dataset.formname = 'nomenclatureAddEdit';
	  field1 = form.querySelector('*[data-valid="field1"]');
	
	  appUrlAdd = window.appSettings[form.dataset.formname].UrlApiAdd;
	  appUrlEdit = window.appSettings[form.dataset.formname].UrlApiEdit;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      if (_storage2.default.currentCardName === '') {
	        _catalog__cards2.default.redrawList();
	      } else {
	        _catalog__cards2.default.redrawCard();
	      }
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitFormAdd = function submitFormAdd() {
	  var stor = _storage2.default.data;
	
	  var postData = 'name=' + field1.value + '&token=' + stor.token;
	  var urlApp = appUrlAdd.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  });
	};
	
	var submitFormEdit = function submitFormEdit() {
	  var stor = _storage2.default.data;
	
	  var postData = 'name=' + field1.value + '&token=' + stor.token;
	  var urlApp = appUrlEdit.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{NCid}}', _storage2.default.currentCardId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess
	  });
	};
	
	exports.default = {
	  start: function start(remModal) {
	    initVar(remModal);
	
	    if (_storage2.default.currentCardName === '') {
	      _formTools2.default.work(modal, submitFormAdd);
	    } else {
	      _formTools2.default.work(modal, submitFormEdit);
	    }
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__cards = __webpack_require__(61);
	
	var _catalog__cards2 = _interopRequireDefault(_catalog__cards);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var quantity = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	  quantity = form.querySelector('*[data-valid="quantity"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].message;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _catalog__cards2.default.redrawCard();
	      break;
	    case 400:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.messages
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitForm = function submitForm() {
	  var stor = _storage2.default.data;
	
	  var postData = 'good=' + _storage2.default.currentGoodId + '&value=' + quantity.value * +_storage2.default.currentCardOperation + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	  urlApp = urlApp.replace('{{NCid}}', _storage2.default.currentCardId);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'PUT',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr = __webpack_require__(6);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalog__groups = __webpack_require__(35);
	
	var _catalog__groups2 = _interopRequireDefault(_catalog__groups);
	
	var _catalog__goods = __webpack_require__(40);
	
	var _catalog__goods2 = _interopRequireDefault(_catalog__goods);
	
	var _universalKeywords = __webpack_require__(32);
	
	var _universalKeywords2 = _interopRequireDefault(_universalKeywords);
	
	var _universalGoodsList = __webpack_require__(48);
	
	var _universalGoodsList2 = _interopRequireDefault(_universalGoodsList);
	
	var _singleValidation = __webpack_require__(65);
	
	var _singleValidation2 = _interopRequireDefault(_singleValidation);
	
	var _catalog__searchBarcode = __webpack_require__(66);
	
	var _catalog__searchBarcode2 = _interopRequireDefault(_catalog__searchBarcode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listSearch = document.querySelector('#list-search-list');
	var listSearchBody = document.querySelector('#list-search-card-body');
	var listSearchBtn = document.querySelector('#list-search-btn');
	var listSearchForm = document.querySelector('#list-search-form');
	var listSearchInput = document.querySelector('#list-search-input');
	
	var listSearchKeywordsChecked = document.querySelector('#list-search-card-body-checked-keywords');
	var listSearchKeywordsBtn = document.querySelector('#list-search-keywords-btn');
	var listSearchKeywordsModal = document.querySelector('#search-card-keywords');
	var listSearchKeywordsModalBody = document.querySelector('#search-card-keywords-body');
	var listSearchKeywordsResetBtn = document.querySelector('#list-search-card-reset-btn');
	var listSearchKeywordsModalSubmit = document.querySelector('#search-card-keywords-submit');
	
	var loaderSpinnerId = 'loader-cards';
	var loaderSpinnerMessage = 'Загрузка';
	var loaderSpinnerMarkup = _tools2.default.getLoadSpinner(loaderSpinnerId, loaderSpinnerMessage);
	
	// отрисовка карточки товара
	listSearchBody.addEventListener('click', _catalog__groups2.default.openGoodCard);
	
	// массив с полными результатами
	var fullSearch = [];
	var keywordSearch = [];
	
	var onGoodClick = function onGoodClick() {
	  _catalog__goods2.default.fill();
	};
	
	// отрисовка результатов поиска
	var drawResult = function drawResult(data) {
	  if (data.length) {
	    _universalGoodsList2.default.draw(data, listSearchBody, onGoodClick, 'string');
	  } else {
	    listSearchBody.innerHTML = '\u041D\u0435 \u0437\u0430\u0432\u0435\u0437\u043B\u0438 \u043F\u043E\u043A\u0430 <b>' + listSearchInput.value + '</b>, \u0445\u043E\u0442\u044F \u0438 \u0436\u0434\u0430\u043B\u0438 \u043D\u0430\u043C\u0435\u0434\u043D\u0438...';
	  }
	};
	
	var makeSearch = function makeSearch() {
	  // ЗДЕСЬ СНИМАЕМ (здесь отрисованы результаты поиска, т.е. он прошел успешно)
	  var selectedData = [];
	  fullSearch.data.forEach(function (item) {
	    if (item.name.toLowerCase().indexOf(listSearchInput.value.toLowerCase()) !== -1) {
	      selectedData.push(item);
	    }
	  });
	  drawResult(selectedData);
	};
	
	// поиск по массиву результатов fullSearch
	var onlistSearchFormSubmit = function onlistSearchFormSubmit(evt) {
	  evt.preventDefault();
	  listSearchBody.innerHTML = '';
	  if (listSearchInput.value) {
	    if (_singleValidation2.default.valid(listSearchInput)) {
	      makeSearch();
	    }
	  } else if (selectedKeywords === '') {
	    drawResult(keywordSearch.data);
	  } else {
	    listSearchBody.innerHTML = 'Ну скажите хоть что-нибудь...';
	  }
	};
	
	var onSuccessFullSearchLoad = function onSuccessFullSearchLoad(fullSearchLoad) {
	  fullSearch = fullSearchLoad;
	  document.querySelector('#' + loaderSpinnerId).remove();
	  if (fullSearchLoad.status === 271) {
	    listSearchBody.innerHTML = fullSearchLoad.message;
	  }
	  listSearchBody.innerHTML = '';
	};
	
	var getFullSearch = function getFullSearch() {
	  listSearchKeywordsChecked.innerHTML = '';
	  listSearchBody.innerHTML = loaderSpinnerMarkup;
	  selectedKeywords = [];
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good_full_list',
	    data: 'token=' + _storage2.default.data.token + '&name=' + listSearchInput.value,
	    callbackSuccess: onSuccessFullSearchLoad
	  };
	};
	
	// поиск по ключевым словам
	var onSuccessKeywordSearch = function onSuccessKeywordSearch(keywordSearchData) {
	  console.log(keywordSearchData);
	  if (keywordSearchData.status === 271) {
	    listSearchBody.innerHTML = 'Ключевые слова: ' + keywordSearchData.message;
	    getFullSearch();
	    listSearchInput.value = '';
	  } else {
	    keywordSearch = keywordSearchData;
	    _storage2.default.searchMode = 'keywords';
	    listSearchBody.innerHTML = '';
	    drawResult(keywordSearchData.data);
	    fullSearch = keywordSearchData;
	    listSearchInput.value = '';
	  }
	};
	
	var selectedKeywords = [];
	
	var onListSearchKeywordsModalSubmit = function onListSearchKeywordsModalSubmit() {
	  listSearchBody.innerHTML = loaderSpinnerMarkup;
	  var selectedKeywordsNodes = listSearchKeywordsModalBody.querySelectorAll('.keyword:not(.keyword__mute)');
	  selectedKeywords = [];
	  if (selectedKeywordsNodes.length) {
	    listSearchKeywordsChecked.innerHTML = 'Поиск идет по данным ключевым словам: ';
	    selectedKeywordsNodes.forEach(function (keywordNode) {
	      selectedKeywords.push(keywordNode.dataset.keywordId);
	      listSearchKeywordsChecked.appendChild(keywordNode.cloneNode(true)).classList.add('keyword__small');
	    });
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/operator/1/business/' + _storage2.default.data.currentBusiness + '/good_search',
	      data: 'token=' + _storage2.default.data.token + '&tags=[' + selectedKeywords + ']',
	      callbackSuccess: onSuccessKeywordSearch
	    };
	  } else {
	    _storage2.default.searchMode = 'base';
	  }
	};
	
	listSearchKeywordsModalSubmit.addEventListener('click', onListSearchKeywordsModalSubmit);
	
	// обработчик клика по ключевому слову
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
	
	// запускаем выбор ключевых слов
	var onListSearchKeywordsBtn = function onListSearchKeywordsBtn() {
	  _universalKeywords2.default.downloadAndDraw(listSearchKeywordsModalBody, onKeywordClick, keywordModificator);
	  $(listSearchKeywordsModal).modal('show');
	  listSearchKeywordsChecked.innerHTML = '';
	  listSearchKeywordsResetBtn.removeAttribute('disabled');
	};
	
	// сброс ключевых слов
	var onListSearchKeywordsResetBtn = function onListSearchKeywordsResetBtn() {
	  listSearchInput.value = '';
	  listSearchKeywordsChecked.innerHTML = '';
	  keywordSearch = '';
	  listSearchKeywordsResetBtn.setAttribute('disabled', 'disabled');
	  getFullSearch();
	};
	listSearchKeywordsResetBtn.addEventListener('click', onListSearchKeywordsResetBtn);
	
	// поиск по штрихкоду и ключевым словам
	_catalog__searchBarcode2.default.start();
	listSearchKeywordsBtn.addEventListener('click', onListSearchKeywordsBtn);
	
	exports.default = {
	  start: function start() {
	    _storage2.default.searchMode = 'base';
	    listSearchInput.focus();
	    listSearchBtn.addEventListener('click', onlistSearchFormSubmit);
	    listSearchForm.addEventListener('submit', onlistSearchFormSubmit);
	    listSearch.addEventListener('click', getFullSearch);
	  },
	
	
	  drawResult: drawResult,
	
	  stop: function stop() {
	    // listSearchBtn.removeEventListener('click', getSearch);
	  }
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// valisettings
	
	var formInpitHandler = function formInpitHandler(evt) {
	  var el = evt.target;
	
	  el.classList.remove('border');
	  el.classList.remove('border-danger');
	
	  var parent = el.parentNode;
	
	  while (parent.tagName !== 'FORM') {
	    parent = parent.parentNode;
	  }
	
	  var span = parent.querySelector('*[data-validLabel=' + el.dataset.validlabelname + ']');
	  span.innerHTML = '';
	
	  parent.querySelector('button[type="submit"]').disabled = false;
	
	  el.removeEventListener('input', formInpitHandler);
	
	  console.log('HANDLER DEL');
	};
	
	var inputValid = function inputValid(el, variable) {
	  var pattern = window.appSettings[el.dataset.valisettings].validPatterns;
	  var message = window.appSettings[el.dataset.valisettings].validMessage;
	
	  if (!pattern[el.dataset.valid].test(el.value)) {
	    el.addEventListener('input', formInpitHandler);
	
	    console.log('HANDLER ADD');
	
	    el.classList.add('border');
	    el.classList.add('border-danger');
	
	    var parent = el.parentNode;
	
	    while (parent.tagName !== 'FORM') {
	      parent = parent.parentNode;
	    }
	
	    var span = parent.querySelector('*[data-validLabel=' + el.dataset.validlabelname + ']');
	    span.innerHTML = message[el.dataset.valid];
	
	    parent.querySelector('button[type="submit"]').disabled = true;
	
	    return false;
	  }
	
	  return true;
	};
	
	exports.default = {
	  valid: inputValid
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _catalog__searchBarcodeValid = __webpack_require__(67);
	
	var _catalog__searchBarcodeValid2 = _interopRequireDefault(_catalog__searchBarcodeValid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listSearchInput = document.querySelector('#list-search-input');
	var listSearchBarcodeBtn = document.querySelector('#list-search-card-barcode-btn');
	var universalAddModal = document.querySelector('#universal-add');
	
	var onListSearchBarcodeBtn = function onListSearchBarcodeBtn() {
	  listSearchInput.value = '';
	  _tools2.default.runUniversalAdd = {
	    title: 'Поиск по штрихкоду',
	    inputLabel: 'Штрихкод',
	    inputPlaceholder: 'введите штрихкод',
	    submitBtnName: 'Поиск'
	  };
	  _catalog__searchBarcodeValid2.default.start(universalAddModal);
	};
	
	exports.default = {
	  start: function start() {
	    listSearchBarcodeBtn.addEventListener('click', onListSearchBarcodeBtn);
	  }
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(1);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _tools = __webpack_require__(7);
	
	var _tools2 = _interopRequireDefault(_tools);
	
	var _formTools = __webpack_require__(39);
	
	var _formTools2 = _interopRequireDefault(_formTools);
	
	var _catalog__goods = __webpack_require__(40);
	
	var _catalog__goods2 = _interopRequireDefault(_catalog__goods);
	
	var _catalog__search = __webpack_require__(64);
	
	var _catalog__search2 = _interopRequireDefault(_catalog__search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appUrl = void 0;
	var messages = void 0;
	
	var form = void 0;
	var field1 = void 0;
	var modal = void 0;
	
	var initVar = function initVar(remModal) {
	  modal = remModal;
	  form = modal.querySelector('*[data-formName]');
	
	  form.dataset.formname = 'searchBarcode';
	  field1 = form.querySelector('*[data-valid="field1"]');
	
	  appUrl = window.appSettings[form.dataset.formname].UrlApi;
	  messages = window.appSettings[form.dataset.formname].messages;
	};
	
	var callbackXhrSuccess = function callbackXhrSuccess(response) {
	  switch (response.status) {
	    case 200:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	
	      // чОрное колдовство с автооткрытием карточки при одном найденном варианте
	      if (response.data.length === 1) {
	        $(modal).on('hidden.bs.modal', function (e) {
	          _storage2.default.currentGoodId = response.data[0].id;
	          _catalog__goods2.default.fill();
	          response.data = 0;
	        });
	      } else if (response.data.length > 1) {
	        _catalog__search2.default.drawResult(response.data);
	      }
	
	      break;
	    case 400:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': messages.mes400
	      };
	      break;
	    case 271:
	      $(modal).modal('hide');
	      _formTools2.default.reset();
	      _tools2.default.informationtModal = {
	        'title': 'Error',
	        'message': response.message
	      };
	      break;
	  }
	};
	
	var callbackXhrError = function callbackXhrError(xhr) {
	
	  $(modal).modal('hide');
	  _formTools2.default.reset();
	
	  _tools2.default.informationtModal = {
	    'title': 'ОШИБКА СВЯЗИ',
	    'message': '\u041E\u0448\u0438\u0431\u043A\u0430 ' + xhr.status + ': ' + xhr.statusText
	  };
	};
	
	var submitFormAdd = function submitFormAdd() {
	  var stor = _storage2.default.data;
	
	  var postData = 'barcode=' + field1.value + '&token=' + stor.token;
	  var urlApp = appUrl.replace('{{dir}}', stor.directory);
	  urlApp = urlApp.replace('{{oper}}', stor.operatorId);
	  urlApp = urlApp.replace('{{busId}}', stor.currentBusiness);
	
	  _formTools2.default.submit({
	    url: urlApp,
	    metod: 'POST',
	    data: postData,
	    callbackSuccess: callbackXhrSuccess,
	    callbackError: callbackXhrError
	  });
	};
	
	exports.default = {
	  start: function start(remModal) {
	    initVar(remModal);
	    _formTools2.default.work(modal, submitFormAdd);
	  },
	  stop: function stop() {
	    _formTools2.default.reset();
	  }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map