import React from "react";
import '../css/main.css';



export default function TrainingsList({ trainings, handleRemove }) {

    const sortedList = trainings.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    const trainingsList = sortedList.map(training =>
        <li className='data' key={training.id}>
            <div>{training.date}</div>
            <div>{training.km}</div>
            <button className='remove' onClick={() => handleRemove(training.id)}>✘</button>
        </li>)



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


/*.sort((a, b) => b.date - a.date)*/

/* const trainingsSortedList = trainings.sort((a,b)=> {
        return new Date(b.date) - new Date(a.date)}).map(training =>
        <li className='data' key={training.id}>
            <div>{training.date}</div>
            <div>{training.km}</div>
            <button className='remove' onClick={() => handleRemove(training.id)}>✘</button>
        </li>);*/

/* const r = sortedList.length > 1 ? sortedList.reduce((previousValue, currentValue) => {
     if (previousValue.date === currentValue.date) {
        const p = parseInt(previousValue.km, 10)
         const c = parseInt(currentValue.km, 10)
         return p + c
     } else {
        return trainings
     }
    }) : sortedList*/