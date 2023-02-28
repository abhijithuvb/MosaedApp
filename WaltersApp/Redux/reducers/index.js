import { combineReducers } from "redux";
import { i18nState } from 'redux-i18n'
import commonReducers from './commonReducers'

const appReducer = combineReducers({
    i18nState, commonReducers
})
// export const rootReducer = (state, action) => {
//     return appReducer(state, action)
// }
export { appReducer }