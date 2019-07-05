import React, { Component } from 'react'
import moment from 'moment'

export default class Notifications extends Component {
    state = {
        refreshPageCount: 0
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ refreshPageCount: this.state.refreshPageCount+1 })
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const { notifications } = this.props
        return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Notification
                    </span>
                    <ul className="notifications">
                        {notifications && notifications.map((noti, i) => (
                            <li key={noti.id}>
                                <span className="pink-text">{noti.user}</span>
                                <span style={{marginLeft: 4}}>{noti.content}</span>
                                <div className="grey-text note-date">
                                    {moment(noti.time.toDate()).fromNow()}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
