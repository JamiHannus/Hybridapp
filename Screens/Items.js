import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Button,ScrollView,View,TextInput } from 'react-native';
import Item from '../Components/Item';
import {Picker} from '@react-native-picker/picker';
export function Items({route,navigation}) {
  
useEffect(() => { 
  }, []);

const {apiURI} =route.params; 


const [allItems, SetAllItems] = useState('');
const [hasdata, SetHasdata] = useState(false);
const [category, setCategory] = useState(0);  
const [location, setLocation] = useState('');  


    const ItemFetch= () => {
          if (category ==0 && location ==""){
            //no parameters get some items
            address=apiURI+ '/items/0'
                }
      else if( category == 0 && !(location == "")){
            //location has changed
            address=apiURI+'/items/location/'+location
            }
      else if (location=="" && !(category==0)){
        //category has changed
        address=apiURI+'/items/category/'+category
      }
      else{
          //both have changed
          let add=location+'/'+category;
          address=apiURI+'/items/multi/'+add;
      }
    console.log(address);
    fetch(address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      alert('YAY');
      SetAllItems(data);
      SetHasdata(true);
      console.log(hasdata);
    })
    .catch((error) => {
      alert('NAY');
      console.error('Error:', error);
    });
  }
    return (
      
      <ScrollView style={{ flex:1,marginTop: 10, width:"100%", flexDirection:"column"}}> 
       <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login Screen')}
        /> 
      <View style={styles.view}>
        
        <Text  style={styles.text} >Search by category</Text>
        <Picker 
        style= {styles.picker }
        selectedValue={category}
        onValueChange={(itemValue) =>
          setCategory(itemValue)}>
          <Picker.Item label="All categories" value={0} />
          <Picker.Item label="Furniture" value="Furniture" />
          <Picker.Item label="Clothes" value="Clothes" />
          <Picker.Item label="Car parts" value="Car parts" />
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Other" value="Other" />
          </Picker>
          <Text style={styles.text}>Search by location</Text>
          <TextInput
          style={ styles.input }
          value={ location }
          placeholder="Can be empty"
          onChangeText={ value => setLocation(value)}
         />
        <Button title="Get some Items" onPress={() => ItemFetch()}/>     
        { hasdata && allItems.map((item,index) =><Item {...item} key={index}></Item>)}
      </View>
    </ScrollView>
    )
  };
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  picker:{
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  view:{
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    flexDirection:"column",
  },
    })
