import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GlobelStyles from '../../assets/styles/GlobelStyles';
import PhoneNumberStyles from '../../assets/styles/loginStyles/PhoneNumberStyles';

const OtpVerify = () => {
  const [countdown, setCountdown] = useState(10); // 10 seconds for testing, change as needed
  const [showButton, setShowButton] = useState(true);
  const [resendButton, setResendButton] = useState(false);
  const [timerRef, setTimerRef] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timerRef); // Clear the previous timer reference
          setShowButton(false);
          setResendButton(true);
          return 0;
        }
      });
    }, 1000); // Update every second

    setTimerRef(timer); // Save the timer reference

    return () => clearInterval(timer); // Clean up on unmount or re-render
  }, []);

  const handleResendopt = () => {
    clearInterval(timerRef); // Clear the previous timer reference
    setCountdown(10); // Reset countdown to 10 seconds
    setShowButton(true);
    setResendButton(false);

    // Start the countdown timer again
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer); // Clear the timer when countdown reaches zero
          setShowButton(false);
          setResendButton(true);
          return 0;
        }
      });
    }, 1000);

    setTimerRef(timer); // Save the new timer reference
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;


  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    if (inputValue.length === 4) {
      // Perform submit action
      console.log('Submitting OTP:', inputValue);
    } else {
      // Notify user about incorrect OTP length
      console.log('Invalid OTP length');
    }
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
            Waiting for your secure OTP to verify
          </Text>
          <Text style={PhoneNumberStyles.SubHeadingText}>
            Otp will send on ******1525
          </Text>
        </View>
        <View>
          <TextInput
            style={GlobelStyles.commmonInput}
            keyboardType="numeric"
            maxLength={4}
            value={inputValue}
            onChangeText={handleInputChange}
          />
          {showButton ? (
            <Text>
              Resend OTP after ({minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')})
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResendopt}>
              <View style={PhoneNumberStyles.ResndOTPSection}>
                <Text style={PhoneNumberStyles.ResnedText}>Resend OTP</Text>
                <Text style={PhoneNumberStyles.ResnedText2}>OTP on call</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={PhoneNumberStyles.BottomSection}>
        <TouchableOpacity
          style={[GlobelStyles.validButton, inputValue.length === 4 ? GlobelStyles.commonButton : null]}
          onPress={handleSubmit}
          disabled={inputValue.length !== 4} // Disable button if input length is not 4
        >
          <Text style={GlobelStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerify;
