import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';

const RenderFlatlistComponent = props => {
  const { data, value, onChange, title, horizontalValue } = props;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '800',
            padding: 10,
          }}>
          {title}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={{
                  height: windowWidth * 0.1,

                  margin: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 10,
                }}
                onPress={() => {
                  onChange(item.text);
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    height: windowHeight * 0.02,
                    width: windowWidth * 0.04,
                    borderRadius: windowHeight * 0.05,
                    flexDirection: 'row',
                    padding: 1,
                  }}>
                  <View
                    style={{
                      height: windowHeight * 0.01,
                      width: windowWidth * 0.02,
                      backgroundColor:
                        value === item.text ? 'red' : 'transparent',
                      margin: 2,
                      borderRadius: windowHeight * 0.05,
                    }}></View>
                </View>

                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}>
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
          // horizontal={false}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default RenderFlatlistComponent;
