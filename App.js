import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  //ScrollView,
  FlatList,
  TouchableOpacity

} from 'react-native';

 export default function App() {
  const [people, setPeople] = useState([
    {name: 'boldoo', id: '1'},
    {name: 'tsetsgee', id: '2'},
    {name: 'dorj', id: '3'},  
    {name: 'bat', id: '4'},
    {name: 'baldan', id: '5'},
    {name: 'dulam', id: '6'},
    {name: 'dondog', id: '7'},
  ]);

  const pressHandler = (id) => {
      console.log(id);
      setPeople((prevPeople) =>  {
        return prevPeople.filter(person => person.id != id);
      });
  }


  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item)=> item.id} 
        data={people}
        renderItem={({item})=>(
            <TouchableOpacity  onPress={() => pressHandler(item.id)}>
              <Text style ={styles.item}>{item.name}</Text>
            </TouchableOpacity>   
       )}
      />
      {/* <ScrollView>
      {people.map((item)=> {
        return(
          <View id={item.id}>
            <Text style ={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20, 
  },
  item: {
  marginTop: 24,
  padding: 30,
  backgroundColor:'pink',
  fontSize: 24,
  marginHorizontal: 15
  }
});



