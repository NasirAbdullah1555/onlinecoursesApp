import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Alert } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from '../firebase/firebase.config';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigation } from '@react-navigation/native';

export default function payment() {
  const navigation = useNavigation();

  const [Fullname, setFullname] = useState('');
  const [Phone, setPhone] = useState('');
  const [Amount, setAmount] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const savedata = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullname: Fullname,
        phone: Phone,
        amount: Amount,
      });
      console.log("Document written with ID: ", docRef.id);
      Alert.alert("Amount sent, wait for approval");
      navigation.navigate("Profile");
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Failed to send amount. Please try again later.");
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setImage(selectedAsset.uri);
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });

      const metadata = {
        contentType: 'image/jpeg'
      };

      const storageRef = ref(storage, 'screenshot/' + Date.now());
      const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            Alert.alert("File is uploaded");
          });
        }
      );
    }

    if (image !== null) {
      uploadImage();
      setImage(null);
    }
  }, [image]);

  return (
    <ImageBackground
      source={{ uri: "https://img.freepik.com/free-vector/gradient-background-wave-water_343694-1294.jpg?w=740&t=st=1721746442~exp=1721747042~hmac=7a29907a76934abf122446edf53218ff24815b6cbbb2209d3e3c53a0c5960269.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: 'black' }]}>Full Name</Text>
          <TextInput
            style={[styles.input, { color: 'black' }]}
            placeholder="Enter your Full Name"
            placeholderTextColor="black"
            value={Fullname}
            onChangeText={txt => setFullname(txt)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: 'black' }]}>Phone No</Text>
          <TextInput
            style={[styles.input, { color: 'black' }]}
            placeholder="Enter your Phone Number"
            placeholderTextColor="black"
            value={Phone}
            onChangeText={txt => setPhone(txt)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: 'black' }]}>Amount</Text>
          <TextInput
            style={[styles.input, { color: 'black' }]}
            placeholder="Enter Amount"
            placeholderTextColor="black"
            value={Amount}
            onChangeText={txt => setAmount(txt)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Upload Image" color="white" onPress={pickImage} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Pay" color="white" onPress={savedata} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 20,
    height: 30,
    width: 300,
    marginTop: 80,
    marginBottom: 190,
    marginLeft: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%'
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    paddingHorizontal: 10,
    color: 'white', // Text input color changed to white
  },
  buttonContainer: {
    backgroundColor: 'blue',
    marginBottom: 20,
    borderRadius: 50,
    width: 200
  }
});
