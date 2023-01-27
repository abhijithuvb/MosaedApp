import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { drawerlisthomelogo } from '../assets'

const DrawerMenuComponent = ({ logo, title }) => {
    return (
        <View style={{ marginTop: HEIGHT * 0.04 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={logo} />
                <Text style={{ color: '#FFFFFF', fontSize: HEIGHT * 0.021, marginLeft: WIDTH * 0.04 }}>{title}</Text>
            </View>
        </View>
    )
}

export default DrawerMenuComponent