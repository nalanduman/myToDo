import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    inputItem: StyleSheet.create({
        inputContainer: {
            backgroundColor: '#B2DFDB',
            margin: 10,
            borderRadius: 10,
            width : Dimensions.get("window").width/1.1,
            alignSelf: 'center'
        }
    }),

    main: StyleSheet.create({
        title: {
            fontSize: 20,
            alignSelf: 'center',
            margin: 10,
            fontWeight: 'bold'
        }
    }),

    listItem: StyleSheet.create({
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
    }),

    button: StyleSheet.create({
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
}

export default styles