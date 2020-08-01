import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from '../styles'

const ListItem = props => {
    return(

        <TouchableOpacity style={[styles.listItem.container,
            {
                backgroundColor: props.isDone ? "#F57C00" : "#00796B"
            }
        ]} onPress={props.onSelect}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.listItem.dot}/>
                <Text style={[styles.listItem.text,
                    {
                        textDecorationLine: props.isDone ? 'line-through' : "none"
                    }
                ]}>
                    {props.todoData}
                </Text>
            </View>

            {
                props.isDone ?
                    <Text style={{color: 'white'}}>Tamamlandı</Text>
                    :
                    <Text style={{color: 'white'}}>Tamamlanmadı</Text>
            }

        </TouchableOpacity>
    )
}


export {ListItem}