import { View, Text, StatusBar, SafeAreaView, Image, Pressable } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../../constants/colors'
import { carticon, drawericon, leftarrow } from '../../assets/images'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const MainContainer = (props) => {
    const { lang } = useSelector((store) => store.i18nState)
    const { rightlogo, leftlogo, secondlogo, title, description } = props
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}><View style={{ backgroundColor: colors.yellow, height: description ? HEIGHT * 0.17 : HEIGHT * 0.13 }}>


            <StatusBar />
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <View style={[, { marginTop: HEIGHT * 0.07 }]}>
                    <View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', alignItems: 'center' }]}>
                        <View style={[commonStyles.flexDirection(lang), { width: WIDTH * 0.18, justifyContent: 'space-between' }]}>
                            <Pressable onPress={() => navigation.toggleDrawer()}><Image source={leftlogo} style={{ tintColor: colors.lightblack }} /></Pressable>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={secondlogo} style={{ tintColor: colors.lightblack, transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                            </Pressable>

                        </View>
                        <Text style={[lang == "en" ? { marginRight: rightlogo ? WIDTH * 0.1 : WIDTH * 0.165, } : { marginLeft: rightlogo ? WIDTH * 0.1 : WIDTH * 0.165, }, { fontSize: 20, color: colors.lightblack }]}>{title}</Text>
                        {rightlogo ? <Image source={carticon} style={{ tintColor: colors.lightblack }} /> : <View />}
                    </View>
                    <View style={{ alignSelf: 'center', marginVertical: HEIGHT * 0.01 }}>
                        {description && <Text style={{ width: WIDTH * 0.55, textAlign: 'center', fontSize: 13, color: colors.lightblack }}>{description}</Text>}
                    </View>


                </View>
            </View>
        </View>
            <SafeAreaView style={{ flex: 1, }}>{props?.children}</SafeAreaView>
        </View>
    )
}

export default MainContainer