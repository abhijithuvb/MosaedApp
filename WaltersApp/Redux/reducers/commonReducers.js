import { HAI } from "../../src/constants/constants"

const initialState = {
    hai: 'hi'
}

const commonReducers = (state = initialState, action) => {
    switch (action.type) {
        case HAI:
            return {
                ...state,
                hai: action.payload
            }
        default:
            return { ...state }
    }
}

export default commonReducers