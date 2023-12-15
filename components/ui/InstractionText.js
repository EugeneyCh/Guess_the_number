import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/colors";

function InstractionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstractionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
