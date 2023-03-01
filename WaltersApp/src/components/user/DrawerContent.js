import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { drawerdp, rightsmallarrow } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { commonStyles } from '../../constants/styles'
import { useDispatch, useSelector } from 'react-redux'
import SwipeSwitch from './SwipeSwitch'
import { buttons } from '../../constants/Arrays'
import { setLanguage } from 'redux-i18n'


const DrawerContent = () => {
    const { lang } = useSelector((state) => state.i18nState)
    const dispatch = useDispatch()


    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }}>
                <View style={[commonStyles.alignItems(lang), { marginTop: HEIGHT * 0.07, }]}>
                    <Image source={drawerdp} />
                    <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack, marginVertical: HEIGHT * 0.001 }]}>AlMutasim</Text>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 16, marginVertical: HEIGHT * 0.001 }]}>Doha</Text>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.gray, fontSize: 12, marginVertical: HEIGHT * 0.001 }]}>Joined Jan 2018</Text>
                </View>
                <View style={[commonStyles.alignItems(lang), { marginTop: HEIGHT * 0.03 }]}>
                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.darkbrown }]}>MENU</Text>
                </View>
            </View>
            <View>
                <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, borderTopColor: colors.gray, borderTopWidth: 0.2 }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>Edit Profile</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </View>
                <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>Our Location</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </View>
                <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, alignItems: 'center', justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, borderBottomColor: colors.gray, borderBottomWidth: 0.2, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>Contact Us</Text>
                    <Image source={rightsmallarrow} style={{ transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                </View>
                <View style={{ borderBottomColor: colors.gray, borderBottomWidth: 0.2, }}>
                    <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, paddingTop: HEIGHT * 0.02, }]}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown, }]}>Change Language</Text>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, }}>
                        <SwipeSwitch buttons={buttons} />
                    </View>
                </View>
                <View style={[commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, }]}>
                    <Text style={[commonStyles.textAlign(lang), { color: colors.tomato }]}>Log Out</Text>

                </View>

            </View>

        </View>
    )
}

export default DrawerContent