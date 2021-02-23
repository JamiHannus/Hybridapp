import React from 'react';
import {SafeAreaView, StyleSheet,Text,Button} from 'react-native';



export function Items({navigation}) {
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Item1</Text>
      <Button
        title="Show item1"
        onPress={() => navigation.navigate('Item')}
      />
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Item2</Text>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Item3</Text>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Item4</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});