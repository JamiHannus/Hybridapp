import React from 'react';
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
const {apiURI} =route.params; 
const id = {iditem : 80};

fetch(apiURI+'/items/'+id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  alert('YAY');
  console.log('Success:', data);
})
.catch((error) => {
  alert('NAY');
  console.error('Error:', error);
});

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
        {
          products.map((item, index) => {
            return(
              <View style={styles.row} key={index}>
                  <View style={styles.col}>
                    <Item item={item}/>
                  </View>
              </View>
            )
          })
        }
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
