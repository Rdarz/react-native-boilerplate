import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
// import HomeScreen from './components';
import DataList from './components';

const HomeScreen = () => (
  <SafeAreaView>
    <DataList />
  </SafeAreaView>
);

HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerRight: () => (
    <TouchableOpacity onPress={() => ''}>
      <Text>About</Text>
      {/* <Ionicons name="ios-search" size={25} color="white" left={20} /> */}
    </TouchableOpacity>
  ),
});

export default HomeScreen;
