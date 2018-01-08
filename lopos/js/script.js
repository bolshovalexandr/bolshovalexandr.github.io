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
	
	var _xhr = __webpack_require__(4);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _log3 = __webpack_require__(3);
	
	var _log4 = _interopRequireDefault(_log3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formLogin = document.querySelector('#form-login');
	var formLoginBtn = formLogin.querySelector('BUTTON');
	var listLogin = document.querySelector('#list-login-list');
	var profile = document.querySelector('#profile');
	var profileName = profile.querySelector('#profile-name');
	var profileTime = profile.querySelector('#profile-time');
	var profileDirectory = profile.querySelector('#profile-directory');
	var profileExit = document.querySelector('#profile-exit');
	var unregisteredProfile = document.querySelector('#unregistered-profile');
	
	// спрятать форму, показать профиль
	var hideFormShowProfile = function hideFormShowProfile() {
	  formLogin.classList.add('d-none');
	  profile.classList.remove('d-none');
	  profileExit.classList.remove('d-none');
	  unregisteredProfile.classList.add('d-none');
	  _log4.default.cleanContainer();
	};
	
	// спрятать профиль, показать форму
	var hideProfileShowForm = function hideProfileShowForm() {
	  formLogin.classList.remove('d-none');
	  profile.classList.add('d-none');
	  profileExit.classList.add('d-none');
	  unregisteredProfile.classList.remove('d-none');
	  _log4.default.setUnregistered();
	};
	
	// ==========АВТОРИЗАЦИЯ==========
	
	var onSuccessAuthLoad = function onSuccessAuthLoad(loadedAuth) {
	  console.log(loadedAuth);
	  formLoginBtn.classList.remove('btn-danger');
	  _storage2.default.data = loadedAuth.data;
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
	  body.append('deviceToken', '2222');
	
	  _xhr2.default.request = {
	    metod: 'POST',
	    url: 'user_boss/login/',
	    data: body,
	    callbackSuccess: onSuccessAuthLoad,
	    callbackError: onErrorAuthLoad
	  };
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
	
	(0, _log2.default)();

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
	
	var logCardNodes = [];
	
	exports.default = function () {
	
	  var listLog = document.querySelector('#list-log-list');
	  var listLogBody = document.querySelector('#log-body');
	  var loader = document.querySelector('#loader');
	  var loaderFinish = document.querySelector('#loader-finish');
	
	  // начальная позиция и смещение
	  var position = 0;
	  var count = 200;
	
	  var drawCardSet = function drawCardSet() {
	    logCardNodes.splice(0, count / 2).forEach(_log2.default.addCardToContainer);
	  };
	
	  // успех загрузки
	  var onSuccessLogLoad = function onSuccessLogLoad(logResponse) {
	    var loadedLog = logResponse.data;
	    console.log(loadedLog);
	    if (loadedLog.length) {
	      loadedLog.forEach(function (item, index) {
	        logCardNodes.push(_log2.default.getElement(item));
	      });
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
	    console.log('Somethig went arowng');
	  };
	
	  // отправка запроса на новую порцию
	  var getLog = function getLog() {
	
	    _xhr2.default.request = {
	      metod: 'POST',
	      url: 'lopos_directory/' + _storage2.default.data.directory + '/update_log/' + Date.now() + '/story',
	      data: 'position=' + position + '&count=' + count + '&token=' + _storage2.default.data.token,
	      callbackSuccess: onSuccessLogLoad,
	      callbackError: onErrorLogLoad
	    };
	
	    window.removeEventListener('scroll', onMouseScroll);
	  };
	
	  // "ленивая отрисовка" журнала
	  var isBottomReached = function isBottomReached() {
	    return listLogBody.getBoundingClientRect().bottom - window.innerHeight <= 150;
	  };
	
	  var onMouseScroll = function onMouseScroll(evt) {
	
	    if (isBottomReached() && logCardNodes.length > 0) {
	      window.removeEventListener('scroll', onMouseScroll);
	      loader.classList.remove('d-none');
	
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
	
	  // слушаем кнопку "Журнал"
	  listLog.addEventListener('click', function () {
	    if (_storage2.default.isSetFlag) {
	      getLog();
	    } else {
	      _log2.default.setUnregistered();
	    }
	  });
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
	  getElement: function getElement(item) {
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
	
	    return '\n    <div class="card mb-2" style="width: 100%">\n      <div class="media">\n        <img class="mr-3 rounded-circle p-1" src="img/user-male-filled-32.png" title="' + item.ha_operator_name + '" style="background-color: #' + getIconColor + '" width="50" alt="Generic placeholder image">\n        <img class="mr-3" src="img/' + imgName + '.png" width="50" alt="Generic placeholder image">\n        <div class="media-body">\n          <h5 class="mt-0">' + cardHeader[0] + '</h5>\n          ' + cardHeader[1] + '\n          <span class="badge text-right text-muted w-100">' + new Date(+(item.ha_time + '000')).toLocaleString() + '</span>\n        </div>\n      </div>\n    <div id="exampleAccordion" data-children=".item">\n      <div class="item">\n        <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion' + item.ha_id + '" role="button" aria-expanded="false" aria-controls="exampleAccordion1">\n          <p class="text-right">\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445</p>\n        </a>\n        <div id="exampleAccordion' + item.ha_id + '" class="collapse" role="tabpanel">\n          <p class="mb-3">\n            <div class="card m-2" style="width: 100%;"><ul class="list-group list-group-flush">' + Object.entries(item).map(this.getLogTableRowMarkup).join('') + '</ul></div>\n          </p>\n        </div>\n      </div>\n    </div>';
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
	
	    xhr.timeout = window.appSettings.xhr.timeout;
	    xhr.open(requestParameters.metod, window.appSettings.xhr.urlApi + requestParameters.url, true);
	    // xhr.setRequestHeader('Content-Type', window.appSettings.xhr.contentType);
	
	    if (requestParameters.metod === 'GET') {
	      requestParameters.data = '';
	    }
	
	    xhr.send(requestParameters.data);
	  }
	
	};

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map