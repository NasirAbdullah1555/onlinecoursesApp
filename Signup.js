import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signupscreen = () => {
    createUserWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        alert("User created successfully");
        navigation.replace("LoginScreen");
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
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View>
          <View style={{ backgroundColor: 'white' }}>
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa?pid=ImgDet&w=512&h=512&rs=1.jpg" }}
              style={{ height: 200, width: 200, marginLeft: 100 }}
            />
          </View>
          <View style={{ backgroundColor: 'white', height: 540, width: 450, justifyContent: 'center', borderRadius: 2 }}>
            <Text style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 25,marginTop:25 }}>Welcome to Computer institute</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput placeholder='Enter your First Name ' style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput placeholder='Enter your Last Name ' style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder='Enter your Email Account  '
                value={email}
                onChangeText={txt => setEmail(txt)}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder='Enter your Password '
                value={Password}
                onChangeText={txt => setPassword(txt)}
                style={styles.input}
                secureTextEntry={true}
              />
            </View>

            <View style={{ backgroundColor: 'blue', margin: 10,marginBottom:40, borderRadius: 500, marginRight: 50,marginLeft:40 }}>
              <Button title="Signup" color="white" onPress={() => signupscreen()} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderColor: 'black',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft:26
  },
  input: {
    height: 40,
    width: 350,
    marginLeft:25,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  }
});
