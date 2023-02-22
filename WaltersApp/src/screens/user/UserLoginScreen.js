import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { userloginbgimage, waltersyellowtext } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const UserLoginScreen = () => {
    console.log('====================================');
    console.log(WIDTH * 0.575);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ImageBackground style={{ flex: 1, /* transform: [{ rotateY: '180deg' }] */ }} source={userloginbgimage}>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.145 }}>
                    <Image source={waltersyellowtext} style={{}} />
                </View>
                <View style={{ height: HEIGHT * 0.038, width: WIDTH * 0.198, borderRadius: WIDTH, borderWidth: 1, borderColor: colors.lightgray, alignSelf: 'center', marginTop: HEIGHT * 0.15, backgroundColor: colors.white }}>

                </View>
                <View>
                    <View style={{ padding: HEIGHT * 0.02 }}>
                        <Text style={{ color: colors.darkbrown, fontSize: 34, textAlign: 'right', alignSelf: 'flex-start', }}>
                            WelCome
                        </Text>
                        <Text style={{ alignSelf: 'flex-start', width: WIDTH * 0.575, textAlign: 'left', marginTop: HEIGHT * 0.01, color: colors.lightblack, fontSize: 15 }}>Enter your mobile number
                            to register Walter's Estate Coffee Roasters</Text>
                    </View>
                </View>
                <View style={{ padding: HEIGHT * 0.02, marginTop: HEIGHT * 0.1 }}>
                    <Text style={{ color: colors.lightblack, fontSize: 15 }}>Mobile Number</Text>
                </View>
            </ImageBackground>

        </View>
    )
}

export default UserLoginScreen