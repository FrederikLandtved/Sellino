import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SlButton from "../../components/ui-kit/form/Button";
import SlFormGroup from "../../components/ui-kit/form/Input";
import { useEffect, useState } from "react";
import { unauthorizedPost } from "../../services/FetchService";
import { useAuth } from "../../context/AuthContext";
import * as SecureStore from 'expo-secure-store';
import { ImagesAssets } from "../../../assets/ImagesAssets";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [_, setUser] = useAuth('');

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
      const loginData = await unauthorizedPost('Auth/Login', { email: email, password: password });

      if(loginData.token){
        await SecureStore.setItemAsync("userToken", loginData.token);
        setUser(loginData.token);
        setLoginFailed(false);
      }else{
        setLoginFailed(true);
      }

      setIsLoading(false);
    }
  }

    return (
        <SafeAreaView style={[styles.loginWrapper]}>
          <View style={[styles.loginContainer]}>
            <Image style={styles.logo} source={ ImagesAssets.Logo}/>
            <SlFormGroup 
              labelText='Email' 
              placeholder='E-mail' 
              secondary
              onInputChange={(text) => setEmail(text)}
            />
            <SlFormGroup 
              labelText='Adgangskode' 
              placeholder='Adgangskode' 
              secondary
              onInputChange={(text) => setEmail(text)}
            />
            <SlButton 
              buttonText='Log ind'
              onButtonPress={() => onLoginPress()}
              isLoading={isLoading}
              isDisabled={false}
              />
            <SlButton 
              buttonText='Opret en bruger' 
              onButtonPress={() => navigation.navigate('Register')}
              secondary
            />
          </View>
          {/* <View style={styles.flexItem}>
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
          </View> */}
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginWrapper: {
    height: '100%',
    justifyContent: 'center',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F8F8F8'
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  },
  flexItem: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
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