import { Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import ProductGroupGrid from "../components/product/ProductGroupGrid";
// import { mainStyles } from '../styles/MainStyles.js'
// import { mainColors } from '../styles/MainColorStyle.js'

const images = [
  {
   image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
   desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 ]
 

function ExploreScreen() {
    return (
      <SafeAreaView style={[styles.settingsContainer]}>
        {/* <Text style={[mainStyles.h1 ]}>Explore</Text>
        <TextInput style={styles.searchInput} placeholder="Start søgning..."></TextInput>
        <ProductGroupGrid headline="" headlineColor=""></ProductGroupGrid> */}

      </SafeAreaView>
    );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    height: '100%'
  },
  searchInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    borderColor: 'lightgrey',
    marginTop: 15
  }
});