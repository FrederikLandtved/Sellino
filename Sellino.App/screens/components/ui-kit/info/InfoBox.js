import { StyleSheet, View, Text } from "react-native";

function InfoBox(props) {
  return (
    <View style={[props.style, styles.infoBoxContainer]}>
      <View style={styles.coloredSideBar}></View>
      <View style={styles.infoBoxContent}>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBoxContainer: {
    width: '100%',
    minHeight: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  coloredSideBar: {
    height: '100%',
    width: 8,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: '#19B959'
  },
  infoBoxContent: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    padding: 15
  }
});

export default InfoBox;