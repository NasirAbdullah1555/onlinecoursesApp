import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase/firebase.config';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../firebase/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigation } from '@react-navigation/native';

export default function CertificateScreen() {
  const navigation = useNavigation();

  const [Fullname, setFullname] = useState('')
  const [Phone, setPhone] = useState('')
  const [Amount, setAmount] = useState('')
  const [image, setImage] = useState(null)
  const savedata = async () => {
    const docRef = await addDoc(collection(db, "users"), {
      fullname: Fullname,
      phone: Phone,
      amount: Amount,
    });
    alert("amount send wait for approval")
    console.log("Document written with ID: ", docRef.id);
    navigation.navigate('CertificateImage');
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled && result.assets.length > 0) {
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
        xhr.open("GET", image, true); // Corrected line
        xhr.send(null);
      });




      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };
    // Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'screenshot/' + Date.now);
const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      alert("file is uploaded")
      
    });
  }
);





    }
    if (image != null) {
      uploadImage();
      setImage(null);

    }
  }, [image])

  return (
    <View>
    
      <View style={{  margin: 20, fontSize: 50, borderColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Amount: RS 1000</Text>
        <Text style={{ fontSize: 20 }}>FullName</Text>
        <TextInput placeholder='Enter your Fullname  ' value={Fullname} onChangeText={txt => setFullname(txt)} style={styles.input} ></TextInput></View>


      <View style={{  margin: 20, fontSize: 50, borderColor: 'black' }}>
        <Text style={{ fontSize: 20 }}>Phone No</Text>
        <TextInput placeholder='Enter your phone   ' value={Phone} onChangeText={txt => setPhone(txt)} style={styles.input} ></TextInput></View>


      <View style={{ margin: 20, fontSize: 50, borderColor: 'black' }}>
        <Text style={{ fontSize: 20 }}>Amount</Text>
        <TextInput placeholder='Enter Amount   ' value={Amount} onChangeText={txt => setAmount(txt)} style={styles.input} ></TextInput></View>

      <View style={{ backgroundColor: 'blue', margin: 20, borderRadius: 50 }}>
        <Button title="Upload Image" color="white" onPress={() => pickImage()}></Button>
        </View>
        <View style={{ backgroundColor: 'blue', margin: 20, borderRadius: 50 }}>
        <Button title="Pay" color="white" onPress={() => savedata()}></Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{height:40,width:350,
  borderColor:'black',
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,borderRadius:10}
});
