import React,{ useState } from 'react';
import {SafeAreaView, StyleSheet,Text,Button,TextInput} from 'react-native';


export function NewItem({navigation}) {

const [title, setTitle] = useState("Table");
const [description, setDescription] = useState("small red chair");
const [category, setCategory] = useState("tester");
const [location, setLocation] = useState("tester");
const [price, setPrice] = useState("tester");
const [deliverytype, setDeliveryType] = useState("tester");



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{ fontSize: 50, fontWeight: '700' }}>Item title</Text>
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
      <Text style={ styles.text }>Category</Text>
      <TextInput
        style={ styles.input }
        value={ category }
        placeholder="Furniture"
        onChangeText={ value => setCategory(value)}
      />
      <Text style={ styles.text }>Location of the item</Text>
      <TextInput
        style={ styles.input }
        value={ location }
        placeholder="Location"
        onChangeText={ value => setLocation(value)}
      />
      <Text style={ styles.text }>Price</Text>
      <TextInput
        style={ styles.input }
        value={ price }
        placeholder="100 euros"
        onChangeText={ value => setPrice(value)}
      />
      <Text style={ styles.text }>Delivery type</Text>
      <TextInput
        style={ styles.input }
        value={ deliverytype }
        placeholder="Pickup"
        onChangeText={ value => setDeliveryType(value)}
      />
      <Button
        title="Submit"
        onPress={() => alert("yay")}
      />  
     <Button
        title="Go to login"
        onPress={() => navigation.navigate('LoginScreen')}
      />  
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
    
      }
});