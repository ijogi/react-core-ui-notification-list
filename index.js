'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotificationListItemPreview = exports.NotificationListItem = exports.NotificationList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationList = exports.NotificationList = function (_PureComponent) {
    _inherits(NotificationList, _PureComponent);

    function NotificationList(props) {
        _classCallCheck(this, NotificationList);

        var _this = _possibleConstructorReturn(this, (NotificationList.__proto__ || Object.getPrototypeOf(NotificationList)).call(this, props));

        _initialiseProps.call(_this);

        var _this$props = _this.props,
            defaultSortBy = _this$props.defaultSortBy,
            items = _this$props.items;


        _this.state = {
            sortBy: defaultSortBy || 'date',
            sortDesc: false,
            filteredItems: items,
            isSortingDropdownOpen: false,
            isFilteringDropdownOpen: false,
            successMessage: null,
            errorMessage: null
        };
        return _this;
    }

    /**
     * Compares 2 objects based on their property values .
     * @param {Object} a - Object to be compared.
     * @param {Object} b - Notification list item passed to the function.
     * @param {any} propIn1 - Property of the passed in objects a and b.
     * @param {any} propIn2 - Property of propIn1 of the passed in objects a and b.
     * @return {number} Comparison result.
     */


    _createClass(NotificationList, [{
        key: 'compare',
        value: function compare(a, b, propIn1, propIn2) {
            var prop1 = null;
            var prop2 = null;
            if (this.state.sortDesc) {
                prop1 = !!propIn2 ? b[propIn1][propIn2] : b[propIn1];
                prop2 = !!propIn2 ? a[propIn1][propIn2] : a[propIn1];
            } else {
                prop1 = !!propIn2 ? a[propIn1][propIn2] : a[propIn1];
                prop2 = !!propIn2 ? b[propIn1][propIn2] : b[propIn1];
            }

            var comparison = 0;
            if (prop1 > prop2) {
                comparison = 1;
            } else if (prop1 < prop2) {
                comparison = -1;
            }
            return comparison;
        }

        /**
         * Toggles dropdown visibility
         * @param {string} key - A key in the state object based on which to toggle visibility
         */


        /**
         * Call's the passed in function with item as it's parameter . If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
         * @param {Function} func - Function to be called on onClick.
         * @param {Object} item - Notification list item passed to the function.
         */


        /**
         * Sets the sort by property and toggles asc/desc sorting
         * @param {string} fieldName - Functions based into filter iterator.
         */


        /**
         * Filters notification list items based on a predicate function
         * @param {Function} predicateFunc - Functions based into filter iterator.
         */

    }, {
        key: 'handleClick',


        /**
         * Call's the passed in function with passed in object's passed in property
         * @param {Function} func - Function to be called.
         * @param {Object} obj - Notification list item passed to the function.
         * @param {any} prm - Notification list item passed to the function.
         * @return {any} Value retrieved by calling the function.
         */
        value: function handleClick(func, obj, prm) {
            return func(obj[prm]);
        }

        /**
         * Renders the actions passed into the function.
         * @param {Array} actions - Actions with correspoding functions to rendered with event handlers.
         * @return {Object} JSX code for action buttons with onClick event handlers.
         */

    }, {
        key: 'renderActions',
        value: function renderActions(actions) {
            var _this2 = this;

            if (actions) {
                return _react2.default.createElement(
                    'div',
                    null,
                    actions.map(function (action) {
                        return _react2.default.createElement(
                            _reactstrap.Button,
                            {
                                key: action.icon, color: action.color, onClick: function onClick() {
                                    return _this2.handleAction(action.func);
                                } },
                            _react2.default.createElement('i', { className: action.icon }),
                            ' ',
                            action.name
                        );
                    })
                );
            }
        }

        /**
         * Renders button dropdowns with corresponding action and label names.
         * @param {boolean} isOpenKey - Indicates if dropdown is open or not
         * @param {arr} arr - An array of dropdown values.
         * @param {Function} action - A function to be called on each dropdown item.
         * @param {any} actionPrm - A parameter to passed into the function call.
         * @param {string} actionName - Text to be displayed on dropdown group.
         * @return {Object} JSX code for action buttons with onClick event handlers.
         */

    }, {
        key: 'renderButtonDropdown',
        value: function renderButtonDropdown(isOpenKey, arr, action, actionPrm, actionName) {
            var _this3 = this;

            var isDropdownOpen = this.state[isOpenKey];
            return _react2.default.createElement(
                _reactstrap.ButtonDropdown,
                { isOpen: isDropdownOpen, toggle: function toggle() {
                        return _this3.toggle(isOpenKey);
                    } },
                _react2.default.createElement(
                    _reactstrap.DropdownToggle,
                    { caret: true },
                    actionName
                ),
                _react2.default.createElement(
                    _reactstrap.DropdownMenu,
                    null,
                    arr.map(function (e) {
                        return _react2.default.createElement(
                            _reactstrap.DropdownItem,
                            { onClick: function onClick() {
                                    return _this3.handleClick(action, e, actionPrm);
                                }, key: e.title },
                            actionName,
                            ' ',
                            e.title
                        );
                    })
                )
            );
        }

        /**
         * Renders notification list items inside notification list
         * @return {Object} JSX code for Notification list.
         */

    }, {
        key: 'renderTableItems',
        value: function renderTableItems() {
            var _this4 = this;

            var _props = this.props,
                sortableFields = _props.sortableFields,
                emptyPage = _props.emptyPage,
                priorityClasses = _props.priorityClasses,
                truncateTextLength = _props.truncateTextLength;
            var _state = this.state,
                filteredItems = _state.filteredItems,
                sortBy = _state.sortBy;

            var sortableProperty = sortableFields.find(function (f) {
                return f.title === sortBy;
            });
            if (filteredItems && filteredItems.length > 0) {
                return _react2.default.createElement(
                    'ul',
                    { className: 'messages' },
                    filteredItems.sort(function (a, b) {
                        return _this4.compare(b, a, sortBy, sortableProperty ? sortableProperty.sortByProp : null);
                    }).map(function (item) {
                        return _react2.default.createElement(NotificationListItem, {
                            item: Object.assign({}, item),
                            priorityClasses: priorityClasses,
                            truncateTextLength: truncateTextLength,
                            key: item.id });
                    })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    emptyPage
                );
            }
        }

        /**
         * Components render fucntion
         * @return {Object} JSX code for Notification list.
         */

    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                successMessage = _state2.successMessage,
                errorMessage = _state2.errorMessage;
            var _props2 = this.props,
                icon = _props2.icon,
                title = _props2.title,
                actions = _props2.actions,
                sortableFields = _props2.sortableFields,
                filters = _props2.filters;

            return _react2.default.createElement(
                _reactstrap.Card,
                null,
                _react2.default.createElement(
                    _reactstrap.CardHeader,
                    null,
                    icon && _react2.default.createElement('i', { className: icon }),
                    ' ',
                    title
                ),
                _react2.default.createElement(
                    _reactstrap.CardBody,
                    null,
                    _react2.default.createElement(
                        _reactstrap.CardTitle,
                        null,
                        this.renderButtonDropdown('isSortingDropdownOpen', sortableFields, this.handleSort, 'title', 'Sort by'),
                        this.renderButtonDropdown('isFilteringDropdownOpen', filters, this.handleFilter, 'predicateFunc', 'Show'),
                        _react2.default.createElement(
                            _reactstrap.ButtonGroup,
                            null,
                            this.renderActions(actions)
                        )
                    ),
                    successMessage && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'success animated fadeIn' },
                        successMessage
                    ),
                    errorMessage && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger animated fadeIn' },
                        errorMessage
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'animated fadeIn' },
                        _react2.default.createElement(
                            'div',
                            { className: 'email-app mb-4', style: { border: 'none' } },
                            _react2.default.createElement(
                                'main',
                                { className: 'inbox' },
                                this.renderTableItems()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NotificationList;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
    var _this9 = this;

    this.toggle = function (key) {
        var isDropdownOpen = _this9.state[key];
        _this9.setState(_defineProperty({}, key, !isDropdownOpen));
    };

    this.handleAction = function (func) {
        var resp = func();
        if (resp && resp.isSuccess) {
            _this9.setState({ successMessage: resp && resp.message ? resp.message : 'Done!' });
            setTimeout(function () {
                return _this9.setState({ successMessage: null });
            }, 3000);
        } else {
            _this9.setState({ errorMessage: resp && resp.message ? resp.message : 'Something went wrong...' });
            setTimeout(function () {
                return _this9.setState({ errorMessage: null });
            }, 3000);
        }
    };

    this.handleSort = function (fieldName) {
        var sortDesc = _this9.state.sortDesc;

        _this9.setState({ sortBy: fieldName, sortDesc: !sortDesc });
    };

    this.handleFilter = function (predicateFunc) {
        var items = _this9.props.items;

        _this9.setState({ filteredItems: items.filter(predicateFunc) });
    };
};

NotificationList.propTypes = {
    title: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.string,
    items: _propTypes2.default.array.isRequired,
    priorityClasses: _propTypes2.default.instanceOf(Map),
    sortableFields: _propTypes2.default.array,
    actions: _propTypes2.default.array,
    filters: _propTypes2.default.array
};

var NotificationListItem = exports.NotificationListItem = function (_PureComponent2) {
    _inherits(NotificationListItem, _PureComponent2);

    /**
     * @param {Object} props - Passed in props.
     * @member {string} state.fulltext - Component state.
     */
    function NotificationListItem(props) {
        _classCallCheck(this, NotificationListItem);

        var _this5 = _possibleConstructorReturn(this, (NotificationListItem.__proto__ || Object.getPrototypeOf(NotificationListItem)).call(this, props));

        _this5.expandText = function () {
            var showFullText = _this5.state.showFullText;

            _this5.setState({ showFullText: !showFullText });
        };

        _this5.handleAction = function (func, item) {
            var resp = func(item);
            if (resp && resp.isSuccess) {
                _this5.setState({ successMessage: resp && resp.message ? resp.message : 'Done!' });
                setTimeout(function () {
                    return _this5.setState({ successMessage: null });
                }, 3000);
            } else {
                _this5.setState({ errorMessage: resp && resp.message ? resp.message : 'Something went wrong...' });
                setTimeout(function () {
                    return _this5.setState({ errorMessage: null });
                }, 3000);
            }
        };

        _this5.state = {
            showFullText: false,
            successMessage: null,
            errorMessage: null
        };
        return _this5;
    }

    /**
     * Truncates text if it's longer that specified limit.
     * @param {string} text - Text to be truncated.
     * @param {string} truncateLength - The length starting from which the text will be truncated.
     * @return {string} Truncated text.
     */


    _createClass(NotificationListItem, [{
        key: 'truncateText',
        value: function truncateText(text, truncateLength) {
            var showFullText = this.state.showFullText;

            if (text.length > truncateLength && !showFullText) {
                return text.substring(0, truncateLength) + '...';
            }
            return text;
        }

        /**
         * Toggles showing full text if text has been truncated based on this.state.showFullText
         */


        /**
         * Call's the action based in to onClick handle and passes in the action attached to item's type object. If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
         * @param {Function} func - Function to be called on onClick.
         * @param {Object} item - Notification list item passed to the function.
         */

    }, {
        key: 'renderActions',


        /**
         * Renders the actions passed into item.type.actions array
         * @param {Object} item - Notification list item.
         * @return {Object} JSX code for action buttons with onClick event handlers.
         */
        value: function renderActions(item) {
            var _this6 = this;

            if (item.type && item.type.actions) {
                return _react2.default.createElement(
                    'div',
                    null,
                    item.type.actions.map(function (action) {
                        return _react2.default.createElement(
                            _reactstrap.Button,
                            { key: action.icon, color: action.color, onClick: function onClick() {
                                    return _this6.handleAction(action.func, item);
                                } },
                            _react2.default.createElement('i', { className: action.icon }),
                            ' ',
                            action.name
                        );
                    })
                );
            }
        }

        /**
         * Renders individual list items
         * @param {Object} item - Notification list item.
         * @param {Map} priorityClasses - A map of priority name's and associated reactstrap colorClasses.
         * @param {string} truncateTextLength - The length starting from which the text will be truncated.
         * @return {Object} JSX code for Notification list item.
         */

    }, {
        key: 'renderListItem',
        value: function renderListItem(item, priorityClasses, truncateTextLength) {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'span',
                        { className: 'from' },
                        priorityClasses && _react2.default.createElement(
                            'h6',
                            null,
                            _react2.default.createElement(
                                _reactstrap.Badge,
                                { color: priorityClasses.get(item.priority.name) },
                                item.priority.name
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'title' },
                                ' ',
                                item.title
                            )
                        ),
                        item.alert && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: item.alert.color },
                            item.alert.text
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'date' },
                        _react2.default.createElement('span', { className: 'fa fa-paper-clip' }),
                        item.date.displayDate
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    _react2.default.createElement(
                        'h6',
                        null,
                        item.category ? item.category.name : ''
                    ),
                    _react2.default.createElement(
                        _reactstrap.Media,
                        null,
                        item.sender && item.sender.avatarUrl && _react2.default.createElement(
                            _reactstrap.Media,
                            null,
                            _react2.default.createElement(_reactstrap.Media, { object: true, src: item.sender.avatarUrl, alt: 'Client avatar', style: { height: '3rem' } })
                        ),
                        _react2.default.createElement(
                            _reactstrap.Media,
                            { body: true },
                            _react2.default.createElement(
                                'div',
                                { className: 'title', style: item.sender && item.sender.avatarUrl && { margin: '0 0.5rem' } },
                                item.sender && item.sender && _react2.default.createElement(
                                    'span',
                                    { className: 'title' },
                                    ' ',
                                    item.sender.firstName,
                                    ' ',
                                    item.sender.lastName
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: item.sender && item.sender.avatarUrl && { margin: '0 0.5rem' } },
                                item.text.length > truncateTextLength ? this.truncateText(item.text, truncateTextLength) : item.text
                            )
                        )
                    )
                )
            );
        }

        /**
         * Components render fucntion
         * @return {Object} JSX code for Notification list item.
         */

    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                successMessage = _state3.successMessage,
                errorMessage = _state3.errorMessage,
                showFullText = _state3.showFullText;
            var _props3 = this.props,
                item = _props3.item,
                priorityClasses = _props3.priorityClasses,
                truncateTextLength = _props3.truncateTextLength;

            return _react2.default.createElement(
                'li',
                { className: !item.isRead ? "message unread" : "message" && (item.category && item.category.cssClass ? item.category.cssClass : ''), style: { cursor: 'default', padding: '0.3rem' } },
                item.url && _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: item.url },
                    this.renderListItem(item, priorityClasses, truncateTextLength)
                ),
                !item.url && this.renderListItem(item, priorityClasses, truncateTextLength),
                item.text.length > truncateTextLength && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'link', size: 'sm', onClick: this.expandText },
                        showFullText ? 'Less' : 'More'
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.ButtonGroup,
                    { size: 'sm', style: { padding: '0.2rem 0' } },
                    this.renderActions(item)
                ),
                successMessage && _react2.default.createElement(
                    'p',
                    { className: 'text-success description animated fadeIn' },
                    successMessage
                ),
                errorMessage && _react2.default.createElement(
                    'p',
                    { className: 'text-danger description animated fadeIn' },
                    errorMessage
                )
            );
        }
    }]);

    return NotificationListItem;
}(_react.PureComponent);

