import React from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View>
      <Button
        title="activityindicator"
        onPress={() => navigation.navigate('activityindicator')}>
        <Text>Click</Text>
      </Button>
    </View>
  );
}

export default Home;
