import { View, Text } from 'react-native'
import React from 'react'
import TextInputComponent from '../../components/user/TextInputComponent'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import MainContainer from '../../components/user/MainContainer'
import { drawericon, leftarrow } from '../../assets/images'
import ButtonComponent from '../../components/user/ButtonComponent'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { colors } from '../../constants/colors'

const ContactusScreen = (props) => {
    const { lang } = useSelector((store) => store.i18nState)
    const { navigation } = props
    console.log("ED=>", WIDTH * 0.772);
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon} secondlogo={leftarrow} title={'Contat Us'}>
                <View style={{ flex: 1 }}>
                    <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.03 }]}>
                        <Text style={[commonStyles.textAlign(lang), { width: WIDTH * 0.772, color: colors.darkbrown, fontSize: 15 }]}>
                            If you would like to contact us simply fill out the form below.
                        </Text>
                    </View>

                    <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                        <TextInputComponent fullWidth label={'Message type'} />
                        <TextInputComponent fullWidth label={'Subject'} />
                        <TextInputComponent fullHeight fullWidth label={'Message'} />
                    </View>
                    <View style={[commonStyles.alignItems(lang), { marginVertical: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.05 }]}>
                        <ButtonComponent label={'Submit'} small onPress={() => navigation.navigate("HomeScreen")} />
                    </View>

                </View>


            </MainContainer>
        </View>
    )
}

export default ContactusScreen