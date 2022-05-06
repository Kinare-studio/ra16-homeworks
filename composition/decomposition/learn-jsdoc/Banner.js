/**
 * Отображение баннера с рекламой
 */

 export default function Banner(props) {
    return (
        <div>
            <img src={props.bannerImg} alt={props.bannerAlt} />
        </div>
    )
}