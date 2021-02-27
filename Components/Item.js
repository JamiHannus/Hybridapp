import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button,Viev,Image } from 'react-native-elements';


export default function Item(Item) {
    console.log(Item);
       return(
       
                    <Card key={Item.iditem}>
                        <Text>{Item.title}</Text>
                        <Text>{Item.description}</Text>
                        <Text>{Item.price}</Text>
                        <Text>{Item.location}</Text>
                        <Text>{Item.category}</Text>
                        <Text>{Item.deliverytype}</Text>
                        <Text>{Item.dateposted}</Text>
                        <Image source={{uri: Item.images[0]}} style={ { width: 100, height: 100 } }></Image>
                    </Card>
           
           )
       
}


const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});
