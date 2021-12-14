import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#191c2f'
    },

    container: {
        backgroundColor: "#202430",
        height: 150,
        padding: 20,
        justifyContent: 'flex-end'
    },

    total: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },

    price: {
        color: "#e03b22",
        fontSize: 24,
    },

    button: {
        width: 110,
        height: 35,
        backgroundColor: "#e03b22",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: 20,
        borderRadius: 2,
    },

    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
