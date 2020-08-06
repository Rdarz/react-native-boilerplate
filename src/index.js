import React, {useContext} from 'react';
import {
  StatusBar,
  View,
  NativeModules,
  SafeAreaView,
  Platform,
  DeviceEventEmitter,
  NativeEventEmitter,
} from 'react-native';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import createStore from './reducers/createStore';

import Navigator from '_navigations';

const App = () => (
  <Provider store={createStore()}>
    <View style={{flex: 1}}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <Root store={createStore()}>
        <Navigator />
      </Root>
    </View>
  </Provider>
);

export default App;
