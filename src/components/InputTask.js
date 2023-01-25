import {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const InputTask = () => {
  const [values, setValues] = useState([]);
  const [array, setArray] = useState([]);

  const handleInputDisplay = text => {
    let array1 = [];
    for (let i = 0; i < text; i++) {
      array1.push('');
    }
    setArray(array1);
  };

  const handleSecond = (text, index) => {
    const texts = text;
    values[index] = texts;
    setValues([...values]);
  };
  console.log('outvalue', values);
  return (
    <View>
      <Text>hi</Text>
      <TextInput
        keyboardType="numeric"
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        placeholder="enter number"
        numeric
        onChangeText={text => {
          handleInputDisplay(text);
        }}
      />
      <FlatList
        data={array}
        renderItem={({item, index}) => (
          <View>
            <TextInput
              style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
              onChangeText={text => handleSecond(text, index)}
            />
            <View>
              <Text>{values[index]}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default InputTask;
