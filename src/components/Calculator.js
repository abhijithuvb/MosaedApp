import { View, Text, TextInput, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Calculator = () => {
    const Height = Dimensions.get('window').height;
    const Width = Dimensions.get('window').width
    console.log()
    const [value, setValue] = useState([])
    const [input, setInput] = useState(true)
    const [storage, setStorage] = useState([])
    const DATA = [
        { id: 1, value: '1' },
        { id: 2, value: '2' },
        { id: 3, value: '3' },
    ]

    const DATA1 = [
        { id: 4, value: '4' },
        { id: 5, value: '5' },
        { id: 6, value: '6' },
    ]

    const DATA2 = [
        { id: 7, value: '7' },
        { id: 8, value: '8' },
        { id: 9, value: '9' }
    ]
    const get = async () => {
        const val = await AsyncStorage.getItem("result")
        console.log(typeof JSON.parse(val));
        storage.push(JSON.parse(val))
        setStorage([...storage])
        console.log(typeof storage)

    }
    const handle = (item) => {
        value.push(item)
        setValue([...value])
    }
    const evaluation = () => {
        const val = eval(value.join(''));
        console.log(val)
        setInput(false)

        AsyncStorage.setItem("result", JSON.stringify({ value: val, expression: value.join('') }))


    }
    const empty = () => {
        value.splice(0, value.length);
        setValue([...value])
        setInput(true)
        get()
    }
    const Delete = () => {
        value.pop()
        setValue([...value])
        setInput(true)

    }
    console.log(value)
    return (
        <View style={{ height: Height * 50, backgroundColor: 'black' }}>
            <View style={{ margin: 10, height: 700, borderWidth: 2, borderRadius: 10, }}>
                {/* <Text style={{ color: 'white' }}>{storage.map((item) => <Text style={{ color: 'white' }}>{item.value}{item.expression}</Text>)}</Text> */}
                <ScrollView>
                    <FlatList style={{ position: 'relative', left: Height * 0.30, height: Height * 0.13 }} data={storage} renderItem={({ item }) => <View><Text style={{ color: 'white' }}>{item.expression}</Text><Text style={{ color: 'white', fontSize: 20 }}>{item.value}</Text></View>} />
                </ScrollView>
                <View style={{ margin: 10, height: Height * 0.07, width: Width * 0.30, borderRadius: 10, position: 'absolute', right: Height * 0.07, top: Height * 0.10 }}>
                    <TextInput value={value.join('')} style={{ height: Height * 0.07, borderRadius: 10, color: "white", position: 'absolute', right: Height * 0.02 }} />
                    <Text style={{ fontSize: Height * 0.04, position: 'absolute', right: Height * 0.02, top: Height * 0.07, color: 'white' }}>{input ? '' : eval(value.join(''))}</Text>
                </View>
                <View style={{ padding: 40 }}>
                    <View style={{ height: 70, display: 'flex', flexDirection: 'row' }}>
                        <Pressable onPress={() => empty()} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'white' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>AC</Text></Pressable>
                        <Pressable onPress={() => Delete()} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'white' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>D</Text></Pressable>
                        <Pressable onPress={() => handle('%')} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'white' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>%</Text></Pressable>
                        <Pressable onPress={() => handle('/')} style={{ height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: '#fc9003' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>/</Text></Pressable>
                    </View>
                    <View style={{ height: 70, display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                        <FlatList data={DATA2} horizontal={true} renderItem={({ item }) => <Pressable onPress={() => handle(item.value)} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'gray' }}><Text style={{ textAlign: 'center', marginTop: 15, color: 'white' }}>{item.id}</Text></Pressable>} />
                        <Pressable onPress={() => handle('*')} style={{ height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: '#fc9003' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>x</Text></Pressable>
                    </View>
                    <View style={{ height: 70, display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                        <FlatList data={DATA1} horizontal={true} renderItem={({ item }) => <Pressable onPress={() => handle(item.value)} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'gray' }}><Text style={{ textAlign: 'center', marginTop: 15, color: 'white' }}>{item.id}</Text></Pressable>} />
                        <Pressable onPress={() => handle('-')} style={{ height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: '#fc9003' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>-</Text></Pressable>
                    </View>
                    <View style={{ height: 70, display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                        <FlatList data={DATA} horizontal={true} renderItem={({ item }) => <Pressable onPress={() => handle(item.value)} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'gray' }}><Text style={{ textAlign: 'center', marginTop: 15, color: 'white' }}>{item.id}</Text></Pressable>} />
                        <Pressable onPress={() => handle('+')} style={{ height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: '#fc9003' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>+</Text></Pressable>
                    </View>
                    <View style={{ height: 70, display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                        <Pressable onPress={() => handle('0')} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.31, borderRadius: 30, margin: 10, backgroundColor: 'gray' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>0</Text></Pressable>

                        <Pressable onPress={() => handle('.')} style={{ borderWidth: 2, height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: 'gray' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>.</Text></Pressable>
                        <Pressable onPress={() => evaluation()} style={{ height: Height * 0.06, width: Width * 0.13, borderRadius: 30, margin: 10, backgroundColor: '#fc9003' }}><Text style={{ textAlign: 'center', marginTop: 15 }}>=</Text></Pressable>
                    </View>
                </View>
            </View >
        </View >
    )
}

export default Calculator