NotificationListItem.propTypes = {
    item: _propTypes2.default.object.isRequired,
    priorityClasses: _propTypes2.default.instanceOf(Map).isRequired,
    truncateTextLength: _propTypes2.default.number.isRequired
};

var NotificationListItemPreview = exports.NotificationListItemPreview = function (_PureComponent3) {
    _inherits(NotificationListItemPreview, _PureComponent3);

    /**
     * @param {Object} props - Passed in props.
     * @member {string} state.fulltext - Component state.
     */
    function NotificationListItemPreview(props) {
        _classCallCheck(this, NotificationListItemPreview);

        var _this7 = _possibleConstructorReturn(this, (NotificationListItemPreview.__proto__ || Object.getPrototypeOf(NotificationListItemPreview)).call(this, props));

        _this7.handleAction = function (func, item) {
            var resp = func(item);
            if (resp && resp.isSuccess) {
                _this7.setState({ successMessage: resp && resp.message ? resp.message : 'Done!' });
                setTimeout(function () {
                    return _this7.setState({ successMessage: null });
                }, 3000);
            } else {
                _this7.setState({ errorMessage: resp && resp.message ? resp.message : 'Something went wrong...' });
                setTimeout(function () {
                    return _this7.setState({ errorMessage: null });
                }, 3000);
            }
        };

        _this7.state = {
            showFullText: false,
            successMessage: null,
            errorMessage: null
        };
        return _this7;
    }

    /**
     * Truncates text if it's longer that specified limit.
     * @param {string} text - Text to be truncated.
     * @param {string} truncateLength - The length starting from which the text will be truncated.
     * @return {string} Truncated text.
     */


    _createClass(NotificationListItemPreview, [{
        key: 'truncateText',
        value: function truncateText(text, truncateLength) {
            var showFullText = this.state.showFullText;

            if (text.length > truncateLength && !showFullText) {
                return text.substring(0, truncateLength) + '...';
            }
            return text;
        }

        /**
         * Call's the passed in function with item as it's parameter . If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
         * @param {Function} func - Function to be called on onClick.
         * @param {Object} item - Notification list item passed to the function.
         */

    }, {
        key: 'renderActions',


        /**
         * Renders the actions passed into item.type.actions array
         * @param {Object} item - Notification list item.
         * @return {Object} JSX code for action buttons with onClick event handlers.
         */
        value: function renderActions(item) {
            var _this8 = this;

            if (item.type && item.type.actions) {
                return _react2.default.createElement(
                    'div',
                    null,
                    item.type.actions.map(function (action) {
                        return _react2.default.createElement(
                            _reactstrap.Button,
                            { key: action.icon, color: action.color, onClick: function onClick() {
                                    return _this8.handleAction(action.func, item);
                                }, style: { padding: '0.1rem' } },
                            _react2.default.createElement('i', { className: action.icon }),
                            ' ',
                            action.name
                        );
                    })
                );
            }
        }

        /**
         * Components render fucntion
         * @return {Object} JSX code for Notification list item.
         */

    }, {
        key: 'render',
        value: function render() {
            var _state4 = this.state,
                successMessage = _state4.successMessage,
                errorMessage = _state4.errorMessage;
            var _props4 = this.props,
                item = _props4.item,
                truncateTextLength = _props4.truncateTextLength;

            return _react2.default.createElement(
                'div',
                { className: 'message', style: { borderBottom: '1px solid #c2cfd6' } },
                _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    { href: '#', style: { border: 'none' } },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'small',
                                { className: 'text-muted' },
                                item.sender.firstName,
                                ' ',
                                item.sender.lastName
                            ),
                            _react2.default.createElement(
                                'small',
                                { className: 'text-muted float-right mt-1' },
                                item.date.displayDate
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-truncate font-weight-bold' },
                            _react2.default.createElement('span', { className: item.type.icon }),
                            ' ',
                            item.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'small text-muted text-truncate' },
                            item.text.length > truncateTextLength ? this.truncateText(item.text, truncateTextLength) : item.text
                        )
                    ),
                    successMessage && _react2.default.createElement(
                        'p',
                        { className: 'text-success description animated fadeIn' },
                        successMessage
                    ),
                    errorMessage && _react2.default.createElement(
                        'p',
                        { className: 'text-danger description animated fadeIn' },
                        errorMessage
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.ButtonGroup,
                    { size: 'sm', style: { padding: '0.1rem 0.5rem' }, className: 'message' },
                    this.renderActions(item)
                )
            );
        }
    }]);

    return NotificationListItemPreview;
}(_react.PureComponent);

NotificationListItemPreview.propTypes = {
    item: _propTypes2.default.object.isRequired,
    truncateTextLength: _propTypes2.default.number.isRequired
};