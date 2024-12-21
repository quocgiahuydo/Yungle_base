import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { FlatList } from 'react-native'
const group = () => {
  return (   
     <SafeAreaView>
    <View className ='h-[5vh] relative '>
    <SearchInput/>   
    </View>
    <FlatList>
      
    </FlatList>
    </SafeAreaView>
  )
}

export default group