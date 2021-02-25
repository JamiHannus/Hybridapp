import React,{ useState } from 'react';
import {SafeAreaView, View,TouchableHighlight,
        StyleSheet,Text,Button,TextInput} from 'react-native';

import { Base64 } from 'js-base64'
import * as SecureStore from 'expo-secure-store'
export function LoginScreen({navigation}) {
  const [userName, setUserName] = useState("tester");
  const [password, setPassword] = useState("testerpassword");
  const [token, setToken] = useState(false);


const apiURI="https://thetoriapp.herokuapp.com";

const secureStoreTokenName = "jwttoken";


  function loginClick() {
    fetch(apiURI + '/login', {
      method: 'POST',
      headers: {
        "Authorization": "Basic " + Base64.encode(userName + ":" + password)
      }
    })
    .then(response => { 
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + "- " + JSON.stringify(response));
      }
      return response.json();
    })
    .then(json => {
      console.log("Login successful")
      console.log("Received following JSON");
      console.log(json);

      SaveJWTToken(json.token);
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }
  SaveJWTToken = (responseJWT) => {
    // Deal with successful login by storing the token into secure store
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        setToken(true);
        navigation.navigate('Items');
      })    
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={ styles.text }>Username</Text>
      <TextInput
        style={ styles.input }
        value={ userName }
        placeholder="johndoe"
        onChangeText={ value => setUserName(value)}
      />
      <Text style={ styles.text }>Password</Text>
      <TextInput
        style={ styles.input }
        value={ password }
        placeholder="password"
        onChangeText={ value => setPassword(value)}
      />
      <Button
        title="Go to items"
        onPress={() => navigation.navigate('Items')}
      />
      <Button
        title="Create new item"
        onPress={() => navigation.navigate('NewItem')}
      />
      <Button
        title="Image Test"
        onPress={() => navigation.navigate('ImageTest')}
      />
      <TouchableHighlight onPress={ () => loginClick() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Login</Text>
        </View>
      </TouchableHighlight>
      <Button title="Sign up" color="#000000" onPress={ () => props.navigation.navigate('Signup') } />
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

