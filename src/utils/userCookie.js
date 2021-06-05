import Cookies from 'js-cookie';
/**
 * @param {Object} info
 */

export function setCookie(info) {
  const arr = Object.entries(info);
  arr.forEach((ele) => {
    Cookies.set(ele[0], ele[1]);
  });
  return true;
}

/**
 * 获取cookie中的用户信息
 */

export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}
/**
 * 移除cookie中的用户信息
 */
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
