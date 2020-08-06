// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '_screens/home/HomeContainer';
import AboutScreen from '_screens/about';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: ({scene, previous, navigation}) => {
    const {options} = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return (
      <MyHeader
        title={title}
        leftButton={
          previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
        }
        style={options.headerStyle}
      />
    );
  },
  headerMode: 'screen',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
};

// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
