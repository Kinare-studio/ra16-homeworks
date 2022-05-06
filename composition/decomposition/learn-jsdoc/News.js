/**
 * Отображение раздела с новостями
 */

 export default function News(props) {
    return (
        <section>
        <h></h>
        <ul>
            <li>
                <img src={props.img} alt={props.alt} />
                <a href={props.link}>{props.title}</a>
            </li>
        </ul>
        </section>
    )
}