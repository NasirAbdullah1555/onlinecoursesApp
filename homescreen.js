 import { View, Text,Image,Button} from 'react-native'
 import React from 'react'
 
 const HomeScreen=({navigation})=> {
    
   return (
    <View>
    <Image source={{uri:("https://thumbs.dreamstime.com/b/businessman-sitting-office-vector-illustration-design-businessman-sitting-office-117844289.jpg")}}
    style={{backgroundColor:'white',height:540,width:500}}
    ></Image>
    <View style={{backgroundColor:'white',height:200,width:430,justifyContent:'center',borderRadius:10}}>
    <Text style={{fontSize:30,justifyContent:'center',alignItems:'center',margin:10}}>Welcome to Computer institute</Text>
   <View style={{backgroundColor:'blue',margin:20,borderRadius:20}}>
   <Button title="login" color="white" onPress={()=>{navigation.navigate("LoginScreen")}}></Button> 
   </View>
   <View style={{backgroundColor:'blue',margin:20,borderRadius:20,marginBottom:50}}>
   <Button title="signup" color="white" onPress={()=>{navigation.navigate("Signup")}}></Button> 
   </View>
    </View>

  </View>
   )
 }
 
 export default HomeScreen;