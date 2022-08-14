import React, { useEffect, useState } from 'react';
import VideoList from './component/VideoList';


export default function App() {

    const [list, setList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:7777/list')
                .then(response => response.json())
                .then(data => setList(data))
        }, 1000)
    }, [list])

    return (
        <VideoList list={list} />
    );
}