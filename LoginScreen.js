import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const Login = () => {
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        navigation.replace("Courses");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={{ uri: "https://img.freepik.com/free-vector/gradient-background-wave-water_343694-1294.jpg?w=740&t=st=1721746442~exp=1721747042~hmac=7a29907a76934abf122446edf53218ff24815b6cbbb2209d3e3c53a0c5960269.jpg" }}
        style={styles.backgroundImage}
      >
        <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', height: 400, width: 300, justifyContent: 'center', borderRadius: 20, padding: 20 }}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>Login To Your Account</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder='Enter your Email'
                style={styles.input}
                value={email}
                onChangeText={txt => setEmail(txt)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder='Enter your Password'
                style={styles.input}
                value={Password}
                onChangeText={txt => setPassword(txt)}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Signin" color="white" onPress={Login} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'blue',
    marginVertical: 20,
    marginLeft:70,
    borderRadius: 90,
    width: 100
  }
});
