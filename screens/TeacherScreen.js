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
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
// import { ScreenWidth } from "@rneui/themed/dist/config";
// import { ScreenWidth } from "@rneui/themed/dist/config";
// import AppLoading from "expo-app-loading";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TeacherScreen = (navigation) => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [showMenu, setShowMenu] = useState(false);
const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    }
  
    const handleProfilePress = () => {
      // Handle profile option press
    }
  
    const handleLogoutPress = () => {
      // Handle logout option press
    }
  
    const handleLibraryPress = () => {
      // Handle library option press
    }

    
  const handleIconPress = (index) => {
    
  };

  const renderIcon = (text, iconName, color, index) => {
    let IconComponent = FontAwesome;
    if (iconName.startsWith("md-")) {
      IconComponent = MaterialIcons;
      iconName = iconName.slice(3);
    } else if (iconName.startsWith("mcm-")) {
      IconComponent = MaterialCommunityIcons;
      iconName = iconName.slice(4);
    }

    return (
      <TouchableOpacity
        key={index}
        style={styles.iconContainer}
        onPress={() => handleIconPress(index)}
      >
        <IconComponent name={iconName} size={50} color={color} />
        <Text style={styles.iconText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" backgroundColor="#94b49f" />
      <View style={styles.background}>
        <LinearGradient
          colors={["#94b49f", "#94b49f"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.yellowHeader}
        >
          <View style={{ height: 20, right: 9, left: 35 }}>
            <View>
              <Text style={[styles.headerText]}>Raghav Kumar Jha</Text>

              <View style={styles.detailsText1}>
                <Text style={styles.detailsText}>Class : 8</Text>
                <Text style={styles.detailsText}>Section : A</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={toggleMenu}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  
                }}
              >
                <Image
                  source={require("../image/raghav.jpg")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 60,
                    borderWidth: 2,
                    borderColor: "black",
                    marginBottom: 100,
                  }}
                />
                </TouchableOpacity>
                
                {showMenu && (
  <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>Logout</Text>
    </TouchableOpacity>
    
    
  </View>
  
)}
              </View>
              {/* {isDropdownOpen && (
                <View>
                  <TouchableOpacity onPress={handleProfilePress}>
                    <Text>Profile</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleLogoutPress}>
                    <Text>Logout</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleLibraryPress}>
                    <Text>Library</Text>
                  </TouchableOpacity>
                </View>
              )} */}
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#b8b8b8", "#b8b8b8"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.whiteContainer}
        >
          <ScrollView contentContainerStyle={styles.grid}>
            <View style={{ height: 20 }}></View>
            <View style={styles.iconRow}>
              {renderIcon("Students", "users", "#FFC107", 0)}
              <View style={{ width: 20 }}></View>
              {renderIcon("Marks", "md-trending-up", "#9C27B0", 1)}
            </View>
            <View style={styles.iconRow}>
              {renderIcon(
                "Attendance",
                "mcm-calendar-check-outline",
                "#4CAF50",
                2
              )}
              <View style={{ width: 20 }}></View>
              {renderIcon(
                "Class Time Table",
                "mcm-calendar-clock",
                "#F44336",
                3
              )}
            </View>
            <View style={styles.iconRow}>
              {renderIcon("Personal Time Table", "md-schedule", "#2196F3", 4)}
              <View style={{ width: 20 }}></View>
              {renderIcon("Remarks", "mcm-comment-text-outline", "#FF9800", 5)}
            </View>
            <View style={styles.iconRow}>
              {renderIcon("Personal Time Table", "md-schedule", "#2196F3", 6)}
              <View style={{ width: 20 }}></View>
              {renderIcon("Remarks", "mcm-comment-text-outline", "#FF9800", 7)}
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    // textDecorationLine: 'underline',
    // fontFamily: "Rajdhani",a
    paddingRight: 100,
    textDecorationLine: "underline",
  },

  whiteContainer: {
    position: "absolute",
    top: screenHeight / 5.3,
    bottom: 0,
    left: 18,
    right: 18,
    width: screenWidth - 36,
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
});

const GridItem = ({ icon, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <Image source={icon} style={styles.gridItemImage} />
      <Text style={styles.gridItemText}>{description}</Text>
    </TouchableOpacity>
  );
};

export default TeacherScreen;