import { View, Text ,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'



const User=[{
    id:1,
    Name:'intro to java',
    image:'https://th.bing.com/th/id/R.ab4b2a3b5f13e774d40603cf04d9ca1d?rik=kCnhCsOJmYsZ1A&riu=http%3a%2f%2fwww.diapason-info.com%2fwp-content%2fuploads%2f2014%2f07%2fjava-logo-e1405625638583.png&ehk=%2fm9NKYLH9wxrSF5c%2f6GW8hTS%2ffoDj62N0Mraau12dnA%3d&risl=&pid=ImgRaw&r=0.jpg',
    },
    {
        id:2,
        Name:'intro to C++',
        image:'https://th.bing.com/th/id/R.4bee6669c86a46126fca4be332310eeb?rik=tgnvKwGk%2fBiCZQ&pid=ImgRaw&r=0.jpg',
        },
    {
        id:3,
        Name:'python course',
        image:'https://th.bing.com/th/id/OIP.4JP7W8gMyqF-1EFRF63fIgHaHa?pid=ImgDet&w=630&h=630&rs=1.jpg',
        },
        {
        id:4,
        Name:'intro to Javascript',
        image:'https://cadcampune.com/wp-content/uploads/2021/12/JAVA-SCRIPT-10.png',
        },
        {
            id:5,
            Name:'C#',
            image:'https://th.bing.com/th/id/OIP.Vwl9kZCfa-FX9PPUxT5ZAQHaEK?pid=ImgDet&rs=1.jpg',
            }
    
    ]

    const Advance=[{
        id:1,
        Name:'Android App development',
        image:'https://th.bing.com/th/id/R.dff03f89f344682f0e59a4612ce6aaf0?rik=tDEzHT3lx%2fZmCQ&pid=ImgRaw&r=0.jpg',
        },
        {
            id:2,
            Name:'React native App development ',
            image:'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*74NwxNdMYcbJ6RPL.png',
            },
        {
            id:3,
            Name:'Web Development',
            image:'https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0.jpg',
            },
            {
            id:4,
            Name:'Machine Learning Course',
            image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Femeritus.org%2Fin%2Flearn%2Ftypes-of-machine-learning%2F&psig=AOvVaw05iqliq7f3KhCzwV0p7Bed&ust=1721834445811000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJDH0aa7vYcDFQAAAAAdAAAAABAO.jpg',
            },
            {
                id:5,
                Name:'Graphic Designing Course',
                image:'https://th.bing.com/th/id/R.e3475d517f86527ecf24bb91ff065172?rik=YKsa3nZPn%2bBGKA&pid=ImgRaw&r=0.jpg',
                }
        
        ]
        const courseScreenMapping = {
            'intro to java': 'JavaScreen',
            'intro to C++': 'CScreen',
            'python course': 'PythonScreen',
            'intro to Javascript':'JavaScriptScreen',
            'C#':'CsharpScreen',
            'Android App development':'AndroidScreen',
            'React native App development ':'ReactScreen',
            'Web Development':'WebScreen',
            'Machine Learning Course':'MachineLearningScreen',
            'Graphic Designing Course':'GraphicScreen',
            // Add more course mappings here
            // For Advance courses as well
          };


const Courses=({navigation})=> {
    const handleCoursePress = (courseName) => {
        const screenName = courseScreenMapping[courseName];
        if (courseName) {
          navigation.navigate(screenName);
        }
      };



  return (
    <View style={{ 
        flex: 1,
        padding: 16,
      }}>
       <Text style={{color:'black',fontSize:30,fontWeight:'bold',marginTop:28}}>Available Courses</Text>
       <Text style={{color:'black',fontSize:20,fontWeight:'bold',margin:6}}>Basic Courses</Text>
      <FlatList
      data={User}
      horizontal={true}
      renderItem={({item})=>(
        
    <TouchableOpacity onPress={()=>handleCoursePress(item.Name)}>
    <Text> {item.Name}</Text>
    <Image source={{uri:item.image}} style={{height:220, width:350,margin:5,borderRadius:30}}></Image>
    </TouchableOpacity>
  )}
      />
      <View>
       <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Advance  Courses</Text>
       <FlatList
      data={Advance}
      horizontal={true}
      renderItem={({item})=>(
        
    <TouchableOpacity onPress={()=>handleCoursePress(item.Name)}>
    <Text> {item.Name}</Text>
    <Image source={{uri:item.image}} style={{height:200, width:350,margin:5,borderRadius:30,marginBottom:37}}></Image>
    </TouchableOpacity>
  )}
      />
      </View>
    </View>
    
  )
}
export default Courses;