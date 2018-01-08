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
	
	var _xhr = __webpack_require__(3);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
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
	
	// ==========АВТОРИЗАЦИЯ==========
	
	var onSuccessAuthLoad = function onSuccessAuthLoad(loadedData) {
	  formLoginBtn.classList.remove('btn-danger');
	  _storage2.default.data = loadedData;
	  hideFormShowProfile();
	  var _auth$data = _storage2.default.data,
	      nickname = _auth$data.nickname,
	      lastLogin = _auth$data.lastLogin,
	      directory = _auth$data.directory;
	
	  profileName.innerHTML = nickname;
	  profileTime.innerHTML = lastLogin;
	  profileDirectory.innerHTML = directory;
	};
	
	var onErrorAuthLoad = function onErrorAuthLoad() {
	  formLoginBtn.classList.add('btn-danger');
	};
	
	// слушаем сабмит отправки логина/пароля
	formLogin.addEventListener('submit', function (evt) {
	  evt.preventDefault();
	
	  var body = new FormData(formLogin);
	  var url = formLogin.action;
	  var successCode = 200;
	
	  body.append('deviceToken', '2222');
	
	  (0, _xhr2.default)(body, url, successCode, onSuccessAuthLoad, onErrorAuthLoad);
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
	
	// ==========ЖУРНАЛ==========
	
	var logCardNodes = [];
	var lastCall = Date.now();
	
	// начальная позиция и смещение
	var position = 0;
	var count = 200;
	
	var drawCardSet = function drawCardSet() {
	  logCardNodes.splice(0, count / 2).forEach(_log2.default.addCardToContainer);
	  console.log(logCardNodes.length);
	};
	
	// успех загрузки
	var onSuccessLogLoad = function onSuccessLogLoad(loadedLog) {
	
	  loadedLog.forEach(function (item, index) {
	    logCardNodes.push(_log2.default.getElement(item));
	  });
	  drawCardSet();
	  window.addEventListener('scroll', onMouseScroll);
	};
	
	// ошибка загрузки
	var onErrorLogLoad = function onErrorLogLoad() {
	  console.log('Somethig went arowng');
	};
	
	// отправка запроса на новую порцию
	var getLog = function getLog() {
	  var urlApi = window.appSettings.xhr.urlApi;
	
	
	  var url = urlApi + 'lopos_directory/' + _storage2.default.data.directory + '/update_log/' + Date.now() + '/story';
	  var body = 'position=' + position + '&count=' + count + '&token=' + _storage2.default.data.token;
	  var successCode = 281;
	
	  (0, _xhr2.default)(body, url, successCode, onSuccessLogLoad, onErrorLogLoad);
	};
	
	// "ленивая отрисовка" журнала
	var isBottomReached = function isBottomReached() {
	  return listLogBody.getBoundingClientRect().bottom - window.innerHeight <= 150;
	};
	
	var onMouseScroll = function onMouseScroll(evt) {
	  console.log(logCardNodes.length);
	
	  if (Date.now() - lastCall >= 200) {
	    if (isBottomReached() && logCardNodes.length > 0) {
	      window.removeEventListener('scroll', onMouseScroll);
	      loader.classList.remove('d-none');
	
	      window.addEventListener('scroll', onMouseScroll);
	      loader.classList.add('d-none');
	      drawCardSet();
	
	      /*
	      window.setTimeout(function () {
	        window.addEventListener('scroll', onMouseScroll);
	        loader.classList.add('d-none');
	        drawCardSet();
	      }, 1500);
	      */
	    } else if (logCardNodes.length === 0) {
	      position += count;
	      getLog();
	    }
	
	    lastCall = Date.now();
	  }
	};
	
	window.addEventListener('scroll', onMouseScroll);
	
	// слушаем кнопку "Журнал"
	listLog.addEventListener('click', function () {
	  if (_storage2.default.isSetFlag) {
	    getLog();
	  } else {
	    _log2.default.setUnregistered();
	  }
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
	  getAdditionalImages: function getAdditionalImages(rowElements) {
	    var markup = '';
	
	    if (rowElements[0] === 'ha_kontr_agent_id_fk' && rowElements[1]) {
	      markup += '<img class="mr-3" src="img/buyers.png" width="50" alt="Generic placeholder image">';
	    }
	    if (rowElements[0] === 'ha_nomenclature_card_id_fk' && rowElements[1]) {
	      markup += '<img class="mr-3" src="img/ic_my_nomenclature.png" width="50" alt="Generic placeholder image">';
	    }
	    if (rowElements[0] === 'ha_group_good_id_fk' && rowElements[1]) {
	      markup += '<img class="mr-3" src="img/groups.png" width="50" alt="Generic placeholder image">';
	    }
	    if ((rowElements[0] === 'ha_good_id_fk' || rowElements[0] === 'ha_price_id_fk') && rowElements[1]) {
	      markup += '<img class="mr-3" src="img/goods.png" width="50" alt="Generic placeholder image">';
	    }
	    if (rowElements[0] === 'ha_tag_id_fk' && rowElements[1]) {
	      markup += '<img class="mr-3" src="img/ic_my_tag.png" width="50" alt="Generic placeholder image">';
	    }
	    return markup;
	  },
	  getElement: function getElement(item) {
	    var hasMinusInComments = item.ha_comment.includes('-') ? true : false;
	    var markup = '';
	
	    if (item.ha_balance_act_id_fk && hasMinusInComments) {
	      markup += '<img class="mr-3" src="img/expenses.png" width="50" alt="Generic placeholder image">';
	    } else if (item.ha_balance_act_id_fk && !hasMinusInComments) {
	      markup += '<img class="mr-3" src="img/revenue.png" width="50" alt="Generic placeholder image">';
	    }
	    if (item.ha_naklad_id_fk && hasMinusInComments) {
	      markup += '<img class="mr-3" src="img/admission.png" width="50" alt="Generic placeholder image">';
	    } else if (item.ha_naklad_id_fk && !hasMinusInComments) {
	      markup += '<img class="mr-3" src="img/sale.png" width="50" alt="Generic placeholder image">';
	    }
	
	    return '\n    <div class="media">\n      <img class="mr-3" src="img/user-male-filled-32.png" width="50" alt="Generic placeholder image">\n      ' + markup + '\n      ' + Object.entries(item).map(this.getAdditionalImages).join('') + '\n      <div class="media-body">\n        <h5 class="mt-0">\u0421\u043E\u0437\u0434\u0430\u043D\u0430 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u0430\u044F \u2116 ' + item.ha_id + '</h5>\n        ' + item.ha_comment + '\n        <span class="badge badge-info">' + new Date(+(item.ha_time + '000')).toLocaleString() + '</span>\n      </div>\n    </div>\n    <div class="card m-2" style="width: 100%;"><ul class="list-group list-group-flush">' + Object.entries(item).map(this.getLogTableRowMarkup).join('') + '</ul></div>\n    <hr><hr>';
	  },
	  addCardToContainer: function addCardToContainer(cardMarkupItem) {
	    listLogBody.insertAdjacentHTML('beforeend', cardMarkupItem);
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (body, url, successCode, onSuccessLoad, onErrorLoad) {
	  var timeout = window.appSettings.xhr.timeout;
	
	  var xhr = new XMLHttpRequest();
	  xhr.timeout = timeout;
	  xhr.responseType = 'json';
	  xhr.open('POST', url, true);
	  xhr.send(body);
	
	  xhr.addEventListener('load', function () {
	    if (xhr.response.status === successCode) {
	      onSuccessLoad(xhr.response.data);
	    } else {
	      onErrorLoad();
	    }
	  });
	
	  xhr.addEventListener('error', onErrorLoad);
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map