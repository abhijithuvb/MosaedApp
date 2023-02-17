import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { backgroundcardlogo, cardcurve, cardcurveboxlogo, goldsmalllogo, multicolorcardlogo, rightarrow, vipgoldtext } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'

const CardComponent = ({ navigate }) => {
    return (
        <View style={{ width: WIDTH * 0.861, height: HEIGHT * 0.235, backgroundColor: '#0E1114', alignSelf: 'center', overflow: 'hidden', borderRadius: HEIGHT * 0.007 }}>
            <Image style={{ position: 'absolute', top: -10, right: 50 }} source={backgroundcardlogo} />
            <Image style={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }} source={multicolorcardlogo
            } />
            <View style={{ marginHorizontal: HEIGHT * 0.0245, marginVertical: HEIGHT * 0.0245 }}>
                <Text style={{ color: '#0FC1A1', fontSize: 24, }}>1038 <Text style={{ fontSize: 14 }}>Points</Text></Text>
                <Text style={{ fontSize: 12, color: '#DBDBDB' }}>Expiring on 30 Jun 2021</Text></View>
            <View>
                <Image style={{ position: 'absolute', bottom: 20 }} source={cardcurveboxlogo} resizeMode="contain" />
                <Image style={{ position: 'absolute', bottom: 44 }} resizeMode="contain" source={cardcurve} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: HEIGHT * 0.0665, width: HEIGHT * 0.0665, backgroundColor: '#70707060', borderRadius: HEIGHT * 0.008, marginHorizontal: HEIGHT * 0.0245, marginVertical: HEIGHT * 0.0475 }}>
                        <Image style={{ marginTop: HEIGHT * 0.005 }} source={goldsmalllogo} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.0555 }}>
                            <Pressable onPress={() => navigate()}>
                                <Image source={vipgoldtext} />
                            </Pressable>

                            <Image source={rightarrow} style={{ marginTop: HEIGHT * 0.005, marginLeft: HEIGHT * 0.01 }} />
                        </View>


                        <Text style={{ width: WIDTH * 0.48, fontSize: 12, color: '#FFFFFF' }}>Conduct More Leasing,Services And Construction To Get More</Text>
                    </View>

                </View>

            </View>


        </View>
    )
}

export default CardComponent