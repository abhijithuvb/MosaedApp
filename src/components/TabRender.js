import { View, Text, Pressable, ScrollView, FlatList, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import RenderFlatlistComponent from './RenderFlatlistComponent'
import { Direction, Align, AlignContent, Justify } from './Arrays'
import { useState } from 'react'
import TabRenderList from './TabRenderList'


const TabRender = () => {
    const [property, setProperty] = useState({ flexDirection: '', justifyContent: '', alignItems: '', alignContent: '' })
    const [displayProperty, setDisplayProperty] = useState('')
    const ref = useRef(null)
    const Data = [
        {
            id: 1,
            value: 'display', title: 'Direction'
        },
        {
            id: 2,
            value: 'justify', title: 'Justify'
        },
        {
            id: 3,
            value: 'alignitems', title: 'Align Items'
        },
        {
            id: 4,
            value: 'aligncontent', title: 'Align Content '
        }
    ]
    const DATA = [{
        id: 1,
        data: Direction,
        value: property.flexDirection,
        onChange: (flexDirection) => setProperty({ ...property, flexDirection }),
        horizontal: true
    }, {
        id: 2,
        data: Justify,
        value: property.justifyContent,
        onChange: (justifyContent) => setProperty({ ...property, justifyContent }),
        horizontal: true
    }, {
        id: 3,
        data: Align,
        value: property.alignItems,
        onChange: (alignItems) => setProperty({ ...property, alignItems }),
        horizontal: true
    },
    {
        id: 4,
        data: AlignContent,
        value: property.alignContent,
        onChange: (alignContent) => setProperty({ ...property, alignContent }),
        horizontal: true
    }]

    const Height = Dimensions.get('window').height;
    const Width = Dimensions.get('window').width

    const pageChange = (index, item) => {
        setDisplayProperty(item.value)
        // ref.current.scrollTo({ x: Width * index, y: 0, animated: true })
        ref.current.scrollToIndex({ animated: true, index })
        // ref.current.scrollToItem({ animated: true, item, index })


    }

    return (
        <ScrollView>
            <View style={{}}>
                <View>
                    <View
                        style={[{
                            borderWidth: 2,
                            height: Height * 0.4,
                            display: 'flex',
                            flexWrap: 'wrap',
                            /* flexDirection: property.direction,
                            justifyContent: property.justify,
                            alignItems: property.align,
                            alignContent: property.alignContent, */
                            ...property
                        }

                        ]}>
                        <View
                            style={{
                                borderWidth: 2,
                                height: Height * 0.06,
                                width: Width * 0.14,
                                margin: 10,
                                backgroundColor: 'gray',
                            }}>
                            <Text style={{ textAlign: 'center', paddingTop: 14 }}>cell 1</Text>
                        </View>
                        <View
                            style={{
                                borderWidth: 2,
                                height: Height * 0.08,
                                width: Width * 0.18,
                                margin: 10,
                                backgroundColor: 'gray',
                            }}>
                            <Text style={{ textAlign: 'center', paddingTop: 20 }}>cell 2</Text>
                        </View>
                        <View
                            style={{
                                borderWidth: 2,
                                height: Height * 0.1,
                                width: Width * 0.22,
                                margin: 10,
                                backgroundColor: 'gray',
                            }}>
                            <Text style={{ textAlign: 'center', paddingTop: 35 }}>cell 3</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', }} >

                    <FlatList data={Data} renderItem={({ item, index }) => <Pressable onPress={() => { pageChange(index, item) }} style={{ padding: 10, borderBottomWidth: displayProperty === item.value ? 0 : 0, }}>
                        <Text>{item.title}</Text>
                        {displayProperty === item.value ? <View style={{ borderWidth: 2, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}></View> : ''}


                    </Pressable>} horizontal={true} />
                </View>



                <View style={{ height: 350, display: 'flex', alignItems: 'center' }}>
                    {/* <ScrollView horizontal={true} ref={ref} scrollEnabled={false} > */}


                    {/* <TabRenderList data={Direction} value={direction} onChange={setDirection} horizontal={true} />
                    <TabRenderList data={Justify} value={justify} onChange={setJustify} horizontal={true} />
                    <TabRenderList data={Align} value={align} onChange={setAlign} horizontal={true} />
                    <TabRenderList data={AlignContent} value={alignContent} onChange={setAlignContent} horizontal={true} /> */}
                    <FlatList horizontal={true} ref={ref} data={DATA} renderItem={({ item, index }) => { return <TabRenderList data={item.data} value={item.value} onChange={item.onChange} horizontal={item.horizontal} /> }} />


                    {/* </ScrollView> */}
                </View>


            </View>
        </ScrollView>
    )
}

export default TabRender