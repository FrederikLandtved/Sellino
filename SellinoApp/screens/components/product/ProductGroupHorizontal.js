import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

function ProductGroupHorizontal(props) {
  const headline = props.headline;

  return (
    <View style={{ marginTop: 20 }}>
      { headline &&
          <Text style={[styles.headlineText, {color: props.headlineColor} ]}>
            { headline }
          </Text>
      }
      <ScrollView 
        horizontal={true}
        contentContainerStyle={{ paddingRight: 20 }}
        style={styles.productContainer}
      >
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b0/31842169/1210820763_accbe9cb361f463e97147fba2e889b81/P0.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b1/23599530/1393928244_61780da77cb449cba0861c4e3b742e21/P8.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b0/17830639/1110520396_bc6f085a9d6442eda63e9e124da86400/P0.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b1/19644388/1380671905_e573d7fe23b6419f8210b17fe0734231/P8.jpg'}}></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 11
  },
  headlineText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    marginLeft: 15,
    fontWeight: '500'
  },
  productContainer: {
    paddingLeft: 15,
    paddingBottom: 15
  },
  productItem: {
    height: 150,
    width: 120,
    marginRight: 10,
    borderRadius: 8
  }
});

export default ProductGroupHorizontal;