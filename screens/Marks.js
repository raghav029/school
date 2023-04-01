import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 
import { useState } from 'react';



const MarksPage = () => {
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const handleClassChange = (itemValue) => {
    setSelectedClass(itemValue);
  
    setSelectedSubject('Subject');
  };
  return (
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Marks: FA-I</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Extract</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
  <View style={styles.dropdownContainer}>
  <Picker
            style={styles.dropdown}
            selectedValue={selectedClass}
            onValueChange={handleClassChange}
          >
      <Picker.Item label="Class" value="class" />
      <Picker.Item label="Class 1" value="class1" />
      <Picker.Item label="Class 2" value="class2" />
      <Picker.Item label="Class 3" value="class3" />
      <Picker.Item label="Class 4" value="class4" />
      <Picker.Item label="Class 5" value="class5" />
      <Picker.Item label="Class 6" value="class6" />
      <Picker.Item label="Class 7" value="class7" />
      <Picker.Item label="Class 8" value="class8" />
      <Picker.Item label="Class 9" value="class9" />
    </Picker>
  </View>
  <View style={styles.dividerrow} />
  <View style={styles.dropdownContainer}>
  <Picker
            style={styles.dropdown}
            selectedValue={selectedSubject}
            onValueChange={(itemValue, itemIndex) => setSelectedSubject(itemValue)}
            enabled={selectedClass !== 'Subject'} 
          >
            <Picker.Item label="Subject" value="Subject" />
      <Picker.Item label="Maths" value="Maths" />
      <Picker.Item label="Science" value="Science" />
      <Picker.Item label="English" value="English" />
      <Picker.Item label="All" value="All" />
    </Picker>
    </View>
  
  <View style={styles.dividerrow} />
  <TouchableOpacity style={styles.button1}>
    <Text style={styles.buttonText}>UPDATE</Text>
  </TouchableOpacity>

</View>

<View style={styles.outerContainer}>

      <View style={styles.innerContainer}>
        <ScrollView style={{width:400}}>
      
      <View style={styles.infoContainer}>
        
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
</View>
      </View>
      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
</View>
      </View>
      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
</View>
      </View>
      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
</View>
      </View>

      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
    
</View>

      </View>
      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
    
</View>

      </View>
      
      
      <View style={styles.infoContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10,padding:5,
    color: '#14213d',
    fontSize: 16}}>
    <Text style={styles.infoTitle}>Pratik Sable</Text>
    <Text style={styles.infoMarks}>30/50</Text>
    </View>
    
</View>
</ScrollView>
     
      </View>
    
      </View>
  
  
     
    </View>
    
   
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'white',
  },
  infoContainer: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
    paddingRight:10,
    elevation:15,
    width:370,
    paddingTop:15,
    marginLeft:5, 
    marginTop:50,
    
  },
  infoTitle: {
    color: '#14213d',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    padding:5,
    color: '#14213d',
    fontSize: 16,
  },
  infoMarks:{
    color: '#14213d',
    fontSize: 15,
    marginBottom: 10,

  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  outerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:20,
    height:740,
    marginTop:20,
    width:380,
    marginLeft:20,
  },
  innerContainer: {
    alignItems: 'flex-start',
    width: 197,
    height: 740,
    backgroundColor: '#ffb703',
    // borderBottomRightRadius:20,
    // borderTopRightRadius:20,
    borderRadius:20,
  },
  button1: {
    backgroundColor: '#008080',
    height: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 25,
  },
  divider: {
    marginTop:4,
    height: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text:{
    fontSize:1,
  },
  dropdownContainer: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    marginRight: 11,
    fontSize:5,
  },
  dividerrow: {
    width: 2,
  },
    dropdown: {
      backgroundColor:'gold',
      width: 135,
      height: 30,
      marginRight:5,
    },
  
});

export default MarksPage;