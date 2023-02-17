import { View, Text, SafeAreaView, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, backgroundcardlogo, backgroundsmalllogo, backgroundtinylogo, cardcurve, cardcurveboxlogo, goldimagebackground, goldsmalllogo, multicolorcardlogo, multicolormediumlogo, multicolorrightlogo, pointslogo1, rightarrow, terrainmulticolorlogo, vipgoldtext } from '../assets'
import CardComponent from '../components/CardComponent'
import PointsHistory from '../components/PointsHistory'
import { pointHistory } from '../Arrays/Arrays'

const MemberShipScreen = ({ navigation }) => {
    console.log('====================================');
    console.log(HEIGHT * 0.0131);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.43, width: WIDTH, borderBottomLeftRadius: HEIGHT * 0.01, borderBottomRightRadius: HEIGHT * 0.01 }}>
                <SafeAreaView>
                    <View style={{ marginTop: HEIGHT * 0.04 }}><HeaderComponent leftlogo={backarrow} title="MEMBERSHIP" leftOnPress={() => navigation.goBack()} /></View>
                    <View style={{ alignSelf: 'center', marginTop: HEIGHT * 0.04 }}>
                        <CardComponent navigate={() => navigation.navigate("GoldScreen")} />
                    </View>

                </SafeAreaView>

            </View>
            <View style={{ margin: HEIGHT * 0.015, height: HEIGHT * 0.54 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>POINTS HISTORY</Text>
                <FlatList data={pointHistory} renderItem={({ item }) => <PointsHistory date={item.date} logo={item.logo} title={item.title} />} />



            </View>
        </View>

    )
}

export default MemberShipScreen