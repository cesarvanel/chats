import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN, USER_DATA_KEY } from "../constant/constant";
import { User } from "../../types/interface";
import { compress, decompress } from 'lz-string';
import moment from 'moment';

import { isBrowser } from "../browser/browser";
import jsCookie from "js-cookie";
/**
 * @class
 */
export class LocalStorageManager {
  public static get = (key: string) => {
    if (!isBrowser()) return null;
    const str = localStorage.getItem(key);
    if (str) {
      return decompress(str);
    }
    return null;
  };

  public static set = (key: string, val: string) => {
    if (!isBrowser()) return;
    localStorage.setItem(key, compress(val));
  };

  public static getItem = (key: string) => {
    if (!isBrowser()) return null;
    const str = localStorage.getItem(key);
    if (str) {
      return str;
    }
    return null;
  };

  public static setItem = (key: string, val: string) => {
    if (!isBrowser()) return;
    localStorage.setItem(key, val);
  };

  /**
   * Set a value in the cookie
   *
   * @param {string} cookieName
   * @param {string} cookieValue
   * @param {number} expireDays
   *
   * @return void
   */
  public static setCookie(cookieName: string, cookieValue: string, expireDays: number): void {
    const d: Date = new Date();

    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  /**
   * Get a cookie
   *
   * @param {string} cookieName
   *
   * @return string|null
   */
  public static getCookie(cookieName: string): string | null {
    const name = `${cookieName}=`;
    const ca: string[] = document.cookie.split(';');

    for (let i = 0; i < ca.length; i += 1) {
      let c: string = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return null;
  }

  /** *
   * Save the access token of the in the cookie
   *
   * @param {string} token
   * @param {number} expiresIn Expiration date of the in days
   *
   * @return @void
   */
  public static saveUserAccessToken(token: string, expiresIn = 1): void {
    jsCookie.set(USER_ACCESS_TOKEN, token, {
      expires: moment().add(1, 'year').toDate(),
    });
    localStorage.setItem(USER_ACCESS_TOKEN, token);
  }

  /** *
   * Get the access token of user
   *
   * @return string|null
   */
  public static getUserAccessToken(): string | null {
    if (!isBrowser()) return '';
    return jsCookie.get(USER_ACCESS_TOKEN) || localStorage.getItem(USER_ACCESS_TOKEN);
  }

  /** *
   * Save the refresh token of the in the local storage
   *
   * @param {string} token
   *
   * @return @void
   */
  public static saveUserRefreshToken(token: string): void {
    localStorage.setItem(USER_REFRESH_TOKEN, token);
  }

  /** *
   * Get the refresh token of user
   *
   * @return string|null
   */
  public static getUserRefreshToken(): string | null {
    return localStorage.getItem(USER_REFRESH_TOKEN);
  }

  /** *
   * Save user's information in the local storage
   *
   * @param {Object} data
   *
   * @return @void
   */
  public static saveUserInfo(data: any): void {
    const comp = compress(JSON.stringify(data));

    localStorage.setItem(USER_DATA_KEY, comp);

    try {
      jsCookie.set(USER_DATA_KEY, String(comp), {
        expires: moment().add(1, 'year').toDate(),
      });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  

  /** *
   * Get user's information in the local storage
   *
   * @return Object|null
   */
  public static getUserInfo(): User | null {
    let user: string | null | undefined = localStorage.getItem(USER_DATA_KEY);
    if (!user) user = jsCookie.get(USER_DATA_KEY);

    try {
      if (user) {
        return JSON.parse(decompress(user) as string);
      }
    } catch (e: any) {
      console.log('User Data Parsing Error => ', e.toString());
    }

    return null;
  }

  /** *
   * Delete all information about the user in the local storage
   *
   * @return void
   */
  public static logoutUser(): void {
    // localStorage.removeItem(USER_DATA_KEY);
    // jsCookie.remove(USER_DATA_KEY)
    // localStorage.removeItem(USER_REFRESH_TOKEN_KEY);
    LocalStorageManager.saveUserAccessToken('');
    // setTimeout(() => {
    //   window.location.reload();
    // }, 500)
  }
}
