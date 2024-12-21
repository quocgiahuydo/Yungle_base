import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import { icons } from '../../constants'
const TabIcon =({icon,name,color,focused})=>{
  return(
    <View className ="items-center justify-center gap-2 mt-[1.8vh] w-[64px]">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-5 h-5'
      />
      <Text className ={`${focused ? 'text-purple-500': 'text-current'} text-[11px] `}>
        {name}
        </Text>
    </View>

  )
}
const TabsLayout = () => {
  return (
<>
<Tabs
screenOptions={
  {
    tabBarShowLabel:false,
    tabBarActiveTintColor: '#d052f2',
                    tabBarInactiveTintColor:'#b8b8d4',
                    tabBarStyle:{
                        backgroundColor: '#dddddd',
                        borderTopWidth: 1,
                        height: 100,
                    }
  }
}
>   <Tabs.Screen
    name="profile"
    options={{
      title:"Profile",
      headerShown:false,
      tabBarIcon:({color,focused})=>(
        <TabIcon
          icon={icons.user}
          color={color}
          name="Profile"
          focused={focused}
        />
      )
    }}
  ></Tabs.Screen>
   <Tabs.Screen
    name="group"
    options={{
      title:"group",
      headerShown:false,
      tabBarIcon:({color,focused})=>(
        <TabIcon
          icon={icons.chat}
          color={color}
          name="Group"
          focused={focused}
        />
      )
    }}
  ></Tabs.Screen>
  <Tabs.Screen
    name="home"
    options={{
      title:"home",
      headerShown:false,
      tabBarIcon:({color,focused})=>(
        <TabIcon
          icon={icons.suggest}
          color={color}
          name="Suggestion"
          focused={focused}
        />
      )
    }}
  ></Tabs.Screen>
  <Tabs.Screen
    name="notify"
    options={{
      title:"notify",
      headerShown:false,
      tabBarIcon:({color,focused})=>(
        <TabIcon
          icon={icons.notify}
          color={color}
          name="Notification"
          focused={focused}
        />
      )
    }}
  ></Tabs.Screen>
   <Tabs.Screen
    name="menu"
    options={{
      title:"menu",
      headerShown:false,
      tabBarIcon:({color,focused})=>(
        <TabIcon
          icon={icons.menu}
          color={color}
          name="Menu"
          focused={focused}
        />
      )
    }}
  ></Tabs.Screen>

</Tabs>


</>
  )
}

export default TabsLayout