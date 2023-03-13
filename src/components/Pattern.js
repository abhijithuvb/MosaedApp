import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'
import { confirmButtonStyles } from 'react-native-modal-datetime-picker'
import { HEIGHT } from '../../mosaedApp/src/components/constants/constants'
import DocumentPicker from 'react-native-document-picker'
import ImagePicker from 'react-native-image-crop-picker'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask'



const Pattern = () => {
    // *
    // **
    // ***

    // for (let i = 0; i < 5; i++) {
    //     let temp = ""
    //     for (let j = 0; j < i + 1; j++) {
    //         temp += "*"
    //     }
    //     console.log(temp)
    // }

    // ***
    // **
    // * 

    // for (let i = 5; i > 0; i--) {
    //     let temp = ""
    //     for (let j = 0; j < i; j++) {
    //         temp += "*"
    //     }
    //     console.log(temp)
    // }

    // ***
    //  **
    //   *

    // for (let i = 5; i > 0; i--) {
    //     let temp = ""
    //     for (let j = 5; j >= 0; j--) {
    //         temp = temp + (i > j ? "*" : " ")
    //     }
    //     console.log(temp)
    // }

    // 0
    // 01
    // 012

    // for (let i = 0; i <= 5; i++) {
    //     let temp = ""
    //     for (j = 0; j < i; j++) {
    //         temp = temp + j
    //     }
    //     console.log(temp);
    // }

    // 1
    // 22
    // 333
    // 4444

    // for (let i = 0; i < 5; i++) {
    //     let temp = ""
    //     for (j = 0; j < i; j++) {
    //         temp = temp + i
    //     }
    //     console.log(temp)
    // }


    // 1
    // 23
    // 345
    // 4567

    // for (let i = 1; i < 5; i++) {
    //     let temp = "";
    //     for (let j = 0; j < i; j++) {
    //         // temp = temp + (i < j ? "" : j + i)
    //         temp = temp + (j + i)
    //     }
    //     console.log(temp);
    // }

    //     0
    //    012
    //   01234
    //  0123456
    // 012345678

    //    012345678
    //     0123456
    //      01234
    //       012
    //        0

    // let space = 5
    // for (let i = 5; i >= 0; i--) {
    //     let temp = ""
    //     for (let j = 1; j <= space - i; j++) {
    //         temp += " "
    //     }
    //     for (let k = 0; k < 2 * i - 1; k++) {
    //         temp += k
    //     }
    //     console.log(temp);
    // }

    // * * * * *
    // *       *
    // *       *
    // *       *
    // * * * * *

    // for (let i = 0; i < 5; i++) {
    //     let temp = ""
    //     for (let j = 0; j < 5; j++) {
    //         if (i > 0 && i < 4) {

    //             if (j > 0 && j < 4) {
    //                 temp += "  "
    //             } else {
    //                 temp += " *"
    //             }
    //         }
    //         else {
    //             temp += " *"
    //         }
    //     }
    //     console.log(temp);
    // }
    // for (let i = 0; i < 9; i++) {
    //     let temp = ""
    //     for (let j = 0; j < i; j++) {
    //         if (i > 1 && j < i - 1) {
    //             temp += "-"
    //         }
    //         else {
    //             temp += "*"
    //         }

    //     }

    //     console.log(temp);
    // }
    const [cameraImage, setCameraImage] = useState({})
    const [galleryImage, setGalleryImage] = useState({})
    const [camVisible, setCamVisible] = useState(false)
    const [barVisible, setBarVisible] = useState(false)
    const [bar, setBar] = useState("")
    console.log('====================================');
    console.log("imageDetails", galleryImage.path);
    console.log('====================================');

    const onsuccess = (t) => {
        const check = t.data.substring(0, 4);
        if (check == 'www.') {
            Linking.openURL(`https://${t.data}`)
        } else {
            console.log("data", t?.data)
            setBar(t.data)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <ScrollView>
                <View style={{ marginTop: HEIGHT * 0.1, alignItems: 'center' }}>
                    <Text>Pick Image</Text>
                    <Pressable style={{ height: 70, width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fca683', borderRadius: 5, marginVertical: HEIGHT * 0.02 }}
                        onPress={() => ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true,
                        }).then(image => {
                            console.log(image); setGalleryImage(image)
                        })

                        }
                    ><Text>Pick an image</Text></Pressable>
                    <Pressable style={{ height: 70, width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fca683', borderRadius: 5, marginVertical: HEIGHT * 0.02 }}
                        onPress={() => ImagePicker.openCamera({
                            width: 300,
                            height: 400,
                            cropping: true,
                        }).then(image => {
                            console.log(image); setCameraImage(image)
                        })
                        }

                    ><Text>Open Camera</Text></Pressable>
                    <Image source={{ uri: galleryImage?.path }} style={{ height: 200, width: 200, borderWidth: 1, borderColor: 'red', resizeMode: 'contain' }} />
                    <Image source={{ uri: cameraImage?.path }} style={{ height: 200, width: 200, borderWidth: 1, borderColor: 'red', resizeMode: 'contain' }} />

                </View>
                <View>
                    <Pressable style={{ marginVertical: HEIGHT * 0.08, }} onPress={() => setCamVisible(!camVisible)}><Text style={{ textAlign: 'center', height: 50, width: 150, backgroundColor: 'red', alignSelf: 'center', color: 'white' }}>{!camVisible ? "open QRScanner" : "close QRScanner"}</Text></Pressable>
                    {camVisible && <QRCodeScanner

                        reactivate={false}
                        showMarker={true}
                        onRead={(t) => onsuccess(t)}
                        topContent={
                            <Text style={{}}>
                                Please move your camera {"\n"} over the QR Code
                            </Text>
                        }
                        bottomContent={
                            <View>
                                <Text>{bar}</Text>
                            </View>
                        }
                    />}
                </View>
                <View style={{}}>
                    <Pressable style={{ marginVertical: HEIGHT * 0.08, }} onPress={() => setBarVisible(!barVisible)}><Text style={{ textAlign: 'center', height: 50, width: 150, backgroundColor: 'red', alignSelf: 'center', color: 'white' }}>{!camVisible ? "open BarScanner" : "close BarScanner"}</Text></Pressable>
                    {barVisible && <RNCamera style={{ height: 500 }} captureAudio={false} onBarCodeRead={(t) => {
                        setBar(t.data)
                        console.log("hi", t)
                    }} on>
                        <BarcodeMask width={300} height={100} />
                    </RNCamera>}
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}><Text>{bar}</Text></View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Pattern