import {
    beachlogo, boatimage1, boatimage2, boatimage3, boatimage4, boatimage5, boatimage6, boatimage7, boatimage8, cabana1, cabana2, cabana3, cabana4, cabanaaclogo, cabanabathroomlogo, cabanakitchenlogo, cabanaroomlogo, cabansizelogo, desertlogo, drawerlistaboutlogo, drawerlisthomelogo, drawerlistprivacylogo, drawerlistprofilelogo, drawerlistsupportlogo, homebuildlogo, homerentlogo, homeserviceslogo, servicelogo1, servicelogo2, servicelogo3, servicelogo4, towinglogo, washinglogo, cabanaroomfloorlogo,
    cabanawardrobelogo,
    cabanawalllogo,
    cabanawindowsizelogo,
    cabanawindowshutterlogo,
    cabanalifterlogo,
    cabanatoiletlogo,
    cabanaairlogo,
    cabanaoutercoverlogo,
    cabanawatertanklogo,
    cabanatowhooklogo,
    bathroomsizelogo,
    floorlogo1,
    floorlogo2,
    floorlogo3,
    floorlogo4,
    wardrobelogo4,
    wardrobelogo3,
    wardrobelogo2,
    wardrobelogo1,
    wallpaperlogo,
    paintinglogo,
    outercoverlogo1,
    outercoverlogo2,
    editprofilesmalllogo,
    myactivitysmalllogo,
    membershipsmalllogo,
    boatsmallimage
} from "../assets"

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
    { logo: homebuildlogo, title: 'BUILD', subtitle: 'Easily Create Your Own Cabana', path: 'BuildScreen' }
]

