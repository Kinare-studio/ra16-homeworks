
import React from "react";

export default class ToolBar extends React.Component {
    
    render() {
        if (this.state) {
        <button className="buttonActiv"/>
        }
        const filteredButton = this.props.filters && this.props.filters.map((filter, id) => 
            <button onClick = {() => this.props.onSelectFilter(filter)} key={id} className="button">{filter}</button>);

        
        return (
            <div className="toolbar">
                {filteredButton}
            </div>
        );
    }
}
