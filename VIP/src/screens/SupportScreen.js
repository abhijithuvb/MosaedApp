import { View, Text, Image, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { backarrow, backgroundaboutlogo } from '../assets'
import { HEIGHT } from '../../Constants/Constants'
import HeaderComponent from '../components/HeaderComponent'
import { supportData } from '../Arrays/Arrays'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const SupportScreen = ({ navigation }) => {
    const [details, setDetails] = useState({ Name: '', Email: '', PhoneNumber: '', Purpose: '', Message: '' })
    console.log('====================================');
    console.log(details);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: '#181D23' }}>
            <Image source={backgroundaboutlogo} style={{ position: 'absolute', right: 0, tintColor: 'black' }} />

            <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.04 : HEIGHT * 0.08 }}>
                <HeaderComponent leftlogo={backarrow} title="SUPPORT" leftOnPress={() => navigation.goBack()} />
            </View>
            <View style={{ marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.06 }}>
                <Text style={{ color: 'white', fontSize: 32 }}>
                    GIT IN TOUCH !
                </Text>
                <View style={{ marginTop: HEIGHT * 0.08 }}>
                    <FlatList data={supportData} renderItem={({ item }) => <View><TextInputComponent label={item.label} Height={item.height} setState={(text) => setDetails({ ...details, [item.text]: text })} /></View>} />
                    <View style={{ marginTop: HEIGHT * 0.04 }}>
                        <ButtonComponent label={'SEND'} onPressFunction={() => navigation.navigate("HomeScreen")} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SupportScreen