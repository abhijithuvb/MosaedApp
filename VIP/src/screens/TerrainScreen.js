import { View, Text, SafeAreaView, Image, FlatList, Platform } from 'react-native';
import React, { useState } from 'react';

import {
    backgroundsmalllogo,
    multicolormediumlogo,
    homeheaderleftlogo,
    searchlogo,
    mainmediumlogo,
    homerentlogo,
    drawertoplogo,
    backarrow,
    beachlogo,
    desertlogo,
    ticklogo,
} from '../assets';
import {
    HEIGHT,
    WIDTH,
} from '../../../mosaedApp/src/components/constants/constants';
import HeaderComponent from '../components/HeaderComponent';
import HomeScreenListComponent from '../components/HomeScreenListComponent';
// import { homeScreenList, terrain } from '../Arrays/Arrays'
import TerrainComponent from '../components/TerrainComponent';
import ButtonComponent from '../components/ButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChooseButtonComponent from '../components/ChooseButtonComponent';

const TerrainScreen = ({ navigation }) => {
    const beachStatus = () => {
        setTerrainStatus({ ...terrainStatus, beach: true, desert: false });
    };
    const desertStatus = () => {
        [setTerrainStatus({ ...terrainStatus, beach: false, desert: true })];
    };

    const handleFunction = () => {
        if (terrainStatus.beach || terrainStatus.desert) {
            navigation.navigate('RentDayBookingScreen', { terrainStatus });
        }
    };

    const [terrainStatus, setTerrainStatus] = useState({
        beach: false,
        desert: false,
    });

    const terrain = [
        {
            id: 1,
            logo: beachlogo,
            title: 'BEACH',
            buttonFunction: () => beachStatus(),
            background: terrainStatus?.beach ? '#0FC1A1' : '#181D23',
            checklogo: terrainStatus?.beach ? (
                <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} />
            ) : (
                ''
            ),
        },
        {
            id: 2,
            logo: desertlogo,
            title: 'DESERT',
            buttonFunction: () => desertStatus(),
            background: terrainStatus?.desert ? '#0FC1A1' : '#181D23',
            checklogo: terrainStatus?.desert ? (
                <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} />
            ) : (
                ''
            ),
        },
    ];

    console.log('terrain=>', terrainStatus);
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: HEIGHT * 0.01,
                        tintColor: '#0E1114',
                    }}
                    source={backgroundsmalllogo}
                />
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.075 }}>
                    <HeaderComponent
                        leftOnPress={() => navigation.goBack()}
                        title="RENT"
                        leftlogo={backarrow}
                        rightlogo={searchlogo}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                    }}>
                    <View
                        style={{
                            height: HEIGHT * 0.26,
                            borderBottomLeftRadius: HEIGHT * 0.008,
                            borderBottomRightRadius: HEIGHT * 0.008,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',

                        }}>
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.06 }}>CHOOSE TERRAIN</Text>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontSize: HEIGHT * 0.02,
                                marginTop: HEIGHT * 0.020, width: WIDTH * 0.75
                            }}>
                            Please Specify The Type Of Vehicles You Want,Desert Or Beach
                        </Text>
                        <Image
                            source={multicolormediumlogo}
                            style={{ position: 'absolute', left: 0, bottom: 0 }}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: 'black',
                            flex: 1,
                            paddingTop: HEIGHT * 0.105,
                        }}>
                        <FlatList
                            horizontal
                            data={terrain}
                            renderItem={({ item, index }) => (
                                <TerrainComponent
                                    logo={item.logo}
                                    title={item.title}
                                    background={item.background}
                                    terrainStatus={terrainStatus}
                                    onPressFn={() => item.buttonFunction()}
                                    checklogo={item.checklogo}
                                />
                            )}
                        />
                        <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.068 }}>
                            {/* <ButtonComponent
                                label="NEXT"
                                onPressFunction={() => handleFunction()}
                            /> */}
                            <ChooseButtonComponent onPressFunction={() => handleFunction()} label={"NEXT"} color={terrainStatus.beach === true || terrainStatus.desert === true ? "#0FC1A1" : '#000000'} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TerrainScreen;
