import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { backarrow, backgroundsmalllogo, cabanlogo, searchlogo } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useRoute } from '@react-navigation/native'

const WashCabanSCreen = ({ navigation }) => {
    const Route = useRoute()
    const { serviceStatus } = Route.params

    const [cabanSize, setCabanSize] = useState({ length: '', width: '' })
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: HEIGHT * 0.01,
                        tintColor: '#0E1114',
                    }}
                    source={backgroundsmalllogo}
                />
                <View style={{ marginTop: HEIGHT * 0.025 }}>
                    <HeaderComponent
                        leftOnPress={() => navigation.goBack()}
                        title="SIZE"
                        leftlogo={backarrow}
                        rightlogo={searchlogo}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                    }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={cabanlogo} style={{ marginTop: HEIGHT * 0.06 }}
                        />
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.02 }}>CABAN SIZE</Text>
                        <Text style={{ width: WIDTH * 0.75, color: 'white', fontSize: HEIGHT * 0.02, textAlign: 'center', marginTop: HEIGHT * 0.03 }}>Please Enter The Cubicle Area To Be Washed In Square Meteres</Text>
                        <View style={{ marginTop: HEIGHT * 0.03 }}>{serviceStatus.washing ? <TextInputComponent setState={(text) => setCabanSize({ ...cabanSize, length: text })} label={'Caban Size'} /> : <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginLeft: HEIGHT * 0.02 }}><TextInputComponent setState={(text) => setCabanSize({ ...cabanSize, length: text })} Width={true} label={"Length"} /></View>
                            <View style={{ marginLeft: HEIGHT * 0.02 }}><TextInputComponent setState={(text) => setCabanSize({ ...cabanSize, width: text })} Width={true} label={"Width"} /></View>
                        </View>}

                        </View>
                        <View style={{ marginTop: HEIGHT * 0.015 }}>
                            <ButtonComponent label={'NEXT'} onPressFunction={() => navigation.navigate(serviceStatus.washing ? 'WashServicesScreen' : 'TowingLocationScreen', { serviceStatus })} />
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default WashCabanSCreen