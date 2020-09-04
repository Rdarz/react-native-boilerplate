import React, {useState} from 'react';
import {Animated, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import LoaderComponent from './components/LoaderComponent';
import SearchComponent from './components/SearchComponent';

console.disableYellowBox = true;

const HomeScreen = () => {
  return (
    <Animated.View>
      <SafeAreaView>
        <SearchComponent />
        <Animated.ScrollView
          showsVerticalScrollIndicator={true}
          style={{
            margin: 20,
            backgroundColor: 'white',
            paddingTop: 55,
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <LoaderComponent />
        </Animated.ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HomeScreen;
