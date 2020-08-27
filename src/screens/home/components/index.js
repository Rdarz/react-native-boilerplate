import React, {useLayoutEffect, useState, useContext} from 'react';
import {FlatList, Image} from 'react-native';
import {Text, ListItem, Left, Body, Icon, Right, Title} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDetails} from './../HomeApi';
import {useNavigation} from '@react-navigation/native';

const DataList = ({props}) => {
  const navigation = useNavigation();
  const [userList, setUserList] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const userData = useSelector(state => state.home.userDetails);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem
        style={{marginLeft: 0, paddingRight: 0}}
        onPress={() => {
          navigation.navigate('About');
        }}>
        <Body>
          <Text>{`${item.first_name} ${item.last_name}`}</Text>
          <Image source={{uri: item.avatar}} style={{height: 200}} />
        </Body>
      </ListItem>
    );
  };
  const onRefresh = async () => {
    console.log('ON REFRESH');
    await setIsFetching(true);
    await dispatch(getUserDetails()).then(res => {
      console.log('ON REFRESH RES', res);
      setIsFetching(false);
    });
  };
  return (
    <FlatList
      data={userData && userData.data}
      renderItem={renderItem}
      keyExtractor={item => `'${item.id}'`}
      onRefresh={onRefresh}
      refreshing={isFetching}
    />
  );
};

export default DataList;
