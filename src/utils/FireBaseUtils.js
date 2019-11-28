'use strict';

import firebase from 'react-native-firebase';

class FireBaseUtils {
  static async reauthenticate(currentPassword) {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    return user.reauthenticateWithCredential(cred);
  }
}

export default FireBaseUtils;
