import React from "react";
import '../css/main.css';



export default function TrainingsList({ trainings, handleRemove }) {
   
    const sortedList = trainings.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    const trainingsList = sortedList.map(training => {
        return <li className='data' key={training.id}>
            <div>{training.date}</div>
            <div>{training.km}</div>
            <button className='remove' onClick={() => handleRemove(training.id)}>✘</button>
        </li>
    })




    return (
        <div className='display'>
            <div className='displayHead'>
                <h5>Дата (ДД.ММ.ГГ)</h5>
                <h5>Пройдено км</h5>
                <h5>Дeйствия</h5>
            </div>

            <ul className='displayData'>
                {trainingsList}
            </ul>
        </div>
    )
}



