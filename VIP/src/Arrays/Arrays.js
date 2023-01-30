import { beachlogo, boatimage1, boatimage2, boatimage3, boatimage4, boatimage5, boatimage6, boatimage7, boatimage8, desertlogo, drawerlistaboutlogo, drawerlisthomelogo, drawerlistprivacylogo, drawerlistprofilelogo, drawerlistsupportlogo, homebuildlogo, homerentlogo, homeserviceslogo } from "../assets"

const signupArray = [
    {
        id: 1,
        label: "First Name",
        data: "firstname"
    }
    , {
        id: 2,
        label: "Last Name",
        data: "lastname"
    }, {
        id: 3,
        label: "Email",
        data: "email"
    }, {
        id: 4,
        label: "Phone Number",
        data: "phone"
    }, {
        id: 5,
        label: "Qid",
        data: "qid"
    }
]

const homeScreenList = [
    { logo: homerentlogo, title: 'RENT', subtitle: 'The Best Water And Desert Bikes', path: 'TerrainScreen' },
    { logo: homeserviceslogo, title: 'SERVICES', subtitle: 'Towing And Cleaning Service For Containers', path: 'TerrainScreen' },
    { logo: homebuildlogo, title: 'BUILD', subtitle: 'Easily Create Your Own Cabana', path: 'TerrainScreen' }
]

const drawerMenu = [
    { logo: drawerlisthomelogo, title: 'Home' },
    { logo: drawerlistprofilelogo, title: 'My Profile' },
    { logo: drawerlistaboutlogo, title: 'About Us' },
    { logo: drawerlistsupportlogo, title: 'Support' },
    { logo: drawerlistprivacylogo, title: 'Privacy Policy' },
]

const terrain = [
    { id: 1, logo: beachlogo, title: 'BEACH' },
    { id: 2, logo: desertlogo, title: 'DESERT' }
]

const hours = [
    { id: 1, time: '05:00 am' },
    { id: 2, time: '06:00 am' },
    { id: 3, time: '07:00 am' },
    { id: 4, time: '08:00 am' },
    { id: 5, time: '09:00 am' },
    { id: 6, time: '10:00 am' },
    { id: 7, time: '11:00 am' },
    { id: 8, time: '12:00 pm' },
    { id: 9, time: '01:00 pm' },
    { id: 10, time: '02:00 pm' },
    { id: 11, time: '03:00 pm' },
    { id: 12, time: '04:00 pm' },
    { id: 13, time: '05:00 pm' },
    { id: 14, time: '06:00 pm' },
    { id: 15, time: '07:00 pm' },
    { id: 16, time: '08:00 pm' },
    { id: 17, time: '09:00 pm' },
    { id: 18, time: '10:00 pm' },
    { id: 19, time: '11:00 pm' },
    { id: 20, time: '12:00 pm' },
    { id: 21, time: '01:00 am' },
    { id: 22, time: '02:00 am' },
    { id: 23, time: '03:00 am' },
    { id: 24, time: '04:00 am' },
]

const beachVehicleList = [
    { id: 1, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage1, rate: 50 },
    { id: 2, title: '2021 SUPERJET', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage2, rate: 50 },
    { id: 3, title: '2021 GP1800R SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage3, rate: 50 },
    { id: 4, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage4, rate: 50 },
    { id: 5, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage5, rate: 50 },
    { id: 6, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage6, rate: 50 },
    { id: 7, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage7, rate: 50 },
    { id: 8, title: '2021 FX SVHO', company: 'Yamaha', location: 'Abu Hamour,Doha', sourceimage: boatimage8, rate: 50 }
]
export { signupArray, homeScreenList, drawerMenu, terrain, hours, beachVehicleList }