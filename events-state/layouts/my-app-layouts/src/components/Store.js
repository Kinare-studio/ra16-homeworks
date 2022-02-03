import React, { useState } from 'react';
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
export default function Store({ products }) {

    const iconViewList = <span className="material-icons">view_list</span>;
    const iconViewModule = <span className="material-icons">view_module</span>;


    const [icon, setIcon] = useState(iconViewList);
    
    const onSwitch = () => {
        icon === iconViewList ? setIcon(iconViewModule) : setIcon(iconViewList)
    }


    return (
        icon === iconViewList ?
            <div className="container">
                <IconSwitch icon={icon} onSwitch={onSwitch} />
                <CardsView cards={products.map((cards) => cards)} />
            </div> :
            <div className="container">
                <IconSwitch icon={icon} onSwitch={onSwitch} />
                <ListView items={products.map((items) => items)} />
            </div>
    )
}




