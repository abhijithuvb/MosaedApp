import { View, Text, Modal, Dimensions, Image, } from 'react-native';
import React from 'react';
import CustomButton from './Reusable/CustomButton';

const SponserShipModal = ({ visible, setVisible, navigation, logo, heading, text, }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

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
              marginTop: -HEIGHT * 0.03,
              backgroundColor: '#fff',
              borderRadius: HEIGHT * 0.02,
              padding: HEIGHT * 0.04,
              height: HEIGHT * 0.39,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
            <View style={{ marginTop: -HEIGHT * 0.01 }}>
              <Image source={logo} />
            </View>
            <View
              style={{
                marginTop: HEIGHT * 0.015,
                marginBottom: HEIGHT * 0.02,
              }}>
              <Text style={{ fontSize: HEIGHT * 0.025, fontWeight: '500' }}>
                {heading}
              </Text>
            </View>
            <View
              style={{
                paddingLeft: HEIGHT * 0.02,
                paddingRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.015
              }}>
              <Text
                style={{
                  fontSize: WIDTH * 0.035,
                  color: '#AFABC4',
                  textAlign: 'center',
                }}>
                {text}
              </Text>
            </View>

            <View style={{ marginTop: HEIGHT * 0.055 }}>
              <CustomButton
                width={WIDTH * 0.65}
                animationWidth={5}
                value="Done"
                visible={visible}
                onPress={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    navigation();
                  }, 1000);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SponserShipModal;
