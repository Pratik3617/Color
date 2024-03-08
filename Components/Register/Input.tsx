import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';


interface FloatingLabelTextInputProps {
  placeholder: string;
  iconName: string;
  isSecure: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

const FloatingLabelTextInput: React.FC<FloatingLabelTextInputProps> = ({placeholder,iconName,isSecure,onChangeText,value}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
    setError('');
  };

  const handleBlur = () => setIsFocused(false);

  const validateInput = () => {
    // Basic email validation (you can add more sophisticated validation)
    if (!text) {
      setError('This field is required');
    } else if (placeholder === 'Enter Email Address' && !isValidEmail(text)) {
      setError('Enter a valid email address');
    } else if (placeholder === 'Enter Phone Number' && !isValidPhoneNumber(text)) {
      setError('Enter a valid phone number');
    } else if (placeholder === 'Enter Password' && !isValidPassword(text)) {
      setError('Password should be at least 6 characters');
    } else {
      setError('');
    }
  };

  const isValidEmail = (email: string) => {
    return email.includes('@');
  };

  const isValidPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  };

  const isValidPassword = (password: string) => {
    return password.length >= 6;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isFocused ? styles.inputContainerFocused : null]}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isSecure} 
        />
        <Icon name={iconName} style={styles.icon} size={24} />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    borderRadius: 7,
    backgroundColor: "#f1f3ff",
  },

  inputContainerFocused: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },

  input: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: '#333',
    width: "80%",
    marginLeft: 8,
  },

  icon: {
    marginRight: 10,
    color: Colors.primary
  },

  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default FloatingLabelTextInput;
