import { View, Text, Modal, Pressable, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { closeiconX } from '../assets'

const DrinkBoxModalComponent = ({ visible, setVisible }) => {
    return (
        <View style={{
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',



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
                }}>
                    <View style={{
                        margin: 20, width: '100%', height: HEIGHT,
                        backgroundColor: '#181D23',
                        borderRadius: 20,
                        alignItems: 'center',

                    }}>
                        <View style={{ width: '100%', height: HEIGHT * 0.02, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'gray', width: WIDTH * 0.3, height: HEIGHT * 0.005, marginTop: HEIGHT * 0.01 }}></View>
                            <Pressable onPress={() => setVisible(!visible)} style={{ alignSelf: 'flex-end', marginTop: -HEIGHT * 0.0, marginRight: HEIGHT * 0.02 }}>
                                <Image style={{ alignSelf: 'flex-end', marginTop: -HEIGHT * 0.01, marginRight: HEIGHT * 0.02 }} source={closeiconX} />
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}



export default DrinkBoxModalComponent