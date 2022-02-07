
import React from "react";

export default class ToolBar extends React.Component {

    render() {

        const filteredButton = this.props.filters && this.props.filters.map((filter, id) =>
            <button onClick={() => this.props.onSelectFilter(filter)} key={id}>{filter}</button>);


        return (
            <div className="toolbar">
                {filteredButton}
            </div>
        );
    }
}
