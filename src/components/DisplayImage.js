import React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';

function DisplayImage() {
  const image = {uri: 'https://reactjs.org/logo-og.png'};
  return (
    <View>
      <View style={{display: 'flex'}}>
        <Image
          style={{
            width: 40,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={{
            uri: ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2sBTMZEP0XCEt-TrNe_ks7&ust=1671004649628000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCA5cWP9vsCFQAAAAAdAAAAABAI',
          }}
        />
      </View>
      <View style={{paddingTop: 10, display: 'flex'}}>
        <ImageBackground source={image} style={{height: 100}}>
          <Image
            style={{
              marginTop: 20,
              marginLeft: 170,
              paddingTop: 50,
              width: 40,
              height: 20,
              alignItems: 'center',
            }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </ImageBackground>
      </View>
      <View>
        <Image
          style={{marginLeft: 160, marginTop: 50, width: 66, height: 58}}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </View>
  );
}

export default DisplayImage;
