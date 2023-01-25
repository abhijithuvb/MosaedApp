import { View, Text, Dimensions, FlatList } from 'react-native';
import React from 'react';
import Header from './Header';
import { backlogo } from '../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import TextBox from './Reusable/TextBox';
import CustomButton from './Reusable/CustomButton';
import { useState } from 'react';
import { EMAILREG } from './constants/constants';

const DATA = [
  {
    id: 1,
    label: 'Full Name',
    objectname: 'fullname'
  },
  {
    id: 2,
    label: 'Email',
    objectname: 'email'
  },
  {
    id: 3,
    label: 'Message Title',
    objectname: 'messageTitle'
  },
];

const ContactUsPage = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [contactDetails, setContactDetails] = useState({ fullname: '', email: '', messageTitle: '', message: '' })

  const validation = () => {
    setTimeout(() => {
      if (contactDetails.email !== "" && contactDetails.fullname !== "" && contactDetails.messageTitle !== "" && contactDetails.message !== "") {
        if (EMAILREG.test(contactDetails.email) === false) {
          alert("enter a valid email")
        } else {
          navigation.navigate('servicehome');
        }

      }
      else {
        alert("fill all fields")
      }

    }, 1000);
  }

  console.log("contactDetails==>>", contactDetails)
  return (
    <View>
      <View style={{}}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.2, y: 0.75 }}
          end={{ x: 0.14, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: HEIGHT * 0.58,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View
          style={{
            // height: HEIGHT * 0.17,
            overflow: 'hidden',
          }}>

          <Header
            leftlogo={backlogo}
            title="Contact us"
            navigation={() => navigation.navigate('servicehome')}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: HEIGHT * 0.2,
                height: HEIGHT * 0.07,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: HEIGHT * 0.02,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Please fill in the fields below
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: HEIGHT * 0.14,
          }}>
          <FlatList

            data={DATA}
            renderItem={({ item }) => <TextBox label={item.label} setState={(text) => {
              setContactDetails({ ...contactDetails, [item.objectname]: text })
            }} />}
          />
          <TextBox label="Your Message" Height={HEIGHT * 0.12} setState={(text) => {
            setContactDetails({ ...contactDetails, message: text })
          }} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: HEIGHT * 0.032,
          }}>
          <CustomButton
            value="Save"
            onPress={() => {
              validation()
            }}
          />
        </View>
      </View>
    </View >
  );
};

export default ContactUsPage;
