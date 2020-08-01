import React from 'react'
import { TextInput, View } from 'react-native'

import styles from '../styles'

const MyInput = (props) => {
    return(
        <View>
            <View style = {styles.inputItem.inputContainer}>
                <TextInput
                    value={props.todoText}
                    placeholder={props.myPlace}
                    onChangeText={props.onEnterText}
                />
            </View>
        </View>
    )
}

export {MyInput}