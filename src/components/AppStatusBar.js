import React from 'react';
import {StyleSheet, StatusBar, View, Platform} from 'react-native';

const AppStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={[styles.statusBar, backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const BAR_HEIGHT = Platform.OS == 'android' ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default AppStatusBar;
