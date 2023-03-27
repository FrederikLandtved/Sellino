import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileActionButton from './ProfileActionButton';

function ProfileInfo(props) {
    return (
        <View style={styles.profileInfoWrapper}>
            <SafeAreaView>
                <Text style={styles.profileName}>{props.profileName}</Text>
            </SafeAreaView>
            <View>
                <View style={styles.profileInfoContainer}>
                    <Image source={{ uri: props.profileImage }} style={styles.profileImage}></Image>

                    <View style={styles.statsAndButtons}>
                        <View style={styles.statsContainer}>
                            <View style={styles.statsFlexBox}>
                                <Text style={styles.statAmount}>392</Text>
                                <Text style={styles.statName}>Opslag</Text>
                            </View>
                            <View style={styles.statsFlexBox}>
                                <Text style={styles.statAmount}>10.827</Text>
                                <Text style={styles.statName}>Følgere</Text>
                            </View>
                            <View style={styles.statsFlexBox}>
                                <Text style={styles.statAmount}>21</Text>
                                <Text style={styles.statName}>Følger</Text>
                            </View>
                        </View>
                        <View style={styles.actionButtons}>
                            <ProfileActionButton buttonText='Beskeder' styles={{ marginRight: 10 }}></ProfileActionButton>
                            <ProfileActionButton buttonText='Ordrer' styles={{ marginRight: 10 }}></ProfileActionButton>
                        </View>
                    </View>
                </View>
                <View style={styles.bioContainer}>
                    <Text style={styles.bioText}>{ props.bioText }</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileInfoWrapper: {
        padding: 20,
        height: 300,
        display: 'flex',
        justifyContent: 'space-between'
    },
    profileName: { 
        color: 'white', 
        fontWeight: 600, 
        fontSize: 16, 
        textAlign: 'center' 
    },
    profileInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    statsAndButtons: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        // backgroundColor: 'yellow', 
        flex: 1, 
        padding: 10,
        height: 90
    },
    statsContainer: {
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    statsFlexBox: {
        flexGrow: 1,
        // backgroundColor: 'green'
    },
    statAmount: {
        fontWeight: 800,
        color: 'white',
        fontSize: 16
    },
    statName: {
        color: 'white'
    },
    bioContainer: {
        marginTop: 15
    },
    bioText: {
        color: 'white',
        fontWeight: 500
    },
    actionButtons: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default ProfileInfo;