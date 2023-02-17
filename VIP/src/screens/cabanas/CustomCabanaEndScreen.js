import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { backarrow, locationarrowlogo, locationmediumlogo, maplogo } from '../../assets'
import { HEIGHT, WIDTH } from '../../../Constants/Constants'
import TextInputComponent from '../../components/TextInputComponent'
import HeaderComponent from '../../components/HeaderComponent'
import NormalCircleProgressComponent from '../../components/Cabanas/NormalCircleProgressComponent'
import ScreenButtonComponent from '../../components/ScreenButtonComponent'

const CustomCabanaEndScreen = ({ navigation }) => {
    return (

        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.08, }}>
                    <HeaderComponent leftlogo={backarrow} leftOnPress={() =>/*  scrollIndex === 0 ? */ navigation.navigate("HomeScreen")/*  : minusScroolFunction(scrollIndex) */} title={'CUSTOM'} />
                </View>
                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.82 : HEIGHT * 0.79, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.015, borderBottomRightRadius: HEIGHT * 0.015 }}>
                        <View style={{ height: HEIGHT * 0.13, backgroundColor: 'black', paddingTop: HEIGHT * 0.03 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ marginLeft: HEIGHT * 0.03 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>NAME OF CUSTOMIZATION</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02, fontWeight: '500', marginTop: HEIGHT * 0.01 }}>Step 13/13</Text>
                                </View>
                                <View style={{ marginRight: HEIGHT * 0.02 }}>
                                    <NormalCircleProgressComponent />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: HEIGHT * 0.6, backgroundColor: '#181D23' }}>
                            <View style={{ width: WIDTH, }}>
                                <View style={{ margin: HEIGHT * 0.02 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.023, marginTop: HEIGHT * 0.01 }}>NAME OF THE CUSTOMIZATION</Text>
                                    <View style={{ marginTop: HEIGHT * 0.01 }}>
                                        <TextInputComponent label={'Add Name'} />
                                    </View>
                                    <View style={{ marginTop: HEIGHT * 0.01 }}>
                                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.019, marginTop: HEIGHT * 0.01 }}>
                                            ENTER LOCATION
                                        </Text>
                                        <Text style={{ color: 'white', marginTop: HEIGHT * 0.01 }}>
                                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                        <View style={{ height: HEIGHT * 0.33, width: WIDTH * 0.88, backgroundColor: 'black', marginTop: HEIGHT * 0.01, justifyContent: 'center', borderRadius: HEIGHT * 0.01, }}>
                                            <View style={{ marginLeft: HEIGHT * 0.01, }}>
                                                <Image source={maplogo} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                                    <View style={{ height: HEIGHT * 0.04, backgroundColor: '#0E1114', width: WIDTH * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.004, marginTop: HEIGHT * 0.01 }}>
                                                        <Image source={locationmediumlogo} />
                                                    </View>
                                                    <Text style={{ color: '#636B74' }}>Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
                                                    <View style={{
                                                        height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT
                                                            * 0.02, marginTop: HEIGHT * 0.01
                                                    }}>
                                                        <Image source={locationarrowlogo} />
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.1 : HEIGHT * 0.06 }}>
                            <ScreenButtonComponent text={"SUBMIT"} onPress={() => navigation.navigate("HomeScreen")} />
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default CustomCabanaEndScreen
  // <View style={{ flex: 1, backgroundColor: '#181D23' }}>
        //     <View style={{ flex: 1, backgroundColor: '#181D23' }}>

        //         <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.08, }}>
        //             <HeaderComponent leftlogo={backarrow} leftOnPress={() => navigation.goBack()} title={'CUSTOM'} />
        //         </View>
        //         <View>
        //             <View style={{ height: HEIGHT * 0.13, backgroundColor: 'black', paddingTop: HEIGHT * 0.03 }}>
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        //                     <View style={{ marginLeft: HEIGHT * 0.03 }}>
        //                         <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>NAME OF CUSTOMIZATION</Text>
        //                         <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02, fontWeight: '500', marginTop: HEIGHT * 0.01 }}>Step 13/13</Text>
        //                     </View>
        //                     {/* <Image source={screenData.progresslogo} style={{ marginRight: HEIGHT * 0.03 }} /> */}
        //                     <View style={{ marginRight: HEIGHT * 0.02 }}>
        //                         <NormalCircleProgressComponent />
        //                     </View>
        //                 </View>
        //             </View>
        //         </View>
        //         <View style={{ height: HEIGHT * 0.7, backgroundColor: '#181D23' }}>
        //             <View style={{ width: WIDTH, }}>
        //                 <View style={{ margin: HEIGHT * 0.02 }}>
        //                     <Text style={{ color: 'white', fontSize: HEIGHT * 0.023, marginTop: HEIGHT * 0.01 }}>NAME OF THE CUSTOMIZATION</Text>
        //                     <View style={{ marginTop: HEIGHT * 0.01 }}>
        //                         <TextInputComponent label={'Add Name'} />
        //                     </View>
        //                     <View style={{ marginTop: HEIGHT * 0.01 }}>
        //                         <Text style={{ color: 'white', fontSize: HEIGHT * 0.019, marginTop: HEIGHT * 0.01 }}>
        //                             ENTER LOCATION
        //                         </Text>
        //                         <Text style={{ color: 'white', marginTop: HEIGHT * 0.01 }}>
        //                             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        //                         </Text>
        //                         <View style={{ height: HEIGHT * 0.33, width: WIDTH * 0.88, backgroundColor: 'black', marginTop: HEIGHT * 0.01, justifyContent: 'center', borderRadius: HEIGHT * 0.01, }}>
        //                             <View style={{ marginLeft: HEIGHT * 0.01, }}>
        //                                 <Image source={maplogo} />
        //                                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
        //                                     <View style={{ height: HEIGHT * 0.04, backgroundColor: '#0E1114', width: WIDTH * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.004, marginTop: HEIGHT * 0.01 }}>
        //                                         <Image source={locationmediumlogo} />
        //                                     </View>
        //                                     <Text style={{ color: '#636B74' }}>Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
        //                                     <View style={{
        //                                         height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT
        //                                             * 0.02, marginTop: HEIGHT * 0.01
        //                                     }}>
        //                                         <Image source={locationarrowlogo} />
        //                                     </View>
        //                                 </View>

        //                             </View>
        //                         </View>
        //                     </View>
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        // </View>