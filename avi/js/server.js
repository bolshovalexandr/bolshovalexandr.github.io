'use strict';

(function () {

  window.server = {
    downloadData(loadHandler, errorHandler) {
      const xhr = new XMLHttpRequest();
      xhr.timeout = window.constants.XHR_TIMEOUT;
      xhr.responseType = `json`;
      xhr.open(`GET`, window.constants.URL);

      xhr.addEventListener(`load`, function () {
        if (xhr.status === window.constants.SUCCESS_STATUS) {
          loadHandler(xhr.response);
        } else {
          errorHandler(`Статус ответа ` + xhr.status + ` ` + xhr.statusText);
        }
      });

      xhr.addEventListener(`error`, function () {
        errorHandler(`Ошибка соединения`);
      });

      xhr.addEventListener(`timeout`, function () {
        errorHandler(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
      });

      xhr.send();
    },
  };
})();
