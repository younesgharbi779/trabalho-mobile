import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    mainContainer: {
        flexDirection: "row",
        height: 200,
        backgroundColor: "#202430",
        marginHorizontal: 10,
        borderRadius: 5,
        height: 200,
        marginVertical: 10,
        alignItems: 'center'
    },

    infoContainer: {
        width: "50%"
    },

    gameName: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24
    },

    price: {
        color: "#e03b22",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 10
    },

    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 50
    },

    quantity: {
        marginHorizontal: 8,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 3,
    },

    removeButton: {
        position: 'relative',
        top: 40
    },

    imageContainer: {
        width: "50%"
    },
    
    image: {
        height: 200,
        width: '100%',
        borderRadius: 2
    }


})