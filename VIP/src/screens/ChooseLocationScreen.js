import { View, Text, SafeAreaView, Image, TextInput, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, searchlogo, searchlogogreen } from '../assets'
import SearchComponent from '../components/SearchComponent'
import LocationListComponent from '../components/LocationListComponent'
import { locations } from '../Arrays/Arrays'
import ScreenButtonComponent from '../components/ScreenButtonComponent'
import { useRoute } from '@react-navigation/native'

const ChooseLocationScreen = ({ navigation }) => {

    const [input, setInput] = useState("")
    const Route = useRoute()
    const { serviceStatus } = Route.params

    const [locationDetails, setLocationDetails] = useState({
        index: '', place: ''
    })
    // const handleSubmit = (text, index) => {
    //     setLocationDetails({ ...locationDetails, place: text, index: index })
    // }
    const filtered = locations.filter((item) => input === "" ? item : item.location.includes(input))
    console.log("location==>>", filtered);
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <View style={[{ flex: 1, }, Platform.OS === "android" ? { marginTop: HEIGHT * 0.03, } : { marginTop: HEIGHT * 0.06 }]}>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: HEIGHT * 0.85, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.02 }}><SearchComponent setState={(text) => setInput(text)} />
                        </View>
                        <View style={{ width: WIDTH * 0.9, alignSelf: 'center' }}>
                            <View><Text style={{ color: 'white', fontSize: HEIGHT * 0.023, marginTop: HEIGHT * 0.02, marginBottom: HEIGHT * 0.02, marginLeft: HEIGHT * 0.01 }}>CHOOSE LOCATION</Text>
                            </View>
                            <View>
                                <FlatList style={{ height: HEIGHT * 0.66 }} data={filtered} renderItem={({ item, index }) => <LocationListComponent location={item.location} index={index} state={locationDetails} onPressFunction={(location, index) => setLocationDetails({ ...locationDetails, place: location, index: index })} />} />
                            </View>
                        </View>

                    </View>
                    <ScreenButtonComponent text={'DONE'} onPress={() => navigation.navigate("WashingBookingScreen", { serviceStatus })} />

                </View>
            </View>
        </View>
    )
}

export default ChooseLocationScreen