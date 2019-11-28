/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable module-resolver/use-alias */
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

function Dashboard(props) {
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
      <Text style={{marginTop: 100, fontSize: 24}}>Under development</Text>
    </ScrollView>
  );
}
export default Dashboard = React.memo(Dashboard);
