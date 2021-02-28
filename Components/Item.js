import React from 'react';
import { Text, StyleSheet ,Image} from 'react-native';
import { Card, Button,Viev} from 'react-native-elements';


export default function Item(props) {
        {console.log(props)};
       let Item =props;
    if (Item.hasOwnProperty('iditem')){
                        return(                                              
                                                <Card style={styles.card} key={Item.iditem}>
                                                <Card.Title>{Item.title}</Card.Title>
                                                <Text>{Item.description}</Text>
                                                <Text>Price {Item.price}</Text>
                                                <Text>Location {Item.location}</Text>
                                                <Text>Category {Item.category}</Text>
                                                <Text>Delivery {Item.deliverytype}</Text>
                                                <Text>Posted  {Item.dateposted.split('T')[0]}</Text>
                                                <Card.Image style={styles.image}  source= {{uri:Item.images[0]}}></Card.Image>
                                                <Card.Image style={styles.image}  source= {{uri:Item.images[1]}}></Card.Image>
                                                <Card.Image style={styles.image} source= {{uri:Item.images[2]}}></Card.Image>  
                                                <Card.Image style={styles.image} source= {{uri:Item.images[3]}}></Card.Image>    
                                                </Card>
                                                )           
                        }
    else 
     return(
         <Card>
             <Text>Nothing</Text>
              </Card>)  
};
       


const styles = StyleSheet.create({
    card: {
        height: 500,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
      },
    title: {
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
    },
    image : {
        width : '100%',
        height : '70%'
    },
});
