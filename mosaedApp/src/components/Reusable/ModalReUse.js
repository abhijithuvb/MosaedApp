import { View, Text, Modal, Dimensions, Image, TextInput, Pressable, } from 'react-native';
import React, { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../../api/Api'
import CustomButton from './CustomButton';


const ModalReUse = ({ visible, setVisible, navigation, state, setState, apiStatus }) => {
  // console.log(navigation);
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [otp, setotp] = useState([])
  const [Token, setToken] = useState()
  const [colour, setColour] = useState({ first: "#AFABC4", second: "#AFABC4", third: "#AFABC4", fourth: "#AFABC4" })
  const [error, setError] = useState("")

  const firstInput = useRef(null)
  const secondInput = useRef(null)
  const thirdInput = useRef(null)
  const fourthInput = useRef(null)




  const outerView = {
    borderWidth: 1,
    borderColor: '#3D989F',
    width: WIDTH * 0.63,
    borderRadius: HEIGHT * 0.01,
    marginTop: HEIGHT * 0.02,
    height: HEIGHT * 0.07,
    backgroundColor: '#fff',
  }

  const inputStyle = {
    height: HEIGHT * 0.03,
    width: WIDTH * 0.5,
  }

  const innerView = {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
  let getValue;
  const set = async () => {
    await AsyncStorage.setItem("token", Token?.token)
    getValue = await AsyncStorage.getItem("token")
  }

  const verifyOtp = {
    phone_number: state,
    otp: otp.join("")
  }

  console.log(("OTP======>>>>", otp));

  const checkOtp = async () => {
    await fetch(`${api}verifyotp`, {
      method: "POST",
      body: JSON.stringify(verifyOtp),
      headers: { "Content-type": "application/json", }
    }).then((response) => response.json())
      .then(async (data) => {
        console.log("verifyotp====>>>>", data)
        if (apiStatus && data.status) {
          await AsyncStorage.setItem("userdata", JSON.stringify(data.data.token))
          await AsyncStorage.setItem("loggedIn", "true")
          setVisible(!visible);

          setTimeout(() => {

            navigation.navigate('servicehome')
          }, 500)

        } else {
          console.log("verify==>>", data.status)
          if (data.status) {
            setVisible(!visible)
            setError("")
            setTimeout(() => {
              navigation.navigate("namepage")
            }, 500)
          }
          else {
            setError("Invalid Otp")
            otp.splice(0, otp.length)
            setotp([...otp])
          }

        }
      })
      .catch((error) => console.log("verify otp error==>>", error))
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -HEIGHT * 0.09
          }}>
          <View
            style={{
              margin: HEIGHT * 0.02,
              backgroundColor: '#fff',
              borderRadius: HEIGHT * 0.02,
              padding: HEIGHT * 0.04,
              height: HEIGHT * 0.52,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 4,

            }}>
            <View style={{ marginTop: -HEIGHT * 0.02 }}>
              <Image source={require('../../Images/otplogo/otplogo.png')} />
            </View>
            <View
              style={{
                marginTop: HEIGHT * 0.02,
                marginBottom: HEIGHT * 0.02,
              }}>
              <Text style={{ fontSize: HEIGHT * 0.025 }}>Otp Verification</Text>
            </View>
            <View
              style={{
                paddingLeft: HEIGHT * 0.02,
                paddingRight: HEIGHT * 0.02,
              }}>
              <Text
                style={{
                  fontSize: WIDTH * 0.035,
                  color: '#AFABC4',
                  textAlign: 'center',
                }}>
                Please enter the otp to{' '}
                <Text style={{ color: '#3D989F' }}>{state} </Text> to confirm
                your mobile number
              </Text>


            </View>
            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.04 }}>
              <TextInput ref={firstInput}
                style={{
                  borderWidth: 0.5,
                  borderColor: colour.first,
                  height: HEIGHT * 0.05,
                  width: WIDTH * 0.12,
                  margin: WIDTH * 0.02,
                  textAlign: "center"
                }}
                keyboardType="numeric"
                maxLength={1}

                onChangeText={(text) => {


                  if (text) {
                    otp.push(text)
                    setotp([...otp])
                    colour.first = "#3D989F"
                    setColour(colour)
                    secondInput.current.focus()
                  } else {
                    otp.pop()
                    setotp([...otp])
                    colour.first = "#AFABC4"
                    setColour(colour)
                  }

                }}
              />
              <TextInput ref={secondInput}
                style={{
                  borderWidth: 0.5,
                  borderColor: colour.second,
                  height: HEIGHT * 0.05,
                  width: WIDTH * 0.12,
                  margin: WIDTH * 0.02,
                  textAlign: 'center',

                }}

                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => {

                  if (text) {
                    otp.push(text)
                    setotp([...otp])
                    colour.second = "#3D989F"
                    setColour(colour)
                    thirdInput.current.focus()
                  } else {
                    otp.pop()
                    setotp([...otp])
                    colour.second = "#AFABC4"
                    setColour(colour)
                    firstInput.current.focus()
                  }
                }}
              />
              <TextInput ref={thirdInput}
                style={{
                  borderWidth: 0.5,
                  borderColor: colour.third,
                  height: HEIGHT * 0.05,
                  width: WIDTH * 0.12,
                  margin: WIDTH * 0.02,
                  textAlign: 'center',
                }}

                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => {

                  if (text) {
                    otp.push(text)
                    setotp([...otp])
                    colour.third = "#3D989F"
                    setColour(colour)
                    fourthInput.current.focus()
                  } else {
                    otp.pop()
                    setotp([...otp])
                    colour.third = "#AFABC4"
                    setColour(colour)
                    secondInput.current.focus()
                  }
                }}
              />
              <TextInput ref={fourthInput}
                style={{
                  borderWidth: 0.5,
                  borderColor: colour.fourth,
                  height: HEIGHT * 0.05,
                  width: WIDTH * 0.12,
                  margin: WIDTH * 0.02,
                  textAlign: 'center'
                }}

                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => {

                  if (!text) {
                    colour.fourth = "#AFABC4"
                    setColour(colour)
                    thirdInput.current.focus()
                    otp.pop()
                    setotp([...otp])
                  } else {
                    otp.push(text)
                    setotp([...otp])
                    colour.fourth = "#3D989F"
                    setColour(colour)
                  }
                }}
              />

            </View>
            <Text style={{ color: 'red', fontSize: HEIGHT * 0.015 }}>{error}</Text>
            <View style={{ marginTop: HEIGHT * 0.03 }}>
              <Pressable>
                <Text style={{ color: '#3D989F' }}>Resend?</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: HEIGHT * 0.02 }}>
              <CustomButton
                width={WIDTH * 0.65}
                animationWidth={5}
                value="Submit"
                visible={visible}
                onPress={() => {
                  checkOtp()
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ModalReUse;
