import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {Tab, Tabs} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => (
  <SafeAreaView
    style={{
      flex: 1,
    }}>
    <Tabs>
      <Tab heading="Tab1">
        <View>
          <TouchableHighlight>
            <Text>Go to home</Text>
          </TouchableHighlight>
        </View>
      </Tab>
      <Tab heading="Tab2">
        <Text>Go to About</Text>
      </Tab>
    </Tabs>
  </SafeAreaView>
);

AboutScreen.navigationOptions = ({navigation}) => ({
  title: 'About',
});
export default AboutScreen;
