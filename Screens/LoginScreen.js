import React from 'react';
import {SafeAreaView, StyleSheet,Text,Button} from 'react-native';



export function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Log in</Text>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Search items</Text>
      <Button
        title="Go to items"
        onPress={() => navigation.navigate('Items')}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});