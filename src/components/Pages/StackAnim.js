import { Button, View } from 'react-native';

const StackAnim = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Activity Indicator"
        onPress={() => navigation.navigate('activity')}
      />
      <Button title="Buttons" onPress={() => navigation.navigate('buttons')} />
      <Button
        title="Custom Modal"
        onPress={() => navigation.navigate('custommodal')}
      />
      <Button title="Image" onPress={() => navigation.navigate('image')} />
      <Button
        title="Flatlist"
        onPress={() => navigation.navigate('flatlist')}
      />
      <Button title="Refresh" onPress={() => navigation.navigate('refresh')} />
      <Button
        title="Scroll View"
        onPress={() => navigation.navigate('scrollview')}
      />
      <Button
        title="SectionList"
        onPress={() => navigation.navigate('sectionlist')}
      />
      <Button title="Form" onPress={() => navigation.navigate('form')} />
      <Button title="Animation" onPress={() => navigation.navigate('animation')} />
      <Button title="redux" onPress={() => navigation.navigate('redux')} />
    </View>
  );
};

export default StackAnim;
