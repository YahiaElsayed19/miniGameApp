import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Card from "../components/UI/Card";
import InstructionsText from "../components/UI/InstructionsText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState("");
    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };
    const resetInputHandler = () => {
        setEnteredNumber("");
    };
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number",
                "Number has to be a number between 0 and 99.",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card style={styles.inputContainer}>
                <InstructionsText>Enter a number</InstructionsText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
