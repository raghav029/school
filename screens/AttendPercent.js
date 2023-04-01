//importing 
import React from "react";
import { useState , useEffect } from "react";


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
import ProgressCircle from 'react-native-progress-circle';





//const definations
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;




const AttendPercent = ({}) => {
  // const [remarksText, setRemarksText] = useState("");
  const [attendancePercentage, setAttendancePercentage] = useState(75);


  return (
    
    <View style={styles.background}>
      <LinearGradient
        colors={['#b16b00', '#DE8600']}
        start={[0,0]}
        end={[1,1]}
        style={styles.yellowHeader}
      >
        <View>
          <Text style={styles.headerText}>Attendence_Percentage</Text>

            <View style={styles.detailsText1}>
              <Text style={styles.detailsText}>Class : 8</Text>
              <Text style={styles.detailsText}>Section : A</Text> 
         
            </View >   
            <View style={{ width: 100 , top:10 , backgroundColor:"black"}}>
      <Button title="Fill" color='#2c3333' ></Button>
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
    

      
      
          <View style={styles.box}>


          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
    
     
     
          </View>
        </View>
        <View>
          <View style={styles.box}>
          
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
       
       
      
          </View>
        </View>
        <View>
          <View style={styles.box}>
         
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
         
          </View>
        </View>
        <View>
          <View style={styles.box}>
        
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
        
          </View>
        </View>
        <View>
          <View style={styles.box}>
          
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
          
       
          </View>
        </View>
        <View>
          <View style={styles.box}>
        
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
    
     
          </View>
        </View>
        <View>
          <View style={styles.box}>
        
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
          
          </View>
        </View>
        <View>
          <View style={styles.box}>
         
      
          <Text style={styles.text}>Sudarshan S</Text>
        
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
          </View>
        </View>
        <View>
          <View style={styles.box}>
        
          <Text style={styles.text}>Sudarshan S</Text>
          <ProgressCircle
        percent={attendancePercentage}
        radius={22}
        borderWidth={5}
        color="#DE8600"
        shadowColor="#999"
        bgColor="#ffff"
      >
        <Text style={styles.progressText}>{attendancePercentage}%</Text>
      </ProgressCircle>
   
         
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
    progressText: {
        fontSize: 15,

   
      },
    
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
    fontSize:20,
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

  





});

export default AttendPercent;