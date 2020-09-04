import * as React from 'react';

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {Easing, View} from 'react-native';

import AuthScreens from './auth-navigator';
import UserScreens from './app-navigator';
import CommonScreens from './common-navigator';

const Stack = createStackNavigator();

function App() {
  const isLoggedIn = false;
  const config = {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.ease,
    },
  };
  const forFadeCardStyle = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#414784',
          paddingRight: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        },
        headerRight: () => <View />,
      }}>
      {Object.entries({
        ...AuthScreens,
        ...UserScreens,
        ...CommonScreens,
      }).map(([name, component]) => {
        return (
          <Stack.Screen
            name={name}
            component={component}
            options={{
              headerBackTitle: null,
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyle: {
                backgroundColor: name === 'SplashScreen' ? '#414784' : 'white',
              },
              headerShown:
                name === 'SplashScreen' || name === 'SignIn' ? false : true,
              cardStyleInterpolator: forFadeCardStyle,
              headerStyleInterpolator: HeaderStyleInterpolators.forFade,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default App;
