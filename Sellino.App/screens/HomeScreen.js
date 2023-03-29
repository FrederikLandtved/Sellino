import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductGroupHorizontal from './components/product/ProductGroupHorizontal';
import { mainColors } from './constants/Colors';
import ProductListItem from './components/product/ProductListItem';

function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.pageContainer}>
          <View
            style={styles.header}
          >
              <SafeAreaView style={{ marginBottom: -20 }}>
                <View style={styles.greetingContainer}>
                  <Text style={styles.greeting}>Velkommen tilbage, Frederik!</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}></Image>
                  </TouchableOpacity>
                </View>
                <ProductGroupHorizontal 
                  headline="Nyt fra dem, du følger"
                  headlineColor={ mainColors.headerColorPrimary }
                  shadow
                >
                </ProductGroupHorizontal>
              </SafeAreaView>
          </View>
          <View style={styles.productsContainer}>
            <ProductListItem 
              profileName="Skrå Studio" 
              profileBio="Handmade ceramics from Denmark  💚🌿"
              profileImage="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              productImage="https://remixbysofie.b-cdn.net/wp-content/uploads/2021/11/Sandkaas-keramik-kopper-1_web.jpg"
            />
            <ProductListItem 
              profileName="Jacob Dolleris" 
              profileBio="Handmade ceramics from Denmark  💚🌿"
              profileImage="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              productImage="https://i.pinimg.com/originals/32/d1/9b/32d19b93d83009f58138620657f66308.jpg"
            />
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    backgroundColor: mainColors.bgColorSecondary
  },
  header: {
    width: '100%',
  },
  greetingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  image: {
    width: 36,
    height: 36,
    backgroundColor: 'red',
    borderRadius: 100
  },
  greeting: {
    color: mainColors.headerColorPrimary, 
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10
  },
  productsContainer: {
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default HomeScreen;