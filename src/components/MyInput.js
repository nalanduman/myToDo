import React from 'react'
import { TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const MyInput = (props) => {
    return(
        <View>
            <View style = {styles.inputContainer}>
                <TextInput
                    value={props.todoText}
                    placeholder={props.myPlace}
                    placeholderTextColor="#BDBDBD"
                    onChangeText={props.onEnterText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#B2DFDB',
        margin: 10,
        borderRadius: 10,
        width : Dimensions.get("window").width/1.1,
        alignSelf: 'center'
    }
})

export {MyInput}