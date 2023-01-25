import { TextInput, Dimensions, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SponserShipSelect = ({ label, Height, setState, outerView, errors, errorlabel, dropdownData }) => {
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
            <View style={{
            }}>
                <SelectDropdown data={dropdownData}
                    buttonStyle={{ backgroundColor: 'transparent', height: 30, width: '100%', }} defaultButtonText={" "}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} />
                    }}
                    buttonTextStyle={{ textAlign: 'left', fontSize: HEIGHT * 0.017 }}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        setState(selectedItem)
                    }}
                />
            </View>
            <Text style={{ fontSize: HEIGHT * 0.012, marginTop: HEIGHT * 0.01, marginLeft: WIDTH * 0.55, color: 'red' }}>{errors && errors[errorlabel]}</Text>
        </View >
    );
};

export default SponserShipSelect;
