import React, {useState, useEffect} from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import Todo from './Todo'
import firebase from '../utils/firebase';

function TodoList(props) {

    const [todoList, setTodoList] = useState()

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'Todo');
            onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const todoList = [];
            for(let id in data){
                todoList.push({id, ...data})
            }
            setTodoList(todoList)
        });
    },[])

    return (
        <div>
            {todoList 
                ? todoList.map((todo,index) => <Todo todo={todo} key={index}></Todo>)
                : "" }
            
        </div>
    );
}

export default TodoList;