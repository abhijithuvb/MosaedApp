import { View, Text, Modal, Dimensions, Image, } from 'react-native';
import React from 'react';

import CustomButton from './Reusable/CustomButton';
import TextBox from './Reusable/TextBox';
import { hireme } from '../Images/index';

const ProfileModal = ({ visible, setVisible, navigation }) => {
  console.log(navigation);
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const visiblity = () => {
    setTimeout(() => {
      navigation.navigate('singleprofilesaved', {
        screen: 'singleprofilesaved',
        status: true
      });
    }, 1000);

    setVisible(!visible);
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000030',
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: HEIGHT * 0.02,
              width: WIDTH * 0.89,
              height: HEIGHT * 0.5,
              alignItems: 'center',
              shadowColor: '#000', marginTop: -HEIGHT * 0.025
            }}>
            <View style={{ marginTop: HEIGHT * 0.035 }}>
              <Image source={hireme} />
            </View>
            <View
              style={{
                marginTop: HEIGHT * 0.02,
                marginBottom: HEIGHT * 0.02,
              }}>
              <Text style={{ fontSize: HEIGHT * 0.023, fontWeight: '600' }}>
                Hire Salma Saeed
              </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.02 }}>
              <TextBox
                Height={HEIGHT * 0.13}
                label="Enter Message"
                Width={WIDTH * 0.79}
              />
            </View>

            <View style={{ marginTop: HEIGHT * 0.025 }}>
              <CustomButton
                width={WIDTH * 0.65}
                value="Done"
                visible={visible}
                onPress={() => {
                  visiblity()
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileModal;
