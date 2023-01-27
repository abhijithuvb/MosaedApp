import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'
import { homerentlogo, multicolorsmalllogo } from '../assets'
import { useNavigation } from '@react-navigation/native'

const HomeScreenListComponent = ({ logo, title, subtitle, path }) => {

    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate(path)} style={{ backgroundColor: '#181D23', marginTop: HEIGHT * 0.025, height: HEIGHT * 0.16, borderRadius: WIDTH * 0.02, width: WIDTH * 0.9, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ marginLeft: WIDTH * 0.08 }}>
                    <Image source={logo} />
                </View>
                <View style={{ marginLeft: WIDTH * 0.08 }}>
                    <Text style={{ fontSize: HEIGHT * 0.03, color: '#FFFFFF', fontWeight: '700' }}>{title}</Text>
                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.02, width: WIDTH * 0.45 }}>{subtitle}</Text>
                </View>
            </View>
            <Image source={multicolorsmalllogo} style={{ position: 'absolute', right: 0, bottom: 0 }} />
        </Pressable>
    )
}

export default HomeScreenListComponent