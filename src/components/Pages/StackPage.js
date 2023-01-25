import {Button, Text, View} from 'react-native';

const StackPage = ({navigation}) => {
  return (
    <View>
      <Button
        title="activityindicate"
        onPress={() => navigation.navigate('activity')}
      />
    </View>
  );
};

export default StackPage;
