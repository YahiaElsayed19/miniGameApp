import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/UI/Title";
import InstructionsText from "../components/UI/InstructionsText";

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([]);

    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundry = 1;
        maxBoundry = 100;
    }, []);
    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundry,
            maxBoundry,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prev) => [newRndNumber, ...prev]);
    };
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionsText>Higher or Lower</InstructionsText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <FlatList
                data={guessRounds}
                renderItem={(itemData) => <Text>{itemData.item}</Text>}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 100,
        marginHorizontal: 24,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
