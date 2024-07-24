import { View, Text,Image,Button } from 'react-native'
import React from 'react'


export default function JavaScreen({navigation}) {
  return (
    <View>
    
      <Image source={{uri:("https://th.bing.com/th/id/R.cd3849baaf82215ab7b8494dc7b98355?rik=v8REyVH%2bxrwWag&riu=http%3a%2f%2ffavbulous.com%2fwp-content%2fuploads%2f2016%2f06%2fjava-logo.png&ehk=k2vOBcpZ1Esi4Kb6mW3QBi9FmNG2bZKlhIAUuRmbI5A%3d&risl=&pid=ImgRaw&r=0.jpg")}}
    style={{backgroundColor:'blue',height:250,width:420,borderRadius:10}}
    ></Image>
    <View style={{backgroundColor:'white',height:500,width:410,borderRadius:10}}>
        
        <Text style={{color:'black',fontWeight:'bold',fontSize:40,margin:10}}>Java</Text>
        
        <Text> Java is a popular programming language, created in 1995.

 It is owned by Oracle, and more than 3 billion devices run Java.
 It is used for:
 Mobile applications (specially Android apps)
  Desktop applications
 Web applications
 Web servers and application servers
 Games
 Database connection
 And much, much more!</Text>
 <Text style={{color:'blue',fontWeight:'bold',fontSize:40,marginLeft:130,marginTop:50}}>Rs 10000</Text>
 <View style={{backgroundColor:'blue',borderRadius:400,margin:20}}>
 <Button title='Register now ' color="white" onPress={()=>navigation.navigate('payment')}></Button></View>
    </View>
    </View>
  )
}
