import { DECREASE, INCREASE } from "../../constants"

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREASE:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }

}