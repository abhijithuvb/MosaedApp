import { View, Text, Dimensions, Image, FlatList, Pressable, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

import { ratinglogo, companyicon, companylogo2, companylogo3, companylogo4 } from '../Images';
import { CompanyData } from '../redux/actions/apiAction';



const CompanySmallScreen = ({ state, onPress }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;


  const dispatch = useDispatch()

  const data = useSelector((store) => store.apiReducer.companyData)
  console.log("d========", data)

  const getCompany = async () => {
    dispatch(CompanyData())
  }

  useEffect(() => {
    getCompany()
  }, [])

  const company = {
    "Lexiang Company": companylogo2,
    "Flexcare Medical Staffing": companyicon,
    "Travel Nurse": companylogo3,
    "Fusion Medical Staffing": companylogo4,
    "Atlas Medstaff": companylogo2,
    "Or Nurses Nationwide": companylogo4
  }
  const filterdata = data.filter((item) => { return state === "" ? item : item.name.includes(state) })
  return (
    <View>
      <FlatList
        style={{ height: HEIGHT * 0.75 }}
        data={filterdata}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {

          return <Animated.View entering={SlideInLeft.delay(item.id * 200)}>
            <Pressable
              style={{
                alignItems: 'center',
                marginTop: HEIGHT * 0.015,
              }}
              onPress={() => onPress()}>
              <View
                style={{
                  backgroundColor: '#fff',

                  height: HEIGHT * 0.12,
                  width: WIDTH * 0.9,
                  borderRadius: HEIGHT * 0.01,
                  flexDirection: 'row',

                  alignItems: 'center',
                }}>
                <View style={{ marginLeft: HEIGHT * 0.03 }}>
                  <Image source={company[item.name]} />
                </View>
                <View style={{ marginLeft: HEIGHT * 0.01 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ marginLeft: HEIGHT * 0.006, fontWeight: '600' }}>
                      {item.name}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginLeft: HEIGHT * 0.006,
                      marginTop: HEIGHT * 0.004,
                    }}>
                    <Image source={ratinglogo} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Animated.View>
        }
        }
      />
    </View >
  );
};

export default CompanySmallScreen;
