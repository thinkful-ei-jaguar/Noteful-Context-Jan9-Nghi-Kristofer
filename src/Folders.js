import React from 'react';

import PrintFolder from './PrintFolder';

function Folders() {
    return (
        <section>
            <ul>
                <PrintFolder />
            </ul>
            <button>
                Add folder
            </button>
        </section>
    );
}

export default Folders;