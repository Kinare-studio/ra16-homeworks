
import React from "react";

export default class ToolBar extends React.Component {
    
    render() {
        return (
            <div className="toolbar">
                {this.props.filters && this.props.filters.map((filter, id) => 
                <button onClick = {() => this.props.onSelectFilter(filter)} key = {id} className="button">{filter}</button> )}
            </div>
        );
    }
}
