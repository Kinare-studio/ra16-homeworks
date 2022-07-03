import React, { useState } from 'react';
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment-timezone'
import WatchesModel from '../models/WatchesModel';
import Clock from './Clock';



export default function Watches(props) {
    const [form, setForm] = useState({
        name: '',
        timeZone: '',
    });
    const t = ['+00:00', '+01:00', '+02:00']
    const [watches, setWatches] = useState([]);
    const [offset, setOffset] = useState(0)
console.log(offset)

    const handleChangeName = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleChangeZone = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
        setOffset(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const watch = new WatchesModel(uuidv4(), form.name, form.timeZone, offset);
        setWatches(prevWatches => [...prevWatches, watch])
        setForm({
            name: '',
            timeZone: '',
        })

    }

    const handleRemove = id => {
        setWatches(prevWatches => prevWatches.filter(watch => watch.id !== id));
    }

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }

    function createOffset(offset) {
        let sign = (offset > 0) ? "-" : "+";
        let offsetAbs = Math.abs(offset)
        let hours = pad(Math.floor(offsetAbs / 60));
        let minutes = pad(offsetAbs % 60);
        return sign + hours + ":" + minutes;

    }


    return (
        <div>
            <form className='formInput' onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor='name' className='labelFormInput'>Название
                        <select id='name' name='name' className='inputName' value={form.name} maxLength='100' onChange={handleChangeName} required>
                            <option value=''>--select--</option>
                            {moment.tz.countries().map(item =>
                                moment.tz.zonesForCountry(item, true).map(city =>
                                    <option key={city.name}>
                                        {city.name + ' ' + createOffset(city.offset)}
                                    </option>))}
                        </select>
                    </label>
                    <label htmlFor='timeZone'>Временная зона
                        <select type='timeZone' id='timeZone' name='timeZone' className='inputTimeZone' value={form.timeZone} onChange={handleChangeZone} required>
                            <option value=''>--select--</option>
                            {t.map(item => <option value={item} key={item.toString()}>
                                        {createOffset(Number(item))}
                                    </option>)}
                        </select>
                    </label>
                    <button className='button'>Добавить</button>
                </div>
            </form>
            <div className='display'>
                <ul className='displayData'>
                    {watches.map(watch => {
                        return (
                            <li className='name' key={watch.id} >
                                <div className='watchesHeader'>
                                    <div>{watch.name} </div>
                                </div>
                                <button className='remove' onClick={() => handleRemove(watch.id)}>✘</button>
                                <div>
                                    <ul id="clock">
                                        <li id="sec"></li>
                                        <li id="hour"></li>
                                        <li id="min"></li>
                                    </ul>
                                    <div className='time'>
                                        <Clock offset={watch.offset}/>
                                    </div>
                                </div>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}



