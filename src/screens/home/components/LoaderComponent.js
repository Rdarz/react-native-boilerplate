import React, {useLayoutEffect, useState, useContext} from 'react';
import {FlatList, Image} from 'react-native';
import {Text, ListItem, Left, Body, Icon, Right, Title} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {getPlantDetails} from '../HomeApi';
import {useNavigation} from '@react-navigation/native';

const LoaderComponent = ({props}) => {
  const navigation = useNavigation();
  const [userList, setUserList] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const plantData = useSelector(state => state.home.plantDetails);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // dispatch(getPlantDetails());
  }, []);

  const renderItem = ({item}) => {
    console.log('PLANT DATA', plantData);
    return (
      <ListItem
        style={{marginLeft: 0, paddingRight: 0}}
        onPress={() => {
          navigation.navigate('About');
        }}>
        <Body>
          <Text>{`${item.common_name} ${item.last_name}`}</Text>
          <Image source={{uri: item.image_url}} style={{height: 200}} />
        </Body>
      </ListItem>
    );
  };
  const onRefresh = async () => {
    console.log('ON REFRESH');
    await setIsFetching(true);
    await dispatch(getPlantDetails()).then(res => {
      console.log('ON REFRESH RES', res);
      setIsFetching(false);
    });
  };
  return (
    <FlatList
      data={[]}
      renderItem={renderItem}
      keyExtractor={item => `'${item.id}'`}
      onRefresh={onRefresh}
      refreshing={isFetching}
    />
  );
};

export default LoaderComponent;
