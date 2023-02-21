import { View, Text, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants';
import HeaderComponent from '../components/HeaderComponent';
import { backarrow, backgroundlogo, backgroundsmalllogo, vipbenefitslogo1, vipgoldtext } from '../assets';
import GoldBenefitsComponent from '../components/GoldBenefitsComponent';
import { vipGoldBenefits } from '../Arrays/Arrays';
import VipGoldProgressComponent from '../components/VipGoldProgressComponent';

const GoldScreen = ({ navigation }) => {
    console.log('====================================');
    console.log(HEIGHT * 0.0075);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ height: HEIGHT * 0.4812, backgroundColor: '#181D23' }}>
                <Image source={backgroundsmalllogo} style={{ position: 'absolute', top: 0, right: 0, tintColor: 'black' }} />
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.04 : HEIGHT * 0.09 }}>
                    <HeaderComponent title={"VIP-GOLD"} leftlogo={backarrow} leftOnPress={() => navigation.goBack()} />
                </View>
                <View style={{ marginTop: HEIGHT * 0.04 }}>
                    <VipGoldProgressComponent />
                </View>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.03 }}>
                    <Image source={vipgoldtext} />
                    <Text style={{ fontSize: 12, color: 'white', width: WIDTH * 0.665, textAlign: 'center', marginTop: HEIGHT * 0.01 }}>
                        Conduct More Rentals,Services And Builds To Get More Exclusive Points & Benefits
                    </Text>
                </View>

            </View>
            <View style={{}}>
                <Text style={{ color: 'white', fontSize: 18, margin: HEIGHT * 0.02 }}>
                    BENEFITS
                </Text>
                <View>
                    <FlatList data={vipGoldBenefits} renderItem={({ item }) => <GoldBenefitsComponent logo={item.logo} subtitle={item.subtitle} title={item.title} />} />
                </View>
            </View>
        </View>
    )
}

export default GoldScreen