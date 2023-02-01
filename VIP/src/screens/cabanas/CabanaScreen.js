import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import { backarrow, cabana1, searchlogo } from '../../assets'
import { HEIGHT, WIDTH } from '../../../Constants/Constants'
import CabanaComponent from '../../components/Cabanas/CabanaComponent'
import { cabanadata } from '../../Arrays/Arrays'

const CabanaScreen = ({ navigation }) => {
    return (

        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginTop: HEIGHT * 0.03 }}>
                    <HeaderComponent title={'CABANAS'} leftlogo={backarrow} rightlogo={searchlogo} leftOnPress={() => navigation.goBack()} />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <FlatList style={{ height: HEIGHT * 0.85 }} data={cabanadata} renderItem={({ item }) => <CabanaComponent company={item.company} size={item.size} rate={item.price} title={item.title} logo={item.image} />} />
                </View>



            </SafeAreaView>
        </View>
    )
}

export default CabanaScreen