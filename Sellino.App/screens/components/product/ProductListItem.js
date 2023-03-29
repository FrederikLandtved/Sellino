import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { mainColors } from "../../constants/Colors";

function ProductListItem(props) {
  const { profileName , profileBio, profileImage, productImage } = props;

  return (
    <View style={styles.productListItemContainer}>
			<ImageBackground source={{uri: productImage}} style={styles.productImage} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
				<View style={styles.imageOverlay}></View>
				<View style={styles.header}>
					<View style={styles.productProfileInfo}>
							<Image style={styles.profileImage} source={{uri: profileImage}}></Image>
							<View style={styles.productProfileInfoText}>
								<Text style={styles.profileNameText}>{profileName}</Text>
								<Text style={styles.profileBioText}>{profileBio}</Text>
							</View>
					</View>
				</View>
			</ImageBackground>
				<View style={styles.productInformation}>					
					<View style={styles.productFlexContainer}>						
						<Text style={styles.productNameText}>Håndlavet kop</Text>
						<Text style={styles.productDescriptionText}>Lorem ipsum dolor sit amet, consectur</Text>
						<View style={styles.likesAndComments}>
							<Text style={styles.likeCommentText}>1.247 synes godt om</Text>
							<Text style={styles.likeCommentText}>36 kommentarer</Text>
						</View>
					</View>
					<View style={styles.productFlexContainerSmall}>
						<View style={styles.priceContainer}>
							<Text style={styles.price}>
								395 kr.
							</Text>
						</View>
					</View>
				</View>
    </View>
  );
}

const styles = StyleSheet.create({
    productListItemContainer: {
			width: '100%',
			height: 530,
			marginBottom: 20,
			shadowColor: '#171717',
			shadowOffset: {width: 0, height: 0},
			shadowOpacity: 0.1,
			shadowRadius: 10
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
			height: 400,
			display: 'flex',
			justifyContent: 'space-between',
			borderTopRightRadius: 20,
			borderTopLeftRadius: 20
		},
		imageOverlay: {
			backgroundColor: 'black',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			opacity: 0.15,
			borderTopRightRadius: 20,
			borderTopLeftRadius: 20
		},
		productFlexContainer: {
			flex: 3,
		},
		productFlexContainerSmall: {
			flex: 1,
			alignItems: 'flex-end',
			justifyContent: 'center'
		},
		productInformation: {
			display: 'flex',
			flexDirection: 'row',
			padding: 20,
			backgroundColor: 'white',
			height: 130,
			borderBottomRightRadius: 20,
			borderBottomLeftRadius: 20
		},
		productNameText: {
			fontWeight: 600,
			color: mainColors.headerColorPrimary,
			marginBottom: 10,
			fontSize: 18
		},
		productDescriptionText: {
			color: mainColors.headerColorPrimary,
			fontSize: 14
		},
		likesAndComments: {
			display: 'flex',
			flexDirection: 'row',
			marginTop: 20
		},
		likeCommentText: {
			fontSize: 12,
			marginTop: 10,
			marginRight: 10,
			color: '#7D7D7D'
		},
		priceContainer: {
			backgroundColor: mainColors.bgAccentColor,
			padding: 7,
			borderRadius: 4,
			shadowColor: '#171717',
			shadowOffset: {width: 0, height: 0},
			shadowOpacity: 0.1,
			shadowRadius: 7
		},
		price: {
			fontSize: 18,
			color: mainColors.textOnAccentColor,
			fontWeight: 700,
			borderRadius: 4
		}
});

export default ProductListItem;