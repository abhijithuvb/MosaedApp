import {useState, useEffect, useCallback} from 'react';
import {View, Text, RefreshControl, ScrollView} from 'react-native';

const RefreshControlDemo = () => {
  const [refresh, setRefresh] = useState(false);
  const refreshing = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              refreshing();
            }}
            /* refreshing={refresh}
            onRefresh={() => {
              console.log('rereerere');
            }} */
          />
        }>
        <View style={{height: 1000, width: '100%', backgroundColor: 'red'}}>
          <Text>Pull</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RefreshControlDemo;
