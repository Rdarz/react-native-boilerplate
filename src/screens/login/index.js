import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Button} from 'native-base';
import {Images} from '~/src/common/styles/images';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Foundation';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

const LoginScreen = () => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  // useLayoutEffect(() => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [{name: 'SignIn'}],
  //   });
  // }, []);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={Images.loginPageBGImage}
        {...{
          style: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          },
        }}>
        <View
          {...{
            style: {
              backgroundColor: 'rgba(65, 71, 132, 0.94)',
              flex: 1,
            },
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              flexDirection: 'column',
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
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                  {...{
                    style: {
                      marginVertical: 10,

                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      width: width - 100,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: '#FFF',
                    },
                  }}>
                  <Text
                    {...{
                      style: {
                        textAlign: 'center',
                        fontSize: 16,

                        color: '#FFF',
                      },
                    }}>
                    {'SIGN UP'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                  {...{
                    style: {
                      marginVertical: 10,
                      backgroundColor: 'white',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      width: width - 100,
                      borderRadius: 20,
                    },
                  }}>
                  <Text
                    {...{
                      style: {
                        textAlign: 'center',
                        fontSize: 16,
                        color: '#333',
                      },
                    }}>
                    {'LOGIN'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
