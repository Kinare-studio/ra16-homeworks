import React, { useState } from 'react';
import '../css/main.css'
import TrainingsAddForm from './TrainingsAddForm';
import TrainingsList from './TrainingsList';

export default function Steps(props) {

    const [trainings, setTrainings] = useState([]);

    const handleAdd = training => {
        setTrainings(prevTrainings => [...prevTrainings, training]);
    }

    const handleRemove = id => {
        setTrainings(prevTrainings => prevTrainings.filter(training => training.id !== id));
    }

    return (
        <div className='container'>
            <TrainingsAddForm onAdd= {handleAdd} />
            <TrainingsList trainings={trainings} handleRemove={handleRemove} />
        </div>
    );
}






/*import React, { useState } from 'react';
import '../css/main.css'
import TrainingsModel from './TrainingsModel';
import {v4 as uuidv4} from 'uuid'

export default function Steps(props) {
    const [form, setForm] = useState({
        date: '',
        km: ''
    });
    const [trainings, setTrainings] = useState([])

    const handleChange = evt => {
        const {name, value} = evt.target;
        console.log(value)
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }


    const handleSubmit = event => {
        event.preventDefault();
        const training = new TrainingsModel(uuidv4(), form.date, form.km);
        setTrainings(prevTrainings => [...prevTrainings, training])
        setForm({
            date: '',
            km: '',
        })
    }

    const handleRemove = id => {
        setTrainings(prevTrainings => prevTrainings.filter(training => training.id !== id));
    }


    return (
        <div className='container'>
            <form className='formInput' onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor='date' className='labelFormInput'>Дата (ДД.ММ.ГГ)
                        <input type='date' id='date' name='name' className='inputDate' value={form.date} onChange={handleChange} />
                    </label>
                    <label htmlFor='km'>Пройдено км
                        <input type='number' id='km' name='km' className='inputNumber' value={form.km} onChange={handleChange} />
                    </label>
                    <button className='button'>OK</button>
                </div>
            </form>

            <div className='display'>

                <div className='displayHead'>
                    <h5>Дата (ДД.ММ.ГГ)</h5>
                    <h5>Пройдено км</h5>
                    <h5>Дeйствия</h5>
                </div>

                <ul className='displayData'>
                    {trainings.map(training => <li className='data' key={training.id}>
                        <div>{training.date}</div>
                        <div>{training.km}</div>
                        <button className='remove' onClick={() => handleRemove(training.id)}>✘</button>
                    </li>)}
                </ul>

            </div>
        </div>
    );
}
*/

