import { View, Text, SafeAreaView, Image, FlatList, BackHandler, Alert, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'


import { backgroundsmalllogo, multicolormediumlogo, homeheaderleftlogo, searchlogo, mainmediumlogo, homerentlogo, drawertoplogo } from '../assets'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'
import HeaderComponent from '../components/HeaderComponent'
import HomeScreenListComponent from '../components/HomeScreenListComponent'
import { homeScreenList } from '../Arrays/Arrays'
import { useRoute } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {

    // const hardwareBackPress = (props) => {
    //     Alert.alert(
    //         'Exit App',
    //         'Exiting the application?', [{
    //             text: 'Cancel',
    //             onPress: () => console.log('Cancel Pressed'),
    //             style: 'cancel'
    //         }, {
    //             text: 'OK',
    //             onPress: () => BackHandler.exitApp()
    //         },], {
    //         cancelable: false
    //     }
    //     )
    //     return true;
    // }

    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", hardwareBackPress)

    //     return () => {
    //         BackHandler.removeEventListener("hardwareBackPress", hardwareBackPress)
    //     }
    // }, [])
    const route = useRoute()
    console.log('====================================');
    console.log(route.name);
    console.log('====================================');

    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ position: 'absolute', right: 0, top: HEIGHT * 0.01, tintColor: "#0E1114" }} source={backgroundsmalllogo} />
                <View style={{ marginTop: Platform.OS === 'android' ? HEIGHT * 0.035 : HEIGHT * 0.075, }}>
                    <HeaderComponent leftOnPress={() => navigation.toggleDrawer()} title="VIP-974" leftlogo={homeheaderleftlogo} rightlogo={searchlogo} />
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ height: HEIGHT * 0.28, borderBottomLeftRadius: HEIGHT * 0.008, borderBottomRightRadius: HEIGHT * 0.008, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={mainmediumlogo} />
                        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.035 }}>Welcome to {'\n'}VIP-974</Text>
                        <Image source={multicolormediumlogo} style={{ position: 'absolute', left: 0, bottom: 0 }} />
                    </View>
                    <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
                        <FlatList scrollEnabled={false} data={homeScreenList} renderItem={({ item }) => <HomeScreenListComponent logo={item.logo} subtitle={item.subtitle} title={item.title} path={item.path} />} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen
// paddingLeft: WIDTH * 0.06,