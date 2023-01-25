import { View, Text, /* Animated, */ Pressable, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Animated, { useSharedValue, withTiming, withSpring, useAnimatedStyle, interpolate, interpolateNode, Extrapolate } from 'react-native-reanimated'
import { transform } from '@babel/core'
import Button from './animations/Button'
import MosaedSplash from './animations/MosaedSplash'
import ServiceTabs from './animations/ServiceTabs'

const Animations = () => {

    const animation = useRef(new Animated.Value(0)).current
    // const [animation, setAnimation] = useState({ x: 0, y: 0 })

    // const Animback = () => {
    //     const animback = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.back() }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.back() }).start(); }

    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animback(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }

    // const Animcircle = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.circle }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.circle }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animcubic = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.exp }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.exp }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animlinear = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.linear }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.linear }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animquad = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.quad }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.quad }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animstep0 = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.step0 }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.step0 }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animstep1 = () => {
    //     const anim = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.step1 }).start(); }
    //     const animOut = (toValue) => { Animated.timing(animation, { toValue, duration: 2000, easing: Easing.step1 }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(100)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation }, { translateY: animation }], borderWidth: 1 }}>
    //                 <Text>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }
    // const Animbounce = () => {
    //     const anim = (toValue, easing, speed, bounciness) => { Animated.spring(animation, { toValue, duration: 2000, easing, speed, bounciness }).start(); }
    //     const animOut = (toValue, easing) => { Animated.timing(animation, { toValue, duration: 2000, easing }).start(); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => anim(10, Easing.bounce, 40, 2)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animOut(0, Easing.bounce)}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={{ transform: [{ translateX: animation.interpolate({ inputRange: [0, 10], outputRange: [0, 150] }) }, { translateY: animation.interpolate({ inputRange: [0, 10], outputRange: [0, 100] }) }] }}>
    //                 <Text style={{ borderWidth: 1, width: 300, height: 400, backgroundColor: 'yellow' }}>Animation</Text>
    //             </Animated.View>
    //         </>)
    // }

    // const Animbounce2 = () => {
    //     const animation = useSharedValue(0);
    //     const styles = useAnimatedStyle(() => {

    //         return {
    //             transform: [{
    //                 translateX: withTiming(animation.value, {
    //                     duration: 500

    //                 })
    //             }, {
    //                 translateY: withTiming(animation.value, {
    //                     duration: 500

    //                 })
    //             }]

    //         }
    //     });

    //     const stylesspring = useAnimatedStyle(() => {

    //         return {
    //             transform: [{ translateX: withSpring(animation.value, { stiffness: 90 }) }, { translateY: withSpring(animation.value, { stiffness: 90 }) }]
    //         }
    //     })

    //     const styleNode = useAnimatedStyle(() => {
    //         const scalex = interpolate(animation.value, [0, 1], [0, 10],);
    //         const scaley = interpolate(animation.value, [0, 1], [0, 10],);
    //         const rot = interpolate(animation.value, [0, 1], ['0deg', '360deg'],);
    //         return {
    //             transform: [{ translateX: scalex }, { translateY: scaley }, { rotate: rot }]
    //         }
    //     })
    //     console.log("styleNode====>>>>>", styleNode);
    //     const anim = () => { withTiming(animation, { toValue, duration: 2000, easing, speed, bounciness }); }
    //     const animOut = () => { withTiming(animation.value, { toValue, duration: 2000, easing }); }
    //     return (
    //         <>
    //             <Pressable style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animation.value = 10}><Text style={{ textAlign: 'center', color: 'white' }}>Animate</Text>
    //             </Pressable>
    //             <Pressable style={{ backgroundColor: 'blue', width: 100, height: 50, borderRadius: 10, justifyContent: 'center' }} onPress={() => animation.value = 0}><Text style={{ textAlign: 'center', color: 'white' }}>Animate Out</Text>
    //             </Pressable>

    //             <Animated.View style={[styleNode]}>
    //                 <Text style={{ borderWidth: 1, width: 300, height: 400, backgroundColor: 'yellow' }}>Animation</Text>
    //             </Animated.View>
    //         </>)

    // }


    return (
        <>
            {/* <Animback /> */}
            {/* <Animbounce /> */}
            {/* <Animcircle /> */}
            {/* <Animcubic /> */}
            {/* <Animlinear /> */}
            {/* <Animquad /> */}
            {/* <Animstep0 /> */}
            {/* <Animstep1 />s */}
            {/* <Animbounce2 /> */}
            {/* <Button /> */}
            {/* <MosaedSplash /> */}
            <ServiceTabs />
        </>
    )
}

export default Animations