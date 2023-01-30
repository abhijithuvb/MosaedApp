import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
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

const TerrainScreen = ({ navigation }) => {
    const beachStatus = () => {
        setTerrainStatus({ ...terrainStatus, beach: true, desert: false });
    };
    const desertStatus = () => {
        [setTerrainStatus({ ...terrainStatus, beach: false, desert: true })];
    };

    const handleFunction = () => {
        navigation.navigate('RentDayBookingScreen', { terrainStatus });
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
                <Ionicons name="checkmark-outline" />
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
                <Ionicons name="checkmark-outline" />
            ) : (
                ''
            ),
        },
    ];

    console.log('terrain=>', terrainStatus);
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
                            height: HEIGHT * 0.28,
                            borderBottomLeftRadius: HEIGHT * 0.008,
                            borderBottomRightRadius: HEIGHT * 0.008,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}>
                        <Image source={mainmediumlogo} />
                        <Text
                            style={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontSize: HEIGHT * 0.03,
                                marginTop: HEIGHT * 0.035,
                            }}>
                            Welcome to {'\n'}VIP-974
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
              /* alignItems: 'center', justifyContent: 'center' */ paddingTop:
                                HEIGHT * 0.1,
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
                        <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.06 }}>
                            <ButtonComponent
                                label="NEXT"
                                onPressFunction={() => handleFunction()}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default TerrainScreen;
