import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { decrement, increment } from './redux/actions/countAction'
import { useDispatch, useSelector } from 'react-redux'

const Reduxtest = () => {
    const dispatch = useDispatch()

    const count = useSelector((store) => store.countReducer.count)
    const handleIncrement = () => {

        dispatch(increment())
        console.log(count)
    }
    const handleDecrement = () => {

        dispatch(decrement())
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, padding: 50, alignItems: 'center' }}>

            <Text style={{ fontSize: 20, justifyContent: 'center', }}>Counter App</Text>

            <Text style={{ fontSize: 35, fontWeight: '900', margin: 15, }}>{count}</Text>

            <Pressable style={{ backgroundColor: 'green', padding: 15, margin: 15, borderRadius: 5 }} onPress={handleIncrement}><Text>Increment</Text></Pressable>
            <Pressable style={{ backgroundColor: 'red', padding: 15, margin: 15, borderRadius: 5 }} onPress={handleDecrement}><Text>Decrement</Text></Pressable>

        </View>
    )
}

export default Reduxtest