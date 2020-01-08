import React from 'react';

import PrintNote from './PrintNote';

function Notes() {
    return (
        <section>
            <ul>
                <PrintNote />
            </ul>
            <button>
                Add note
            </button>
        </section>
    );
}

export default Notes;