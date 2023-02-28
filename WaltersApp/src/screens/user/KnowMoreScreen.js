import { View, Text, Image, Platform, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import propTypes from 'prop-types'

import { curvedtea, leftarrow } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import TextInputComponent from '../../components/TextInputComponent';
import ButtonComponent from '../../components/user/ButtonComponent';


const KnowMoreScreen = (props, context) => {
    const { navigation } = props
    const { lang } = useSelector((store) => store.i18nState)
    console.log("HEIGHT==>", HEIGHT * 0.004);
    return (
        <View style={{ flex: 1 }}>
            <Image source={curvedtea}
                style={{
                    position: 'absolute',
                    right: lang == 'en' ? -50 : -120,
                    bottom: HEIGHT * 0.42,
                    transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }]
                }} />
            <View
                style={[{ marginHorizontal: WIDTH * 0.05, marginTop: Platform.OS == "android" ? HEIGHT * 0.04 : HEIGHT * 0.06, }, commonStyles.alignItems(lang)]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={leftarrow}
                        style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </Pressable>
            </View>
            <View style={[{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }, commonStyles.alignItems(lang)]}>
                <Text style={[{
                    fontSize: 32,
                    color: colors.yellow
                }, commonStyles.textAlign(lang)]}>{context.t("hello")},
                </Text>
                <Text style={[{
                    fontSize: 32,
                    color: colors.white,
                    width: WIDTH * 0.628,
                }, commonStyles.textAlign(lang)]}>{context.t("know_you_more")},</Text>
            </View>
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }}>
                <View style={{ height: HEIGHT * 0.583, width: WIDTH * 0.859, backgroundColor: colors.white, borderWidth: 0.5, alignSelf: 'center', borderRadius: HEIGHT * 0.009, position: 'absolute' }}>
                    <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.01 }}>
                        <TextInputComponent label={'Enter Name'} />
                        <TextInputComponent label={'Gender'} />
                        <TextInputComponent label={'Mobile'} />
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, width: WIDTH * 0.6417, alignSelf: 'center', }}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack }]}>{context.t("add_profile_picture")}</Text>
                    </View>
                    <View style={{ height: HEIGHT * 0.0759, width: HEIGHT * 0.0759, backgroundColor: colors.lightgray_2, borderRadius: WIDTH, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: colors.darkgray, fontSize: 25 }}>W</Text>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, width: WIDTH * 0.65, alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={[{
                            fontSize: 14,
                            color: colors.lightblack
                        }, commonStyles.textAlign(lang)]}>{context.t("clicking_to_agree")}
                        </Text>
                        <Text style={[{
                            fontSize: 14,
                            marginVertical: HEIGHT * 0.01,
                            color: colors.lightorange
                        }, commonStyles.textAlign(lang)]}>{context.t("our_terms_of_service")}
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, width: WIDTH * 0.65, alignSelf: 'center', alignItems: 'center' }}>
                        <ButtonComponent label={'Submit'} />
                    </View>
                </View>

            </View>
        </View>
    )
}
KnowMoreScreen.contextTypes = {
    t: propTypes.func
}
export default KnowMoreScreen