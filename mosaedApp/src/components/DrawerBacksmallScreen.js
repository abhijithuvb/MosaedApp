import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import { ratinglogo, companyicon } from '../Images';

const DATA = [
  {
    id: 1,
    name: 'Flexcare Medical Staffing',
    academy: 'Nursdo Nursing Academy',
    designation: 'Nursing',
    logo: ratinglogo,
    dp: companyicon,
  },
  {
    id: 2,
    name: 'Flexcare Medical Staffing',
    academy: 'Nursdo Nursing Academy',
    designation: 'Nursing',
    logo: ratinglogo,
    dp: companyicon,
  },
  {
    id: 3,
    name: 'Flexcare Medical Staffing',
    academy: 'Nursdo Nursing Academy',
    designation: 'Nursing',
    logo: ratinglogo,
    dp: companyicon,
  },
  {
    id: 4,
    name: 'Flexcare Medical Staffing',
    academy: 'Nursdo Nursing Academy',
    designation: 'Nursing',
    logo: ratinglogo,
    dp: companyicon,
  },
  {
    id: 5,
    name: 'Flexcare Medical Staffing',
    academy: 'Nursdo Nursing Academy',
    designation: 'Nursing',
    logo: ratinglogo,
    dp: companyicon,
  },
];

const DrawerBacksmallScreen = ({ onPress }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View>
      <FlatList
        style={{ height: HEIGHT * 0.6 }}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              alignItems: 'center',
              marginTop: HEIGHT * 0.015,
            }}
            onPress={() => onPress()}>
            <View
              style={{
                backgroundColor: '#fff',

                height: HEIGHT * 0.12,
                width: WIDTH * 0.9,
                borderRadius: HEIGHT * 0.01,
                flexDirection: 'row',

                alignItems: 'center',
              }}>
              <View style={{ marginLeft: HEIGHT * 0.03 }}>
                <Image source={item.dp} />
              </View>
              <View style={{ marginLeft: HEIGHT * 0.01 }}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ marginLeft: HEIGHT * 0.006, fontWeight: '600' }}>
                    {item.name}
                  </Text>
                </View>

                <View
                  style={{
                    marginLeft: HEIGHT * 0.006,
                    marginTop: HEIGHT * 0.004,
                  }}>
                  <Image source={item.logo} />
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DrawerBacksmallScreen;
