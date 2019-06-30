import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis vitae voluptas accusantium reiciendis laborum exercitationem laudantium cumque non quibusdam neque vel, perferendis ex laboriosam impedit possimus! Incidunt, reiciendis eos.</p>
                </div>
                <div className="card-action gery lighten-4 gery-text">
                    <div>Posted by Sikarin Poonsawat</div>
                    <div>30 June, 9pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
