import {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';

const ModalDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      }}>
      <Modal visible={visible} animationType="slide" style={{display: 'flex'}}>
        <View style={{alignItems: 'center', marginTop: 190}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
              backgroundColor: 'green',
              width: '70%',
              height: '50%',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                padding: 10,
                fontSize: 30,
                fontWeight: '600',
              }}>
              Melcowe
            </Text>
            <Pressable
              style={{
                backgroundColor: 'yellow',
                padding: 20,
                width: '40%',
                borderRadius: 10,
                justifyContent: 'center',
                marginEnd: 10,
              }}
              onPress={() => setVisible(!visible)}>
              <Text style={{textAlign: 'center'}}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Pressable
          style={{
            backgroundColor: 'blue',
            padding: 20,
            width: '40%',
            borderRadius: 10,
            justifyContent: 'center',
            // marginLeft: 120,
            marginTop: 30,
            borderRadius: 10,
          }}
          onPress={() => setVisible(!visible)}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
            Show Modal
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalDemo;
