import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { boatimage1, locationsmalllogo, starrating } from '../assets'
import { useNavigation } from '@react-navigation/native'

const BeachListComponent = ({ title, company, location, rate, sourceimage }) => {

    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('BeachDetailsScreen', { title, company, location, rate, sourceimage })} style={{ marginTop: HEIGHT * 0.017, height: HEIGHT * 0.115, backgroundColor: '#181D23', borderRadius: HEIGHT * 0.01, width: WIDTH * 0.92, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={sourceimage} />
                <View>
                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.021, fontWeight: '400' }}>{title}</Text>
                    <Image source={starrating} style={{ marginTop: HEIGHT * 0.004 }} />
                    <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.004 }}>{company}</Text>
                    <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.004 }}>
                        <Image source={locationsmalllogo} />
                        <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.014 }}>{location}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#0FC1A1', textAlign: 'right', fontSize: HEIGHT * 0.03, fontWeight: '700' }}>{rate}</Text>
                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.015, }}>QAR/hour</Text>
                </View>

            </View>

        </Pressable>
    )
}

export default BeachListComponent