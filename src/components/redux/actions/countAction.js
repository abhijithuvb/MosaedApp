import { DECREASE, INCREASE } from "../../constants"

export const increment = () => {
    return {
        type: INCREASE,
    }
}
export const decrement = () => {
    return {
        type: DECREASE
    }
}