import React from 'react'
import ProjectSummary from './ProjectSummary'

export default ({projects}) => (
    <div className="project-list section">
        {
            projects && projects.map((e, i) => (
                <ProjectSummary
                    key={e.id}
                    title={e.title}
                    content={e.content}
                    />
            ))
        }
    </div>
)
