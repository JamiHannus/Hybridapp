import React,{ useState } from 'react';
import {SafeAreaView, StyleSheet,Text,Button,TextInput,ScrollView,View} from 'react-native';
import ImageSelector from '../Components/ImageSelector';
import {Picker} from '@react-native-picker/picker';



export function NewItem({route,navigation}) {
const {token} =route.params;
const {apiURI} =route.params;

async function sendData(url) {
 
  const formData  = new FormData();
  formData.append('title', title);
  formData.append('description',description );
  formData.append('category',category );
  formData.append('location',location );
  formData.append('deliverytype',deliverytype );
  formData.append('price', price);
  picture.forEach(image =>{
    formData.append('image',{
      uri:image,
      type:'image/jpg',
      name:'image'
    });
  })

console.log(formData);
console.log(url);
  const response = await fetch(url+'/items', {
    method: 'POST',
    headers: {
      "Authorization": 'Bearer ' + token},
    body: formData
  })
  .then(response => { 
    if (response.ok == false) {
      throw new Error("HTTP Code " + response.status + "- " + JSON.stringify(response));
    }
    return response.json();
  })
  .then(res => {
    console.log(res);
    console.log("ok")
    alert("Item is posted")
   
  })
  .catch(error => {
    console.log("Error message:")
    console.log(error.message)
    console.log(error)
  });
}

const [title, setTitle] = useState("Chair");
const [description, setDescription] = useState("small red chair");
const [category, setCategory] = useState("Other");
const [location, setLocation] = useState("Oulu");
const [price, setPrice] = useState("10");
const [deliverytype, setDeliveryType] = useState("Pick up");
const [picture , setPictures] = useState([]);


//get the picture uri from image selector and save it in state
const handleCallback = (childData) =>{
  var joined =[...picture,childData];
  setPictures(joined);
}
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView style={styles.scrollView}>
      <Text style={ styles.text }>Item title</Text>
      <TextInput
        style={ styles.input }
        value={ title }
        placeholder="Table"
        onChangeText={ value => setTitle(value)}
      />
      <Text style={ styles.text }>Item description</Text>
      <TextInput
        style={ styles.input }
        value={ description }
        placeholder="small red chair"
        onChangeText={ value => setDescription(value)}
      />
      <Text style={ styles.text }>Location of the item</Text>
      <TextInput
        style={ styles.input }
        value={ location }
        placeholder="Location"
        onChangeText={ value => setLocation(value)}
      />
      <Text style={ styles.text }>Price in Euros</Text>
      <TextInput
        style={ styles.input }
        value={ price }
        placeholder="100 euros"
        onChangeText={ value => setPrice(value)}
      />
      <Text style={ styles.text }>Category</Text>
      <View 
      style={styles.view}>
        <Picker 
        style={{height: 50}}
        selectedValue={category}
        onValueChange={(itemValue) =>
          setCategory(itemValue)}>
          <Picker.Item label="Furniture" value="Furniture" />
          <Picker.Item label="Clothes" value="Clothes" />
          <Picker.Item label="Car parts" value="Car parts" />
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Other" value="Other" />
          </Picker>
      </View>
      
      <Text style={ styles.text }>Delivery type</Text>
      <View style={styles.view}>
      <Picker
        style={{height: 50}}
        selectedValue={deliverytype}
        onValueChange={(itemValue) =>
          setDeliveryType(itemValue)}>
          <Picker.Item label="By mail" value="By mail" />
          <Picker.Item label="Pick up" value="Pick up" />
          </Picker>
        </View>
      <ImageSelector handlepictures ={handleCallback} ></ImageSelector>
      <Button
        title="Submit"
        onPress={() => sendData(apiURI)}
      />  
     <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}
      />  
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgb(51, 153, 255)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      header: {
        fontSize: 40,
        marginBottom: 20,
        color: 'white'
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
      primaryButton: {
        backgroundColor: 'rgb(0, 153, 51)',
        height: 60,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 10
      },
      primaryButtonText: {
        color: 'white',
        fontSize: 20
      },
      scrollView: {
        marginHorizontal: 1,
      },
      view:{
        borderWidth: 1,
        borderRadius: 4 ,
        marginTop: 20,
        marginBottom: 10
      }
});