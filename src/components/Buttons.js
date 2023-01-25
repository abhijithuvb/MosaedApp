import {
  View,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StatusBar,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {useState} from 'react';
const Buttons = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setcount] = useState(0);
  const counter = () => {
    setcount(count + 1);
  };
  return (
    <View>
      <SafeAreaView
        style={{backgroundColor: 'gray'}}
        //   style={backgroundStyle}
      >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="black"
        />
        <ScrollView>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="click here"
              onPress={() => alert('button')}
              accessibilityLabel="Learn more about this purple button"
              color="#841584"
              disabled
            />
            <Pressable
              style={{
                backgroundColor: 'red',
                width: 100,
                padding: 10,
                borderRadius: 10,
                justifyContent: 'center',
                marginTop: 20,
                justifyContent: 'center',
              }}
              onPressIn={() => alert('pressable in')}
              onPressOut={() => alert('pressable out')}>
              <Text style={{textAlign: 'center'}}>I am Pressable</Text>
            </Pressable>
            <TouchableHighlight
              style={{
                backgroundColor: 'blue',
                width: 100,
                padding: 10,
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20,
              }}
              underlayColor="yellow"
              activeOpacity={0.1}
              onPress={() => alert('touchable highlight')}>
              <View>
                <Text style={{textAlign: 'center'}}>touchable highlght</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => alert('touchable opacity')}
            style={{
              backgroundColor: '#000',
              width: 100,
              padding: 10,
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: 'white'}}>Touchable Opacity</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={{display: 'flex'}}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => alert('touchable opacity')}
            style={{
              backgroundColor: '#000',
              width: 100,
              padding: 10,
              borderRadius: 10,

              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: 'white'}}>Touchable Opacity</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', textAlign: 'center'}}>
          <TouchableWithoutFeedback onPress={() => counter()}>
            <View
              style={{
                backgroundColor: 'green',
                width: 100,
                padding: 10,
                borderRadius: 10,

                marginTop: 20,
              }}>
              <Text style={{textAlign: 'center'}}>Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', textAlign: 'center'}}>
            Count:{count}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Buttons;
