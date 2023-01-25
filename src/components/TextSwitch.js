import React, {useState} from 'react';
import {TextInput, View, Text, Switch} from 'react-native';

function TextSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggles = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 20,

            marginTop: 12,
            marginRight: 10,
            marginLeft: 10,
          }}>
          Name:
        </Text>
        <TextInput
          placeholder="Enter Name"
          style={{height: 40, borderWidth: 1, width: '80%'}}></TextInput>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
        <Text style={{marginLeft: 10, marginRight: 10, marginTop: 9}}>
          Activate
        </Text>
        <Switch
          style={{}}
          //   trackColor={{false: 'yellow', true: 'red'}}
          thumbColor={isEnabled ? 'blue' : 'gray'}
          value={isEnabled}
          onValueChange={toggles}
          ios_backgroundColor="blue"
        />
      </View>
    </View>
  );
}

export default TextSwitch;
