/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import Routes from './src/components/Routes/Routes';
// import Routes from '../MyApp/mosaedApp/src/Routes/Routes';
// import Routes from './VIP/Routes/Routes';
// import Routes from './WaltersApp/Routes/Routes';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// import {store} from './src/components/redux/store';
// import { store } from './mosaedApp/src/redux/store';
import { store } from './WaltersApp/Redux/store'
import I18n from 'redux-i18n';
import Translations from './WaltersApp/src/constants/translations';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <SafeAreaView style={{ flex: 1, }}> */}
        <StatusBar
          animated={true}
          barStyle={'dark-content'}
          hidden={false}
          // backgroundColor="#181D23"
          translucent backgroundColor='transparent'

        />
        <Provider store={store}>
          <I18n translations={Translations} initialLang={"en"}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </I18n>
        </Provider>
        {/* </SafeAreaView> */}
      </View>
    </>
  );
};

export default App;
