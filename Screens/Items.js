import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Button,ScrollView,View } from 'react-native';
import Item from '../Components/Item';


const products = [
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99
  }
];

export function Items({route,navigation}) {
  
useEffect(() => {
    ItemFetch();
  }, []);

const {apiURI} =route.params; 


const [allItems, SetAllItems] = useState(
  {test:'test'}
);
const [loading, SetLoading] = useState(false);
const [id, Setid] = useState(73);
  
 
    const ItemFetch= () => {
    fetch(apiURI+'/items/'+id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      alert('YAY');
      console.log(...data);
      SetAllItems(...data)
    })
    .catch((error) => {
      alert('NAY');
      console.error('Error:', error);
    });
  }
  


    return (
      
      <ScrollView
        style={{
          flexGrow: 0,
          width: "100%",
          height: "100%",
        }}>
        <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login Screen')}
        />
        <View style={{ alignItems: 'center', flex: 1, marginTop: 30, flexDirection:"column"}}>   
    <Button    
       title="More Items"
       onPress={() => ItemFetch()}
     />
     <Button    
       title="More loading"
       onPress={() => SetLoading(true)}
     />
      </View>
      { loading && <Item {...allItems}></Item>}
      </ScrollView>
    )
  };
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
      },
  col: {
    flex: 1,
      }
    })
