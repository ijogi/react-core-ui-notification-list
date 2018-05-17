import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Button, ButtonGroup, ButtonDropdown, Card, CardHeader, CardBody, CardTitle, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import NotificationListItem from './NotificationListItem';

class NotificationList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'date',
      sortDesc: false,
      dropdownOpen: false
    }
  }

  compare(a, b, propIn1, propIn2) {
    let prop1 = null;
    let prop2 = null;
    if (this.state.sortDesc) {
      prop1 = !!propIn2 ? b[propIn1][propIn2] : b[propIn1];
      prop2 = !!propIn2 ? a[propIn1][propIn2] : a[propIn1];
    } else {
      prop1 = !!propIn2 ? a[propIn1][propIn2] : a[propIn1];
      prop2 = !!propIn2 ? b[propIn1][propIn2] : b[propIn1];
    }

    let comparison = 0;
    if (prop1 > prop2) {
      comparison = 1;
    } else if (prop1 < prop2) {
      comparison = -1;
    }
    return comparison;
  }

  toggle = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  }

  handleMarkAllItemsAsRead = () => {
    const { items } = this.props;
    this.props.handleMarkAllItemsAsRead(items);
  }

  handleMarkAllItemsAsArchived = () => {
    const { items } = this.props;
    this.props.handleMarkAllItemsAsArchived(items);
  }


  handleSort(fieldName) {
    const { sortDesc } = this.state;
    this.setState({ sortBy: fieldName, sortDesc: !sortDesc });
  }

  renderSortingButtons() {
    const { sortableFields } = this.props;
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Sort by
      </DropdownToggle>
        <DropdownMenu>
          {
            sortableFields.map(field => {
              return <DropdownItem onClick={() => this.handleSort(field.title)} key={field.title}>
                Sort by {field.title}
              </DropdownItem >
            })
          }
        </DropdownMenu>
      </ButtonDropdown>
    )
  }

  renderTableItems() {
    const { items } = this.props;
    const { sortableFields } = this.props;
    const { sortBy } = this.state;
    const sortableProperty = sortableFields.find(f => f.title === sortBy);

    return (
      <ul className="messages">
        {
          items
            .sort((a, b) => this.compare(b, a, sortBy, sortableProperty ? sortableProperty.sortByProp : null))
            .map(item => {
              return (
                <NotificationListItem
                  item={Object.assign({}, item)}
                  priorityClasses={this.props.priorityClasses}
                  handleMarkAsArchived={this.props.handleMarkAsArchived}
                  handleMarkAsRead={this.props.handleMarkAsRead}
                  key={item.id} />
              )
            })
        }
      </ul>
    )
  }



  render() {
    const { icon, title } = this.props;
    return (
      <Card>
          <CardHeader>
            {icon && <i className={icon}></i>} {title}
          </CardHeader>
          <CardBody>
            <CardTitle>
              {this.renderSortingButtons()}
              <ButtonGroup>
                {this.handleMarkAllItemsAsRead && <Button color="success" onClick={this.handleMarkAllItemsAsRead}><i className="fa fa-envelope-open-o"></i> Mark all as read</Button>}
                {this.handleMarkAllItemsAsArchived && <Button color="success" onClick={this.handleMarkAllItemsAsArchived}><i className="fa fa-archive"></i> Mark all as archived</Button>}
              </ButtonGroup>
            </CardTitle>

            <div className="animated fadeIn">
              <div className="email-app mb-4" style={{ border: 'none' }}>
                <main className="inbox">
                  {this.renderTableItems()}
                </main>
              </div>
            </div>
          </CardBody>
      </Card>

    )
  }
}

NotificationList.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string,
  items: propTypes.array.isRequired,
  priorityClasses: propTypes.instanceOf(Map).isRequired,
  handleMarkAsArchived: propTypes.func,
  handleMarkAllItemsAsArchived: propTypes.func,
  handleMarkAsRead: propTypes.func,
  handleMarkAllItemsAsRead: propTypes.func
}

export default NotificationList;