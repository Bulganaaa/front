import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Bulgan');
  const [person, setPerson] = useState ({name:'Dulmaa', age:20});
  const clickHandler = () => {
    setName('boldoo');
    setPerson({name:'Tsetsgee', age:30})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>her name is {person.name} and she is {person.age} years old</Text>
     <View style={styles.buttonContainer}>
      <Button title = 'Update state' onPress={(clickHandler)}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  buttonContainer: {
    marginTop: 20
  }
});


