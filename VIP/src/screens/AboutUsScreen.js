import { View, Text, Image, ScrollView, Platform } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants';
import { backarrow, backgroundaboutlogo, backgroundsmalllogo, mainmediumlogo, multicolorlonglogo, multicolormediumlogo } from '../assets';
import HeaderComponent from '../components/HeaderComponent';

const AboutUsScreen = ({ navigation }) => {
    console.log('====================================');
    console.log(WIDTH * 0.852);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ height: HEIGHT * 0.286, backgroundColor: '#181D23' }}>
                <Image source={backgroundaboutlogo} style={{ position: 'absolute', right: 0, tintColor: 'black' }} />
                <Image source={multicolorlonglogo} style={{ position: 'absolute', left: 0, bottom: 0 }} />
                <View style={{ marginTop: Platform.OS == "android" ? HEIGHT * 0.02 : HEIGHT * 0.08 }}>
                    <HeaderComponent leftlogo={backarrow} title="ABOUT US" leftOnPress={() => navigation.goBack()} />
                </View>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                    <Image source={mainmediumlogo} />
                </View>
            </View>
            <View style={{ height: HEIGHT * 0.61 }}>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.04 }}><Text style={{ color: 'white', fontSize: 18, }}>Vip_974</Text>
                    <ScrollView>
                        <Text style={{ color: '#DBDBDB', fontSize: 16, width: WIDTH * 0.852, marginTop: HEIGHT * 0.02, }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        </Text>
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}

export default AboutUsScreen