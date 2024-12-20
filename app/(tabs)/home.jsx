import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { icons } from '../../constants'
import { Image } from 'react-native'
import {images} from '../../constants'
const Tab = createMaterialTopTabNavigator();
const TabIcon =({icon,name,color,focused})=>{
  return(
    <View className ="items-center justify-center gap-2 mt-[1.1vh] w-[60px] h-[10px]">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-5 h-5'
      />
    </View>

  )
}


const ForYou =()=>{
  const DATA = [
    { id: '1', title: 'Harry Do' },
    { id: '2', title: 'Brandon Tang' },
    { id: '3', title: 'Hiten Malhotra' },
    { id: '4', title: 'Phu Toan' },
    { id: '5', title: 'Scott McStay' },
    // ... add more items as needed
  ];
  
  const Item = ({ title }) => (
    <View className="p-2 bg-blue-200 rounded-md w-[90vw] h-[18vh] mb-[3vh] ml-[20px]" >
     <View className = "relative">
      <View className="bg-cyan-400 rounded-full w-[7vh] h-[7vh] absolute mt-[5px] ml-[4px] items-center">
        <Image
          source={images.profile_pic}
          className="w-[6.5vh] h-[6.5vh] rounded-full mt-[1.3px]"
        />
      </View>
      <Text className="text-blue-500 px-[20vw] font-bold  ">{title}</Text>
      </View>
    </View>
  );
  return(

 
    <FlatList
    data={DATA} // Array of objects to be rendered
    renderItem={({ item }) => <Item title={item.title} />} // Access individual item properties
    keyExtractor={(item) => item.id} 
    ListHeaderComponent={()=>(
    <View className="mt-[20px] mb-[2vh] relative">
      <Text className ="text-black text-xl font-bold px-6 ">Top Pick For You</Text>
      <Text className="px-6 text-gray-400 ">5 results</Text>
      <View className ="ml-[87vw] mt-[4px] mb-[0px]  absolute">
      <TouchableOpacity className="absolute w-10 h-6"
      onPress={()=>{
        console.log("User is pressing the battery");
      }}
      >
        <View className="rounded-full border-solid bg-gray-200 w-10 items-center" >
        <Image
        source={icons.battery}
        className="w-6 h-6"
        />
        </View>
      </TouchableOpacity>
      </View>
      <View className ="ml-[77vw] mt-[4px] mb-[0px]  absolute">
      <TouchableOpacity 
      onPress={()=>{
        console.log("User is pressing the filter");
      }}
      className="absolute w-10 h-6">
        <View className="rounded-full border-solid bg-gray-200 w-10 items-center" >
        <Image
        source={icons.filter}
        className="w-6 h-6"
        />
        </View>
      </TouchableOpacity>
      </View>
    </View>  
  )}
    />
  )
}
const DEI =()=>{
  return(
  <View className="justify-center">
  <Text className ="text-black text-xl">DEI</Text>
</View>
  )
}
const Hiking =()=>{
  return(
  <View className="justify-center">
  <Text className ="text-black text-xl">Hiking</Text>
</View> 
  )
}
const Estate =()=>{
  return(
  <View className="justify-center">
  <Text className ="text-black text-xl">Estate</Text>
</View>
  )
}
const Fashion =()=>{
  return(
  <View className="justify-center">
  <Text className ="text-black text-xl">DEI</Text>
</View>
  )
}


const Home = () => {
  return (
    <SafeAreaView>
      <View className =' border-gray-400 bg-search_area h-[5vh] relative '>
      <SearchInput/>   
      </View>
      <View className =' bg-search_area h-[78vh]' >
      <Tab.Navigator
       screenOptions={{
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarIndicatorStyle: { backgroundColor: '#b934ed' },
        tabBarStyle: { backgroundColor: 'bg-gray-500' },
        tabBarLabelStyle:{fontSize:'12'},
      }}>
        <Tab.Screen 
        name="For you" 
        component={ForYou}
        options={{
          tabBarIcon:({color,focused})=>(
            <TabIcon
              icon={icons.foryou}
              color={color}
              focused={focused}
            />
          )
        }}
        />
        <Tab.Screen 
        name="DEI" 
        component={DEI}
        options={{
        tabBarIcon:({color,focused})=>(
            <TabIcon
              icon={icons.dei}
              color={color}
              focused={focused}
            />
          )
        }} />
        <Tab.Screen 
        name="Hiking" 
        component={Hiking}
        options={{
          tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.hiking}
                color={color}
                focused={focused}
              />
            )
          }} 
         />
        <Tab.Screen 
        name="Real Estate" 
        component={Estate}
        options={{
          tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.real_estate}
                color={color}
                focused={focused}
              />
            )
          }} 
         />
        <Tab.Screen name="Fashion" 
        component={Fashion}
        options={{
          tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.fashion}
                color={color}
                focused={focused}
              />
            )
          }} />
      </Tab.Navigator>
      </View>
     
    </SafeAreaView>
    
  )
}

export default Home