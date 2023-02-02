import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { searchlogogreen } from '../assets'

const SearchComponent = ({ setState }) => {
    return (
        <View style={{ height: HEIGHT * 0.07, width: WIDTH * 0.87, backgroundColor: '#0E1216', borderRadius: HEIGHT * 0.01, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
                <Image style={{ marginTop: HEIGHT * 0.01, marginLeft: HEIGHT * 0.02 }} source={searchlogogreen} />
                <TextInput style={{ color: 'white', width: WIDTH * 0.65, height: HEIGHT * 0.04, marginLeft: HEIGHT * 0.02 }} placeholder={'Search'} placeholderTextColor={'white'} onChangeText={(text) => setState(text)} />

            </View>

        </View>
    )
}

export default SearchComponent