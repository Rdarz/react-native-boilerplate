import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {Tab, Tabs} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getPlantDetails} from './AboutApi';
import {
  Container,
  Header,
  Description,
  SubHeader,
  Label,
} from '~/src/common/styles/global.style';

const AboutScreen = ({route}) => {
  console.log('route', route.params);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const plantData = useSelector(
    state => state.about.plantDetails && state.about.plantDetails.data,
  );

  useLayoutEffect(() => {
    dispatch(getPlantDetails({}, route.params.id));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Image
        source={{
          uri: `${plantData && plantData.image_url}}`,
        }}
        style={{height: deviceHeight / 3}}
        resizeMode={'cover'}
      />
      <Tabs>
        <Tab heading="Details">
          <View>
            <Container>
              <View
                {...{
                  style: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#EEE',
                    marginBottom: 20,
                  },
                }}>
                <Header>{plantData && plantData.common_name}</Header>
                <SubHeader>
                  {plantData && plantData.family_common_name}
                </SubHeader>
              </View>
              <ScrollView
                style={{
                  backgroundColor: '#FFFFFF',
                  marginTop: 0,
                  height: deviceHeight / 3 - 20,
                }}>
                <Label>Common names</Label>
                <Description>
                  {plantData &&
                    plantData.main_species &&
                    plantData.main_species.common_names &&
                    plantData.main_species.common_names &&
                    plantData.main_species.common_names.en.map(list => (
                      <Description>{`${list}, `}</Description>
                    ))}
                </Description>
                <Label>
                  Year{' '}
                  <Text {...{style: {fontSize: 14, fontWeight: '300'}}}>
                    (First publication year of a valid name)
                  </Text>
                </Label>
                <Description>{plantData && plantData.year}</Description>
                <Label>
                  Native{' '}
                  <Text {...{style: {fontSize: 14, fontWeight: '300'}}}>
                    (Zones the species is native from)
                  </Text>
                </Label>
                <Description>
                  {plantData &&
                    plantData.main_species &&
                    plantData.main_species.distribution &&
                    plantData.main_species.distribution.native &&
                    plantData.main_species.distribution.native.map(list => (
                      <Description>{`${list}, `}</Description>
                    ))}
                </Description>
                <Label>
                  Introduced{' '}
                  <Text {...{style: {fontSize: 14, fontWeight: '300'}}}>
                    (Zones the species has been introduced)
                  </Text>
                </Label>
                <Description>
                  {plantData &&
                    plantData.main_species &&
                    plantData.main_species.distribution &&
                    plantData.main_species.distribution.introduced &&
                    plantData.main_species.distribution.introduced.map(list => (
                      <Text>{`${list}, `}</Text>
                    ))}
                </Description>
              </ScrollView>
            </Container>
          </View>
        </Tab>
        <Tab heading="Growth">
          <Container>
            {/* <View
              {...{
                style: {
                  borderBottomWidth: 1,
                  borderBottomColor: '#EEE',
                  marginBottom: 20,
                },
              }}>
              <Header>{plantData && plantData.common_name}</Header>
              <SubHeader>{plantData && plantData.family_common_name}</SubHeader>
            </View> */}
            <ScrollView
              style={{
                backgroundColor: '#FFFFFF',
                marginTop: 0,
                height: deviceHeight / 2 - 50,
              }}>
              <Label>
                Humidity{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.atmospheric_humidity) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Required relative humidity in the air, on a scale from 0 (<=10%) to 10 (>= 90%)`}
              </Text>

              <Label>
                Bloom Months{' - '}
                <Description>
                  {plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.bloom_months &&
                    plantData.main_species.growth.bloom_months.map(list => (
                      <Text>{`${list}, `}</Text>
                    ))}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`The months the species usually blooms`}
              </Text>

              <Label>
                Light{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.light) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 (very intensive insolation, >= 100 000 lux)`}
              </Text>

              <Label>
                PH Maximum{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.ph_maximum) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`The maximum acceptable soil pH (of the top 30 centimeters of soil) for the plant`}
              </Text>

              <Label>
                PH Minimum{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.ph_minimum) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`The minimum acceptable soil pH (of the top 30 centimeters of soil) for the plant`}
              </Text>

              <Label>
                Soil Texture{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.soil_texture) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Required texture of the soil, on a scale from 0 (clay) to 10 (rock)`}
              </Text>

              <Label>
                Soil Nutriments{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.soil_nutriments) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Required quantity of nutriments in the soil, on a scale from 0 (oligotrophic) to 10 (hypereutrophic)`}
              </Text>

              <Label>
                Soil Salinity{' - '}
                <Description>
                  {plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.soil_salinity}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Tolerance to salinity, on a scale from 0 (untolerant) to 10 (hyperhaline)`}
              </Text>

              <Label>
                Soil Humidity{' - '}
                <Description>
                  {(plantData &&
                    plantData.main_species &&
                    plantData.main_species.growth &&
                    plantData.main_species.growth.soil_humidity) ||
                    'Not available'}
                </Description>
              </Label>
              <Text
                {...{
                  style: {fontSize: 14, fontWeight: '300', marginBottom: 20},
                }}>
                {`Required humidity of the soil, on a scale from 0 (xerophile) to 10 (subaquatic)`}
              </Text>
            </ScrollView>
          </Container>
        </Tab>
      </Tabs>
    </SafeAreaView>
  );
};

AboutScreen.navigationOptions = ({navigation}) => ({
  title: 'About',
});
export default AboutScreen;
