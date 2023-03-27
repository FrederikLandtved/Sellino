import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProfileActionButton(props) {
    color1 = props.primaryColor;
    return (
        <TouchableOpacity style={[styles.profileActionButtonWrapper, props.styles]}>
            <Text style={styles.buttonText}>{ props.buttonText }</Text>
        </TouchableOpacity>
    );
}

ProfileActionButton.defaultProps = {
    buttonText: 'Besked'
}

const styles = StyleSheet.create({
    profileActionButtonWrapper: {
        backgroundColor: '#7DB74F',
        alignSelf: 'flex-start',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 12
    },
    buttonText: {
        color: 'white'
    }
});

export default ProfileActionButton;