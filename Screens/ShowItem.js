import React,{useState,useEffect} from 'react';
import jwt_decode from "jwt-decode";
import {SafeAreaView, StyleSheet,Text,Button,ScrollView,View,Alert } from 'react-native';
import Item from '../Components/Item';


export function ShowItem({route,navigation}) {
  
useEffect(() => { 
  ItemFetch()
}, []);
            const [allItems, SetAllItems] = useState('');
            const [hasdata, SetHasdata] = useState(false);

            const {token} =route.params;
            const {apiURI} =route.params;
            let decoded = jwt_decode(token);
            console.log(decoded);
            let iduser = decoded.iduser;
            const address = apiURI;

const createTwoButtonAlert = (id) =>
  Alert.alert(
      "Delete item?",
      "ARE You really sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "YES", onPress: () => itemDelete(id) }
      ],
      { cancelable: false }
    );


const ItemFetch = () =>{
    fetch(address + '/items/iduser/'+iduser, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
           },
  })
  .then(response => response.json())
  .then(data => {
    alert('Here are your items');
    SetAllItems(data);
    SetHasdata(true);
    console.log(hasdata);
  })
  .catch((error) => {
    alert('NO items :(');
    console.error('Error:', error);
  });
};

// DELETE ITEM BY ID
const itemDelete = (id) =>{
  console.log(id +' item with id is deleted')
  fetch(address + '/items/'+id, {
      method: 'DELETE',
      headers: {
        "Authorization": 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
  }) 
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + "- " + response);
      }
      return (response)
    })
    .then(res => {
      console.log("ok")
      alert("Item is deleted")
      
        })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
      console.log(error)
    })
 ItemFetch();   
};



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}
      />
      <Button
        title="Get my items"
        onPress={() =>ItemFetch() }
      />
      <Text>Here are you items</Text>
     <ScrollView>
       <View>
       { hasdata && allItems.map((item,index) =>
        <View key={index}>
          <Item {...item}></Item>
          <Button title="del" onPress={()=>{createTwoButtonAlert(item.iditem)}}></Button>
          <Button title="edit"onPress={() => navigation.navigate('EditItem',{apiURI:apiURI,token :token, item:item})}></Button>
        </View>)}
       </View>
     </ScrollView>
      
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});