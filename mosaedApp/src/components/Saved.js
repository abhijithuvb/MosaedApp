import { View, Dimensions, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import { backlogo, savesmalllogo, } from '../Images/index.js';
import WorkerSmallScreen from './WorkerSmallScreen';

const Saved = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View>
      <View style={{}}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.18, y: 0.75 }}
          end={{ x: 0.14, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: -HEIGHT * 0.11,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View style={{ marginTop: HEIGHT * 0.02 }}>
          <Header
            title="Saved"
            leftlogo={backlogo}
            rightlogo=""
            navigation={() =>
              navigation.navigate('servicehome', { screen: 'servicehome' })
            }
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.17,
          left: HEIGHT * 0.025,
        }}>
        <WorkerSmallScreen
          savelogo={savesmalllogo}
          navigation={(id, name, number, country, academy) => {
            navigation.navigate('singleprofilesaved', {
              id,
              name,
              number,
              country,
              academy,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Saved;
