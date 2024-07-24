import { View, Text,Image,Button } from 'react-native'
import React from 'react'


export default function AndroidScreen({navigation}) {
  return (
    <View>
    
      <Image source={{uri:("https://th.bing.com/th/id/R.dff03f89f344682f0e59a4612ce6aaf0?rik=tDEzHT3lx%2fZmCQ&pid=ImgRaw&r=0.jpg")}}
    style={{backgroundColor:'blue',height:250,width:420,borderRadius:10}}
    ></Image>
    <View style={{backgroundColor:'white',height:500,width:410,borderRadius:10}}>
        
        <Text style={{color:'black',fontWeight:'bold',fontSize:40,margin:10}}>Android Developement</Text>
        
        <Text> Android operating system is the largest 
          installed base among various mobile platforms across the globe.
           Hundreds of millions of mobile devices are powered by Android in more than 190 countries of the world. It conquered around 71% of the global market share by the end of 2021, and this trend is growing bigger every other day. The company named Open Handset Alliance developed Android for the first time 
          that is based on the modified version of the Linux kernel and other open-source software.</Text>
 <Text style={{color:'orange',fontWeight:'bold',fontSize:40,marginLeft:180,marginTop:50}}>$20</Text>
 <View style={{backgroundColor:'orange',borderRadius:400,margin:20}}>
 <Button title='Register now ' color="white" onPress={()=>navigation.navigate('payment')}></Button></View>
    </View>
    </View>
  )
}
