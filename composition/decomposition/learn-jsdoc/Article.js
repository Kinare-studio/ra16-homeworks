/**
 * Отображение подраздела сайта
 */

 export default function Article(props) {
    return (
        <div>
            <a href={props.titleLink}>{props.title}</a>
            <div>
                <img src={props.img} alt={props.alt} />
                <ul>
                    <li>
                    <a href={props.textLink}>{props.text}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}