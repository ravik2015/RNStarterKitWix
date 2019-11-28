'use strict';

import Biometrics from 'react-native-biometrics';
import OtherHelper from '@helpers/OtherHelper';

let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
let payload = epochTimeSeconds + 'some message';

class BiometricUtil {
  static async loginWithBiometric() {
    let context = this;
    return new Promise(async function(fulfill, reject) {
      try {
        let biometryType = await Biometrics.isSensorAvailable();
        if (
          biometryType === Biometrics.TouchID ||
          biometryType === Biometrics.FaceID
        ) {
          try {
            let signature = await Biometrics.createKeys('Confirm fingerprint');
            // Biometrics.createSignature(
            //   'Sign in',
            //   payload,
            // );

            fulfill({signature, payload});
          } catch (err) {
            reject(err);
            console.log(err, 'err');
          }
        } else {
          OtherHelper.showToastMessage(
            'Biometrics not supported or registered!',
          );
          reject('Biometrics not supported or registered!');
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export default BiometricUtil;
