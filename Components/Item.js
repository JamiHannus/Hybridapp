import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';


export default function Item(props) {
    console.log(props);
      return (
        <Card>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {props.item.name}
            </Text>
            <Text style={styles.price} h4>
                $ {props.item.price}
            </Text>
            <Text h6 style={styles.description}>
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => props.navigation.navigate('Details', {
                name: props.item.name,
                price: props.item.price
            })} />
        </Card>
      );
    };


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
