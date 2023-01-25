import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => (
  <View style={{backgroundColor: 'yellow', padding: 20, marginVertical: 8}}>
    <Text style={{fontSize: 24}}>{title}</Text>
  </View>
);

const SectionListDemo = () => (
  <SafeAreaView style={{flex: 1, paddingTop: 30, marginHorizontal: 16}}>
    <SectionList
      sections={DATA}
      // keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={item => {
        const {
          section: {title},
        } = item;
        console.log(item);
        return (
          <Text style={{fontSize: 32, backgroundColor: 'white'}}>{title}</Text>
        );
      }}
    />
  </SafeAreaView>
);

export default SectionListDemo;
