import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TeacherScreen = (navigation) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" backgroundColor="#94b49f" />
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <MaterialIcons name="account-circle" size={30} color="black" />
        <Text style={styles.title}>Profile</Text>
      </View>
    </View>
      <View style={styles.background}>
        <LinearGradient
          colors={["#94b49f", "#94b49f"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.yellowHeader}
        >
          <View style={{ height: 20, right: 9, left: 35 }}>
            <View>
            <TouchableOpacity>
                <Image
                  source={require("../image/raghav.jpg")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 60,
                    borderWidth: 2,
                    borderColor: "black",
                    left:100
                  }}
                />
                </TouchableOpacity>
              <Text style={[styles.headerText]}>Raghav Kumar Jha</Text>
              </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["white", "#b8b8b8"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.whiteContainer}
        >
          <ScrollView >
            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>Role :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>Professor</Text>
            </View>

            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>Ph.No :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>7667472706</Text>
            </View>

            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>MailID :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>jraghavkumar029@gmail.com</Text>
            </View>

            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>D.O.J :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>01/01/2023</Text>
            </View>

            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>Role :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>Professor</Text>
            </View>

            <Text style={{marginTop:10,left:10 ,fontFamily:'Rajdhani',fontSize:15}}>Role :</Text>
            <View style={styles.box}>
            <Text style={styles.boxText}>Professor</Text>
            </View>

           </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    box: {
        justifyContent: "space-between",
        backgroundColor: "#E0E0E0",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
     //   marginVertical: 10,
        width: screenWidth - 60,
        borderColor:'black',
        borderWidth:2,
        elevation:5,
        marginBottom:15,
    
        
      },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  menuContainer: {
    position: "absolute",
    right: 0,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 3,
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "black",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 95,
  },
  menuText: {
    fontSize: 14,
    color: "#333333",
  },
  iconContainer: {
    height: screenHeight * 0.15,
    width: screenWidth * 0.3,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 20,
    padding: 8,
    margin: 12,
    width: 120,
  },
  iconText: {
    fontSize: 18,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "whiteF",
  },
  yellowHeader: {
    flexDirection: "row",
    height: screenHeight / 5,
    //paddingTop: screenHeight*0.05,
  },
  headerText: {
    fontSize: 24,
    color: "black",
    textDecorationLine: "underline",
    left:50,
    fontFamily:'Rajdhani',
  },

  whiteContainer: {
    position: "absolute",
    top: screenHeight / 5.3,
    bottom: 0,
    left: 18,
    right: 18,
    width: screenWidth - 36,
    borderColor:'black',
    // height: screenHeight / 1.3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    transform: [{ translateY: -20 }],
    zIndex:1,
    borderWidth:1,
  },
  containerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    height: 50,
    width: 50,
  },

  grid: {
    // flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  headerpic: {
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: '#94b49f',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily:'Rajdhani',
    marginLeft: 5,
  },
});



export default TeacherScreen;