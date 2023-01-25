import {View, ActivityIndicator} from 'react-native';

const ActivityIndicatorsDemo = () => {
  return (
    <View style={{margin: 10}}>
      <ActivityIndicator style={{padding: 20}} />
      <ActivityIndicator style={{padding: 20}} size="small" color="green" />
      <ActivityIndicator style={{padding: 20}} size="large" color="red" />
    </View>
  );
};

export default ActivityIndicatorsDemo;
