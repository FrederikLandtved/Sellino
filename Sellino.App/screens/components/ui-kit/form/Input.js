import { StyleSheet, View, Text, TextInput } from "react-native";

function SlFormGroup(props) {
  const onInputChange = (text) => {
    if(props.onInputChange){
      props.onInputChange(text);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconWrapper}></View>
      <TextInput 
        style={[styles.inputText, props.secondary ? styles.secondaryInput : styles.primaryInput]} 
        placeholder={props.placeholder} 
        placeholderTextColor={'#636363'}
        secureTextEntry={props.isPassword} 
        onChangeText={text => onInputChange(text)}
        clearButtonMode="always"/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#CACACA',
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    display: 'flex',
    flexDirection: 'row'
  },
  inputText:{
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 14,
    borderRadius: 8,
    paddingTop: 4
  },
  iconWrapper: {
    backgroundColor: '#F8F8F8',
    borderRightWidth: 1,
    borderRightColor: '#CACACA',
    height: '100%',
    width: 55,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6
  },
  primaryInput: {
    backgroundColor: 'white',
    color: 'black'
  }
});

export default SlFormGroup;