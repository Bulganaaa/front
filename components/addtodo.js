import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        placeholderTextColor={'#888'}
        onChangeText={changeHandler}
      />
      <Button title='add todo' color='coral' onPress={() => submitHandler(text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: 'black'
        }   
    })

