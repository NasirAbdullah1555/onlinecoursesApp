import { View, Text,Image,Button } from 'react-native'
import React from 'react'


export default function GraphicScreen({navigation}) {
  return (
    <View>
    
      <Image source={{uri:("https://th.bing.com/th/id/R.cd3849baaf82215ab7b8494dc7b98355?rik=v8REyVH%2bxrwWag&riu=http%3a%2f%2ffavbulous.com%2fwp-content%2fuploads%2f2016%2f06%2fjava-logo.png&ehk=k2vOBcpZ1Esi4Kb6mW3QBi9FmNG2bZKlhIAUuRmbI5A%3d&risl=&pid=ImgRaw&r=0.jpg")}}
    style={{backgroundColor:'blue',height:250,width:420,borderRadius:10}}
    ></Image>
    <View style={{backgroundColor:'white',height:500,width:410,borderRadius:10}}>
        
        <Text style={{color:'black',fontWeight:'bold',fontSize:40,margin:10}}>Graphic Designing</Text>
        
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
