import { TextInput, Dimensions, View, Text, Image } from 'react-native';
import React, { useState } from 'react';

const TextBox = ({ label, logo, Height, setState, keyboardtype, outerView, inputStyle, innerView, length, errors, errorlabel, }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const [colour, setColour] = useState("#AFABC4")


  const handleFocus = () => {
    setColour("#3D989F")
  }
  const handleBlur = () => {
    setColour("#AFABC4")
  }

  return (

    <View
      style={[outerView ? outerView : {
        borderWidth: 0.5,
        borderColor: colour,
        width: WIDTH * 0.83,
        borderRadius: HEIGHT * 0.01,
        // marginTop: HEIGHT * 0.015,
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
        <TextInput
          style={[inputStyle ? inputStyle : {
            height: Height ? Height / 1.5 : HEIGHT * 0.03,
            width: WIDTH * 0.83,
            marginLeft: logo ? 0 : WIDTH * -0.2,
            width: WIDTH * 0.5,
          }]} keyboardType={keyboardtype ? keyboardtype : "numeric"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={text => {
            setState(text)


          }} maxLength={length && length}></TextInput>
        {logo ? <Image source={logo} /> : ''}
      </View>
      <Text style={{ fontSize: HEIGHT * 0.012, marginTop: HEIGHT * 0.01, marginLeft: WIDTH * 0.55, color: 'red' }}>{errors && errors[errorlabel]}</Text>
    </View >
  );
};

export default TextBox;
