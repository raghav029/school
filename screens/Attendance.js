//importing 
import React from "react";
import { useState } from "react";
import { Calendar } from 'react-native-calendars';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,

} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
} from "@expo/vector-icons";

import { Divider} from "@rneui/themed";
import { ScreenHeight, ScreenWidth } from "@rneui/themed/dist/config";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
//const definations
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const Attend = () => {
  // const [remarksText, setRemarksText] = useState("");
  const [checkboxStates, setCheckboxStates] = useState([
    false, 
    false, 
    false, 
    false, 
    false, 
    false, 
    false, 
    false, 
    false, 
    // checkbox 1

  ]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxPress = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };
  const handleSelectAll = () => {
    const newCheckboxStates = checkboxStates.map((newCheckboxStates) => {
      return !selectAll;
    });
    setCheckboxStates(newCheckboxStates);
    setSelectAll(!selectAll);
  };

    //present date 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const currentDate = new Date().toISOString().substring(0, 10);

   

  return (
    
    <View style={styles.background}>
      <LinearGradient
        colors={['#b16b00', '#DE8600']}
        start={[0,0]}
        end={[1,1]}
        style={styles.yellowHeader}
      >
        <View>
          <Text style={styles.headerText}>Fill Attendence</Text>

            <View style={styles.detailsText1}>
              <Text style={styles.detailsText}>Class : 8</Text>
              <Text style={styles.detailsText}>Section : A</Text> 
           
            </View >   
            <View style={{ flex: 1 }}>
      {/* <Calendar
        markedDates={{ [currentDate]: { selected: true, selectedColor: '#008080' } }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      /> */}
      <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 10, left:130,top:20 }}>
Date:  {selectedDate.toISOString().substring(0, 10)}
</Text>
    </View>  
            <View>
            </View>
            <View>
                
            </View>   
          </View>
      </LinearGradient>
      <View style={styles.whiteContainer}>
        <ScrollView showsVerticalScrollIndicator={false} >
      <View>
      <Text style={{left: 50, fontWeight: 600}}>Select All</Text>
            <Checkbox
              value={selectAll}
              color={selectAll ? "#555A54" : undefined}
              onValueChange={() => handleSelectAll()}
              style={{ left:20,bottom: 15}}
            />
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[0]}
                color={checkboxStates[0] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(0)}
                style={styles.boxcheck}
              />
         
         
          <Text style={styles.text}>Sudarshan S</Text>
      
     
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[1]}
                color={checkboxStates[1] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(1)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
       
       
      
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[2]}
                color={checkboxStates[2] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(2)}
                style={styles.boxcheck}
              />
         
          <Text style={styles.text}>Sudarshan S</Text>
         
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[3]}
                color={checkboxStates[3] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(3)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
         
        
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[4]}
                color={checkboxStates[4] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(4)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
          
       
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[5]}
                color={checkboxStates[5] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(5)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
       
    
     
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[6]}
                color={checkboxStates[6] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(6)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
         
          
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[7]}
                color={checkboxStates[7] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(7)}
                style={styles.boxcheck}
              />
      
          <Text style={styles.text}>Sudarshan S</Text>
        
       
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <Checkbox
                value={checkboxStates[8]}
                color={checkboxStates[8] ? "#DE8600" : undefined}
                onValueChange={() => handleCheckboxPress(8)}
                style={styles.boxcheck}
              />
          <Text style={styles.text}>Sudarshan S</Text>
         
         
          </View>
        </View>
        
        </ScrollView>

      </View>
      <View style={{top:ScreenHeight/1.5 , width: 100 ,left: ScreenWidth/3,}}>
      <Button title="Done" color='#DE8600'></Button>
      </View>
  

      
    </View>
 
  );
};


//design
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  detailsText: {
    paddingTop: 10,
    color: "white",
    marginRight:40,
    fontSize: 18,
  },
  yellowHeader: {
    flexDirection:'row',
    height: screenHeight / 3.5,
    paddingTop: screenHeight * 0.05,
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
    
  },
  wrapper: {
   flexDirection:'row',
   borderColor:'black',
   
   borderWidth:1,
    alignContent: "center",
 
  },
  whiteContainer: {
    position: "absolute",
    top: screenHeight / 3.9,
    width: screenWidth-24 ,
    height: screenHeight / 1.37,
    backgroundColor: "white",
    paddingTop: 15,
    //   justifyContent: 'center',
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ translateY: -20 }],
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    left:12,
    right:12,
    paddingBottom: 15,
    elevation: 10,
    borderColor: 'black',
  },
  box: {
    flexDirection: "row",

    //   alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    width: screenWidth - 60,
    borderColor:'black',
    borderWidth:1,
    elevation:5,
    marginBottom:15,
    height:70,
    paddingBottom:10,

    
  },
  boxText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
 
  },
  text:{
    marginTop: 10,
    fontWeight: 600,
  },
  // icon: {
  //   flexDirection: "row",

  // },
  headerbox:{
    flexDirection: "row",
    justifyContent:'space-around',
  },
  detailsText1:{
    flexDirection: "row",
  },
 
  boxcheck:{
    marginTop: 8,
    marginRight: 5,
  },


  





});

export default Attend;