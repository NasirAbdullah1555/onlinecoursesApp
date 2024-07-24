
import React from 'react'

import { View, Image, StyleSheet } from 'react-native';


export default function CertificateImage() {
    return (
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.DKX0MvtEuAdv2IyK8WSWgQHaFO?w=261&h=183&c=7&r=0&o=5&pid=1.7.jpg' }}
            style={styles.image}
          />
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 400, 
      height: 300, 
    },
  });
  