import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import has from 'lodash/has'

import { api } from "../../api/Api"
import { COMPANYAPI, GETOTP, HOMEAPI, SPONSER, WORKERAPI } from "../../components/constants/constants"


export const getHomeData = () => {
    return async dispatch => {
        const token = await AsyncStorage.getItem("userdata")
        const res = await fetch(`${api}home`, { method: 'GET', headers: { authorization: token || "" } })
            .then((response) => response.json())
            .then((response) => {
                console.log("response===>>>>", response)
                if (has(response, "status") && response.status) {


                    dispatch({
                        type: HOMEAPI,
                        homedata: response.data
                    })


                }
            }).catch((error) => console.log("error", error))
    }
}


export const workersData = () => {
    return async dispatch => {
        const token = await AsyncStorage.getItem("userdata")
        await fetch(`${api}workers`, { method: "GET", headers: { authorization: token || "" } }).then((response) => response.json()).then((response) => {
            if (has(response, "status") && response.data) {
                dispatch({
                    type: WORKERAPI,
                    workerdata: response.data
                })
            }
        })
    }
}

export const CompanyData = () => {
    return async dispatch => {
        const token = await AsyncStorage.getItem("userdata")
        await fetch(`${api}companies`, { headers: { authorization: token || "" } }).then((response) => response.json()).then((response) => {
            console.log("resp=>>", response)
            if (has(response, "status") && response.data) {
                dispatch({
                    type: COMPANYAPI,
                    companydata: response.data
                })
            }
        }).catch((error) => console.log("error==>>", error))
    }
}

export const sendOtp = (payload) => {
    return async dispatch => {
        await fetch(`${api}sendotp`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-type": "application/json", }
        }).then((response) => response.json()).then((response) => {

            if (has(response, "status") && response.status)
                dispatch({
                    type: GETOTP,
                    data: response.status
                })
            console.log("apidata==>>", response)
        }).catch((err) => console.log("errorApi==>>", err))
    }
}
export const sponserShipFunction = (details) => {
    return async dispatch => {
        dispatch({
            type: SPONSER,
            sponserShipData: details
        })
    }
}

