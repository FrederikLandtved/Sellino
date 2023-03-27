import { Animated, View, StyleSheet, ImageBackground, Text } from 'react-native';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const BANNER_H = 300;

function ProfileWrapper(props) {
  const scrollA = useRef(new Animated.Value(0)).current;
    return (
      <>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollA}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          style={ props.contentStyle }
        >
          <View style={styles.bannerContainer}>
            <Animated.View
              style={styles.banner(scrollA)}>
                <ImageBackground
                  source={{uri: props.coverImage}} style={ styling.coverImage }>
                    <View style={styling.backgroundOverlay}></View>
                </ImageBackground>
              </Animated.View>
          </View>
          <View style={{ marginTop: -BANNER_H, height: BANNER_H, backgroundColor: 'transparent' }}>
            { props.profileInfo }
          </View>
          <View style={ props.contentStyle }>
              { props.children }
          </View>

        </Animated.ScrollView>

        { props.allowEditing &&
          <FontAwesomeIcon style={{ position: 'absolute', right: 20, top: 50 }} size={20} icon={faCog} color={ "white"}/>
        }
      </>
    );
}

const styling = StyleSheet.create({
	coverImage: {
		borderBottomLeftRadius: 30,
		width: '100%', 
		height: 300,
    backgroundColor: 'white'
	},
  backgroundOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'  
  }
});

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '100%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 1, 0.5],
        }),
      },
    ]
  })
});

export default ProfileWrapper;