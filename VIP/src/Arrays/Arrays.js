import { beachlogo, desertlogo, drawerlistaboutlogo, drawerlisthomelogo, drawerlistprivacylogo, drawerlistprofilelogo, drawerlistsupportlogo, homebuildlogo, homerentlogo, homeserviceslogo } from "../assets"

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
export { signupArray, homeScreenList, drawerMenu, terrain }