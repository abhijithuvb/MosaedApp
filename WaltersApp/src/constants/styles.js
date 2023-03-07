import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    fontBold: (lang) => {
        return { fontFamily: "SF UI Display" }
    },
    alignItems: (lang) => {
        return { alignItems: `flex-${lang === 'en' ? 'start' : 'end'}` }
    },
    alignSelf: (lang) => {
        return { alignSelf: `flex-${lang === 'en' ? 'start' : 'end'}` }
    },
    textAlign: (lang) => {
        return { textAlign: `${lang === 'en' ? 'left' : 'right'}` }
    },
    flexDirection: (lang) => {
        return { flexDirection: `${lang === 'en' ? 'row' : 'row-reverse'}` }
    },
    justifyContent: (lang) => {
        return { justifyContent: `flex-${lang === 'en' ? 'start' : 'end'}` }
    },
})

export { commonStyles }