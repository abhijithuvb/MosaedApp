import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import { commonStyles } from '../../constants/styles'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'


const TextInputComponent = (props) => {
    const { lang } = useSelector((store) => store.i18nState)
    const { label } = props
    return (
        <View style={[{ width: WIDTH * 0.6417, borderBottomWidth: 1.2, borderBottomColor: colors.yellow, Top: HEIGHT * 0.01, /* paddingVertical: HEIGHT * 0.01 */ }]}>
            <View style={[commonStyles.alignItems(lang), { marginTop: HEIGHT * 0.007 }]}>
                <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 15 }]}>{label}</Text>
            </View>
            <View style={[commonStyles.flexDirection(lang)]}>
                {/* <View style={{}}>
                    <Text style={[commonStyles.textAlign(lang), { fontSize: 23, color: colors.darkbrown }]}>+974</Text>
                </View> */}
                <View style={[Platform.OS == "android" ? { paddingVertical: lang == 'en' ? HEIGHT * 0.008 : HEIGHT * 0.01, } : {
                    paddingVertical: lang == 'en' ? HEIGHT *
                        0.002 : HEIGHT * 0.001,
                }, { width: WIDTH * 0.2891, height: HEIGHT * 0.0304, marginLeft: WIDTH * 0.012, marginBottom: HEIGHT * 0.009 }]}>
                    <TextInput style={[{ height: HEIGHT * 0.0304, color: colors.lightblack, padding: 0, fontSize: 16, }, commonStyles.textAlign(lang)]} />
                </View>
            </View>

        </View>
    )
}

export default TextInputComponent