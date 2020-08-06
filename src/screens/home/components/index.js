import React, {useLayoutEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import {Text, ListItem, Left, Body, Icon, Right, Title} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDetails} from './../HomeApi';

const DataList = () => {
  const [userList, setUserList] = useState();
  const userData = useSelector(state => state.home.userDetails);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem style={{marginLeft: 0, paddingRight: 0}}>
        <Body>
          <Text>{`${item.first_name} ${item.last_name}`}</Text>
          <Image source={{uri: item.avatar}} style={{height: 200}} />
        </Body>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={userData && userData.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default DataList;
