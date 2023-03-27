import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SlButton from "../../components/ui-kit/form/Button";
import SlFormGroup from "../../components/ui-kit/form/Input";
import { mainColors } from '../../constants/Colors';

function LoginScreen({ navigation }) {
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
              />
              <SlFormGroup 
                labelText='Adgangskode' 
                placeholder='Indtast password' 
                secondary
                isPassword={true}
              />
              <SlButton 
                buttonText='Log ind'
              />
            </>
          </View>
          <View style={[styles.flexItem, styles.flexEnd]}>
            <>
              <Text style={styles.registerText}>Er du ny på Sellino? 🌱</Text>
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
  }
});