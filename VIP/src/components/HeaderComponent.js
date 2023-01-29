import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {
  HEIGHT,
  WIDTH,
} from '../../../mosaedApp/src/components/constants/constants';

const HeaderComponent = ({leftlogo, rightlogo, leftOnPress, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: WIDTH * 0.065,
        paddingRight: WIDTH * 0.065,
      }}>
      <Pressable onPress={() => leftOnPress()}>
        <Image source={leftlogo} />
      </Pressable>
      <View /* style={{marginRight: !rightlogo && WIDTH * 0.06}} */>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: HEIGHT * 0.0205,
            textAlign: 'center',
            fontWeight: '400',
          }}>
          {title}
        </Text>
      </View>
      <Pressable>
        {rightlogo ? <Image source={rightlogo} /> : <View />}
      </Pressable>
    </View>
  );
};

export default HeaderComponent;
