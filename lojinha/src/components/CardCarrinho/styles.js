import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({


    mainContainer: {
        flex: 1
    },

    imageContainer: {
        flex: 2
    },

    image: {
        height: 500,
        width: '100%'
    },

    priceContainer: {
        alignItems: 'flex-end'
    },

    price: {
        color: '#fff',
        fontSize: 48,
        position: 'relative',
        bottom: 70,
        backgroundColor: '#e03b22',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingHorizontal: 5
    },

    descriptionMainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202430',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 20
    },

    descriptionContainer: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },

    gameDescription: {
        color: '#e03b22',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },

    description: {
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 5
    },

    line: {
        width: 3,
        height: 120,
        backgroundColor: '#191c2f',
        borderRadius: 5
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})