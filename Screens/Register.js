import React from 'react';
import {SafeAreaView, StyleSheet,Text,Button} from 'react-native';



export function Register({navigation}) {
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Register new account</Text>
     
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});