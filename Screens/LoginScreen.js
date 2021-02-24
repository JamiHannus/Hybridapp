import React,{ useState } from 'react';
import {SafeAreaView, StyleSheet,Text,Button,TextInput} from 'react-native';

export function LoginScreen({navigation}) {
  const [userName, setUserName] = useState("tester");
  const [password, setPassword] = useState("testerpassword");


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Log in</Text>
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
      
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Search items</Text>
      <Button
        title="Go to items"
        onPress={() => navigation.navigate('Items')}
      />
       <Text style={{ fontSize: 50, fontWeight: '700' }}>Add new item</Text>
      <Button
        title="Create new item"
        onPress={() => navigation.navigate('NewItem')}
      />

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

