import React from 'react';

import PrintNote from './PrintNote';

function NoteInfo(props) {
    return (
        <div>
            <PrintNote note={props.note} />
            <p>
                {props.note.content}
            </p>
        </div>  
    );
}

export default NoteInfo;