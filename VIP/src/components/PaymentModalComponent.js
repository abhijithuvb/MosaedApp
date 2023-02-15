import { View, Text, Pressable, Modal, StyleSheet, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { paymentsuccesslogo } from '../assets'
import ButtonComponent from './ButtonComponent'


const PaymentModalComponent = ({ visible, setVisible }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

            marginTop: -HEIGHT * 0.03,
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -HEIGHT * 0.03, backgroundColor: '#00000030',

                }}>
                    <View style={{
                        backgroundColor: '#181D23',
                        borderRadius: 20,
                        padding: HEIGHT * 0.02,
                        height: HEIGHT * 0.37,
                        width: WIDTH * 0.8,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={paymentsuccesslogo} />
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>RENTAL DONE SUCCESSFULLY</Text>
                            <Text style={{ color: 'white', textAlign: 'center', width: WIDTH * 0.6, marginTop: HEIGHT * 0.02 }}>
                                Thanks you. The lease has been successful. You can follow the order from the My Rentals page
                            </Text>
                            <View style={{ marginTop: HEIGHT * 0.03 }}>
                                <ButtonComponent onPressFunction={() => setVisible()} Width={true} label={'MY RENTALS'} />
                            </View>
                        </View>


                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -HEIGHT * 0.03,
    },
    modalView: {
        // margin: 20,
        backgroundColor: '#181D23',
        borderRadius: 20,
        padding: 35,
        height: HEIGHT * 0.37,
        width: WIDTH * 0.8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default PaymentModalComponent