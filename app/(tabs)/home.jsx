import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { Tabs } from 'expo-router'
const Home = () => {
  return (
    <SafeAreaView>
      <View className ='border-b-2 border-gray-400 bg-gray-500'>
        <SearchInput className ="absolute"/>   
       
      <Text className="text-black mt-[10vh]">Here where I am</Text>
      </View>
      <View>
      </View>
    </SafeAreaView>
    
  )
}

export default Home