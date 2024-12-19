import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import {Image} from "react-native"
import {images} from '../constants'
import { router } from 'expo-router'
export default function App(){
  return (
   
    <SafeAreaView className="bg-black">
       <TouchableOpacity
       onPress={()=>{router.push('/home')}}
        activeOpacity={0.9}
   >
       <ScrollView contentContainerStyle ={{height:'100%'}}>
   
      <View className ="relative">
      <Image
        source={images.logo}
        className="w-[140px] h-[150px] mt-[27vh] ml-[70px] rounded-lg"
        resizeMode='contain'
      />
       <View className="h-[10vh] w-0.5 bg-white my-4 absolute ml-[22vh] mt-[31vh]"></View>
      <Text className ="ml-[25vh] absolute mt-[31vh]  font-bold
      text-white font text-3xl
      ">Change the  {'\n'}way you  {'\n'}network</Text>
      </View>
      <View>
        <Text className ="text-gray-400 ml-[20vh]">Redefining the {"\n"}College Experience</Text>
     </View>
  
      </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
    
  )
}