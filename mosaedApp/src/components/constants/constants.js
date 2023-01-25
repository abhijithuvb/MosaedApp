import { Dimensions } from "react-native";

const HOMEAPI = "homedata";
const WORKERAPI = 'workerdata'
const COMPANYAPI = "companydata"
const GETOTP = "getotp"
const SPONSER = "sponsership"
const EMAILREG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width


export { HOMEAPI, WORKERAPI, COMPANYAPI, GETOTP, EMAILREG, HEIGHT, WIDTH, SPONSER }