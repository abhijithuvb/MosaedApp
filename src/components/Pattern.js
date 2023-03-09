import { View, Text } from 'react-native'
import React from 'react'
import { confirmButtonStyles } from 'react-native-modal-datetime-picker'

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
    for (let i = 0; i < 9; i++) {
        let temp = ""
        for (let j = 0; j < i; j++) {
            if (i > 1 && j < i - 1) {
                temp += "-"
            }
            else {
                temp += "*"
            }

        }

        console.log(temp);
    }
    return (
        <View>
            <Text>Pattern</Text>
        </View>
    )
}

export default Pattern