import { HAI } from "../../src/constants/constants"

const showHi = (value) => {
    return async dispatch => {
        dispatch({
            type: HAI, payload: value
        })
    }
}

export { showHi }