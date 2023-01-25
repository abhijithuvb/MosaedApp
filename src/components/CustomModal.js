import {useState} from 'react';
import {Pressable, View, Text, Modal, FlatList} from 'react-native';

const CustomModal = () => {
  const [visible, setVisible] = useState(false);
  const [buttons, setButtons] = useState(false);
  const [animation, setAnimation] = useState('');
  const DATA = [
    {
      text: 'none',
      anim: 'none',
    },
    {
      text: 'fade',
      anim: 'fade',
    },
    {
      text: 'slide',
      anim: 'slide',
    },
  ];
  return (
    <>
      <View
        style={{
          flex: 1,
          /* justifyContent: 'center',
          alignItems: 'center', */
          borderWidth: 1,
        }}>
        <View
          style={{
            height: 100,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <Pressable
            style={{
              backgroundColor: 'yellow',
              width: 100,
              height: 50,
              borderRadius: 10,
              paddingTop: 5,
              marginTop: 20,
            }}
            onPress={() => {
              setButtons(!buttons);
              setVisible(true);
            }}>
            <Text style={{textAlign: 'center', paddingTop: 10}}>Show</Text>
          </Pressable>
        </View>
        <View style={{borderWidth: 2, flex: 1}}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  style={{
                    backgroundColor: animation === item.anim ? 'red' : 'gray',
                    width: '50%',
                    height: 40,
                    borderRadius: 10,
                    margin: 20,
                  }}
                  onPress={() => {
                    setAnimation(item.anim);
                  }}>
                  <Text style={{textAlign: 'center', paddingTop: 10}}>
                    {item.text}
                  </Text>
                </Pressable>
              );
            }}></FlatList>
        </View>
      </View>

      <Modal
        visible={visible}
        animationType={animation}
        transparent={true}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000030',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text>hi</Text>
            <Pressable
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: '#F194FF',
              }}
              onPress={() => {
                setVisible(false);
              }}>
              <Text>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CustomModal;
{
  /* <Pressable
              style={{
                backgroundColor: animation === 'none' ? 'red' : 'gray',
                width: '20%',
                height: 40,
                borderRadius: 10,
                margin: 20,
              }}
              onPress={() => {
                setAnimation('none');
              }}>
              <Text style={{textAlign: 'center', paddingTop: 10}}>None</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: animation === 'fade' ? 'red' : 'gray',
                width: '20%',
                height: 40,
                borderRadius: 10,
                margin: 20,
              }}
              onPress={() => {
                setAnimation('fade');
              }}>
              <Text style={{textAlign: 'center', paddingTop: 10}}>Fade</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: animation === 'slide' ? 'red' : 'gray',
                width: '20%',
                height: 40,
                borderRadius: 10,
                margin: 20,
              }}
              onPress={() => {
                setAnimation('slide');
              }}>
              <Text style={{textAlign: 'center', paddingTop: 10}}>Slide</Text>
            </Pressable> */
}
