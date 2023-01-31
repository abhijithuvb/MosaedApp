import { beachlogo, boatimage1, boatimage2, boatimage3, boatimage4, boatimage5, boatimage6, boatimage7, boatimage8, desertlogo, drawerlistaboutlogo, drawerlisthomelogo, drawerlistprivacylogo, drawerlistprofilelogo, drawerlistsupportlogo, homebuildlogo, homerentlogo, homeserviceslogo, servicelogo1, servicelogo2, servicelogo3, servicelogo4, towinglogo, washinglogo } from "../assets"

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
    { logo: homeserviceslogo, title: 'SERVICES', subtitle: 'Towing And Cleaning Service For Containers', path: 'ServiceScreen' },
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
const service = [
    { id: 1, logo: washinglogo, title: 'WASHING' },
    { id: 2, logo: towinglogo, title: 'TOWING' }
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

const locations = [
    { id: 1, location: 'Abu Dhalouf' },
    { id: 2, location: 'Abu Hamour' },
    { id: 3, location: 'Al Rayyan' },
    { id: 4, location: 'Ain Khaled' },
    { id: 5, location: 'Ain Sinan' },
    { id: 6, location: 'Baaya' },
    { id: 7, location: 'Bani Hajer' },
    { id: 8, location: 'Barahat Al Jufairi' },
    { id: 9, location: 'Bu Fasseela' },
    { id: 10, location: 'Dahl Al Hamam' },
    { id: 11, location: 'Doha International Airport' },
    { id: 12, location: 'Doha Port' },
    { id: 13, location: 'Duhail' },
    { id: 14, location: 'Fuwayrit' },
    { id: 15, location: 'Fereej Abdel Aziz' },
    { id: 16, location: 'Fereej Bin Durham' },
    { id: 17, location: 'Fereej Bin Mahmoud' },
    { id: 18, location: 'Fereej Bin Omran' },
    { id: 19, location: 'Gharrafat Al Rayyan' },
    { id: 20, location: 'Hamad Medical City' },
    { id: 21, location: 'Hazm Al Markhiya' },
    { id: 22, location: 'zghawa (Al Rayyan)' },
    { id: 23, location: 'Jelaiah' },
    { id: 24, location: 'Jeryan Jenaihat' },
    { id: 25, location: 'Jeryan Nejaima' },
    { id: 26, location: 'Khawr al Udayd' },
    { id: 27, location: 'Al Karaana' },
    { id: 28, location: 'Leabaib' },
    { id: 29, location: 'Lebday' },
    { id: 30, location: 'Madinat Al Kaaban' },

]

const washingTime = [
    { id: 1, title: 'MORNING', timing: '7:00 am to 12:00 pm' },
    { id: 2, title: 'MIDDAY', timing: '12:00 pm to 3:00 pm' },
    { id: 3, title: 'AFTERNOON', timing: '3:00 am to 7:00 pm' },
    { id: 4, title: 'EVENING', timing: '7:00 pm to 10:00 am' }
]

const cabanservicelist = [
    { id: 1, title: 'BADRI PULLING', description: 'Lorem Ipsum has been the industry standard', rate: 250, logo: servicelogo1 },
    { id: 2, title: 'BADRI PULLING', description: 'Lorem Ipsum has been the industry standard', rate: 250, logo: servicelogo2 },
    { id: 3, title: 'BADRI PULLING', description: 'Lorem Ipsum has been the industry standard', rate: 250, logo: servicelogo3 },
    { id: 4, title: 'BADRI PULLING', description: 'Lorem Ipsum has been the industry standard', rate: 250, logo: servicelogo4 },
]
export { signupArray, homeScreenList, drawerMenu, terrain, hours, beachVehicleList, service, locations, washingTime, cabanservicelist }