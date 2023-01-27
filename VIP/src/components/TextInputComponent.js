import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants';

const TextInputComponent = ({ logo, label, keyboardtype, setState, length }) => {

    const [colour, setColour] = useState("#AFABC4")


    const handleFocus = () => {
        setColour("#0FC1A1")
    }
    const handleBlur = () => {
        setColour("#AFABC4")
    }

    return (

        <View
            style={{
                borderWidth: 0.5,
                borderColor: colour,
                width: WIDTH * 0.83,
                borderRadius: HEIGHT * 0.01,
                height: HEIGHT * 0.07,
                backgroundColor: '#0E1216',
                marginBottom: HEIGHT * 0.017,
            }}>
            <Text
                style={{
                    marginTop: HEIGHT * 0.01,
                    marginLeft: HEIGHT * 0.02,
                    color: colour, fontSize: HEIGHT * 0.014
                }}>
                {label}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TextInput
                    style={{
                        height: /* Height ? Height / 1.5 : */ HEIGHT * 0.03,
                        width: WIDTH * 0.83,
                        marginLeft: logo ? 0 : WIDTH * -0.2,
                        width: WIDTH * 0.5,
                        color: '#0FC1A1'
                    }} keyboardType={keyboardtype ? keyboardtype : "default"}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={text => {
                        setState(text)


                    }} maxLength={length && length}></TextInput>
                {logo ? <Image source={logo} /> : ''}
            </View>

        </View >
    );
};


export default TextInputComponent