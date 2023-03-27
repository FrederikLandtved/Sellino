import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

function SlButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={[styles.button, props.secondary ? styles.secondaryButton : styles.primaryButton]}
        onPress={() => onButtonPress()}
    >
          <Text style={styles.buttonText}>{props.buttonText}</Text>
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
    }
});

export default SlButton;