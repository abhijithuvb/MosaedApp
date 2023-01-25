import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import DisplayPropComponent from './DisplayPropComponent';
import RenderFlatlistComponent from './RenderFlatlistComponent';
import { Align, AlignContent, Direction, Justify } from './Arrays';

const DisplayPropTask = () => {
  const [direction, setDirection] = useState('');
  const [justifyContent, setJustifyContent] = useState('');
  const [align, setAlign] = useState('');
  const [alignContent, setAlignContent] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log('dimension', windowHeight, windowWidth);

  return (
    <>
      <ScrollView>
        <View
          style={{
            borderWidth: 2,
            height: 400,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: align,
            alignContent: alignContent,
          }}>
          <View
            style={{
              borderWidth: 2,
              height: 50,
              width: 50,
              margin: 10,
              backgroundColor: 'gray',
            }}>
            <Text style={{ textAlign: 'center', paddingTop: 14 }}>cell 1</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 70,
              width: 70,
              margin: 10,
              backgroundColor: 'gray',
            }}>
            <Text style={{ textAlign: 'center', paddingTop: 20 }}>cell 2</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 100,
              width: 90,
              margin: 10,
              backgroundColor: 'gray',
            }}>
            <Text style={{ textAlign: 'center', paddingTop: 35 }}>cell 3</Text>
          </View>
        </View>

        <RenderFlatlistComponent
          data={Direction}
          value={direction}
          onChange={setDirection}
          title="Direction"
        />
        <RenderFlatlistComponent
          data={Justify}
          value={justifyContent}
          onChange={setJustifyContent}
          title="Justify Content"
        />
        <RenderFlatlistComponent
          data={Align}
          value={align}
          onChange={setAlign}
          title="Align Items"
        />
        <RenderFlatlistComponent
          data={AlignContent}
          value={alignContent}
          onChange={setAlignContent}
          title="Align Content"
        />

        <DisplayPropComponent
          data={AlignContent}
          value={alignContent}
          onChange={setAlignContent}
          title="Align Content"
        />
      </ScrollView>
    </>
  );
};

export default DisplayPropTask;
