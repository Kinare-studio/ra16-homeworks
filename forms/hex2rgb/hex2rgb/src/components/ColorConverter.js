import React from "react";
import '../css/main.css';
import { useState } from 'react';

export default function ColorConverter(props) {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('rgb(255, 255, 255)');

    function checkHex(hex) {
        const hexRegex = /^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/
        if (hexRegex.test(hex)) {
            hexToRGB(hex);
        } else {
            setRgb ('Ошибка!')
        }
    }

    function hexToRGB(hex) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (hex) {
            setRgb("rgb(" + r + ", " + g + ", " + b + ")");
        } 
    }

    const handleHexChange = evt => {
        const { value } = evt.target;
        setHex(value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (checkHex(hex)) {
            handleHexChange(evt);
        }
    }

    return (
        <div className="content" id="content" style={rgb === 'Ошибка!'? {backgroundColor: 'red'} : {backgroundColor: rgb}}>
            <form className="converter" onSubmit={handleSubmit}>
                <input className="hex" type="text" id="hex" value={hex} minLength={7} maxLength={7} placeholder="#ffffff" onChange={handleHexChange} />
                <div className="rgb" id="rgb">{rgb}</div>
            </form>
        </div>
    );
}



