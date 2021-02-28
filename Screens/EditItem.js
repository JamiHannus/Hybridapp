import React,{ useState } from 'react';
import {SafeAreaView, StyleSheet,Text,Button,TextInput,ScrollView,View} from 'react-native';
import {Picker} from '@react-native-picker/picker';



export function EditItem({route,navigation}) {
const {token} =route.params;
const {apiURI} =route.params;
const {item} =route.params;
console.log(item)
console.log(token)
console.log(apiURI)


const [title, setTitle] = useState(item.title);
const [description, setDescription] = useState(item.description);
const [category, setCategory] = useState(item.category);
const [location, setLocation] = useState(item.location);
const [price, setPrice] = useState(item.price+'');
const [deliverytype, setDeliveryType] = useState(item.deliverytype);



async function sendData() {
 
  let data = {
      'title': title,
      'description': description,
      'category': category,
      'location': location,
      'deliverytype': deliverytype,
      'price': price,
      'iditem': item.iditem
  };
  

  const response = await fetch(apiURI+'/items', {
    method: 'PUT',
    headers: {
      "Authorization": 'Bearer ' + token,
      'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  .then(response => { 
    if (response.ok == false) {
      throw new Error("HTTP Code " + response.status);
    }
    return response;
  })
  .then(res => {
    console.log("ok")
    alert("Item is updated")
   
  })
  .catch(error => {
    console.log("Error message:")
    console.log(error.message)
    console.log(error)
  });
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
        keyboardType = 'numeric'
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
        <View>
        <Button
        title="Save edit"
        onPress={() => sendData()}/>  
        </View>
        <View> 
        <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}/>              
        </View>
      
    
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
      scrollView: {
        width: 280,
        flex:1,
        marginHorizontal: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft:25,
        marginRight:25
      },
      view:{
        borderWidth: 1,
        borderRadius: 4 ,
        marginTop: 20,
        marginBottom: 10
      }
});