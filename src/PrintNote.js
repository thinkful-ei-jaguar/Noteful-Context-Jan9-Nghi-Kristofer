import React from 'react';
import { Link } from 'react-router-dom';

// Accepts a prop argument called note
function PrintNote(note) {
    return (
        <li id={note.id}>
            <h2>
                <Link to={`/note/${note.id}`}>{note.name}</Link>
            </h2>
            <div className='printNote'>
                <p>Date modified on {note.modified}</p>
                <button>Delete Note</button>
            </div>
        </li>
    );
}

export default PrintNote;