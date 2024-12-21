import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { images } from '../../constants'
import { Image } from 'react-native'
import {icons} from '../../constants'
import {ListView} from 'react-native'
const profile = () => {
  return (
    <SafeAreaProvider>
    <ScrollView>
      <View className='h-[20vh] w-[100vw] rounded-sm  z-10'>
        <Image
        source={images.background}
        className='w-[100vw] h-[20vh] absolute '
        />
      </View>
      <TouchableOpacity className=' w-5 h-5 bg-gray-500 opacity-35 rounded-full absolute z-20 ml-[90vw] mt-[7vh]'>
      <View className='w-5 h-5 rounded-full '>
        <Image
          source={icons.dot}
          className='w-5 h-5'
        />
      </View>
      </TouchableOpacity>
      <View className='absolute w-[100vw] h-full align-middle justify-items-center items-center bg-white'>
      <View className=' h-[135px] w-[135px] bg-white rounded-full justify-items-center mt-[14vh] items-center z-20'>
        <Image
          source={images.harry_do}
          className='h-[130px] w-[130px] mt-1 rounded-full z-40'
        />
      </View>
      <View className ='flex-row w-[120px] justify-center align-middle '>
      <Text className='text-[20px] text-black pt-[4.8px]  font-semibold'>Harry Do</Text>
      <Image
        className='w-4 h-4 mt-3 ml-1 '
        source={icons.correct}
      />
      </View>
      <Text className='text-[15px] text-black font-thin'>Course Assistant</Text>
      <View className='bg-white  w-[80vw] h-[10vh] shadow-md mt-4 rounded-lg z-20'>
        <View className='flex-row mt-2 ml-2'>
        <Image
            source={icons.school}
            className='w-5 h-5 bg-gray-300 rounded-full items-center'
          />
          <Text className='font-semibold text-[16px] pl-2'>School or Univeristy</Text>
        </View>
          <View className='flex-row  mt-3 ml-3 items-center'>
            <Image
              source={images.bu_logo}
              className='w-7 h-7 rounded-full'
            />
            <Text className='text-[14px] pl-2'>University of Binghamton, New York</Text>
          </View>  
      </View>
      <View className='bg-white  w-[80vw] shadow-md mt-4 rounded-lg'>
      <View className='flex-row mt-2 ml-2 items-center align-middle'>
        <View className='w-5 h-5 bg-gray-300 rounded-full items-center justify-center align-middle'>
      <Image
            source={icons.interest}
            className='w-3 h-3 rounded-full items-center'
          />
          </View>
    <Text className='font-semibold text-[16px] pl-2'>Interest</Text>
    <TouchableOpacity
    className='ml-[45vw] bg-white w-[30px] h-[20px]'
    >
    <View className='w-[40px] h-[20px] '>
      <Text className=' text-blue-600 z-20'>Edit</Text>
    </View>
    </TouchableOpacity>
      </View>
      <View  className='flex-row my-[20px] ml-2 align-middle'>
        <Text className='font-semibold mr-auto'>Major:</Text>
        <View className=' mr-auto  items-center align-middle relative w-[63vw]  flex-row flex-wrap'>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch' >Computer Science</Text>
        </View>
      </View>
      <View className='bg-slate-200 h-[1px] w-full mt-2 '></View>
      <View  className='flex-row my-[20px] ml-2  align-middle'>
      <Text className='font-semibold mr-auto'>Career:</Text>
      <View className=' mr-auto  items-center align-middle relative w-[63vw]  flex-row flex-wrap'>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch' >Course Assistant</Text>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch ' >Software Engineer</Text>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch' >Frontend Developer</Text>
        </View>
       
        
        </View>
        <View className='bg-slate-200 h-[1px] w-full mt-2 '></View>
      <View  className='flex-row my-[20px] ml-2 align-middle'>
      <Text className='font-semibold mr-auto'>Personal:</Text>
      <View className=' mr-auto  items-center align-middle  w-[63vw]  flex-row flex-wrap'>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch' >Comics</Text>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch ' >Party</Text>
        <Text className='text-black bg-slate-200 text-[12px] rounded-full p-1 m-[2px] justify-self-stretch' >Meeting new people</Text>
        </View>
        </View>
      </View>

      <View className='bg-white  w-[80vw] shadow-md mt-4 rounded-lg'>
      <View className='flex-row mt-2 ml-2 items-center align-middle'>
        <View className='w-5 h-5 bg-gray-300 rounded-full items-center justify-center align-middle'>
      <Image
            source={icons.photo}
            className='w-3 h-3 rounded-full items-center'
          />
          </View>
    <Text className='font-semibold text-[16px] pl-2'>Photo</Text>
    <TouchableOpacity
     onPress={()=>{console.log("Heellel")}}
    className='ml-[45vw] bg-white w-[40px] h-[20px] '
    >
      <Text className=' text-blue-600'>+ Add</Text>
    </TouchableOpacity>
      </View>
      <View className='flex-row flex-wrap justify-items-center items-center'>
        <View className='m-[10px]'>
       <Image
        source={images.bku_logo}
        className='w-20 h-20'
       />
        </View>
        <View className='m-[10px]'>
       <Image
        source={images.background}
        className='w-20 h-20'
       />
        </View>
        <View className='m-[10px]'>
       <Image
        source={images.leo}
        className='w-20 h-20'
       />
        </View>
        <View className='m-[10px]'>
       <Image
        source={images.usf_logo}
        className='w-20 h-20'
       />
        </View>
        <View className='m-[10px]'>
       <Image
        source={images.bu_logo}
        className='w-20 h-20'
       />
        </View>
        </View>
      </View>
      </View>
      <StatusBar 
      backgroundColor='#161622' style ='light'/>
</ScrollView>

</SafeAreaProvider>
  )
}

export default profile