import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

import {
    backgroundsmalllogo,
    multicolormediumlogo,
    searchlogo,
    backarrow,
    washinglogo,
    towinglogo,
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
// import { service } from '../Arrays/Arrays';

const ServiceScreen = ({ navigation }) => {
    const washingStatus = () => {
        setServiceStatus({ ...serviceStatus, washing: true, towing: false });
    };
    const towingStatus = () => {
        [setServiceStatus({ ...serviceStatus, washing: false, towing: true })];
    };

    const handleFunction = () => {
        navigation.navigate('ChooseLocationScreen', { serviceStatus });
    };

    const [serviceStatus, setServiceStatus] = useState({
        washing: false,
        towing: false,
    });

    const service = [
        {
            id: 1,
            logo: washinglogo,
            title: 'WASHING',
            buttonFunction: () => washingStatus(),
            background: serviceStatus?.washing ? '#0FC1A1' : '#181D23',
            checklogo: serviceStatus?.washing ? (
                <Ionicons name="checkmark-outline" />
            ) : (
                ''
            ),
        },
        {
            id: 2,
            logo: towinglogo,
            title: 'TOWING',
            buttonFunction: () => towingStatus(),
            background: serviceStatus?.towing ? '#0FC1A1' : '#181D23',
            checklogo: serviceStatus?.towing ? (
                <Ionicons name="checkmark-outline" />
            ) : (
                ''
            ),
        },
    ];

    console.log("service==>>", serviceStatus);
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
                        title="SERVICES"
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
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.06 }}>CHOOSE SERVICE</Text>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontSize: HEIGHT * 0.02,
                                marginTop: HEIGHT * 0.020, width: WIDTH * 0.75
                            }}>
                            Please Specify The Type Of Service You Want
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
                            data={service}
                            renderItem={({ item, index }) => (
                                <TerrainComponent
                                    logo={item.logo}
                                    title={item.title}
                                    background={item.background}
                                    serviceStatus={serviceStatus}
                                    onPressFn={() => item.buttonFunction()}
                                    checklogo={item.checklogo}
                                />
                            )}
                        />
                        <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.068 }}>
                            <ButtonComponent
                                label="NEXT"
                                onPressFunction={() => handleFunction()}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ServiceScreen