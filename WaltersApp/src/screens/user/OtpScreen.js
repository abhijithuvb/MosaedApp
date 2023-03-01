import { View, Text, Image, Pressable, Platform, TextInput } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { curvedyellow, leftarrow, pencilicon, waltersyellowtext } from '../../assets/images'
import { colors } from '../../constants/colors'
import { commonStyles } from '../../constants/styles'
import TextInputComponent from '../../components/user/TextInputComponent'
import ButtonComponent from '../../components/user/ButtonComponent'
import OtpInputComponent from '../../components/user/OtpInputComponent'


const OtpScreen = (props, context) => {
    const { lang } = useSelector((store) => store.i18nState)
    const { navigation } = props

    return (
        <View style={{ flex: 1 }}>
            <Image source={curvedyellow}
                style={{
                    position: 'absolute',
                    right: lang == 'en' ? -50 : -120,
                    bottom: HEIGHT * 0.42,
                    // transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }]
                }} />
            <View
                style={[{ marginHorizontal: WIDTH * 0.05, marginTop: Platform.OS == "android" ? HEIGHT * 0.07 : HEIGHT * 0.06, }, commonStyles.alignItems(lang)]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={leftarrow}
                        style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </Pressable>
            </View>
            <View style={{ height: HEIGHT * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={waltersyellowtext} style={{ tintColor: colors.white }} />
            </View>
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }}>
                <View style={{ height: HEIGHT * 0.52, width: WIDTH * 0.859, backgroundColor: colors.white, borderWidth: 0.5, alignSelf: 'center', borderRadius: HEIGHT * 0.009, position: 'absolute' }}>

                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.03, width: WIDTH * 0.6, alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', color: colors.lightblack }}>{context.t("we_send_otp")}</Text>
                    </View>

                    <View style={[commonStyles.flexDirection(lang), { justifyContent: 'center', alignItems: 'center' }]}><Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.darkbrown, marginHorizontal: WIDTH * 0.05 }]}>+974 <Text>55399634</Text></Text>
                        <Image source={pencilicon} style={{}} />
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: HEIGHT * 0.03, }}>
                        <Text>{context.t("enter_code")}</Text>
                    </View>
                    <View style={[commonStyles.flexDirection(lang), { alignSelf: 'center' }]}>
                        <OtpInputComponent />
                        <OtpInputComponent />
                        <OtpInputComponent />
                        <OtpInputComponent />
                    </View>
                    <View style={[/* commonStyles.flexDirection(lang),  */{ marginVertical: HEIGHT * 0.01, alignSelf: 'center', flexDirection: 'row' }]}>
                        <Text style={[{ color: colors.tomato, marginHorizontal: WIDTH * 0.01, fontSize: 16 }]}>00:57</Text><Text style={[{ color: colors.lightblack, fontSize: 16 }]}>Seconds..</Text>
                    </View>

                    <View style={[/* commonStyles.flexDirection(lang), */ { alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }]}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 15, marginHorizontal: WIDTH * 0.01, marginVertical: HEIGHT * 0.02, color: colors.lightblack }]}>Didn't receive the OTP?</Text>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 15, color: colors.darkbrown }]}>Resend</Text>
                    </View>


                    <View style={{ marginHorizontal: WIDTH * 0.05, width: WIDTH * 0.65, alignSelf: 'center', alignItems: 'center' }}>
                        <ButtonComponent onPress={() => navigation.navigate("TermsScreen")} label={'Submit'} />
                    </View>
                </View>

            </View>
        </View>
    )
}
OtpScreen.contextTypes = {
    t: PropTypes.func
}
export default OtpScreen