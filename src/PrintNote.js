import React from 'react';

function PrintNote() {
    return (
        <li id={1}>
            <h2>Note</h2>
            <p>Date modified on {'somedates'}</p>
            <button>Delete Note</button>
        </li>
               
    );
}

export default PrintNote;