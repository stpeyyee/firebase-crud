import React from 'react';
import { getDatabase, ref, onChildRemoved, onChildChanged, update, remove} from "firebase/database";
import firebase from '../utils/firebase';

function Todo({todo}) {

    console.log("todo",todo)

    const deleteTodo = () => {
        const db = getDatabase();
        const todoRef= ref(db, 'Todo');
        remove(todoRef)

    }

    const completeTodo = () => {
        const db = getDatabase();
        const todoRef = ref(db, 'Todo');
        update(todoRef, {
            complete: !todo.complete
        })
    }

    return (
        <div>
            <h1 style={{color: todo.complete ? "green" : "black"}}>{todo.title}</h1>
            <button className="delete-btn" onClick={deleteTodo}>Delete</button>
            <button className="complete-btn" onClick={completeTodo}>Complete</button>
        </div>
    );
}

export default Todo;