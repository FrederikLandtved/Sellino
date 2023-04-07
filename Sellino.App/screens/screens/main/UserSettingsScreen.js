import { StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import * as SecureStore from 'expo-secure-store';

function UserSettingsScreen(props) {
  const [_, setUser] = useAuth('');

  const onLogoutPress = async() => {
    setUser(null);
    await SecureStore.setItemAsync("userToken", '');
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Text>User settings</Text>
      <TouchableOpacity onPress={() => onLogoutPress()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    pageContainer: {

    }
});

export default UserSettingsScreen;