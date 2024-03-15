import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image } from "react-native";

import HomeScreen from './screens/HomeScreen';
import OnlineDarsScreen from './screens/Kurs';
import Yonalishlar from './screens/Yonalishlar';
import Musobaqalar from "./screens/Musobaqalar";
import HeaderBtn from "./screens/HeaderBtn";

import Logo from '../../assets/logo.png';

const homeName = 'home';
const onlineDarsName = 'Kurs';
const YonalishName = 'yonalish';
const dasturlash = 'dasturlash';
const musobaqalar = 'musobaqalar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function MainContainer() {
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline'
              } else if(rn === onlineDarsName) {
                iconName = focused ? 'list' : 'list-outline'
              } else if(rn === YonalishName) {
                iconName = focused ? 'settings' : 'settings-outline'
              } else if(rn === musobaqalar) {
                iconName = focused ? 'list' : 'list-outline'
              }
  
              return <Ionicons name={iconName} size={size} color={color} />
          },
          headerLeft: () => (
            <View>
              <Image source={Logo} alt="logo" style={{ maxWidth: 100, maxHeight: 100 }} />
            </View>
          ),
          headerRight: () => (
            <HeaderBtn />
          ),
          headerStyle: {backgroundColor: '#fff'},
          headerTitle: "",
          headerShadowVisible: false
          
        })}>
        <Tab.Screen name={onlineDarsName} component={OnlineDarsScreen} />
       <Tab.Screen name={homeName} component={HomeScreen}/> 
        <Tab.Screen name={YonalishName} component={Yonalishlar} />  
        <Tab.Screen name={musobaqalar} component={Musobaqalar} />     
        </Tab.Navigator>
      </NavigationContainer>       
    )
}
