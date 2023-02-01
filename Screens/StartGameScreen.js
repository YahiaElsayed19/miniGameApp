import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 4,
    },
    numberInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: "#ddb52f",
        color: "#ddb52f",
        marginVertical: 8,
    },
})