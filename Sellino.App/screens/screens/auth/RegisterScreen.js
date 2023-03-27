import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SlButton from "../../components/ui-kit/form/Button";
import SlFormGroup from "../../components/ui-kit/form/Input";
import InfoBox from "../../components/ui-kit/info/InfoBox";
import { mainColors } from '../../constants/Colors';

function RegisterScreen() {
    return (
      <View
        style={[styles.header, { backgroundColor: mainColors.headerColorPrimary }]}
      >
          <ScrollView style={[styles.registerContainer]}>
            <InfoBox style={{ marginBottom: 40 }} text='Meningen med Sellino er, at du kan være unik! Om du er privatperson, en hobbybutik eller vil sælge merchandise, kan du skræddersy din profil, til at skille dig ud fra mængden og understøtte dig og dit brand. 😍 🎨'></InfoBox>
            <SlFormGroup 
              labelText='Navn'
              placeholder='Indtast dit fulde navn'
              secondary
            />
            <SlFormGroup 
              labelText='Email'
              placeholder='Indtast din email'
              secondary
            />
            <SlFormGroup 
              labelText='Password'
              placeholder='Indtast dit password'
              secondary
              isPassword={true}
            />
            <SlFormGroup 
              labelText='Bekræft dit password'
              placeholder='Indtast dit password igen'
              secondary
              isPassword={true}
            />
            <Text style={{ color: 'white', marginBottom: 30 }}>Ved oprettelse accepterer du vores Terms & Conditions og Privacy Policy</Text>
            <SlButton buttonText='Opret bruger'></SlButton>
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