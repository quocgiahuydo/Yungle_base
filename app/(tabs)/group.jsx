import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { FlatList } from 'react-native'
import { images } from '../../constants'
import {icons} from '../../constants'
import {Image } from 'react-native'

const haveMessage =(message)=>{
  return message ? message : 'No messages'
}
const Messenger =({title, profile_pic,lastSeen,previewMessage})=>(
  <TouchableOpacity>
    <View className='bg-white w-full max-h-[30vh] flex-auto  border-blue-50 border-b-[1px]'>
    <View className ='flex-row ml-3 mt-3'>  
      <View className ='w-[60px] h-[60px] my-2 rounded-full bg-white items-center justify-center align-middle'>
      <Image
        source={profile_pic}
        className='w-[58px] h-[58px] rounded-full'
      />
      </View>
      <View className='my-2 mx-2 flex-row '>
        <Text className='font-semibold'>{title}</Text>
        <View className=' ml-[60vw] absolute text-wrap items-end justify-end'>
        <Text className='font-thin '>{lastSeen}</Text>
        
        </View>
        
      </View>
      <View className='absolute ml-[70px] mt-[40px] flex-row flex-wrap'>
          <Text className=' text-black'>{haveMessage(previewMessage)}</Text>
        </View>
    </View>
   
    </View>
    </TouchableOpacity>
)

const group = () => {
  const DATA=[ 
    { id: '1', title: 'Harry Do', 
    profile_pic:images.harry_do, 
    lastSeen:'now', 
    previewMessage:'You: Hey everyone I am excited to be a part of...'
  },
   
  { id: '4', title: 'Brandon Tang',
    profile_pic:images.brandon_tang,
    lastSeen:'15 mins',
    previewMessage:`Brandon: When r u gonna visit NYC?`
  },
  {id:'5', title:'Leo Fukakou', 
    profile_pic:images.leo,
    lastSeen:'Yesterday',
    job:'Data Analytic'
    ,previewMessage:`Leo: When r u gonna be back ?`
  },
    
  
  
  {id:'3', title:'Hiten Malhotra', 
    profile_pic:images.hiten,
    lastSeen:'10/12/24',
    job:'AI Engineer',
    previewMessage:`Hiten: How you doing ?`
  
},

    { id: '6', title: 'Opportunity Hub', 
      profile_pic:images.bu_logo, 
      job:'Course Assistant',
      lastSeen:'now',
      previewMessage:`Welcome to Opportunity Hub ?`
    },
    { id: '7', title: 'Career Catalyst', 
      profile_pic:images.usf_logo, 
      lastSeen:'now',
      job:'Course Assistant',
       previewMessage:`Welcome to Career Catalyst everyone..`
    },
    { id: '8', title: 'Yungle', 
      profile_pic:images.logo, 
      lastSeen:'Yesterday',
      job:'Course Assistant',
       previewMessage:`Yungle: Congratulations on your acceptance...`
    }
    ,{ id: '9', title: 'BKU Admission', 
      profile_pic:images.bku_logo, 
      lastSeen:'20 mins',
      job:'Course Assistant',
       previewMessage:`BKU: Your hard work has paid off! Congratulat...`
    },
    
  ]
  return (   
    <FlatList
    data={DATA}
    renderItem={({item})=><Messenger
    title={item.title}
    profile_pic={item.profile_pic}
    lastSeen={item.lastSeen}
    previewMessage={item.previewMessage}
    keyExtractor={(item)=>item.id}
    
    />}
    className='h-[full]  bg-white my-2'
    ListHeaderComponent={()=>(
      <View className ='h-[5vh] mt-[50px]'>
      <SearchInput/>   
      </View>
    )}
    />
  )
}

export default group