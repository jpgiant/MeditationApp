import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface AuthButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const AuthButton = ({ text, onPress, style, textStyle }: AuthButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8e97fd",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 20,
    // height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F6F1FB",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});

export default AuthButton;
