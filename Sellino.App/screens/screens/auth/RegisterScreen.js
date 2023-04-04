import { Text, StyleSheet, View, ScrollView } from "react-native";
import SlButton from "../../components/ui-kit/form/Button";
import SlFormGroup from "../../components/ui-kit/form/Input";
import InfoBox from "../../components/ui-kit/info/InfoBox";
import { mainColors } from '../../constants/Colors';
import { useState, useEffect } from "react";
import { unauthorizedPost } from "../../services/FetchService";

function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if(email && password) {
      setIsButtonDisabled(false);
    }else{
      setIsButtonDisabled(true);
    }
  }, [email, password])

  onRegisterPress = async() => {
    if(firstName && lastName && email && password && confirmPassword) {
      const userData = await unauthorizedPost('Auth/AddUser', { email: email, password: password, firstName: firstName, lastName: lastName  });

      console.log(userData);
    }
  }
    return (
      <View
        style={[styles.header, { backgroundColor: mainColors.headerColorPrimary }]}
      >
          <ScrollView style={[styles.registerContainer]}>
            <InfoBox style={{ marginBottom: 40 }} text='Meningen med Sellino er, at du kan være unik! Om du er privatperson, en hobbybutik eller vil sælge merchandise, kan du skræddersy din profil, til at skille dig ud fra mængden og understøtte dig og dit brand. 😍 🎨'></InfoBox>
            <SlFormGroup 
              labelText='Fornavn'
              placeholder='Indtast dit fornavn navn'
              secondary
              onInputChange={(text) => setFirstName(text)}
            />
            <SlFormGroup 
              labelText='Efternavn'
              placeholder='Indtast dit efternavn'
              secondary
              onInputChange={(text) => setLastName(text)}
            />
            <SlFormGroup 
              labelText='Email'
              placeholder='Indtast din email'
              secondary
              onInputChange={(text) => setEmail(text)}
            />
            <SlFormGroup 
              labelText='Password'
              placeholder='Indtast dit password'
              secondary
              isPassword={true}
              onInputChange={(text) => setPassword(text)}
            />
            <SlFormGroup 
              labelText='Bekræft dit password'
              placeholder='Indtast dit password igen'
              secondary
              isPassword={true}
              onInputChange={(text) => setConfirmPassword(text)}
            />
            <Text style={{ color: 'white', marginBottom: 30 }}>Ved oprettelse accepterer du vores Terms & Conditions og Privacy Policy</Text>
            <SlButton 
              buttonText='Opret bruger' 
              isDisabled={isButtonDisabled}
              onButtonPress={() => onRegisterPress()}
            >
            </SlButton>
          </ScrollView>
      </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  registerContainer: {
    height: '100%',
    padding: 20,
    marginBottom: 200
  },
  pageHeadline: {
    color: 'white',
    fontSize: 24,
    fontWeight: 700,
    marginTop: 50
  }
});