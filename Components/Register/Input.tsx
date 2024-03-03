import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';


interface FloatingLabelTextInputProps {
  placeholder: string;
  iconName: string;
  isSecure: boolean;
}

const FloatingLabelTextInput: React.FC<FloatingLabelTextInputProps> = ({placeholder,iconName,isSecure}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isFocused ? styles.inputContainerFocused : null]}>
        <TextInput
          style={styles.input}
          // value={text}
          placeholder={placeholder}
          // onChangeText={(newText) => setText(newText)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isSecure} 
        />
        <Icon name={iconName} style={styles.icon} size={24} />
      </View>
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
    fontFamily: Font['poppins-regular'],
    fontSize: 18,
    color: '#333',
    width: "80%",
    marginLeft: 8,
  },

  icon: {
    marginRight: 10,
    color: Colors.primary
  },
});

export default FloatingLabelTextInput;
