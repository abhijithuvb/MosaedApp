import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { drawerlisthomelogo } from '../assets'
import { useNavigation } from '@react-navigation/native'

const DrawerMenuComponent = ({ logo, title, path, onPressFunction }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => {
            onPressFunction()
            // navigation.navigate(path)
        }} style={{ marginTop: HEIGHT * 0.04 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={logo} />
                <Text style={{ color: '#FFFFFF', fontSize: HEIGHT * 0.021, marginLeft: WIDTH * 0.04 }}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default DrawerMenuComponent