import { View, Text, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { confirmButtonStyles } from 'react-native-modal-datetime-picker'
import { HEIGHT } from '../../mosaedApp/src/components/constants/constants'
import DocumentPicker from 'react-native-document-picker'
import ImagePicker from 'react-native-image-crop-picker'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

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
    console.log('====================================');
    console.log("imageDetails", galleryImage.path);
    console.log('====================================');
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
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
                    <QRCodeScanner
                        onRead={onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                            <Text style={styles.centerText}>
                                Go to{' '}
                                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                                your computer and scan the QR code.
                            </Text>
                        }
                        bottomContent={
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Pattern