import styled from 'styled-react-native';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const Container = styled(View)(() => {
  return {
    padding: 20,
  };
});

export const Label = styled(Text)(() => {
  return {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    paddingBottom: 5,
  };
});
export const Header = styled(Text)(() => {
  return {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  };
});
export const SubHeader = styled(Text)(() => {
  return {
    fontSize: 16,
    color: '#666',
    paddingTop: 5,
    paddingBottom: 15,
  };
});

export const Description = styled(Text)(() => {
  return {
    color: '#555',
    paddingBottom: 15,
  };
});
