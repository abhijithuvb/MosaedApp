import { View, Text, Image } from 'react-native'
import React from 'react'
import propTypes from 'prop-types'
import MainContainer from '../../components/user/MainContainer'
import { drawerdp, drawericon, leftarrow, pencilicon } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import TextInputComponent from '../../components/user/TextInputComponent'
import ButtonComponent from '../../components/user/ButtonComponent'

const EditProfileScreen = (props, context) => {
    const { lang } = useSelector((store) => store.i18nState)
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon} secondlogo={leftarrow} title={'Edit Profile'}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginVertical: HEIGHT * 0.02, alignItems: 'center' }}>
                        <Image source={drawerdp} />
                        <View style={[, { marginVertical: HEIGHT * 0.01, backgroundColor: colors.yellow, height: HEIGHT * 0.04, width: WIDTH * 0.18, borderRadius: HEIGHT * 0.007 }]}>
                            <View style={[commonStyles.flexDirection(lang), { alignItems: 'center', justifyContent: 'space-between', marginHorizontal: WIDTH * 0.03, height: HEIGHT * 0.04 }]}>
                                <Image source={pencilicon} />
                                <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack }]}>Edit</Text>
                            </View>

                        </View>
                        <View style={{ height: HEIGHT * 0.08, }}>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack, }]}>AlMutasim</Text>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.gray }]}>Joined Jan 2018</Text>
                        </View>


                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                        <TextInputComponent fullWidth label={'Enter Name'} />
                        <TextInputComponent fullWidth label={'Gender'} />
                        <TextInputComponent fullWidth label={'Mobile'} />
                    </View>
                    <View style={[commonStyles.alignItems(lang), { marginVertical: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.05 }]}>
                        <ButtonComponent label={'Update'} small />
                    </View>

                </View>


            </MainContainer>
        </View>
    )
}
EditProfileScreen.contextTypes = {
    t: propTypes.func
}
export default EditProfileScreen