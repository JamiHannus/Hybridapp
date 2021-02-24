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

export function Items({navigation}) {
    return (
      <ScrollView
        style={{
          flexGrow: 0,
          width: "100%",
          height: "100%",
        }}>
        <Button
          title="Go to login"
          onPress={() => navigation.navigate('LoginScreen')}
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
