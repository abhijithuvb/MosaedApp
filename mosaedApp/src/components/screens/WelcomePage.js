import { View, Text, Dimensions, Image, Pressable, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import TextBox from '../Reusable/TextBox';
import ButtonReUse from '../Reusable/CustomButton';
import ModalReUse from '../Reusable/ModalReUse';
import CustomButton from '../Reusable/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../api/Api'
import has from 'lodash/has'
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../../redux/actions/apiAction';
import { logo, bottomlogo, yellowlogo } from '../../Images/index'

const WelcomePage = props => {
  const { title, description, label, navigation } = props;

  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [visible, setVisible] = useState(false);
  const [phone, setphone] = useState('')
  const [error, setError] = useState('')


  const payload = { phone_number: phone }
  const dispatch = useDispatch()
  const apiStatus = useSelector((store) => store.apiReducer.data)
  console.log("apistat=>", apiStatus)
  const getApi = async () => {
    dispatch(sendOtp(payload))
  }
  // const validation = (expression.test(String(phone).toLowerCase()))
  console.log("ph", phone.length);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{}}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.28, y: 0.69 }}
          end={{ x: 0.13, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: HEIGHT * 0.02,
            right: -HEIGHT * 0.77,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View
          style={{
            height: HEIGHT * 0.38,
            width: WIDTH,
            borderBottomLefRadius: 10,
            borderBottomRightRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ marginTop: -HEIGHT * 0.001 }}>
            <Image source={logo} />
          </View>
          <View style={{ marginTop: HEIGHT * 0.03 }}>
            <Image source={bottomlogo} />
          </View>
        </View>
      </View>
      <KeyboardAvoidingView behavior='height'>
        <View style={{ marginLeft: HEIGHT * 0.04, marginTop: -HEIGHT * 0.001 }}>
          <Text style={{ fontSize: HEIGHT * 0.03 }}>Welcome</Text>
        </View>
        <View style={{ marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.01 }}>
          <Text style={{ fontSize: HEIGHT * 0.017, color: '#363636' }}>
            Welcome, please enter your Phone Number
          </Text>
        </View>
        <View style={{ marginTop: HEIGHT * 0.075, alignItems: 'center' }}>
          <TextBox keyboardtype="default" length={8} label="Phone No" state={phone} setState={setphone} />
          <Text style={{ fontSize: HEIGHT * 0.01, color: 'red', marginLeft: -WIDTH * 0.56, marginTop: -HEIGHT * 0.01 }}>{phone.length !== 8 || !phone ? error : ''}</Text>
        </View>
        <View style={{ marginTop: HEIGHT * 0.024 }}>
          <CustomButton
            // width={WIDTH * 0.83}
            left={HEIGHT * 0.04}
            value="Submit"
            onPress={() => {

              if (!phone) {
                setError("Valid Number Required")
              } else if (phone.length !== 8) {
                setError("Valid Number Required")

              } else {
                getApi()
                setError("")
                setVisible(true)

              }
            }
            }
          />
        </View>
      </KeyboardAvoidingView>
      <View>
        <View style={{ backgroundColor: 'red' }}>
          <ModalReUse
            navigation={navigation}
            visible={visible}
            setVisible={setVisible}
            state={phone}
            setState={setphone}
            apiStatus={apiStatus}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: HEIGHT * -0.015,
          right: HEIGHT * -0.01,
        }}>
        <Image source={yellowlogo} />
      </View>

    </View >
  );
};

export default WelcomePage;
