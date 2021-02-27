import React,{ useState } from 'react';
import {SafeAreaView, View,TouchableHighlight,
        StyleSheet,Text,Button,TextInput,Alert} from 'react-native';

import { Base64 } from 'js-base64'
import * as SecureStore from 'expo-secure-store'


export function LoginScreen({navigation}) {
  const [userName, setUserName] = useState("tester@tester.com");
  const [password, setPassword] = useState("testerpassword");
  const [token, setToken] = useState(false);
  const [jwt, setJWT] = useState("");
  

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
  // Deal with successful login by storing the token into secure store

  SaveJWTToken = (responseJWT) => {
    console.log(responseJWT); 
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
        .then(response => {
          setToken(true);
          setJWT(responseJWT);
        })
        .catch(error => {
          console.log("SecureStore error")
          console.log(error);
        });
      }    
  

  // LOG OUT FUNCTION
  onLogout = () => {
    console.log("Logout clicked");
    console.log(token);
    setToken(false);
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={ styles.mainview }>
    {token &&
     <View style={ styles.mainview } >
       <Text style={ styles.text }>Hello user</Text>
        <View >
       <Button
       color="red"
        style={ styles.button }
        title="Log out"
        onPress={() => onLogout() }/>
          </View>
        <View style={ styles.mainview }>
      <Button
        style={ styles.button }
        title="Create new item"
        onPress={() => navigation.navigate('NewItem',{
          apiURI:apiURI,
          token :jwt,
        })}/>
        </View>
        </View>
      }
       </View>
    <View >
    {!token && <View>
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
      <TouchableHighlight onPress={ () => loginClick() }>
        <View style={ styles.primaryButton }>
        <Text style={ styles.primaryButtonText }>Login</Text>
        </View>
      </TouchableHighlight>
       <Button title="Sign up" color="#000000" onPress={ () => navigation.navigate('Register',{apiURI:apiURI}) } />
    </View>
      }
    </View  > 
      <View style={ styles.mainview}>
        <Button
        title="Go to items"
        color="#841584"
        onPress={() => navigation.navigate('Items',{
          apiURI:apiURI
        })}
      />
      </View>
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
    color: 'red',
    fontSize: 20
  },
  mainview: {
    height: 60,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50
  }
});

