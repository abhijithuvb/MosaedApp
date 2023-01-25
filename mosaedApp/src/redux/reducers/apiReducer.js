import { COMPANYAPI, GETOTP, HOMEAPI, SPONSER, WORKERAPI } from "../../components/constants/constants"

const initialState = {
    homeData: [],
    workerData: [],
    companyData: [],
    data: "",
    sponserShipData: {}
}


const apiReducer = (state = initialState, action) => {
    // console.log("action ====>", action);
    switch (action.type) {
        case HOMEAPI:
            return {
                ...state,
                homeData: action.homedata
            }
        case WORKERAPI:
            return {
                ...state,
                workerData: action.workerdata
            }
        case COMPANYAPI:
            return {
                ...state,
                companyData: action.companydata
            }
        case GETOTP:
            return {
                ...state,
                data: action.data
            }
        case SPONSER:
            return {
                ...state,
                sponserShipData: action.sponserShipData
            }
        default:
            return state
    }
}

export default apiReducer