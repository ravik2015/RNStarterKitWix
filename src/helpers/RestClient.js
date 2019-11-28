'use strict';

import NetInfo from '@react-native-community/netinfo';
import {create} from 'apisauce';

const api = create({
  baseURL: `https://reqres.in/api`, //TEST_API_URL
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

class RestClient {
  static isConnected() {
    return new Promise(function(fulfill, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) fulfill(isConnected);
        else {
          reject(isConnected);
        }
      });
    });
  }

  static getCall(url, token) {
    console.log(url, token, 'API=>>>>>>>>url');
    api.setHeader('Authorization', token);
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.get(`https://reqres.in/api` + url).then(response => {
            if (response.status === 401) {
              reject(response);
            }
            fulfill(response.data);
          });
        })
        .catch(error => {
          fulfill({
            message:
              'The server is not reachable right now, sorry for inconvenience.',
          });
          console.warn('error', error);
        });
    });
  }

  static postCall(url, params?: {}, token) {
    api.setHeader('Authorization', token);
    console.log(api, url, params, 'postCallpostCallpostCallpostCall');
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.post(`https://reqres.in/api` + url, params).then(response => {
            console.log(response, 'responseresponseresponseresponse');
            if (response.status === 401) {
              reject(response);
            }
            fulfill(response.data);
          });
        })
        .catch(error => {
          fulfill({
            message:
              'The server is not reachable right now, sorry for inconvenience.',
          });
          console.warn('eroro', error);
        });
    });
  }

  static putCall(url, params?: {}) {
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.put(`https://reqres.in/api` + url, params).then(response => {
            console.log(response, 'responseresponseresponseresponse');
            if (response.status === 401) {
              reject(response);
            }
            fulfill(response.data);
          });
        })
        .catch(error => {
          fulfill({
            message:
              'The server is not reachable right now, sorry for inconvenience.',
          });
          console.warn('eroro', error);
        });
    });
  }

  static patchCall(url, params?: {}) {
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.put(`https://reqres.in/api` + url, params).then(response => {
            console.log(response, 'responseresponseresponseresponse');
            if (response.status === 401) {
              reject(response);
            }
            fulfill(response.data);
          });
        })
        .catch(error => {
          fulfill({
            message:
              'The server is not reachable right now, sorry for inconvenience.',
          });
          console.warn('eroro', error);
        });
    });
  }
}

export default RestClient;
