import { View, Text, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';



import Header from './Header';
import { backlogo, workermaindp, nursesmalllogo, savedpink, confirm, } from '../Images/index';
import CustomButton from './Reusable/CustomButton'
import SponserShipModal from './SponserShipModal';


const SingleProfileSaved = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const routes = useRoute()
  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{}}>
          <LinearGradient
            colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0.2, y: 0.67 }}
            end={{ x: 0.13, y: 0.87 }}
            style={{
              position: 'absolute',
              bottom: -HEIGHT * 0.16,
              right: -HEIGHT * 0.76,
              width: HEIGHT * 2,
              height: HEIGHT * 2,
              borderRadius: HEIGHT,
            }}></LinearGradient>
          <View style={{ marginTop: HEIGHT * 0.02 }}>
            <Header
              title="Profile"
              leftlogo={backlogo}
              navigation={() => navigation.navigate('savepage')}
            />
          </View>
        </View>

        <View style={{ position: 'absolute', top: HEIGHT * 0.24 }}>
          <View>
            <View></View>
            <View
              style={{
                backgroundColor: '#fff',
                width: WIDTH * 0.9,
                marginLeft: WIDTH * 0.05,
                height: HEIGHT * 0.32,
              }}>
              <View
                style={{
                  position: 'absolute',
                  marginTop: HEIGHT * -0.08,
                  marginLeft: WIDTH * 0.28,
                }}>
                <Image source={workermaindp} />
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginRight: WIDTH * 0.04,
                  marginTop: HEIGHT * 0.02,
                }}>
                <Image source={savedpink} />
              </View>

              <View style={{ marginTop: HEIGHT * 0.04 }}>
                <View
                  style={{
                    alignItems: 'center',
                    marginBottom: HEIGHT * 0.01,
                    borderBottomWidth: 1,
                    paddingBottom: HEIGHT * 0.02,
                    borderBottomColor: '#F1F4FB',
                  }}>
                  <Text style={{ fontSize: HEIGHT * 0.027, fontWeight: '500' }}>
                    Salma Saeed
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={nursesmalllogo} />
                    <Text
                      style={{
                        marginLeft: WIDTH * 0.02,
                        fontSize: HEIGHT * 0.015,
                      }}>
                      Nursing
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View>
                    <Text style={{ fontSize: HEIGHT * 0.013, color: '#AFABC4' }}>
                      Hourly rate
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ marginTop: HEIGHT * 0.01 }}>150 </Text>
                      <Text
                        style={{
                          marginTop: HEIGHT * 0.015,
                          fontSize: HEIGHT * 0.012,
                        }}>
                        QAR
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: HEIGHT * 0.013, color: '#AFABC4' }}>
                      Nationality
                    </Text>

                    <Text style={{ marginTop: HEIGHT * 0.01 }}>Philippine</Text>
                  </View>
                </View>
                <View
                  style={{ marginTop: HEIGHT * 0.02, marginLeft: WIDTH * 0.13 }}>
                  <Text style={{ fontSize: HEIGHT * 0.013, color: '#AFABC4' }}>
                    Company Name
                  </Text>

                  <Text style={{ marginTop: HEIGHT * 0.01 }}>
                    Nursco Nursing Company
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: HEIGHT * 0.012,
              width: WIDTH * 0.9,
              marginLeft: WIDTH * 0.05,
              height: HEIGHT * 0.34,
            }}>
            <View style={{ marginLeft: WIDTH * 0.04, marginTop: HEIGHT * 0.02 }}>
              <Text style={{ fontSize: HEIGHT * 0.013, color: '#AFABC4' }}>
                About me
              </Text>
            </View>
            <View style={{ marginLeft: WIDTH * 0.04, marginTop: HEIGHT * 0.02 }}>
              <Text style={{ color: '#363636', fontWeight: '300' }}>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker
                {/* including versions of
                Lorem Ipsum. */}
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
          bottom: HEIGHT * 0,
          width: WIDTH,
          backgroundColor: '#fff',
          height: HEIGHT * 0.12,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: 'black',
          shadowOpacity: 0.2,
        }}>
        <CustomButton value="Hire me" onPress={() => setVisible(!visible)} />
      </View>
      <View>
        {routes.params.status && <SponserShipModal
          visible={visible}
          setVisible={setVisible}
          navigation={() => {
            navigation.navigate('servicehome');
          }}
          heading="That's Great"
          text="The Hiring application has been sent successfully"
          logo={confirm}
        />

        }
      </View>
    </View>
  );
};

export default SingleProfileSaved;
