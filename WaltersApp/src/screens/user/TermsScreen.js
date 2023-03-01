import { View, Text, Pressable, Image, Platform } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { commonStyles } from '../../constants/styles'
import { leftarrow } from '../../assets/images'
import { colors } from '../../constants/colors'
import TextInputComponent from '../../components/user/TextInputComponent'
import ButtonComponent from '../../components/user/ButtonComponent'

const TermsScreen = (props, context) => {
    const { lang } = useSelector((state) => state.i18nState)
    const { navigation } = props
    console.log("HEIGHT<==>", WIDTH * 0.834)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: colors.yellow, height: HEIGHT * 0.14 }}>
                <View
                    style={[{
                        marginHorizontal: WIDTH * 0.05,
                        marginTop: Platform.OS == "android" ? HEIGHT * 0.07 : HEIGHT * 0.06,
                        justifyContent: 'space-between'
                    },
                    commonStyles.alignItems(lang),
                    commonStyles.flexDirection(lang)]}>
                    <Pressable
                        style={{ height: Platform.OS == "android" ? HEIGHT * 0.037 : HEIGHT * 0.031, justifyContent: 'center', }}
                        onPress={() => navigation.goBack()}>
                        <Image source={leftarrow}
                            style={{
                                transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }],
                                tintColor: colors.lightblack,

                            }} />
                    </Pressable>
                    <Text
                        style={{
                            color: colors.lightblack,
                            fontSize: 20,
                        }}>{context.t("terms_and_condition")}
                    </Text>
                    <View style={{ width: WIDTH * 0.07 }} />
                </View>

            </View>
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }}>
                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.lightblack_2, marginVertical: HEIGHT * 0.01, width: WIDTH * 0.88 }]}>1. {context.t("general_infromation")}</Text>
                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.lightblack_2, marginVertical: HEIGHT * 0.01, lineHeight: 20, width: WIDTH * 0.88 }]}>{context.t("general_infromation1")}</Text>
                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.lightblack_2, marginVertical: HEIGHT * 0.01, lineHeight: 20, width: WIDTH * 0.88 }]}>{context.t("general_infromation2")}</Text>
                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.lightblack_2, marginVertical: HEIGHT * 0.01, lineHeight: 20, width: WIDTH * 0.88 }]}>{context.t("general_infromation3")}
                </Text>
            </View>
            <View style={[commonStyles.flexDirection(lang), commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }]}>
                <ButtonComponent label={'Accept'} small={true} onPress={() => navigation.navigate("HomeScreen")} />
                <View style={{ width: WIDTH * 0.296, height: HEIGHT * 0.056, borderRadius: HEIGHT * 0.004, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: colors.tomato }}>Decline</Text>
                </View>
            </View>

        </View>
    )
}
TermsScreen.contextTypes = {
    t: PropTypes.func
}
export default TermsScreen