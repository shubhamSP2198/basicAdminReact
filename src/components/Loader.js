import React from 'react';
import imgLoader from '../assets/preloader.gif'

export default function Loader() {
    return (
        <div id="overlay">
            <img src={imgLoader} alt="Preloader icon" />
        </div>
    )
}
