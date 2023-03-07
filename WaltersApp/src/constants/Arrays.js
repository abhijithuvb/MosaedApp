import { carouselimage, cashlogo, colddrinklogo, creditcardlogo, hotdrink1, hotdrinklogo, sandwitchlogo, walletlogo } from "../assets/images"
import { colors } from "./colors"

const buttons = [
    { id: 1, value: "English", language: 'en' },
    { id: 2, value: "العربية", language: 'ar' }
]
const drinks = [
    { id: 1, value: "cold_drinks", logo: colddrinklogo },
    { id: 2, value: "hot_drinks", logo: hotdrinklogo },
    { id: 3, value: "sandwiches", logo: sandwitchlogo },
]
const products = [
    { id: 1, title: "chemex", desc: "made_from", image: hotdrink1 },
    { id: 2, title: "spanish_latte", desc: "coffee_steeped", image: hotdrink1 },
    { id: 3, title: "espresso", desc: "coffee_brewed", image: hotdrink1 },
    { id: 4, title: "americano", desc: "americano_desc", image: hotdrink1 }
]
const cases = [
    { id: 1, case: 'hot' },
    { id: 2, case: 'cold' },
    { id: 3, case: 'sandwich' }

]
const carousel = [
    { id: 1, image: carouselimage },
    { id: 2, image: carouselimage },
    { id: 3, image: carouselimage }

]
const selectItem = [
    { id: 1, title: 'Small' },
    { id: 2, title: 'Medium' },
    { id: 3, title: 'Large' },
]
const pickupTime = [
    { id: 1, title: 'As soon as possible' },
    { id: 2, title: '20 minutes' },
    { id: 3, title: '30 minutes' },
]
const pickupOption = [
    { id: 1, title: 'Inside the Coffee Shop' },
    { id: 2, title: 'Takeaway' },
    { id: 3, title: 'Car Pickup' },
]
const location = [
    { id: 1, title: 'Location A' },
    { id: 2, title: 'Location B' },
    { id: 3, title: 'Location C' },
]
const locationCases = [
    { id: 1, case: 'firstlocation' },
    { id: 2, case: 'firstlocation ' },

]
const money = [
    { id: 1, logo: cashlogo, title: 'Cash', sub: '' },
    { id: 2, logo: creditcardlogo, title: 'Credit Card', sub: '' },
    { id: 3, logo: walletlogo, title: 'Wallet', sub: '(10 QAR Available)' }
]
const orders = [
    { id: 1, color: colors.lightgreen, title: 'Completed', },
    { id: 2, color: colors.darkred, title: 'Cancelled', },
    { id: 3, color: colors.lightgreen, title: 'Completed', }
]


export { buttons, drinks, products, cases, carousel, selectItem, pickupTime, pickupOption, location, locationCases, money, orders }