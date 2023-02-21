import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

import {
    backgroundsmalllogo,
    multicolormediumlogo,
    searchlogo,
    backarrow,
    standardlogo,
    customlogo,
    buildcustomlogo,
    buildstandardlogo,
    progresslogo1,
    cabansizelogo,
    ticklogo,
} from '../../assets';
import {
    HEIGHT,
    WIDTH,
} from '../../../Constants/Constants';
import HeaderComponent from '../../components/HeaderComponent';
import HomeScreenListComponent from '../../components/HomeScreenListComponent';
// import { homeScreenList, terrain } from '../Arrays/Arrays'
import TerrainComponent from '../../components/TerrainComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChooseButtonComponent from '../../components/ChooseButtonComponent';
// import { service } from '../Arrays/Arrays';

const BuildScreen = ({ navigation }) => {
    const standardStatus = () => {
        setbuildStatus({ ...buildStatus, standard: true, custom: false });
    };
    const customStatus = () => {
        [setbuildStatus({ ...buildStatus, standard: false, custom: true })];
    };
    const screenData = { id: 1, title: 'CABANA SIZE', step: '1', progresslogo: progresslogo1, maintitle: 'CABANA SIZE', mainlogo: cabansizelogo, case: 'cabansize' }

    const handleFunction = () => {
        // navigation.navigate(buildStatus.standard ? 'CabanaScreen' : 'CustomCabanaScreen', { buildStatus, screenData });
        if (buildStatus.standard) {
            navigation.navigate("CabanaScreen")
        } else if (buildStatus.custom) {
            navigation.navigate('CustomCabanaScreen', { buildStatus, screenData })
        }
    };

    const [buildStatus, setbuildStatus] = useState({
        standard: false,
        custom: false,
    });

    const service = [
        {
            id: 1,
            logo: buildstandardlogo,
            title: 'standard',
            buttonFunction: () => standardStatus(),
            background: buildStatus?.standard ? '#0FC1A1' : '#181D23',
            checklogo: buildStatus?.standard ? (
                <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} />
            ) : (
                ''
            ),
        },
        {
            id: 2,
            logo: buildcustomlogo,
            title: 'custom',
            buttonFunction: () => customStatus(),
            background: buildStatus?.custom ? '#0FC1A1' : '#181D23',
            checklogo: buildStatus?.custom ? (
                <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} />
            ) : (
                ''
            ),
        },
    ];

    console.log("service==>>", buildStatus);
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
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.06 }}>CHOOSE TYPE</Text>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontSize: HEIGHT * 0.02,
                                marginTop: HEIGHT * 0.020, width: WIDTH * 0.75
                            }}>
                            Please Chooose The Build Type,{'\n'}Standard Or Custom
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
                                    buildStatus={buildStatus}
                                    onPressFn={() => item.buttonFunction()}
                                    checklogo={item.checklogo}
                                />
                            )}
                        />
                        <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.068 }}>
                            {/* <ButtonComponent
                                label="VIEW CABANAS"
                                onPressFunction={() => handleFunction()}
                            /> */}
                            <ChooseButtonComponent onPressFunction={() => handleFunction()} label={"NEXT"} color={buildStatus.standard === true || buildStatus.custom === true ? "#0FC1A1" : '#000000'} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BuildScreen