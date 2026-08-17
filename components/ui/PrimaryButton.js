import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={[
          styles.buttonInnerContainer,
          ({ pressed }) => (pressed ? styles.pressed : null),
        ]}
        android_ripple={{ color: Colors.primary600, foreground: true }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    overflow: "hidden",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
