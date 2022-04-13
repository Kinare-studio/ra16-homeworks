function News(props) {
    return (
        <ul>
            <li>
                <img src={props.img} alt=" " />
                <h>{props.title}</h>
                <a href=" ">{props.link}</a>
            </li>
        </ul>
    )
}

function Search(props) {
    return (
        <div>
            <ul className='toolBar'>
                <li>
                    <p></p>
                </li>
            </ul>
            <label>
                <input type='search'></input>
                <button>Найти</button>
            </label>
        </div>
    )
}

function Banner(props) {
    return (
        <div>
            <img />
        </div>
    )
}

function Aside(props) {
    return (
        <section class="row">
            <div class="col-1-2">{props.weather}{props.popular}</div>
            <div class="col-1-2">{props.map}{props.tvPropramms}</div>
            <div class="col-1-2">{props.broadcast}</div>
        </section>
    )
}

function App(props) {
    return (
        <section class="row">
            <div class="col-1-2">{props.weather}{props.popular}</div>
            <div class="col-1-2">{props.map}{props.tvPropramms}</div>
            <div class="col-1-2">{props.broadcast}</div>
        </section>
    )
}