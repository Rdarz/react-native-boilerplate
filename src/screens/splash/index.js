import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Foundation';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
      // navigation.navigate('SignIn');
    }, 5000);
  }, []);

  let Splash_Screen = (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
          }}>
          <AnimatedIcon
            color={'white'}
            name={'trees'}
            size={100}
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1,
          }}>
          <Animatable.Text
            animation="fadeIn"
            easing="ease-out"
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: '200',
            }}>
            Cultivate what you want to grow
          </Animatable.Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      }}>
      {Splash_Screen}
    </View>
  );
};

export default SplashScreen;
