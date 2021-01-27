import Cookies from 'js-cookie'

/**
 * 对cookie操作
 */
export function _setCookie(key, value, params, type) {
  if (!key) return
  if (type === 'JSONStr') {
    value = JSON.stringify(value)
  }
  Cookies.set(key, value, params)
}
export function _getCookie(key, type) {
  if (!Cookies.get(key)) {
    return
  }
  if (type === 'JSONStr') {
    return JSON.parse(Cookies.get(key))
  } else {
    return Cookies.get(key)
  }
}
export function _removeCookie(key) {
  return Cookies.remove(key)
}

/**
 * 对sessionStorage操作
 */
export const _setSessionStore = (key, value, type) => {
  if (!key) return
  if (type === 'JSONStr') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

export const _getSessionStore = (key, type) => {
  if (!sessionStorage.getItem(key)) {
    return
  }
  if (type === 'JSONStr') {
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    return sessionStorage.getItem(key)
  }
}

export const _removeSessionStore = key => {
  if (!key) return
  sessionStorage.removeItem(key)
}

//localstroage存储
export const _setLocalStore = {
  get: function (key) {
    var value = localStorage.getItem(key);
    if (value) {
      try {
        var value_json = JSON.parse(value);
        if (typeof value_json === 'object') {
          return value_json;
        } else if (typeof value_json === 'number') {
          return value_json;
        }
      } catch (e) {
        return value;
      }
    } else {
      return false;
    }
  },
  set: function (k, v) {
    let item = JSON.stringify(v);
    switch (typeof v) {
      case 'object':
        localStorage.setItem(k, item);
        break;
      default:
        localStorage.setItem(k, v);
    }

  },
  remove: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  }
};

//Sessionstroage存储
export const _SessionStore = {
  get: function (key) {
    var value = sessionStorage.getItem(key);
    if (value) {
      try {
        var value_json = JSON.parse(value);
        if (typeof value_json === 'object') {
          return value_json;
        } else if (typeof value_json === 'number') {
          return value_json;
        }
      } catch (e) {
        return value;
      }
    } else {
      return false;
    }
  },
  set: function (k, v) {
    let item = JSON.stringify(v);
    switch (typeof v) {
      case 'object':
        sessionStorage.setItem(k, item);
        break;
      default:
        sessionStorage.setItem(k, v);
    }

  },
  remove: function (key) {
    sessionStorage.removeItem(key);
  },
  clear: function () {
    sessionStorage.clear();
  }
};