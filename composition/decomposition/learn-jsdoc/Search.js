/**
 * Отображение навигации по сайту и поисковую строку
 */

 export default function Search(props) {
    return (
        <div>
            <ul>
                <li>
                    <a href={props.link}>{props.name}</a>
                </li>
            </ul>
            <label>
                <img src=" " alt=" " />
                <input type='search'></input>
                <button>Найти</button>
            </label>
        </div>
    )
}