import { ImageBackground, Image, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react'
import WelcomeStyles from '../../assets/styles/loginStyles/WelcomeStyles';
import GlobelStyles from '../../assets/styles/GlobelStyles';

const WelcomeScreen = () => {
    const handleButtonPress = () => {
        console.log('Button pressed');
        navigation.navigate('PhoneNumber'); // Pass the screen name as a string
    }

    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/login.jpg')}
                style={WelcomeStyles.background}
            >
                <View style={WelcomeStyles.MainWrap}>
                    <View>
                        <Text style={WelcomeStyles.BrandName}>AUTO-26</Text>
                    </View>
                    <View style={WelcomeStyles.BottomSection}>
                        <Text style={WelcomeStyles.GreatingText}>Welcome to <Text style={WelcomeStyles.SubBrand}>AUTO-26</Text></Text>
                        <TouchableOpacity style={GlobelStyles.commonButton} onPress={() => handleButtonPress()}>
                            <Text style={GlobelStyles.buttonText}>Continue with Phone Number</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default WelcomeScreen


