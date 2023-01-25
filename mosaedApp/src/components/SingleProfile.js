import { View, Text, Dimensions, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Header from './Header';
import { backlogo, workermaindp, nursesmalllogo, savesmallwhite, savedpink, } from '../Images/index';
import CustomButton from './Reusable/CustomButton';
import ProfileModal from './ProfileModal';


const SingleProfile = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const [save, setSave] = useState(true);
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const { id, name, number, country, academy, description } = route.params;

  const progress = useSharedValue(0.65);

  const styles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(progress.value * 1.5, { duration: 100, easing: Easing.ease }) }]
    }

  })


  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View>
        <View style={{}}>
          <LinearGradient
            colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0.17, y: 0.77 }}
            end={{ x: 0.13, y: 0.87 }}
            style={{
              position: 'absolute',
              bottom: -HEIGHT * 0.18,
              right: -HEIGHT * 0.76,
              width: HEIGHT * 2,
              height: HEIGHT * 2,
              borderRadius: HEIGHT,
            }}></LinearGradient>
          <View style={{ marginTop: HEIGHT * 0.02 }}>
            <Header
              title="Profile"
              leftlogo={backlogo}
              navigation={() => navigation.navigate('workers')}
            />
          </View>

        </View>
        <View style={{ position: 'absolute', top: HEIGHT * 0.24 }}>
          <View>
            <View></View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: WIDTH * 0.9,
                marginLeft: WIDTH * 0.05,
                height: HEIGHT * 0.31,
                borderRadius: HEIGHT * 0.01,
                marginTop: -HEIGHT * 0.007,
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
              <View
                style={{
                  position: 'absolute',
                  marginTop: HEIGHT * -0.067,
                  marginLeft: WIDTH * 0.28,
                }}>
                <Image source={workermaindp} />
              </View>
              <Pressable
                style={{
                  alignItems: 'flex-end',
                  position: 'absolute', right: WIDTH * 0.04, top: HEIGHT * 0.02
                }}
                onPress={() => {
                  setSave(!save)
                  progress.value = 1
                  setTimeout(() => {
                    progress.value = 0.65
                  }, 100)
                }}>
                <Animated.Image style={[styles]} source={save ? savesmallwhite : savedpink} />
              </Pressable>
              <View style={{ marginTop: HEIGHT * 0.093, }}>
                <View
                  style={{
                    alignItems: 'center',
                    marginBottom: HEIGHT * 0.01, marginLeft: HEIGHT * 0.02, marginRight: HEIGHT * 0.02,
                    borderBottomWidth: 1,
                    paddingBottom: HEIGHT * 0.02,
                    borderBottomColor: '#F1F4FB', marginTop: -HEIGHT * 0.007
                  }}>
                  <Text style={{ fontSize: HEIGHT * 0.027, fontWeight: '500' }}>
                    {name}
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.005 }}>
                    <Image source={nursesmalllogo} style={{ marginTop: HEIGHT * 0.004 }} />
                    <Text
                      style={{
                        marginLeft: WIDTH * 0.02,
                        fontSize: HEIGHT * 0.019, fontWeight: '300'
                      }}>
                      Nursing
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ marginLeft: WIDTH * 0.06, }}>
                    <Text
                      style={{
                        fontSize: HEIGHT * 0.012,
                        color: '#AFABC4',
                      }}>
                      Hourly rate
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ marginTop: HEIGHT * 0.01 }}>{number}</Text>
                      <Text
                        style={{
                          marginTop: HEIGHT * 0.015,
                          marginLeft: WIDTH * 0.01,
                          fontSize: HEIGHT * 0.012,
                        }}>
                        {country}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginRight: WIDTH * 0.18 }}>
                    <Text style={{ fontSize: HEIGHT * 0.012, color: '#AFABC4' }}>
                      Nationality
                    </Text>
                    <Text style={{ marginTop: HEIGHT * 0.01 }}>{country}</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: HEIGHT * 0.02,
                    marginLeft: WIDTH * 0.06,
                  }}>
                  <Text style={{ fontSize: HEIGHT * 0.012, color: '#AFABC4' }}>
                    Company Name
                  </Text>
                  <Text
                    style={{
                      marginTop: HEIGHT * 0.01,
                      fontSize: HEIGHT * 0.02,
                      fontWeight: '300',
                    }}>
                    {academy}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: HEIGHT * 0.012,
              width: WIDTH * 0.9,
              marginLeft: WIDTH * 0.05,
              height: HEIGHT * 0.34,
              borderRadius: HEIGHT * 0.01, shadowColor: '#171717',
              shadowOffset: { width: -2, height: -1 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}>
            <View
              style={{
                marginLeft: WIDTH * 0.04,
                marginTop: HEIGHT * 0.02,
              }}>
              <Text style={{ fontSize: HEIGHT * 0.013, color: '#AFABC4' }}>
                About me
              </Text>
            </View>
            <View style={{ marginLeft: WIDTH * 0.04, marginTop: HEIGHT * 0.02 }}>
              <Text style={{ color: '#363636', fontWeight: '300', flexWrap: 'wrap', marginHorizontal: 16 }}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: HEIGHT * 0.0,
          width: WIDTH,
          backgroundColor: '#fff',
          height: HEIGHT * 0.15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: 'black',
          shadowOpacity: 0.2,
        }}>
        <CustomButton value="Hire me" onPress={() => setVisible(!visible)} />
      </View>
      <View>
        <ProfileModal
          visible={visible}
          setVisible={setVisible}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default SingleProfile;
