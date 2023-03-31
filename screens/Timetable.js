//importing 
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
} from "@expo/vector-icons";

import { Divider} from "@rneui/themed";
import { ScreenWidth } from "@rneui/themed/dist/config";
import { processFontFamily, useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//const definations
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const Timetable = () => {


  return (
    
    <View style={styles.background}>
      <LinearGradient
        colors={['#F8F8F8', '#B87333']}
        start={[1,1]}
        end={[0,0]}
        style={styles.yellowHeader}
      >
        <View style={{borderBottomEndRadius:120}}>
          <Text style={[styles.headerText]}>Time Table</Text>
          <Divider width={3} right={ScreenWidth / 3} paddingLeft={50} color='white' />
          
            <View style={styles.detailsText1}>
              <Text style={styles.detailsText}>Class : 8</Text>
              <Text style={styles.detailsText}>Section : A</Text>
              
            </View >
            <View style={styles.week}>
            
            <View style={styles.day}>
                <TouchableOpacity >
                <Text style={styles.circleText}>Mon</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={styles.day}>
                          
                          <TouchableOpacity >
                <Text style={styles.circleText}>Tue</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={styles.day}>
                          <TouchableOpacity >
                <Text style={styles.circleText}>Wed</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={styles.day}>
                          <TouchableOpacity >
                <Text style={styles.circleText}>Thu</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={styles.day}>
                          <TouchableOpacity >
                <Text style={styles.circleText}>Fri</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={styles.day}>
                          <TouchableOpacity >
                <Text style={styles.circleText}>Sat</Text>
                          </TouchableOpacity>
                          </View>
                          </View>
            
          </View>
      </LinearGradient>
      <View style={styles.whiteContainer}>
        <ScrollView showsVerticalScrollIndicator={false} >
      <View>
          <View style={styles.box}>
            <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70} />
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.box}>
          <View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            <View>
                <Text style={{marginLeft:15,fontSize: 18}}>to</Text>
            </View>
            </View>
            <View>
            <Text style={styles.boxText}>9:00</Text>
            </View>
            </View>
            <View style={styles.icon}>
            <Divider orientation="vertical" width={3} marginRight={70}/>
              <View style={styles.subteacher}>
                  <View>
                    <Text style={{fontWeight:'700'}}>Science</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'300'}}>Raghav kumar jha</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        
        </ScrollView>

      </View>
      
    </View>
 
  );
};


//design
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  detailsText: {
    paddingTop: 10,
    color: "white",
    marginRight:40,
  },
  yellowHeader: {
    flexDirection:'row',
    height: screenHeight / 3.5,
    paddingTop: screenHeight * 0.05,
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    color: "black",

    
  },
  whiteContainer: {
    position: "absolute",
    top: screenHeight / 3.7,
    width: screenWidth-24 ,
    height: screenHeight / 1.28,
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
    elevation:999990,
    borderColor: 'black',
    borderWidth:1,
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
    height:screenHeight-700,
    paddingBottom:10,

    
  },
  boxText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
 
  },
  icon: {
    flexDirection: "row",

  },
  headerbox:{
    flexDirection: "row",
    justifyContent:'space-around',
    
  },
  detailsText1:{
    flexDirection: "row",
  },


  circleText: {
    fontSize: 15,
    color: '#D3D3D3',
    
    
  },
  day:{
    flexDirection: "row",
    justifyContent:'space-around',
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 25,
    elevation: 10,
    borderColor: 'white',

  },
  week:{
    
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',


  },
  subteacher:{
    justifyContent:'center',
    alignItems:'center',

  },
});

export default Timetable;