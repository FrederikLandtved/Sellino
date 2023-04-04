import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

function SlButton(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsLoading(props.isLoading ?? false);
    setIsDisabled(props.isDisabled ?? false);
  }, [props.isLoading, props.isDisabled])

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        disabled={isDisabled || isLoading}
        style={[
          styles.button, 
          props.secondary ? styles.secondaryButton : styles.primaryButton,
          isDisabled || isLoading ? styles.disabled : ''
        ]}
        onPress={() => onButtonPress()}
    >
      { isLoading === true ? 
        <ActivityIndicator color="white"></ActivityIndicator> 
        : 
        <Text style={[styles.buttonText, isDisabled || isLoading ? styles.textDisabled : '']}>{props.buttonText}</Text>
      }
      </TouchableOpacity>
    </View>
  );

  function onButtonPress() {
    if (props.onButtonPress){
      props.onButtonPress();
    }
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%'    
    },
    button: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    primaryButton: {
        backgroundColor: '#19B959'
    },
    secondaryButton: {
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    disabled: {
      backgroundColor: 'darkgrey'
    },
    textDisabled: {
      color: 'lightgrey'
    }
});

export default SlButton;