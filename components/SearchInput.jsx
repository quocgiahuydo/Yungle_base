import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { icons } from '../constants'
const SearchInput = ({initialQuery}) => {

    const[query,setQuery]=useState({initialQuery}||'')
  return (
    <View className ="relative" >
        
      <TextInput 
      className ="rounded-full w-[83vw] h-[4vh] px-4  
       items-center flex-row space-x-4 bg-gray-50 ml-[18px] mt-[10px] absolute
       pl-[50px]"
       value={query}
       placeholder={'Look for someone ?'}
       placeholderTextColor='#CDCDE0'
       onChangeText ={(e)=>setQuery(e)}
       />
       <TouchableOpacity className ="absolute w-7 h-7">
            <Image
              className ="w-7 h-7  ml-[8vw] mt-[2vh] "
                source={icons.search}
            />
        </TouchableOpacity>
       <TouchableOpacity className ="absolute w-7 h-7">
       <Image
       className ="w-7 h-7  ml-[90vw] mt-[2vh]"
        source={icons.setting}
       />
       </TouchableOpacity>
    </View>
  )
}

export default SearchInput