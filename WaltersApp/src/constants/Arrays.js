import { colddrinklogo, hotdrink1, hotdrinklogo, sandwitchlogo } from "../assets/images"

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
export { buttons, drinks, products, cases }