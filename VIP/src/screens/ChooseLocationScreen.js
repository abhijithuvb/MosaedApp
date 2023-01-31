import { View, Text, SafeAreaView, Image, TextInput, FlatList } from 'react-native'
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
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: HEIGHT * 0.83, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.02 }}><SearchComponent setState={(text) => setInput(text)} />
                        </View>
                        <View>
                            <View><Text style={{ color: 'white', fontSize: HEIGHT * 0.023, marginTop: HEIGHT * 0.02 }}>CHOOSE LOCATION</Text>
                            </View>
                            <View>
                                <FlatList style={{ height: HEIGHT * 0.68 }} data={filtered} renderItem={({ item, index }) => <LocationListComponent location={item.location} index={index} state={locationDetails} onPressFunction={(location, index) => setLocationDetails({ ...locationDetails, place: location, index: index })} />} />

                            </View>
                        </View>

                    </View>
                    <ScreenButtonComponent text={'DONE'} onPress={() => navigation.navigate("WashingBookingScreen", { serviceStatus })} />

                </View>
            </SafeAreaView>
        </View>
    )
}

export default ChooseLocationScreen