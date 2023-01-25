import { View, Text, Dimensions, FlatList, Pressable, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker'
import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker'
import { useDispatch } from 'react-redux';

import Header from './Header';
import { backlogo, calendar, downarrow, qar, attachment, } from '../Images/index';
import TextBox from './Reusable/TextBox';
import CustomButton from './Reusable/CustomButton';
import { HEIGHT } from './constants/constants'
import SponserShipFormComponent from './SponserShipFormComponent';
import SponserShipSelect from './SponserShipSelect';
import { sponserShipFunction } from '../redux/actions/apiAction';


const data = [
  {
    id: 1,
    label: 'Worker Full Name',
    keyboard: 'default', obj: "name",
    errorlabel: "nameError", type: 'workername'


  },
  {
    id: 2,
    label: 'Date of Birth',
    logo: calendar,
    keyboard: 'numeric', obj: 'dob',
    errorlabel: "dobError", type: 'dateofbirth'
  },
  {
    id: 3,
    label: 'Nationality',
    logo: downarrow, keyboard: 'default', obj: "nationality",
    errorlabel: "nationError", type: 'nationality'
  },
  {
    id: 4,
    label: 'Social Status',
    logo: downarrow, keyboard: 'default', obj: "social",
    errorlabel: "socialError", type: 'social status'
  },
  {
    id: 5,
    label: 'Hourly rate',
    logo: qar,
    keyboard: 'default', obj: "hourlyrate",
    errorlabel: "rateError", type: 'hourly rate'
  },
  {
    id: 6,
    label: 'Experience',
    keyboard: 'default', obj: "experience",
    errorlabel: "experienceError", Height: HEIGHT * 0.12, type: 'experience'
  },
];

const SponserShip = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const countries = ['India', 'Japan', 'kroasia', 'Qatar']
  const status = ['Marriner', 'Army', 'Police', 'Software Engineer']

  const [details, setdetails] = useState({ name: '', dob: new Date(), nationality: '', social: '', hourlyrate: '', experience: '', document: "", image: "" })
  const [errors, setErrors] = useState({
    nameError: "", dobError: '', nationError: '', socialError: "", rateError: '', experienceError: ""
  })
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const [path, setPath] = useState("")

  const renderComponent = (type, index) => {
    switch (type) {
      case "workername":
        return <TextBox key={index} label="WorkerFullName" setState={(text) => setdetails({ ...details, name: text })} />
      case "dateofbirth":
        return <SponserShipFormComponent key={index} label="Date Of Birth" description={details.dob.toLocaleDateString()} logo={calendar} popUpFunction={() => {
          showDatePicker()
          // alert("uyyo")
        }} />
      case "nationality":
        return <SponserShipSelect dropdownData={countries} key={index} label="Nationality" setState={(country) => setdetails({ ...details, nationality: country })} />
      case 'social status':
        return <SponserShipSelect dropdownData={status} key={index} label="Social Status" setState={(stat) => setdetails({ ...details, social: stat })} />
      case 'hourly rate':
        return <TextBox key={index} label="Hourly Rate" logo={qar} setState={(text) => setdetails({ ...details, hourlyrate: text })} />

      case 'experience':
        return <TextBox key={index} label="Experience" Height={HEIGHT * 0.12} setState={(text) => setdetails({ ...details, experience: text })} />


    }

  }

  const validation = () => {
    if (details.name !== "" && details.dob !== "" && details.nationality !== "" && details.social !== "" && details.hourlyrate !== "" && details.experience !== "" && details.image !== "" && details.document !== "") {
      navigation.navigate('sponserdetails', { details, path })
    } else {
      alert("fill required fields")
    }
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false)
  }
  const showDatePicker = () => {
    setDatePickerVisible(true)
  }
  const handleConfirm = (date) => {
    console.log("date==>>", date)
    details.dob = date;
    setdetails({ ...details })
    hideDatePicker()
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sponserShipFunction(details))
  }, [details])

  return (
    <>
      <DatePicker
        modal
        open={datePickerVisible}
        onConfirm={(date) => handleConfirm(date)}
        onCancel={() => hideDatePicker()}
        date={details.dob}
      />
      <View style={{ backgroundColor: '#FFFFFF' }}>

        <View style={{}}>
          <LinearGradient
            colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0.28, y: 0.69 }}
            end={{ x: 0.14, y: 0.82 }}
            style={{
              position: 'absolute',
              bottom: HEIGHT * 0.63,
              right: -HEIGHT * 0.76,
              width: HEIGHT * 2,
              height: HEIGHT * 2,
              borderRadius: HEIGHT,
            }}></LinearGradient>
          <View style={{ marginTop: HEIGHT * 0.01 }}>
            <Header
              leftlogo={backlogo}
              title="Sponsorship Transfer"
              navigation={() => navigation.navigate('servicehome')}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: HEIGHT * 0.2,
                height: HEIGHT * 0.07,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: HEIGHT * 0.02,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Please fill in the fields below
              </Text>
            </View>
          </View>
          <View style={{}}>
            <ScrollView style={{ height: HEIGHT * 0.635, marginTop: HEIGHT * 0.03 }} showsVerticalScrollIndicator={false}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: HEIGHT * 0.028,
                }}>
                {data.map((item, index) => renderComponent(item.type, index))}
                <Pressable
                  style={{
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    width: WIDTH * 0.83,
                    height: HEIGHT * 0.07,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#3D989F',
                    marginTop: HEIGHT * 0.009,
                    marginBottom: HEIGHT * 0.02,
                    borderRadius: HEIGHT * 0.009,
                  }}
                  onPress={() => DocumentPicker.pick({
                    type: [DocumentPicker.types.pdf]
                  }).then((source) => {
                    details.document = source[0].name
                    setdetails({ ...details })
                    console.log("source====<<<<<>>>>", source[0].name)
                    console.log("source====={}", source)
                  })}

                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={attachment} />
                    <Text
                      style={{
                        fontSize: HEIGHT * 0.02,
                        marginLeft: HEIGHT * 0.01,
                        color: '#3D989F',
                      }}>
                      Attachment CV
                    </Text>

                  </View>
                  <Text style={{ fontSize: HEIGHT * 0.008, marginBottom: -HEIGHT * 0.017, color: '#3D989F' }}>{details.document}</Text>
                </Pressable>
                <Pressable
                  style={{
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    width: WIDTH * 0.83,
                    height: HEIGHT * 0.07,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#3D989F',
                    marginTop: HEIGHT * 0.009,
                    marginBottom: HEIGHT * 0.02,
                    borderRadius: HEIGHT * 0.009,
                  }}
                  onPress={() => ImageCropPicker.openPicker({
                    mediaType: 'photo'
                  }).then((source) => {
                    details.image = source.filename
                    setdetails({ ...details })
                    console.log("source====>>>>", source)
                    setPath(source.sourceURL)
                  })}

                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={attachment} />
                    <Text
                      style={{
                        fontSize: HEIGHT * 0.02,
                        marginLeft: HEIGHT * 0.01,
                        color: '#3D989F',
                      }}>
                      Worker Image
                    </Text>
                  </View>
                  <Text style={{ fontSize: HEIGHT * 0.008, marginBottom: -HEIGHT * 0.017, color: '#3D989F' }}> {details.image} </Text>
                </Pressable>
              </View>
            </ScrollView>

          </View>
          <View style={{
            borderRadius: HEIGHT * 0.02, overflow: 'hidden', height: HEIGHT * 0.16, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -HEIGHT * 0.15, width: WIDTH, backgroundColor: "#FFFFFF", shadowColor: 'black',
            shadowOffset: { width: 20, height: 40 },
            shadowOpacity: 0.8,
            shadowRadius: 3, borderWidth: 0.5
          }}>
            <CustomButton value="Submit" errors={errors} onPress={() => {/* setVisible(!visible) */
              validation()
            }} />
          </View>


        </View>




      </View>
    </>
  );
};

export default SponserShip;
