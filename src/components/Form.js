import React, { useState } from 'react';
import { getDatabase, set ,ref} from "firebase/database";
import firebase from '../utils/firebase';

function Form(props) {

    const [title, setTitle] = useState('')

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = () => {
        
        const db = getDatabase();
        set(ref(db, 'Todo'), {
            title,
            complete: false
        });
        

    }
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}></input>
            <button className='add-btn' onClick={createTodo}>Add Todo</button>
        </div>
    );
}

export default Form;