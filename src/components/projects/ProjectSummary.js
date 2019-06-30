import React from 'react'

export default ({ title, content }) => (
    <div className="card z-depth-0 project-summary">
        <div className="card-content gery-text text-darken-3">
            <span className="card-title">{title}</span>
            <p>{content}</p>
            <p className="grey-text">30th June, 9pm</p>
        </div>
    </div>
)
