import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { icons } from '../../constants'
import { Image } from 'react-native'
import {images} from '../../constants'
import { Button } from 'react-native'
import { StatusBar } from 'react-native'
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
const getJob = (job)=>{
  return job ? job : 'Unemployed';
}
const getImage =(profile_pic)=>{
  return profile_pic ? profile_pic : images.profile_pic;
};
const getUniversity =(uni) =>{
  return uni ? uni : 'Unknown';
}
const ForYou =()=>{
  const DATA = [
    { id: '1', title: 'Harry Do', 
      profile_pic:images.harry_do, 
      uni:'University of Binghamton, NY',
      uni_logo:images.bu_logo,
      job:'Course Assistant',
    },
     
    { id: '4', title: 'Brandon Tang',
      profile_pic:images.brandon_tang,
      uni:'University of Binghamton, NY',
      uni_logo:images.bu_logo,
      job:'Chemist'
    
    },
    {id:'5', title:'Leo Fukakou', 
      uni:'HCMC University of Technology (HCMUT), Viet Nam',
      profile_pic:images.leo,
      uni_logo:images.bku_logo,
      job:'Data Analytic'},
    
    {id:'2', title:'Phu Toan',
      profile_pic:images.toan,
      uni:'University of South Florida, Florida',
      uni_logo:images.usf_logo,
      job:'Cyber Security'
      
      
    },
    {id:'3', title:'Hiten Malhotra', 
      profile_pic:images.hiten,
      uni_logo:images.bu_logo,
      uni:'University of Binghamton, NY',
      job:'AI Engineer'},
    
    // ... add more items as needed
  ];
  
  const Item = ({ title ,profile_pic,uni,job, uni_logo}
  ) => (
    <View className="p-2 bg-white rounded-md w-[90vw] h-[19.5vh] mb-[3vh] ml-[20px] shadow-md" >
     <View className = "relative">
      <View className="rounded-full w-[7vh] h-[7vh] absolute mt-[5px] ml-[4px] items-center">
        <Image
          source={getImage(profile_pic)}
          className="w-[6.2vh] h-[6.2vh] rounded-full mt-[1.3px] mb-0"
        />
      </View>
      <View className='flex-row items-center'>
      <Text className="text-black pl-[20vw] pt-[10px] font-bold ">{title}</Text>
      <Image
        source={icons.correct}
        className='w-4 h-4 ml-1 mt-3 '
      />
      <View className=' mt-[1vh] ml-[15vw] w-[17vw] flex-row bg-yellow-200 rounded-md items-center'>
        <Image
          source={icons.premium}
          className='w-4 h-4'
        />
        <Text className=' text-orange-300 text-[12px]'>Premium</Text>
      </View>
      </View>
      <View className='flex-row items-center '>
        <Image
        source={uni_logo}
        className='w-5 h-5 ml-[9.5vh] rounded-full '
        />
      <Text className="  text-black text-[12px] pl-[11px] pt-[2px] pb-0 mb-0 font-thin w-[63vw]">{getUniversity(uni)}</Text>
      </View>
      </View>{/* Hereeeeee*/}
      <View className=" mr-[10vw]  border-y-1  w-[88.6vw] h-[1px] mt-[23px] border-t-slate-300 bg-slate-300">
      </View>
      <View className ='flex-row w-[200vw] mt-[4px]'>
        <View className=' flex-row'>
          <Image
            source={icons.job}
            className='w-4 h-4 ml-3'
          />
        <Text className="pl-[6px] text-[11px] ">{getJob(job)}</Text>
        </View>
        <View className='flex-row ml-3'>
          <Image
            source={icons.workplace}
            className='w-4 h-4 ml-3'
          />
        <Text className='pl-[8px] text-[11px] ' >ABC Tech Solution</Text>
        </View>
      </View>
      <Text className='font-thin  text-[10px] ml-3 p-0'>10 mutual connections</Text>
      <View className='flex-row items-center mb-0 '>
        <TouchableOpacity
        onPress={()=>{console.log("Hello Everyone")}}
        className='bg-gray-200 w-[35vw] mt-2 h-[4vh] mx-[18px] px-5  rounded-lg items-center shadow-inner'
        >
          <Text className='items-center mt-[1vh] text-black '>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
        className='bg-purple-600 w-[35vw] mt-2 h-[4vh] mx-[5px] px-5 rounded-lg items-center shadow-inner'
        >
          <Text className='items-center mt-[1vh] text-white'>Accept</Text>
        </TouchableOpacity>
      </View>
       </View>
  );
  const [isHorizontal, setIsHorizontal] = useState(false);
  return(
    <>
    <FlatList
    data={DATA} // Array of objects to be rendered
    renderItem={({item}) => <Item 
    title={item.title} 
    profile_pic={item.profile_pic} 
    uni ={item.uni}
    job={item.job}
    uni_logo={item.uni_logo}
    />} // Access individual item properties
    keyExtractor={(item) => item.id} 
    horizontal={isHorizontal}
    ListHeaderComponent={()=>(
    <View className="mt-[20px] mb-[2vh] relative">
      <Text className ="text-black text-xl font-bold px-6 ">Top Pick For You</Text>
      <Text className="px-6 text-gray-400 ">{DATA.length} results</Text>
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
    <StatusBar
    backgroundColor='#161622' style ='dark'
    />
    </>
   

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
  <Text className ="text-black text-xl">Fashion</Text>
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
      initialRouteName="For you"
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
          unmountOnBlur: true,
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