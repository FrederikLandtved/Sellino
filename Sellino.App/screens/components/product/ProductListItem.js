import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { faMoneyBill1Wave, faTag, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function ProductListItem(props) {
  const { profileName , profileBio, profileImage, productImage } = props;

  return (
    <View style={styles.productListItemContainer}>
			<ImageBackground source={{uri: productImage}} style={styles.productImage}>
				<LinearGradient
					style={styles.header}
					// Change colors to variables
					colors={['rgba(183,183,183,0.4)', "transparent"]}
				>
					<View style={styles.productProfileInfo}>
							<Image style={styles.profileImage} source={{uri: profileImage}}></Image>
							<View style={styles.productProfileInfoText}>
								<Text style={styles.profileNameText}>{profileName}</Text>
								<Text style={styles.profileBioText}>{profileBio}</Text>
							</View>
					</View>
				</LinearGradient>
				<LinearGradient
					style={styles.productInformation}
					// Change colors to variables
					colors={['transparent', 'rgba(183,183,183,1)']}
				>					
					<View style={styles.productFlexContainer}>						
					<Text style={styles.productNameText}>Håndlavet kop</Text>
						<Text style={styles.productDescriptionText}>Lorem ipsum dolor sit amet, consectur</Text>
						<View style={styles.likesAndComments}>
							<Text style={styles.likeCommentText}>1.247 synes godt om</Text>
							<Text style={styles.likeCommentText}>36 kommentarer</Text>
						</View>
					</View>
					<View style={styles.productFlexContainerSmall}>
				<Text style={styles.price}>
					<FontAwesomeIcon style={{marginRight: 5}} icon={faTags} color={ "white" } />
						395 kr.
					</Text>
					</View>
				</LinearGradient>
				</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    productListItemContainer: {
			width: '100%',
			height: 400,
			backgroundColor: 'white',
			marginBottom: 10
    },
		header: {
			height: 80,
			padding: 15
		},
    productProfileInfo: {
      width: '100%',
      height: 37,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
    },
		productProfileInfoText: {
			marginLeft: 10
		},
		profileNameText: {
			fontSize: 14,
			color: '#ffffff',
			fontWeight: 600
		},
		profileBioText: {
			fontSize: 12,
			color: '#ffffff'
		},
    profileImage: {
      width: 37,
      height: 37,
      borderRadius: 100
    },
		productImage: {
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			borderTopLeftRadius: 10
		},
		productFlexContainer: {
			flex: 3,
		},
		productFlexContainerSmall: {
			flex: 1,
			alignItems: 'flex-end'
		},
		productInformation: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 15
		},
		productNameText: {
			fontWeight: 600,
			color: 'white',
			marginBottom: 5,
			fontSize: 20
		},
		productDescriptionText: {
			color: 'white',
			fontSize: 14
		},
		likesAndComments: {
			display: 'flex',
			flexDirection: 'row'
		},
		likeCommentText: {
			fontSize: 12,
			marginTop: 10,
			marginRight: 10,
			color: '#E4E4E4'
		},
		priceContainer: {
			backgroundColor: 'red'
		},
		price: {
			fontSize: 18,
			color: 'white',
			fontWeight: 700
		}
});

export default ProductListItem;