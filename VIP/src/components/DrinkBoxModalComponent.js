import { View, Text, Modal, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { closeiconX, cococolalogo, fantalogo, itaipavadrinklogo, minusicon, pepsibrownlogo, pepsilogo, plusicon, spritelogo } from '../assets'
import ScreenButtonComponent from './ScreenButtonComponent'

const DrinkBoxModalComponent = ({ visible, setVisible, buttonOnPress }) => {

    const DATA = [
        { id: 1, logo: spritelogo, rate: '10 QAR', text: 'SPRITE' }, { id: 2, logo: pepsilogo, rate: '10 QAR', text: 'PEPSI' }, { id: 3, logo: cococolalogo, rate: '10 QAR', text: 'COCA COLA' }, { id: 4, logo: pepsibrownlogo, rate: '10 QAR', text: 'PEPSI' }, { id: 5, logo: itaipavadrinklogo, rate: '10 QAR', text: 'ITAIPAVA' }, { id: 6, logo: fantalogo, rate: '10 QAR', text: 'FANTA' }, { id: 7, logo: spritelogo, rate: '10 QAR', text: 'SPRITE' }, { id: 8, logo: pepsilogo, rate: '10 QAR', text: 'PEPSI' }
    ]
    return (
        <View style={{
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',

            marginBottom: HEIGHT * 0.02

        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                /* onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }} */>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: HEIGHT * 0.12,
                    marginBottom: HEIGHT * 0.10

                }}>
                    <View style={{
                        margin: 20, width: '100%', height: HEIGHT * 0.9,
                        backgroundColor: '#0FC1A1',
                        borderRadius: 20,
                        alignItems: 'center',




                    }}>
                        <View style={{ height: HEIGHT * 0.825, width: '100%', backgroundColor: '#181D23', borderRadius: HEIGHT * 0.02 }}>


                            <View style={{ width: '100%', height: HEIGHT * 0.02, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'gray', width: WIDTH * 0.3, height: HEIGHT * 0.005, marginTop: HEIGHT * 0.01 }}></View>
                                <Pressable onPress={() => setVisible(!visible)} style={{ alignSelf: 'flex-end', marginTop: -HEIGHT * 0.0, marginRight: HEIGHT * 0.02 }}>
                                    <Image style={{ alignSelf: 'flex-end', marginTop: -HEIGHT * 0.01, marginRight: HEIGHT * 0.02 }} source={closeiconX} />
                                </Pressable>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: HEIGHT * 0.02 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>DRINKS BOX</Text>
                                <Text style={{ color: '#0FC1A1' }}>(3) items</Text>
                            </View>
                            <View>
                                <FlatList data={DATA} renderItem={({ item }) => <><View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: HEIGHT * 0.02, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={item.logo} />
                                        <View style={{ marginLeft: HEIGHT * 0.01 }}>
                                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.text}</Text>
                                            <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02 }}>{item.rate}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Pressable style={{ height: HEIGHT * 0.03, width: WIDTH * 0.06, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderColor: '#0FC1A1', borderWidth: 1, borderRadius: HEIGHT * 0.002 }}><Image source={minusicon} /></Pressable>
                                            <Text style={{ color: '#0FC1A1', marginLeft: HEIGHT * 0.02, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.004 }}>0</Text>
                                            <Pressable style={{ height: HEIGHT * 0.03, width: WIDTH * 0.06, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderColor: '#0FC1A1', borderWidth: 1, borderRadius: HEIGHT * 0.002 }}><Image source={plusicon} /></Pressable>
                                        </View>

                                    </View>
                                </View></>} />
                            </View>




                        </View>
                        <View style={{ width: '100%' }}>
                            <ScreenButtonComponent text={"DONE"} onPress={() => buttonOnPress()} />
                        </View>
                    </View>

                </View>
            </Modal>

        </View>
    )
}



export default DrinkBoxModalComponent