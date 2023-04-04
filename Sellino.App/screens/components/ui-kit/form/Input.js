import { StyleSheet, View, Text, TextInput } from "react-native";

function SlFormGroup(props) {
  const onInputChange = (text) => {
    if(props.onInputChange){
      props.onInputChange(text);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <Text 
        style={styles.labelText}>
          { props.labelText }
      </Text>
      <TextInput 
        style={[styles.inputText, props.secondary ? styles.secondaryInput : styles.primaryInput]} 
        placeholder={props.placeholder} 
        placeholderTextColor={props.secondary ? '#ebebeb' : '#9e9e9e'}
        secureTextEntry={props.isPassword} 
        onChangeText={text => onInputChange(text)}
        clearButtonMode="always"/>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 30
    },
    labelText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 700,
        marginBottom: 10
    },
    inputText:{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        fontSize: 16,
        borderRadius: 8
    },
    primaryInput: {
      backgroundColor: 'white',
      color: '#232323'
    },
    secondaryInput: {
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'white'
    }
});

export default SlFormGroup;