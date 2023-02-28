import { View, Text, Image, ImageBackground, Pressable, TextInput, Platform } from 'react-native'
import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import { setLanguage } from 'redux-i18n'
import { useDispatch, useSelector } from 'react-redux'

import { rightarrow, userloginbgimage, waltersyellowtext } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { showHi } from '../../../Redux/actions/commonActions'
import { commonStyles } from '../../constants/styles'


const UserLoginScreen = (props, context) => {
    const { navigation } = props
    const { lang } = useSelector((store) => store.i18nState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showHi('hello'))
    }, [])
    const setLanguageFunction = (lang) => {
        dispatch(setLanguage(lang || 'en'))
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Image style={{ flex: 1, transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }], width: WIDTH, position: 'absolute' }} source={userloginbgimage} />
            <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.147 }}>
                <Image source={waltersyellowtext} style={{}} />
            </View>
            <Pressable onPress={() => setLanguageFunction(lang === 'en' ? 'ar' : 'en')} style={{ height: HEIGHT * 0.04, width: WIDTH * 0.198, borderRadius: WIDTH, borderWidth: 1, borderColor: colors.lightgray, alignSelf: 'center', marginTop: HEIGHT * 0.15, backgroundColor: colors.white, justifyContent: lang == 'en' ? 'center' : 'flex-start' }}>
                <Text style={{ fontSize: 19, color: colors.darkbrown, textAlign: 'center', }}>{context.t("language")}</Text>
            </Pressable>
            <View style={[{ marginTop: HEIGHT * 0.04 }]}>
                <View style={[{ padding: HEIGHT * 0.02 },]}>
                    <Text style={[{ color: colors.darkbrown, fontSize: 34, }, commonStyles.alignSelf(lang), commonStyles.textAlign(lang)]}>
                        {context.t("welcome")}
                    </Text>
                    <Text style={[commonStyles.alignSelf(lang), commonStyles.textAlign(lang), { width: WIDTH * 0.575, marginTop: HEIGHT * 0.01, color: colors.lightblack, fontSize: 17 }]}>{context.t("enter_your_mobile_number")}</Text>
                </View>
            </View>
            <View style={[{ padding: HEIGHT * 0.02, marginTop: HEIGHT * 0.05 }, commonStyles.alignItems(lang)]}>
                <Text style={[{ color: colors.lightblack, fontSize: 15 }, commonStyles.textAlign(lang)]}>{context.t("mobile_number")}</Text>
                <View style={[commonStyles.flexDirection(lang)]}>
                    <View style={[commonStyles.flexDirection(lang), { width: WIDTH * 0.6417, borderBottomWidth: 1.2, borderBottomColor: colors.yellow, marginVertical: HEIGHT * 0.01, paddingVertical: HEIGHT * 0.01 }]}>
                        <View style={{}}>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 23, color: colors.darkbrown }]}>+974</Text>
                        </View>
                        <View style={[Platform.OS == "android" ? { paddingVertical: lang == 'en' ? HEIGHT * 0.008 : HEIGHT * 0.01, } : {
                            paddingVertical: lang == 'en' ? HEIGHT *
                                0.002 : HEIGHT * 0.001,
                        }, { width: WIDTH * 0.2891, height: HEIGHT * 0.0304, marginLeft: WIDTH * 0.012 }]}>
                            <TextInput style={[{ height: HEIGHT * 0.0304, color: colors.lightblack, padding: 0, fontSize: 23, }, commonStyles.textAlign(lang)]} />
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate('KnowMoreScreen')} style={{
                        height: HEIGHT * 0.07774,
                        width: HEIGHT * 0.07774,
                        backgroundColor: colors.yellow, borderRadius: WIDTH,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: `${colors.yellow}60`, shadowOpacity: 0.9,
                        elevation: 2,
                        shadowRadius: 20,
                        shadowOffset: { height: 10 }, marginHorizontal: HEIGHT * 0.03
                    }}>
                        <Image source={rightarrow}
                            style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                    </Pressable>
                </View>
            </View>


        </View >
    )
}

UserLoginScreen.contextTypes = {
    t: propTypes.func
}

export default UserLoginScreen