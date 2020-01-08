import React from 'react';

import PrintNote from './PrintNote';

function Notes(props) {
    return (
        <section>
            <ul>
                {props.notes.map((note,index) => 
                    <PrintNote {...note} key={index} selectNote={props.selectNote}/>
                )}
            </ul>
            <button>
                Add note
            </button>
        </section>
    );
}

export default Notes;