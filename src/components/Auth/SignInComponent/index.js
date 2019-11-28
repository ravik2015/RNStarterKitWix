/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable module-resolver/use-alias */
import Constants from '@constants';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const {height} = Dimensions.get('window');

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authReducer = useSelector(state => state.authReducer);
  const {onLogin, isLoggedIn} = props;
  const {isLoading} = authReducer;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 100,
      }}>
      <Text style={{marginTop: 100, fontSize: 24}}>Email</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 24}}
        value={email}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={email => setEmail(email)}
      />

      <Text style={{marginTop: 30, fontSize: 24}}>Password</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 24}}
        value={password}
        placeholder="************"
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity
        style={{
          height: 52,
          backgroundColor: 'dodgerblue',
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onLogin(email, password)}>
        <Text style={{fontSize: 24, color: 'white'}}>SignIn</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default SignIn = React.memo(SignIn);
