import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from '../styles'

const MyButton = props => {
    return(
        <TouchableOpacity
            style={styles.button.buttonContainer}
            onPress={props.myPress}
            >
            <Text style={styles.button.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

export {MyButton}