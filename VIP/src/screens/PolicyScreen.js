import { View, Text, Platform } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { ScrollView } from 'react-native-gesture-handler'

const PolicyScreen = ({ navigation }) => {
    console.log('====================================');
    console.log(WIDTH * 0.852);
    console.log('====================================');
    return (
        <View style={{ flex: 1, backgroundColor: '#181D23' }}>
            <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.03 : HEIGHT * 0.08 }}>
                <HeaderComponent title={'PRIVACY POLICY'} leftlogo={backarrow} leftOnPress={() => navigation.goBack()} />
            </View>
            <View style={{ marginTop: HEIGHT * 0.05, alignSelf: 'center', height: HEIGHT * 0.8 }}>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{ width: WIDTH * 0.852 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>LOREM IPSUM DOLOR SIT AMET</Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        </Text>
                    </View>
                    <View style={{ width: WIDTH * 0.852, marginTop: HEIGHT * 0.02 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}> DOLORE MAGNA ALIQUYAM ERAT,</Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        </Text>
                    </View>
                    <View style={{ width: WIDTH * 0.852, marginTop: HEIGHT * 0.02 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>SED DIAM VOLUPTUA</Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
                            {'\n\n'}

                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        </Text>
                    </View>
                </ScrollView>
            </View>



        </View>
    )
}

export default PolicyScreen