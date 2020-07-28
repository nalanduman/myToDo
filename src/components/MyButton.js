import React from 'react'
import { TouchableOpacity, Dimensions, Text, StyleSheet } from 'react-native'

const MyButton = props => {
    return(
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.myPress}
            >
            <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: '#FBC02D',
        width: Dimensions.get("window").width/2,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10
    },

    textStyle: {
        color: 'white',
        fontWeight: "bold"
    }
})

export {MyButton}