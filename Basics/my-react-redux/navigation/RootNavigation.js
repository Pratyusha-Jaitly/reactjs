import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Vegan from '../screens/Vegan';
import Home from '../screens/Home';
import FatFree from '../screens/FatFree';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
                <View>
                
                <Text>Home</Text>
                </View>
            ),
          }}
        />
        <Tab.Screen
          name="Vegan"
          component={Vegan}
          options={{
            tabBarIcon: ({color, size}) => (
                <View>
            
              <Text>Vegan</Text>
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="FatFree"
          component={FatFree}
          options={{
            tabBarIcon: ({color, size}) => (
                <View>
               
                <Text>FatFree</Text>
                </View>
            ),
          }}
        />
         
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;