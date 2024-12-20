import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ForYouScreen from './screens/ForYouScreen'
import DEI from './screens/DEI'
import Hiking from './screens/Hiking'

const ForYouScreenName ='ForYou';

const DEI_ScreenName ='DEI';

const HikingScreenName ='Hiking';

const Tab = createMaterialTopTabNavigator();

const MainContainer = () => {
  return (
        <Tab.Navigator>

        </Tab.Navigator>

  )
}

export default MainContainer