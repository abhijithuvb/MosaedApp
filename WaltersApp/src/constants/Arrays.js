import { carouselimage, colddrinklogo, hotdrink1, hotdrinklogo, sandwitchlogo } from "../assets/images"

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

export { buttons, drinks, products, cases, carousel, selectItem, pickupTime, pickupOption, location, locationCases }