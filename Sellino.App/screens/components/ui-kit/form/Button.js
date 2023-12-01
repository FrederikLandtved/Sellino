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
        <Text style={[props.secondary ? styles.secondaryButtonText : styles.buttonText, isDisabled || isLoading ? styles.textDisabled : '']}>{props.buttonText}</Text>
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
      height: 45,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },
    primaryButton: {
        backgroundColor: '#0070F4'
    },
    buttonText: {
      color:'white',
      fontSize: 16,
      fontWeight: 600
    },
    secondaryButtonText: {
      color:'#0070F4',
      fontSize: 16,
      fontWeight: 600
    },
    secondaryButton: {
      borderColor: '#0070F4',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    disabled: {
      backgroundColor: 'darkgrey'
    },
    textDisabled: {
      color: 'lightgrey'
    }
});

export default SlButton;