import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>

    <TouchableHighlight onPress={() => navigation.navigate('About')}>
      <Text>Go to About</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
