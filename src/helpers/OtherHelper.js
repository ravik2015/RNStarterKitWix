/* eslint-disable */
'use strict';

import {Alert} from 'react-native';
// import Toast from 'react-native-simple-toast';
import Constants from '@constants';

var OtherHelper = {
  // showToastMessage: val => {
  //   Toast.showWithGravity(val, Toast.SHORT, Toast.BOTTOM);
  // },
  getFloatingValue: (number, sample) => {
    number = number.toString();
    sample = sample.toString();
    let decimalPointCount = number.includes('.') //includes or contains
      ? number
          .toString()
          .split('.')
          .pop().length
      : 0;
    let samplePointCount = sample.includes('.') //includes or contains
      ? sample
          .toString()
          .split('.')
          .pop().length
      : 0;
    if (decimalPointCount <= 0) {
      return number;
    } else {
      return parseFloat(number).toFixed(samplePointCount);
    }
  },
  getSubtracter: number => {
    number = number.toString();
    let decimalPointCount = number.includes('.') //includes or contains
      ? number
          .toString()
          .split('.')
          .pop().length
      : 0;
    let subtracter = 1;
    for (var i = 0; i < decimalPointCount; i++) {
      subtracter = subtracter / 10;
    }
    return subtracter;
  },
  Dialog: (msg, buttons) => {
    Alert.alert(Constants.AppConstants.AppName, msg, buttons, {
      cancelable: true,
    });
  },
  dateFilter: (startDate, endDate, collection) => {
    let filteredData = collection.filter(function(obj) {
      let date = new Date(obj.date);
      return date >= startDate && date <= endDate;
    });
    let dates = filteredData.map(a => a.date);
    let price = filteredData.map(a => parseInt(a.price));
    return {dates, price};
  },
  formatedAddress: collection => {
    let street_number = '';
    let sublocality_level_1 = '';
    let sublocality_level_2 = '';
    let sublocality_level_3 = '';
    let city = '';
    let country = '';
    let postal_code = '';
    collection.forEach(address_component => {
      if (address_component.types[0] == 'sublocality_level_3') {
        sublocality_level_3 = address_component.long_name;
      }
      if (address_component.types[0] == 'sublocality_level_2') {
        sublocality_level_2 = address_component.long_name;
      }
      if (address_component.types[0] == 'sublocality_level_1') {
        sublocality_level_1 = address_component.long_name;
      }

      if (address_component.types[0] == 'locality') {
        city = address_component.long_name;
      }

      if (address_component.types[0] == 'country') {
        country = address_component.long_name;
      }

      if (address_component.types[0] == 'postal_code') {
        postal_code = address_component.long_name;
      }

      if (address_component.types[0] == 'street_number') {
        street_number = address_component.long_name;
      }
    });
    return {
      street_number,
      sublocality_level_1,
      sublocality_level_2,
      sublocality_level_3,
      city,
      country,
      postal_code,
    };
  },
  checkEmptyAddress: val => {
    if (val != '') {
      return val + ',';
    } else {
      return '';
    }
  },
  roundOffValue: num => {
    if (num) {
      return parseFloat(num).toFixed(2);
    } else {
      return 0;
    }
  },
};

export default OtherHelper;
