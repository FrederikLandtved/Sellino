import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductGroupHorizontal from './components/product/ProductGroupHorizontal';
import { mainColors } from './constants/Colors';
import ProductListItem from './components/product/ProductListItem';
import { useEffect, useState } from 'react';
import { authorizedGet } from './services/FetchService';

function HomeScreen({ navigation }) {
  const [usersFirstName, setUsersFirstName] = useState('');
  useEffect(() => {
    const getHomePage = async() => {
      const homePage = await authorizedGet('GetHomePage');
      setUsersFirstName(homePage.firstName);
      return homePage;
    };

    getHomePage();
  })

  return (
    <ScrollView style={styles.pageContainer}>
      <View
        style={styles.header}
      >
          <SafeAreaView style={{ marginBottom: -20 }}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Velkommen, {usersFirstName}!</Text>
              <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
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
          profileName="Adam Petersen" 
          profileBio="Fresh rugs for sale"
          profileImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          productImage="https://media-photos.depop.com/b0/28998409/1045096855_1296161d72f54104a7c64d85df82e89e/P0.jpg"
          title='"WET GRASS" rug'
        />
        <ProductListItem 
          profileName="Jacob Dolleris" 
          profileBio="Handmade ceramics from Denmark  💚🌿"
          profileImage="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          productImage="https://i.pinimg.com/originals/32/d1/9b/32d19b93d83009f58138620657f66308.jpg"
          title='North Face jacket'
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