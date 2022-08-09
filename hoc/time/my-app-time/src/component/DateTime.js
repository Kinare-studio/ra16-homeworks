
//import { useEffect } from "react"

import { useEffect } from "react"


/*function withHOC(Component) {
    function DateTimePretty(props) {
        console.log(props)
        return <Component {...props}/>
    }
}*/


export default function DateTime({ date }) {

    const end = new Date().getTime();
    const start = (Date.parse(date));
    const result = end - start;
    const day = Math.floor(result / 1000 / 60 / 60 / 24);
    const hour = Math.floor(result / 1000 / 60 / 60);
    const min = Math.floor(result / 1000 / 60);






    function timetostr(props) {
        let txt;
        let count = props % 100;

        if (count >= 5 && count <= 20) {
            if (props === day) {
                txt = 'дней';
            } else if (props === hour) {
                txt = 'часов';
            } else if (props === min) {
                txt = 'минут';
            }

        } else {
            count = count % 10
            if (count === 1) {
                if (props === day) {
                    txt = 'день';
                } else if (props === hour) {
                    txt = 'час';
                } else if (props === min) {
                    txt = 'минута';
                }

            } else if (count >= 2 && count <= 4) {
                if (props === day) {
                    txt = 'дня';
                } else if (props === hour) {
                    txt = 'часа';
                } else if (props === min) {
                    txt = 'минуты';
                }

            } else {
                if (props === day) {
                    txt = 'дней';
                } else if (props === hour) {
                    txt = 'часов';
                } else if (props === min) {
                    txt = 'минут';
                }
            }
        }
        return `${props} ${txt} назад`;
    }


    if (day > 0) {
        return (
            <p className="date">{timetostr(day)}</p>
        )
    } else if (!day && hour) {
        return (
            <p className="date">{timetostr(hour)}</p>
        )
    } else if (!day && !hour && min) {
        return (
            <p className="date">{timetostr(min)}</p>
        )
    } else {
        return (
            <p className="date">{date}</p>
        )
    }
}




