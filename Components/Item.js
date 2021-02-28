import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Card} from 'react-native-elements';


export default function Item(props) {
    
        {console.log(props)};
       let Item =props;
    if (Item.hasOwnProperty('iditem')){
            let hasvalue =1;
                     return(                                                                    
                                <Card style={styles.card} key={Item.iditem}>
                                <Card.Title>{Item.title}</Card.Title>
                                <Text>{Item.description}</Text>
                                <Card.Divider></Card.Divider>
                                <Text>Price {Item.price}</Text>
                                <Text>Location {Item.location}</Text>
                                <Text>Category: {Item.category}</Text>
                                <Text>Delivery: {Item.deliverytype}</Text>
                                <Text>Date posted:  {Item.dateposted.split('T')[0]}</Text>
                                <Card.Divider></Card.Divider>
                                { hasvalue === 1 ?  Item.images.map((image,index)=> {
                                        return (<Card.Image key={index} style={ {width: 250, height: 250}} source={{uri: image}}></Card.Image>)
                                        }
                                        ):null
                                }
                                </Card>
                            )           
                        }
    else 
     return(
         <Card>
             <Text>Nothing</Text>
              </Card>
              )  
};
       


const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        flex:2,
        width:'90%',
        flexDirection: "row",
        justifyContent: "space-evenly"
      },
    text:{
        fontWeight: 'bold',
        

    }
      
});
