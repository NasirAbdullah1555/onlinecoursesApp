import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React,{useState } from 'react';
import { TextInput } from 'react-native-web';
// import compnay from './component/companydata'

const App=()=> {

  ///passimg data to child 
  // const  [name,setName]=useState("asif");
  // hooks, usestate
  // const [name,setName]=useState("nasir");
  // const testname=()=>{
  //   setName("ali")
  // }

   const [name,setName]=useState(" ");
   const [email,setEmail]=useState(" ");
   const [password,setPassword]=useState(" ");
   const [display,setDisplay]=useState(false);
   const cleardata=()=>{
   setName("")
   setEmail("")
   setPassword("")
   
   }
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:30,marginRight:40  }}> {name}</Text> */}
    {/* <input placeholder='enter your name'></input>
    <input placeholder='enter your password ' style={{margin:30}}></input> */}
    {/* <Button title='update' onPress={testname}></Button> */}
    
      {/* <Text>parent component</Text>
<Button title='update' onPress={()=>setName("nasir")}></Button>

<User name={name}/> */}

<Text style={{fontSize:30 }}> Login Page</Text> 


<TextInput  style={styles.Input} placeholder="Enter your name" value={name} onChangeText={(text)=>setName(text)}></TextInput>

<TextInput  style={styles.Input} placeholder="Enter your email" value={email} onChangeText={(text)=>setEmail(text)}></TextInput>


<TextInput  style={styles.Input} placeholder=" Enter your password" value={password} onChangeText={(text)=>setPassword(text)}></TextInput>
<View style={{margin:10}} >
  <Button  title="show user list" onPress={()=>{setDisplay(true)}}></Button>
  </View>
  <View style={{margin:10}}>
  <Button  title="clear data "  onPress={()=>{cleardata()}}></Button>
  </View>
 {display ?
 <View>
 <Text>{name}</Text>
 <Text>{email}</Text>
<Text>{password}</Text>
</View>
 :null
  }

    </View>
   
  );
};

// const User=(props)=>{
//   return (
//     <View style={{backgroundColor:"green"}}>
    
      
//     <Text style={{fontSize:30,marginRight:40  }}> child component</Text>

// <Text style={{fontSize:30,marginRight:40  }}> {props.name}</Text>
//     </View>
//   );

// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue'
  },

  Input: {

    fontSize:20,
    borderWidth:3,
    borderColor:'black',
    borderRadius:5,
    margin:10
    
  },
});

export default App;