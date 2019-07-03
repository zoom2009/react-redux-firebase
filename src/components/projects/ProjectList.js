import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default ({projects}) => (
    <div className="project-list section">
        {
            projects && projects.map((e, i) => {
                console.log('e : ', e)
                return (
                <Link to={'/project/' + e.id} key={e.id}>
                <ProjectSummary
                    title={e.title}
                    content={e.content}
                    authorFirstName={e.authorFirstName}
                    authorLastName={e.authorLastName}
                    createdAt={e.createdAt}
                    />
                </Link>
            )})
        }
    </div>
)