const drawerMenu = [
    { logo: drawerlisthomelogo, title: 'Home', path: '' },
    { logo: drawerlistprofilelogo, title: 'My Profile', path: 'MyProfileScreen' },
    { logo: drawerlistaboutlogo, title: 'About Us', path: '' },
    { logo: drawerlistsupportlogo, title: 'Support', path: '' },
    { logo: drawerlistprivacylogo, title: 'Privacy Policy', path: '' },
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

const cabanadata = [
    { id: 1, title: 'FAMILY CABANA', size: '6X4 m2', price: '250', image: cabana1, company: 'Al-Rayyan Co.' },
    { id: 2, title: 'COFFEE SHOP CABANA', size: '6X4 m2', price: '250', image: cabana2, company: 'Al-Sad Co.' },
    { id: 3, title: 'XL FAMILY CABANA', size: '6X4 m2', price: '250', image: cabana3, company: 'Amaar Co.' },
    { id: 4, title: '2021 SVHO CABANA', size: '6X4 m2', price: '250', image: cabana4, company: 'Amaar Co.' },
]

const cabanafeature = [
    { id: 1, logo: cabanakitchenlogo, text: 'Kitchen' },
    { id: 2, logo: cabanaroomlogo, text: 'Rooms' },
    { id: 3, logo: cabanaaclogo, text: 'Ac' },
    { id: 4, logo: cabanabathroomlogo, text: 'Bathroom' },
]

const bathroomsize = [
    { id: 1, title: 'STANDARD', size: '160 x 160 CM2' },
    { id: 2, title: 'MEDIUM', size: '180 x 180 CM2' },
    { id: 3, title: 'LARGE SIZE', size: '200 x 200 CM2' },
]

const customDetails = [
    { id: 1, title: 'CABAN SIZE', case: 'cabansize', logo: cabansizelogo },
    { id: 2, title: 'BATHROOM SIZE', case: 'bathroomsize', logo: bathroomsizelogo },
    { id: 3, title: 'ROOM FLOOR', case: 'roomfloor', logo: cabanaroomfloorlogo },
    { id: 4, title: 'WARDROBE', case: 'wardrobe', logo: cabanawardrobelogo },
    { id: 5, title: 'THE WALL', case: 'thewall', logo: cabanawalllogo },
    { id: 6, title: 'WINDOW SIZE', case: 'windowsize', logo: cabanawindowsizelogo },
    { id: 7, title: 'WINDOW SHUTTERS', case: 'windowshutters', logo: cabanawindowshutterlogo },
    { id: 8, title: 'LIFTERS', case: 'lifters', logo: cabanalifterlogo },
    { id: 9, title: 'BATHROOM TYPE', case: 'bathroomtype', logo: cabanatoiletlogo },
    { id: 10, title: 'CONDITION', case: 'condition', logo: cabanaairlogo },
    { id: 11, title: 'OUTER COVER', case: 'outercover', logo: cabanaoutercoverlogo },
    { id: 12, title: 'WATER TANK', case: 'watertank', logo: cabanawatertanklogo },
    { id: 13, title: 'TOW HOOK', case: 'towhook', logo: cabanatowhooklogo },
    { id: 14, title: 'NAME OF CUSTOMISATION', case: 'customizationname', logo: cabanatowhooklogo },

]

const floorDetails = [
    { id: 1, title: 'PARQUET', logo: floorlogo1 },
    { id: 2, title: 'CARPET', logo: floorlogo2 },
    { id: 3, title: 'MARBLE ALTERNATIVE', logo: floorlogo3 },
    { id: 4, title: 'NOTHING', logo: floorlogo4 },
]
const wardrobe = [
    { id: 1, title: 'SLIDING DOOR', logo: wardrobelogo1 },
    { id: 2, title: 'HINGE DOOR', logo: wardrobelogo2 },
    { id: 3, title: 'CORNER WARDROBE', logo: wardrobelogo3 },
    { id: 4, title: 'WALK-IN-WARDROBE', logo: wardrobelogo4 },
]
const wall = [
    { id: 1, title: 'WALLPAPER', logo: wallpaperlogo },
    { id: 2, title: 'PAINT', logo: paintinglogo },
    { id: 3, title: 'NOTHING', logo: floorlogo4 },

]
const windowsize = [
    { id: 1, title: 'STANDARD', size: '160 x 100 CM2' },
    { id: 2, title: 'MEDIUM', size: '120 x 100 CM2' },
    { id: 3, title: 'LARGE SIZE', size: '200 x 100 CM2' },
]
const windowshutter = [
    { id: 1, title: 'YES', description: 'With Shutters' },
    { id: 2, title: 'NO', description: 'Without Shutters' },

]
const lifters = [
    { id: 1, title: '(X2 LIFTERS)', description: 'Only in the Front' },
    { id: 2, title: '(X4 LIFTERS)', description: 'To All Slides' },

]
const bathroom = [
    { id: 1, title: 'STANDARD', description: 'Classic' },
    { id: 2, title: 'CUSTOM', description: 'Select One' },

]
const condition = [
    { id: 1, title: '(1) TON', },
    { id: 2, title: '(1) TON', },
    { id: 3, title: '(2) TON', },
    { id: 4, title: '(1) TON X 2', },
    { id: 5, title: '(2,5) TON', },
    { id: 6, title: '(2) TON X 2', },
    { id: 7, title: 'WITHOUT', },

]
const outerCover = [
    { id: 1, title: 'GALVANISED IRON', logo: outercoverlogo1 },
    { id: 2, title: 'FIPER', logo: outercoverlogo2 }

]
const waterTank = [
    { id: 1, title: '500 LITER', },
    { id: 2, title: '1000 LITER', },
    { id: 3, title: '1500 LITER', },
    { id: 4, title: '2000 LITER', },
]
const hook = [
    { id: 1, title: 'YES', description: 'With Hook' },
    { id: 2, title: 'NO', description: 'Without Hook' },
]
const myprofileData = [
    { id: 1, logo: editprofilesmalllogo, title: 'Edit Profile', path: 'EditProfileScreen' },
    { id: 2, logo: myactivitysmalllogo, title: 'My Activities', path: 'MyActivityScreen' },
    { id: 3, logo: membershipsmalllogo, title: 'MemberShip', path: 'MemberShipScreen' }
]

const myActivityRentArray = [
    { id: 1, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },
    { id: 2, logo: boatsmallimage, bgcolor: '#FF5F0030', color: '#FF5F00', status: 'Pending', text: 'Desert' },
    { id: 3, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },
    { id: 4, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },
    { id: 5, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },
    { id: 6, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Desert' },
    { id: 7, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },
    { id: 8, logo: boatsmallimage, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Beach' },

]

const myActivityTabs = [
    { id: 1, title: "Rent" },
    { id: 2, title: "Services" },
    { id: 3, title: 'Build' }
]


const myActivityServiceArray = [
    { id: 1, logo: servicelogo1, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Cleaning | 4X6 M2 CABANA', time: 'Morning' },
    { id: 2, logo: servicelogo2, bgcolor: '#FF5F0030', color: '#FF5F00', status: 'Pending', text: 'Cleaning | 4X6 M2 CABANA', time: 'Evening' },
    { id: 3, logo: servicelogo3, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: 'Pulling | 4X6 M2 CABANA', time: 'Morning' },
    { id: 4, logo: servicelogo4, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: '4X6 M2 CABANA', time: 'Morning' },
    { id: 5, logo: servicelogo1, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: '4X6 M2 CABANA', time: 'Morning' },
    { id: 6, logo: servicelogo2, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: '4X6 M2 CABANA', time: 'Morning' },
    { id: 7, logo: servicelogo3, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: '4X6 M2 CABANA', time: 'Morning' },
    { id: 8, logo: servicelogo4, bgcolor: '#0FC1A130', color: '#0FC1A1', status: 'Confirmed', text: '4X6 M2 CABANA', time: 'Morning' },

]
const myActivityBuildArray = [
    { id: 1, color: '#FF5F00', date: '23 Jan 2021', text: 'Custom' },
    { id: 2, color: '#1EC0DE', date: '23 Jan 2021', text: 'Standard' },
    { id: 3, color: '#FF5F00', date: '23 Jan 2021', text: 'Custom' },
    { id: 4, color: '#1EC0DE', date: '23 Jan 2021', text: 'Standard' },
    { id: 5, color: '#FF5F00', date: '23 Jan 2021', text: 'Custom' },
    { id: 6, color: '#1EC0DE', date: '23 Jan 2021', text: 'Standard' },
    { id: 7, color: '#FF5F00', date: '23 Jan 2021', text: 'Custom' },
    { id: 8, color: '#1EC0DE', date: '23 Jan 2021', text: 'Standard' },

]

export { signupArray, homeScreenList, drawerMenu, terrain, hours, beachVehicleList, service, locations, washingTime, cabanservicelist, cabanadata, cabanafeature, bathroomsize, customDetails, floorDetails, wardrobe, wall, windowsize, windowshutter, lifters, bathroom, condition, outerCover, waterTank, hook, myprofileData, myActivityRentArray, myActivityTabs, myActivityServiceArray, myActivityBuildArray }
