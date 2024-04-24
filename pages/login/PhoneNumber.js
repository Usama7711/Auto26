import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GlobelStyles from '../../assets/styles/GlobelStyles';
import PhoneNumberStyles from '../../assets/styles/loginStyles/PhoneNumberStyles';

const PhoneNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);

  const handleInputChange = (text) => {
    setInputValue(text);
    if (text.length === 10) {
      setIsInputValid(true);
      setError('');
    } else {
      setIsInputValid(false);
      setError('Number must be exactly 10 digits long.');
    }
  };

  const handleButtonPress = () => {
    if (inputValue.length !== 10) {
      setError('Number must be exactly 10 digits long.');
      return; // Prevent further action if error exists
    }
    console.log('Input value:', inputValue);
    // You can use the input value for further processing, validation, etc.
  };

  return (
    <View style={[GlobelStyles.cx_Main, PhoneNumberStyles.MainPhoneWraper]}>
      <View style={PhoneNumberStyles.TopSection}>
        <Image
          style={PhoneNumberStyles.BackArrow}
          source={require('../../assets/images/arrowLeft.svg')}
        />

        <View>
          <Text style={PhoneNumberStyles.HeadingTeaxt}>
            Enter Phone number for Verification
          </Text>
          <Text style={PhoneNumberStyles.SubHeadingText}>
            The Number will use for communication for all rides
          </Text>
        </View>
        <View>
          <TextInput
            style={GlobelStyles.commmonInput}
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleInputChange}
            maxLength={10}
            placeholder='Ex - 9607151525'
          />
          {error ? <Text style={GlobelStyles.errorText}>{error}</Text> : null}
        </View>
      </View>
      <View style={PhoneNumberStyles.BottomSection}>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={[
            GlobelStyles.validButton,
            isInputValid ? GlobelStyles.commonButton : null,
          ]}
          disabled={!isInputValid}
        >
          <Text style={GlobelStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumber;
