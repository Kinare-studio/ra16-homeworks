import React from "react"
import '../css/main.css'


export default function Cards(props) {
    
    return (
        <div class="card" style={{ width: '18rem', margin: '40px' }}>
            {props.img}
            <div class="card-body">
                {props.children}
            </div>
        </div>
    )
}