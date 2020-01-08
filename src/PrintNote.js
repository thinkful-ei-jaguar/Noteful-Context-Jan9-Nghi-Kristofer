import React from 'react';

// Accepts a prop argument called note
function PrintNote(note, {selectNote}) {
    return (
        <li id={note.id}>
            <p onClick={() => selectNote(note.id)} >{note.name}</p>
            <div className='printNote'>
                <p>Date modified on {note.modified}</p>
                <button>Delete Note</button>
            </div>
        </li>
    );
}

export default PrintNote;