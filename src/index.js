import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StatusBar,
  View,
  NativeModules,
  Platform,
  DeviceEventEmitter,
  NativeEventEmitter,
} from 'react-native';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import AppStatusBar from '~/src/components/AppStatusBar';
import createStore from './reducers/createStore';

import Navigator from '~/src/navigations';

const App = () => (
  <Provider store={createStore()}>
    <View style={{flex: 1}}>
      <AppStatusBar backgroundColor={'#414784'} barStyle="light-content" />
      <Root store={createStore()}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Root>
    </View>
  </Provider>
);

export default App;
