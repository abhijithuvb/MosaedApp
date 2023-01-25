import React from 'react';
import {View, Text, Button} from 'react-native';

function StackPage({navigation}) {
  return (
    <>
      <View>
        <Button
          title="STACK"
          onPress={() => {
            navigation.navigate('stackpage');
          }}></Button>
      </View>
      <View>
        <Button
          title="STACK"
          onPress={() => {
            navigation.navigate('Stacks');
          }}></Button>
      </View>
      <View>
        <Button
          title="STACK"
          onPress={() => {
            navigation.navigate('Stacks');
          }}></Button>
      </View>
    </>
  );
}

export default StackPage;
