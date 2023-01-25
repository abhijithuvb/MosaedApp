import { TextInput, Dimensions, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SponserShipFormComponent = ({ label, logo, Height, keyboardtype, outerView, inputStyle, innerView, length, errors, errorlabel, description, popUpFunction }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [error, setError] = useState([])
  console.log("error=>", error)
  const [colour, setColour] = useState("#AFABC4")
  return (

    <View
      style={[outerView ? outerView : {
        borderWidth: 0.5,
        borderColor: colour,
        width: WIDTH * 0.83,
        borderRadius: HEIGHT * 0.01,
        height: Height ? Height : HEIGHT * 0.07,
        backgroundColor: '#fff',
        marginBottom: HEIGHT * 0.017,
      }]}>
      <Text
        style={{
          marginTop: HEIGHT * 0.01,
          marginLeft: HEIGHT * 0.02,
          color: colour, fontSize: HEIGHT * 0.014
        }}>
        {label}
      </Text>
      <View style={[innerView ? innerView : { flexDirection: 'row', justifyContent: 'space-around' }]}>
        <View editable={false}
          style={[inputStyle ? inputStyle : {
            height: Height ? Height / 1.5 : HEIGHT * 0.03,
            width: WIDTH * 0.83,
            marginLeft: logo ? 0 : WIDTH * -0.2,
            width: WIDTH * 0.5,
          }]} keyboardType={keyboardtype ? keyboardtype : "numeric"}
          maxLength={length && length}><Text>{description}</Text></View>
        {logo ? <Pressable onPress={() => popUpFunction()}><Image source={logo} /></Pressable> : <View />}
      </View>
      <Text style={{ fontSize: HEIGHT * 0.012, marginTop: HEIGHT * 0.01, marginLeft: WIDTH * 0.55, color: 'red' }}>{errors && errors[errorlabel]}</Text>
    </View >
  );
};

export default SponserShipFormComponent;
