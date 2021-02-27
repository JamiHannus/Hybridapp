import React from 'react';
import {StyleSheet,Button,View} from 'react-native';
import ImageSelector from '../Components/ImageSelector';


export function ImageTest({navigation}) {

  return (
      <View >
      <ImageSelector></ImageSelector>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}
      />
    </View>
    )
}

const styles = StyleSheet.create({
            
});