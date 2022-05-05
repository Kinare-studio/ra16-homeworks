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

/**
 * Отображение блока с подразделами сайта
 */

 export default function Aside() {
    return (
        <div>
       <Article titleLink='' title='' img='' alt='' textLink='' text=''/>
       <Article titleLink='' title='' textLink='' text=''/>
       <Article titleLink='' title='' textLink='' text=''/>
       <Article titleLink='' title='' textLink='' text=''/>
       <Article titleLink='' title='' img='' alt='' textLink='' text=''/>
        </div>
    )
}

/**
 * Отображение сайта
 */
 export default function App() {
    return (
       <container>
           <News img='' alt='' link='' title=''/>
           <Search link='' name='' />
           <Banner bannerImg=''  bannerAlt=''/>
           <Aside/>
       </container>
    )
}