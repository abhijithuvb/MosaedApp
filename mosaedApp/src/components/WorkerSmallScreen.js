import { View, Text, Dimensions, Image, FlatList, Pressable, } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { nursesmalllogo, workerdplogo } from "../Images";
import { workersData } from "../redux/actions/apiAction";


const WorkerSmallScreen = ({ savelogo, size, navigation }) => {
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;



  const dispatch = useDispatch()
  const data = useSelector((store) => store.apiReducer.workerData)
  const getDetails = async () => {
    dispatch(workersData())
  }

  useEffect(() => {
    getDetails()
  }, [])
  return (
    <Animated.View style={{}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ height: size ? HEIGHT * 0.65 : HEIGHT * 0.8 }}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Animated.View entering={SlideInLeft.delay(item.id * 300)} >
            <Pressable
              style={{
                alignItems: "center",
                marginTop: HEIGHT * 0.013,
                // marginBottom: HEIGHT * 0.012,
              }}
              onPress={() =>
                navigation(
                  item.id,
                  item.name,
                  item.rate,
                  item.country,
                  item.company,
                  item.description
                )
              }>
              <View
                style={{
                  backgroundColor: "#fff",

                  height: HEIGHT * 0.12,
                  width: WIDTH * 0.9,
                  borderRadius: HEIGHT * 0.01,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}>
                <View>
                  <Image source={workerdplogo} />
                </View>
                <View>
                  <View>
                    <Text style={{ marginLeft: HEIGHT * 0.006, fontWeight: "600" }}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: HEIGHT * 0.012,
                        color: "#707070",
                        marginTop: HEIGHT * 0.005,
                        marginBottom: HEIGHT * 0.005,
                      }}>
                      {item.company}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={nursesmalllogo} />
                    <Text
                      style={{
                        marginLeft: HEIGHT * 0.008,
                        fontSize: HEIGHT * 0.015,
                        color: "#707070",
                      }}>
                      {item.designation}
                    </Text>
                  </View>
                </View>
                <View>
                  {savelogo && (
                    <Pressable>
                      <Image
                        style={{ marginLeft: WIDTH * 0.02 }}
                        source={savelogo}
                      />
                    </Pressable>
                  )}
                  <Text style={{ textAlign: "center", fontWeight: "600" }}>
                    {item.rate}
                  </Text>
                  <Text style={{ textAlign: "center", fontWeight: "600" }}>
                    {item.country}
                  </Text>
                </View>
              </View>
            </Pressable>
          </Animated.View>
        )}
      />
    </Animated.View>
  );
};

export default WorkerSmallScreen;


