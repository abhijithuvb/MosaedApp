import { View, Text, Image, Dimensions, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from './Reusable/CustomButton';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import { backlogo, pluslogo, searchlogo } from '../Images';
import WorkerSmallScreen from './WorkerSmallScreen';
import CompanySmallScreen from './CompanySmallScreen';
import CustomTextInput from './Reusable/CustomTextInput';

const Company = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const [search, setSearch] = useState("")
  const [response, setResponse] = useState([])

  const getCompany = async () => {
    const token = await AsyncStorage.getItem("userdata")
    await fetch(`${api}companies`, { headers: { authorization: token || "" } }).then((response) => response.json()).then((response) => {
      console.log("res=>>", response)
      if (has(response, "status") && response.data) {
        setResponse(response.data);
      }
    }).catch((error) => console.log("error==>>", error))
  }

  useEffect(() => {
    getCompany()
  }, [])

  return (
    <View style={{ backgroundColor: '#FDFCFF' }}>
      <View style={{ backgroundColor: ' #FDFCFF', }}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.18, y: 0.76 }}
          end={{ x: 0.13, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: -HEIGHT * 0.08,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View style={{ marginTop: HEIGHT * 0.02 }}>
          <Header
            title="Companies"
            leftlogo={backlogo}
            rightlogo={pluslogo}
            navigation={() => {
              navigation.navigate('servicehome');
            }}
          />
        </View>

        <View style={{ alignItems: 'center', marginTop: -HEIGHT * 0.01 }}>
          <CustomTextInput state={search} setState={setSearch} data={response} />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.225,
          left: HEIGHT * 0.025,
        }}>
        <CompanySmallScreen state={search} onPress={() => navigation.navigate('workers')} />
      </View>
    </View>

  );
};

export default Company;
