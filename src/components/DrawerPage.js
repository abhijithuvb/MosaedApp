import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DrawerPage = props => {
  //   console.log('navigation', props);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      title: 'Home',
      screen: 'drawerpage',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'About Us',
      screen: 'form',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Breeding & Show',
      screen: 'activity',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Equine Education',
      screen: 'buttons',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Horse Profile',
      screen: 'custommodal',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Gallery',
      screen: 'image',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Tours',
      screen: 'flatlist',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Volunteer',
      screen: 'refresh',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Facilities Map',
      screen: 'scrollview',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'Contact Us',
      screen: 'sectionlist',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'Input Task',
      screen: 'inputtask',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d80',
      title: 'Display Task',
      screen: 'displaytask',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d81',
      title: 'TabRender',
      screen: 'tabRender',
    },
  ];
  return (
    <DrawerContentScrollView style={{ backgroundColor: '#822424' }}>
      <View style={{ backgroundColor: '', flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item, index, separators }) => (
            <View
            //   style={{
            //     backgroundColor: '#9c9c9c',
            //     padding: 10,
            //     marginVertical: 8,
            //     marginHorizontal: 12,
            //     borderRadius: 10,
            //   }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#822424',
                  padding: 10,
                  marginVertical: 8,
                  marginHorizontal: 12,
                  borderRadius: 10,
                }}
                onPress={() => {
                  props.navigation.navigate(item.screen);
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    color: 'white',
                    fontStyle: 'italic',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerPage;
