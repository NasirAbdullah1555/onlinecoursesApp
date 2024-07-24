import { View, Text,Image,Button } from 'react-native'
import React from 'react'


export default function MachineLearningScreen({navigation}) {
  return (
    <View>
    
      <Image source={{uri:("https://www.livewireindia.com/blog/wp-content/uploads/2019/06/ml-blog-ekm-1024x537.jpg")}}
    style={{backgroundColor:'blue',height:250,width:420,borderRadius:10}}
    ></Image>
    <View style={{backgroundColor:'white',height:500,width:410,borderRadius:10}}>
        
        <Text style={{color:'black',fontWeight:'bold',fontSize:40,margin:10}}>Machine Learning </Text>
        
        <Text> C++ is a cross-platform language that can be used to create  high-performance applications.

  C++ was developed by Bjarne Stroustrup, as an extension to the C language.

 C++ gives programmers a high level of control over system resources and memory.

The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</Text>
 <Text style={{color:'orange',fontWeight:'bold',fontSize:40,marginLeft:180,marginTop:50}}>$20</Text>
 <View style={{backgroundColor:'orange',borderRadius:400,margin:20}}>
 <Button title='Register now ' color="white" onPress={()=>navigation.navigate('payment')}></Button></View>
    </View>
    </View>
  )
}
