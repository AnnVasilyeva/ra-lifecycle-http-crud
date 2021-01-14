import './App.css';
import React, {useState, useEffect} from 'react';
import HeaderUpdate from "./components/HeaderUpdate/HeaderUpdate";
import NoteAddForm from "./components/NoteAddForm/NoteAddForm";
import NotesList from "./components/NotesList/NotesList";

export default function App () {
    const [notes, setNotes] = useState([]);

    const getAllNotes = () => {
        fetch(process.env.REACT_APP_CRUD_URL)
            .then(response => response.json())
            .then((notes) => {
                setNotes(notes)})
    }

    useEffect(() => {
        getAllNotes()
    }, [])

    const addNote = (note) => {
        fetch(process.env.REACT_APP_CRUD_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).then(() => getAllNotes())
    }

    const deleteNote = (id) => {
        fetch(`${process.env.REACT_APP_CRUD_URL}/${id}`, {
            method: 'DELETE',
        }).then(() => getAllNotes())
    }


    return (
        <div className="App">
            <HeaderUpdate getAllNotes={getAllNotes}/>
            <NotesList notes={notes} deleteNote={deleteNote}/>
            <NoteAddForm addNote={addNote}/>
        </div>
    )



}




