import React, {useState} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getPlants} from '../HomeApi';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  Header,
  Description,
  SubHeader,
  Label,
} from '~/src/common/styles/global.style';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const SearchComponent = props => {
  const navigation = useNavigation();
  const [textInputFocussed, setTextInputFocussed] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [animation, setAnimation] = useState(
    new Animated.Value(deviceHeight / 2 - 200),
  );

  const startAnimationToTop = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
    }).start(() => {
      animation.setValue(0);
      //If you remove above line then it will stop the animation at toValue point
    });
  };
  const startAnimationToBottom = () => {
    Animated.timing(animation, {
      toValue: deviceHeight / 2 - 200,
      duration: 500,
    }).start(() => {
      animation.setValue(deviceHeight / 2 - 200);
      //If you remove above line then it will stop the animation at toValue point
    });
  };

  const dispatch = useDispatch();
  const plantData = useSelector(state => state.home.plants);

  const handleBlur = () => {
    setTextInputFocussed(false);
    // setSearchedTerm(searchTerm);
  };
  let timeout = 0;
  const searchTermResult = searchText => {
    setSearchTerm(searchText);

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (searchText && searchText.length > 0) {
        startAnimationToTop();
        dispatch(getPlants(props, searchText));
      } else {
        startAnimationToBottom();
      }
    }, 400);
  };
  const renderSearchList = () => {
    return (
      <View style={styles.searchList}>
        {plantData && plantData.data && plantData.data.length === 0 && (
          <View style={styles.searchListItem}>
            <Text style={styles.searchListItemText}>No match found</Text>
          </View>
        )}
        {plantData &&
          plantData.data &&
          plantData.data.slice(0, 3) &&
          plantData.data.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('About', {
                    id: data.id,
                    slug: data.slug,
                  })
                }>
                <View key={index} style={styles.searchListItem}>
                  <Text style={styles.searchListItemText}>
                    {data.common_name || data.scientific_name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        {plantData && plantData.data && plantData.data.length !== 0 && (
          <TouchableOpacity onPress={() => setSearchTerm(searchTerm)}>
            <View style={styles.searchListItem}>
              <Text
                style={[
                  styles.searchListItemText,
                  {
                    color: '#ff5d51',
                  },
                ]}>
                See all ({plantData.data.length}) names
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: animation,
            },
          ],
        },
      ]}>
      <SubHeader {...{style: {marginTop: 0, textAlign: 'center'}}}>
        Search plant with common name
      </SubHeader>
      <TextInput
        defaultValue={props.searchedTerm}
        placeholder="Search"
        style={[
          styles.formField,
          {
            marginTop: 0,
          },
        ]}
        placeholderTextColor={'#888888'}
        onFocus={() => {
          setTextInputFocussed(true);
        }}
        onBlur={handleBlur}
        onChange={event => searchTermResult(event.nativeEvent.text)}
        returnKeyType="send"
        onSubmitEditing={() => searchTermResult(searchTerm)}
      />

      {plantData && plantData.data && plantData.data.length > 0 && (
        <ScrollView
          style={{
            backgroundColor: '#FFFFFF',
            marginTop: StatusBar.currentHeight - 30,
            width: deviceWidth,
            height: deviceHeight - StatusBar.currentHeight - 250,
          }}>
          {searchTerm.length > 0 &&
            plantData &&
            plantData.data &&
            plantData.data.length > 0 &&
            renderSearchList()}
        </ScrollView>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight - StatusBar.currentHeight - 100,
    backgroundColor: 'white',
  },
  formField: {
    backgroundColor: '#F4F4F4',
    padding: 12,
    margin: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    fontSize: 18,
    height: 50,
  },
  searchList: {
    paddingLeft: 16,
  },
  searchListItem: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    paddingRight: 16,
    borderColor: '#DBDBDB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchListItemText: {
    fontSize: 20,
    maxWidth: '85%',
  },
});

export default SearchComponent;
