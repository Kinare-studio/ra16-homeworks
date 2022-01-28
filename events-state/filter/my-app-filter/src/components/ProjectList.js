import React from "react";

export default class ProjectList extends React.Component {

    render() {
        return (
            <div className="projects">
                {this.props.projects && this.props.projects.map((project, id) => <img src={project.img}
                    alt={project.category} className="project" key={id} />)}
            </div>
        )
    }
}




