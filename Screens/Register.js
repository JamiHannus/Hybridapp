import React ,{ useState }from 'react';
import {SafeAreaView,
        StyleSheet,Text,
        Button, TextInput,
        TouchableHighlight,View } from 'react-native';



export function Register({route,navigation}) {

  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState(""); 
  const [fname, setFname] = useState(""); 
  const [lname, setLname] = useState(""); 
  
  const {apiURI} = route.params 

  function signupPressed()
  {
    fetch(apiURI + '/register', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          firstname:fname,
          lastname:lname
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {    
        if (response.ok == false) {
          if (response.status = 409)
              alert("email is already taken")
          throw new Error("HTTP Code " + response.status);
        }
        return response;
      })
      .then(res => {
        alert("account created")
        navigation.navigate('Login Screen')
      })
      .catch(error => {
        console.log("Error message:")
        console.log(error.message)
      });

  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 30, fontWeight: '700' }}>Register new account</Text>
      <Text style={ styles.header }>Sign Up</Text>
    
      <Text>Please enter your email</Text>
      <TextInput
        style={ styles.input }
        value={ email }
        maxLength = {245}
        placeholder="test@email.com"
        clearTextOnFocus= {true}
        keyboardType={'email-address'}
        onChangeText={ value => setEmail(value)}
      />
      <Text>Please enter your first name</Text>
      <TextInput
        style={ styles.input }
        value={ fname }
        maxLength = {45}
        placeholder="John"
        clearTextOnFocus= {true}
        onChangeText={ value => setFname(value)}
      />
      <Text>Please enter your last name</Text>
      <TextInput
        style={ styles.input }
        value={ lname }
        maxLength = {45}
        placeholder="Doe"
        clearTextOnFocus= {true}
        onChangeText={ value => setLname(value)}
      />
      <Text>Please enter your password</Text>
      <TextInput
        style={ styles.input }
        value={ password }
        maxLength = {60}
        placeholder="password"
        onChangeText={ value => setPassword(value)}
      />
       <Text>Please confirm your password</Text>
      <TextInput
        style={ styles.input }
        value={ password2 }
        maxLength = {60}
        placeholder="password"
        onChangeText={ value => setPassword2(value)}
      />
      <TouchableHighlight onPress={ () =>{

        if (lname.trim() === "") {
          alert("Last name cant be empty");
        }
        else if (fname.trim() === "") {
          alert("First name cant be empty");
        }
        else if (email.trim() === "") {
          alert("Email can be empty");
        }
        else if (password.length < 6) {
          alert("password needs to be atleast 6 characters long");
        }
        else if (password !== password2) {
          alert("passwords need to match");
        }
        else if (regex.test(email) !== true) {
          alert("Email wrong");
        }
        else {
          signupPressed() }
        }        
      }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Sign up</Text>
        </View>
      </TouchableHighlight>
      <Button
      title="Go to login"
      onPress={() => navigation.navigate('Login Screen')}
        />
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login Screen')}
      />
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(227, 178, 0)',
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
    color: 'white'
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