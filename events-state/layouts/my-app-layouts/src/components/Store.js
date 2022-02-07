import React, { useState } from 'react';
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
export default function Store({ products }) {

    const cards = products.map((cards) => cards);
    const items = products.map((items) => items);
    const iconViewList = <span className="material-icons">view_list</span>;
    const iconViewModule = <span className="material-icons">view_module</span>;
    


    const [icon, setIcon] = useState(iconViewList);



    const onIconSwitch = () => {
        console.log(icon.props.children)
        icon.props.children === "view_list"? setIcon(iconViewModule) : setIcon(iconViewList)
    }


    return (

        icon.props.children === "view_list"?
            <div className="container">
                <IconSwitch icon={icon} onSwitch={onIconSwitch} />
                <CardsView cards={cards} />
            </div> :
            <div className="container">
                <IconSwitch icon={icon} onSwitch={onIconSwitch} />
                <ListView items={items} />
            </div>
    )
}
