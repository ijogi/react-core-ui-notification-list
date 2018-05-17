import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, Button, ButtonGroup, Media } from 'reactstrap';

class NotificationListItem extends PureComponent {

    truncateText(text, truncateLength) {
        if (text.length > truncateLength) {
            return `${text.substring(0, truncateLength)}...`
        }
        return text;
    }

    handleMarkAsRead = () => {
        const { item } = this.props;
        this.props.handleMarkAsRead(item)
    }

    handleMarkAsArchived = () => {
        const { item } = this.props;
        this.props.handleMarkAsArchived(item)
    }

    render() {
        const { item, priorityClasses } = this.props;
        return (
            <li className={!item.isRead ? "message unread" : "message"} style={{cursor: 'default'}}>
                <Link to={item.url || '/'}>
                    <div className="header">

                        <span className="from">
                            {priorityClasses &&
                                <h6>
                                    <Badge color={priorityClasses.get(item.priority.name)}>{item.priority.name}</Badge>
                                    <span className="title"> {item.title}</span>
                                </h6>}
                        </span>
                        <span className="date"><span className="fa fa-paper-clip"></span> {item.date.toString()}</span>
                    </div>

                    <div className="description">
                        <h6>{item.category}</h6>
                        <Media>
                            {item.sender && item.sender.avatarUrl &&
                                <Media left href="#">
                                    <Media object src={item.sender.avatarUrl} alt="Client avatar" style={{ height: '3rem' }} />
                                </Media>}
                            <Media body>

                                <div className="title" style={item.sender && item.sender.avatarUrl && { margin: '0 0.5rem' }}>
                                    {item.sender && item.sender && <span className="title"> {item.sender.firstName} {item.sender.lastName}</span>}
                                </div>
                                <p style={item.sender && item.sender.avatarUrl && { margin: '0 0.5rem' }}>{this.truncateText(item.body, 250)}</p>

                            </Media>
                        </Media>
                    </div>
                </Link>
                <ButtonGroup size="sm" style={{padding: '0.2rem 0'}}>
                    {this.handleMarkAsRead && <Button color="light" onClick={this.handleMarkAsRead}><i className="fa fa-envelope-open-o"></i></Button>}
                    {this.handleMarkAsArchived && <Button color="light" onClick={this.handleMarkAsArchived}><i className="fa fa-archive"></i></Button>}
                </ButtonGroup>
            </li>)
    }
}

NotificationListItem.propTypes = {
    item: propTypes.object.isRequired,
    priorityClasses: propTypes.instanceOf(Map).isRequired,
    handleMarkAsRead: propTypes.func,
    handleMarkAsArchived: propTypes.func
}

export default NotificationListItem;
