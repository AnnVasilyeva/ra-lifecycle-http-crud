import React from 'react';
import './HeaderUpdate.css';

export default function HeaderUpdate (props) {
    const {getAllNotes} = props;

    return (
        <header>
            <h1>Notes</h1>
            <div className='update-btn' onClick={() => getAllNotes()}>
                <img src="https://img.icons8.com/fluent/48/000000/update-left-rotation.png" alt='update button'/>
            </div>
        </header>

    )

}