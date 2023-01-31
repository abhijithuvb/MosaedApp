import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import PaymentModalComponent from '../components/PaymentModalComponent'
import { set } from 'react-native-reanimated'
import { useRoute } from '@react-navigation/native'

const PaymentGatewayScreen = ({ navigation }) => {

    const route = useRoute()
    const { path } = route.params
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setVisible(!visible)
        }, 1000)

    }, [])

    return (

        <View>

            <PaymentModalComponent visible={visible} setVisible={() => {
                navigation.navigate(path)
                setVisible(!visible)
            }} />
            <Text>PaymentGatewayScreen</Text>
        </View>
    )
}

export default PaymentGatewayScreen