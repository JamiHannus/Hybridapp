import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'


export default class ImageSelector extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isSubmitting: false,
      files : [],
      currentimg:null
    }
  }

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult);

    if(pickerResult.cancelled == true)
    {
      alert('Image picker cancelled or failed');
      return;
    }

    const fileNameSplit = pickerResult.uri.split('/');
    this.setState({currentimg : pickerResult.uri,pickerResult});

    var joined = this.state.files.concat(pickerResult.uri);
    this.setState({ files: joined });
    this.props.handlepictures(pickerResult.uri);
  }

  render() {
    return (
      <View>
          <TouchableOpacity onPress={this.openImagePickerAsync} style={{ borderWidth: 1, borderColor: 'red'}}>
          <Text style= {{fontSize: 10}}> Pick a photo from your phone, Max 6 one at time </Text>
        </TouchableOpacity>
        {/* { this.state.files.map((item)=> {<Image source={item}/>})} */}
        <Image 
        source={{uri: this.state.currentimg}}
        style={ { width: 100, height: 100 } }/>
        <Text style= {{fontSize: 10}}> Latest picture</Text>
      </View>
    )
  }
}
