import React from 'react';
import { View, Text, Button } from 'react-native';

function HomePage({ navigation }) {
  return (
    <>
      <View style={{ marginTop: 40 }}>
        <Button
          title="STACK"
          onPress={() => {
            navigation.navigate('StackPage');
          }}></Button>
      </View>
      <View>
        <Button
          title="Drawer"
          onPress={() => {
            navigation.navigate('StackDrawer');
          }}></Button>
      </View>
      <View>
        <Button
          title="Bottom Tabs"
          onPress={() => {
            navigation.navigate('bottom');
          }}></Button>
      </View>
      <View>
        <Button
          title="Calculator"
          onPress={() => {
            navigation.navigate('calculator');
          }}></Button>
      </View>
      <View>
        <Button
          title="Pattern"
          onPress={() => {
            navigation.navigate('Pattern');
          }}></Button>
      </View>
    </>
  );
}

export default HomePage;
