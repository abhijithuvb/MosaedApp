import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'

import { carticon, drawericon, homemainimage, leftarrow, waltersyellowtext } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { colors } from '../../constants/colors'

const HomeScreen = (props) => {
    const { navigation } = props
    const { lang } = useSelector((state) => state.i18nState)
    console.log("HEI==>", HEIGHT * 0.2807);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={homemainimage} style={{ height: HEIGHT * 0.2807 }}>
                <View style={[commonStyles.flexDirection(lang), { marginTop: HEIGHT * 0.07, marginHorizontal: WIDTH * 0.05, justifyContent: 'space-between' }]}>
                    <Pressable
                        onPress={() => navigation.toggleDrawer()}
                        style={{ height: HEIGHT * 0.022, justifyContent: 'center' }}>
                        <Image source={drawericon} />
                    </Pressable>

                    <View style={{/*  flexDirection: 'row', justifyContent: 'space-between', width: WIDTH * 0.8, */ }}>
                        {/* <Image source={leftarrow} style={{ marginHorizontal: WIDTH * 0.08 }} /> */}
                        <Image source={carticon} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT * 0.18, }}>
                    <Image source={waltersyellowtext} style={{ tintColor: colors.white }} />
                </View>
            </ImageBackground >
        </View >
    )
}

export default HomeScreen