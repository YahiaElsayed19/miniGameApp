import { Text, StyleSheet, Platform } from "react-native"
const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;
const styles = StyleSheet.create({
    title: {
        padding: 12,
        fontSize: 24,
        fontFamily: "open-sans-bold",
        color: "white",
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 2 : 0 ,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        // borderWidth: 0,
        // borderColor: "white",
        width: 300,
        maxWidth: "80%",
    },
})