import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';
import PhoneNumber from '../login/PhoneNumber';
import { NavigationContainer } from '@react-navigation/native';

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        // <MyDrawer.n
        <NavigationContainer>
            <MyDrawer.Navigator>
                <MyDrawer.Screen name="HomeScreen" component={HomeScreen} />
                <MyDrawer.Screen name="PhoneNumber" component={PhoneNumber} />
            </MyDrawer.Navigator>
        </NavigationContainer>
    )
}

export default Drawer