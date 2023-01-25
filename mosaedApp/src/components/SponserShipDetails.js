import { View, Text, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderHTML from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import { backlogo, confirm, } from '../Images/index';
import CustomButton from './Reusable/CustomButton';
import SponserShipModal from './SponserShipModal';


const SponserShipdata = ({ navigation, route }) => {
    const HEIGHT = Dimensions.get('window').height;
    const WIDTH = Dimensions.get('window').width;
    const [visible, setVisible] = useState(false);

    const { details, path } = route.params;
    const data = useSelector((store) => store.apiReducer.sponserShipData)
    console.log("reduc=>>", data);

    const source = {
        html: `<div>
            <h2 style="color:green;justify-content:center;align-items:center">SponserShipDetails</h2>
                <div style="display:flex;flex-direction:row";justify-content:center;align-items:center>
                    <div style="margin-left:80px">
                    <div style="text-align:left;font-weight:800;margin-top:30px">Name</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Date Of Birth</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Nationality</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Social Status</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Hourly Rate</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Experience</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Updated CV</div>
                    <div style="text-align:left;font-weight:800;margin-top:30px">Image</div>
                    </div>
                    <div>
                    <div  style="margin-left:40px;margin-top:30px">${data.name}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.dob.toLocaleDateString()}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.nationality}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.social}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.hourlyrate}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.experience}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.document}</div>
                    <div  style="margin-left:40px;margin-top:30px">${data.image}</div>
                    <div><img src=${path} style="width:70px;height:80px;margin-top:10px"/></div>
                    </div>
                </div>
               
        </div>`
    }
    return (
        <>
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                {/* <View style={{ backgroundColor: '#fff' }}> */}
                <LinearGradient
                    colors={['#387FDA', '#2ECBAA']}
                    start={{ x: 0.2, y: 0.67 }}
                    end={{ x: 0.13, y: 0.87 }}
                    style={{
                        position: 'absolute',
                        bottom: HEIGHT * 0.78,
                        right: -HEIGHT * 0.76,
                        width: HEIGHT * 2,
                        height: HEIGHT * 2,
                        borderRadius: HEIGHT,
                    }}></LinearGradient>
                <Header
                    leftlogo={backlogo}
                    title="Sponsorship Transfer"
                    navigation={() => navigation.goBack()}
                />
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: HEIGHT * 0.11 }}>
                    <ScrollView style={{ height: HEIGHT * 0.61 }} showsVerticalScrollIndicator={false}>
                        <RenderHTML source={source} contentWidth={WIDTH} />
                    </ScrollView>
                </View>
            </View>
            <View
                style={{
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: '#fff',
                    position: 'absolute', bottom: -HEIGHT * 0.01, width: '100%', shadowColor: '#blue', shadowOpacity: 0.2
                }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: HEIGHT * 0.15,
                    }}>
                    <CustomButton value="Submit" onPress={() => setVisible(!visible)} />
                </View>
                <View>
                    <SponserShipModal
                        visible={visible}
                        setVisible={setVisible}
                        navigation={() => navigation.navigate('servicehome')}
                        heading="The Operation is Complete"
                        text="The worker has been successfully added"
                        logo={confirm}
                    />
                </View>
            </View>
        </>
    );
};

export default SponserShipdata;



