import React from 'react';
import { Link } from 'react-router-dom';

function Noteful() {
    return (
        <section id='noteful'>
            <h1>
                <Link to='/'>
                Noteful
                </Link>
            </h1>
        </section>
    );
}

export default Noteful;