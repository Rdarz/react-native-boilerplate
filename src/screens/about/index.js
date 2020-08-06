import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AboutScreen = () => (
  <SafeAreaView>
    <Text>Screen: About</Text>
  </SafeAreaView>
);

AboutScreen.navigationOptions = ({navigation}) => ({
  title: 'About',
});
export default AboutScreen;
