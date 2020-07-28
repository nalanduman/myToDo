import React, { useState } from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import { MyButton, MyInput, ListItem } from './components';

const Main = props => {

  const [todoList, setTodoList] = useState([])
  const [todoText,setTodoText] = useState("")

  const setText = (text) => {
    setTodoText(text)
  }

  const addTodo = () => {
    let newArray = [...todoList]
    newArray.push({todoName: todoText, isDone: 0})
    setTodoList(newArray)

    console.log(todoText)
  }

  const renderTodo = ({item, index}) => {
    return(
      <ListItem todoData={item.todoName} isDone={item.isDone} onSelect={() => todoSelect(index)} />
    )
  }

  function todoSelect(id) {
    let newArray = [...todoList]

    if (newArray[id].isDone == 0) {
      newArray[id].isDone = newArray[id].isDone + 1
      setTodoList(newArray)
    } else {
      newArray.splice(id, 1)
      setTodoList(newArray)
    }
    // newArray[id].isDone = !newArray[id].isDone 
    
  }

  // changeText = (text) => {
  //   setEntry(text)
  // }

  // addToList = () => {
  //   let newList = [...list]
  //   newList.push({myEntry: entry})
  //   setList(newList)
  //   setTodo(null)
  // }


    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View style={{flex: 1}}>
              <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={todoList}
                renderItem={renderTodo}
                ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
                
              />

              <MyInput 
                todoText={todoText}
                onEnterText={setText}
                // onOkay={addTodo}
              />
              
              <MyButton myTitle="Listeye Ekle" myPress={addTodo}/>            

            </View>
        </SafeAreaView>
    );
};


export default Main;
