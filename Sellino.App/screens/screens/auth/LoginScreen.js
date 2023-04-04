import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SlButton from "../../components/ui-kit/form/Button";
import SlFormGroup from "../../components/ui-kit/form/Input";
import { mainColors } from '../../constants/Colors';
import { useEffect, useState } from "react";
import { authorizedPost } from "../../services/FetchService";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    if(email && password) {
      setIsButtonDisabled(false);
    }else{
      setIsButtonDisabled(true);
    }

    setLoginFailed(false);
  }, [email, password])

  const onLoginPress = async() => {
    if(email && password) {
      setIsLoading(true);
      var loginData = await authorizedPost('Auth/Login', { email: email, password: password });

      if(loginData.token){
        // Set global auth state to Authorized
        setLoginFailed(false);
        console.log("Successfully logged in!")
      }else{
        setLoginFailed(true);
      }

      setIsLoading(false);
    }
  }

    return (
      <LinearGradient
        style={styles.header}
        colors={[mainColors.headerColorSecondary, mainColors.headerColorPrimary]}
      >
        <SafeAreaView style={[styles.loginContainer]}>
          <View style={styles.flexItem}>
            <>
              <Text style={styles.welcomeText}>Velkommen til</Text>
              <Text style={styles.sellinoText}>Sellino 😄</Text>
            </>
          </View>
          <View style={[styles.flexItem, styles.flexItemLarge]}>
            <>
              <SlFormGroup 
                labelText='Email' 
                placeholder='Indtast email' 
                secondary
                onInputChange={(text) => setEmail(text)}
              />
              <SlFormGroup 
                labelText='Adgangskode' 
                placeholder='Indtast password' 
                secondary
                isPassword={true}
                onInputChange={(text) => setPassword(text)}
              />
              <SlButton 
                buttonText='Log ind'
                onButtonPress={() => onLoginPress()}
                isLoading={isLoading}
                isDisabled={isButtonDisabled}
              />
              { loginFailed &&
                <Text style={styles.loginFailed}>Sorry, login failed!</Text>
              }
            </>
          </View>
          <View style={[styles.flexItem, styles.flexEnd]}>
            <>
              <Text style={styles.registerText}>Ny på Sellino? 🌱</Text>
              <SlButton 
                buttonText='Opret en bruger' 
                onButtonPress={() => navigation.navigate('Register')}
                secondary
              />
            </>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  flexItem: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  },
  flexItemLarge: {
    flex: 2
  },
  flexEnd: {
    justifyContent:'flex-end'
  },
  welcomeText: {
    fontSize: 15,
    color: 'white'
  },
  sellinoText:{
    fontSize: 30,
    fontWeight: 700,
    color: 'white',
    marginTop: 10
  },
  registerText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 12
  },
  loginFailed: {
    color: 'red',
    marginTop: 10
  }
});