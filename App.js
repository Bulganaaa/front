import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Bulgan');
  const [age, setAge] = useState('20');  


  return (
    <View style={styles.container}>
      <Text style={styles.sign}>This is sign up form</Text>
      <Text> Enter name:</Text>
      <TextInput 
      multiline
      style={styles.inputBox}
      placeholder='e.g. John Doe'
      onChangeText={(val) => setName(val)} />
      <Text> Enter age:</Text>
      <TextInput 
      style={styles.inputBox}
      keyboardType='numeric'
      placeholder='e.g. 99'
      onChangeText={(val) => setAge(val)} />
      <Text>name:{name} age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  inputBox:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    color: '#777',
  },
  sign: {
    margin:50,
    color: 'black',
  }

});


