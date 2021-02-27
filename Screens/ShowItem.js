import React from 'react';
import {SafeAreaView, StyleSheet,Text,Button} from 'react-native';



export function ShowItem({navigation}) {
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Item1</Text>
     
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});