import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
const FlatListDemo = () => {
  //   const DATA = [
  //     {
  //       id: '1',
  //       title: 'Today is a good day',
  //     },
  //     {
  //       id: '2',
  //       title: 'tomorrow will be a good day',
  //     },
  //     {
  //       id: '3',
  //       title: 'its gonna better',
  //     },
  //   ];

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Third ',
    },
  ];

  //   const Item = ({title}) => (
  //     <View
  //       style={{
  //         backgroundColor: '#f9c2ff',
  //         padding: 20,
  //         marginVertical: 8,
  //         marginHorizontal: 16,
  //       }}>
  //       <Text style={{fontSize: 32}}>{title}</Text>
  //     </View>
  //   );

  const Item = ({title}) => (
    <View
      style={{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
      <Text style={{fontSize: 32}}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        // keyExtractor={item => item.id}s
        horizontal={false}
        numColumns="2"
      />
    </SafeAreaView>
  );
};
//   return <FlatList data={Data} renderItem />;
// };

export default FlatListDemo;
