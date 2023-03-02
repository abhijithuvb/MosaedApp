import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { drawerdp, rightsmallarrow } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { commonStyles } from '../../constants/styles'
import { useDispatch, useSelector } from 'react-redux'
import SwipeSwitch from './SwipeSwitch'
import { buttons } from '../../constants/Arrays'
import { setLanguage } from 'redux-i18n'
import propTypes from 'prop-types'


const DrawerContent = (props, context) => {
    const { lang } = useSelector((state) => state.i18nState)
    const { navigation } = props


    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }}>
                <View style={[commonStyles.alignItems(lang), { marginTop: HEIGHT * 0.07, }]}>
                    <Image source={drawerdp} />
                    <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack, marginVertical: HEIGHT * 0.001 }]}>AlMutasim</Text>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 16, marginVertical: HEIGHT * 0.001 }]}>{context.t("doha")}</Text>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.gray, fontSize: 12, marginVertical: HEIGHT * 0.001 }]}>Joined Jan 2018</Text>
                </View>
                <View style={[commonStyles.alignItems(lang), { marginTop: HEIGHT * 0.03 }]}>
                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.darkbrown }]}>{context.t("menu")}</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate("EditProfileScreen")} style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, borderTopColor: colors.gray, borderTopWidth: 0.2 }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>{context.t("edit_profile")}</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("OurLocationScreen")} style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>{context.t("our_location")}</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("ContactusScreen")} style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>{context.t("contact_us")}</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </Pressable>
                <View style={{ borderBottomColor: colors.gray, borderBottomWidth: 0.2, }}>
                    <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, paddingTop: HEIGHT * 0.02, }]}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown, }]}>{context.t("change_language")}</Text>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, }}>
                        <SwipeSwitch buttons={buttons} />
                    </View>
                </View>
                <View style={[commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.tomato }]}>{context.t("log_out")}</Text>

                </View>

            </View>

        </View>
    )
}
DrawerContent.contextTypes = {
    t: propTypes.func
}
export default DrawerContent