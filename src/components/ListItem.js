import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const ListItem = props => {
    return(

        <TouchableOpacity style={[styles.container,
            {
                backgroundColor: props.isDone ? "#F57C00" : "#00796B"
            }
        ]} onPress={props.onSelect}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.dot}/>
                <Text style={[styles.text,
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

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 20,
        marginLeft: 10,
        color: 'white'
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 15,
        backgroundColor: '#212121'
    }
})

export {ListItem}