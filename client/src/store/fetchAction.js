require('es6-promise').polyfill();
import 'whatwg-fetch';
import {busy, idle} from '../common/components/Loading';
const headers = {
  'Content-Type': 'application/json',
  'cache-control': 'no-cache',
  'pragma': 'no-cache'
};
/**
 *
 * @param url
 * @param successAction
 * @param failAction
 * @param method
 * @param defaultParams
 * @returns {function(*=, *=)}
 */
export default (url, [successAction, failAction], method = 'GET', defaultParams = {}) => {
  method = method.toUpperCase();
  return (pathnames = {}, data = {}) => {

    return dispatch => {
      const params = {
        headers: headers,
        method,
        credentials: 'include'
      };

      let u = getUrl(url, pathnames);
      if ((method === 'POST' || method === 'PATCH' || method === 'DELETE' || method === 'PUT') && Object.keys(data).length !== 0) {
        params.body = JSON.stringify(data)
      } else if (method === 'GET') {
        const search = serialize(data);
        if (search) {
          if (url.indexOf('?') > 0) {
            u = `${u}&${serialize(data)}`;
          } else {
            u = `${u}?${serialize(data)}`;
          }
        }
      }
      busy();
      return fetch(u, params)
        .then(response => {
          // 未授权的跳转登录页面
          // if (response.status === 401) {
          // 	window.location.href = '/login';
          // 	return
          // }
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          } else {
            return response.text()
          }
        })
        .then(result => {
          idle();
          successAction && dispatch(successAction(result));
          return result;
        }, result => {
          idle();
          failAction && dispatch(failAction(result));
        })
    };
  };
}

const getUrl = (template, pathnames = {}) => {
  return template.replace(/\{\{(\w+)}}/g, (literal, key) => {
    if (key in pathnames) {
      return pathnames[key]
    } else {
      return ''
    }
  });
};


export const serialize = (params) => {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};
