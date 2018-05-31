'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationListItem = function (_PureComponent) {
    _inherits(NotificationListItem, _PureComponent);

    function NotificationListItem(props) {
        _classCallCheck(this, NotificationListItem);

        var _this = _possibleConstructorReturn(this, (NotificationListItem.__proto__ || Object.getPrototypeOf(NotificationListItem)).call(this, props));

        _this.expandText = function () {
            var showFullText = _this.state.showFullText;

            _this.setState({ showFullText: !showFullText });
        };

        _this.handleAction = function (func, item) {
            var resp = func(item);
            if (resp.isSuccess) {
                _this.setState({ successMessage: resp.message });
                setTimeout(function () {
                    return _this.setState({ successMessage: null });
                }, 3000);
            } else {
                _this.setState({ errorMessage: resp.message });
                setTimeout(function () {
                    return _this.setState({ errorMessage: null });
                }, 3000);
            }
        };

        _this.state = {
            showFullText: false,
            successMessage: null,
            errorMessage: null
        };
        return _this;
    }

    _createClass(NotificationListItem, [{
        key: 'truncateText',
        value: function truncateText(text, truncateLength) {
            var showFullText = this.state.showFullText;

            if (text.length > truncateLength && !showFullText) {
                return text.substring(0, truncateLength) + '...';
            }
            return text;
        }
    }, {
        key: 'renderActions',
        value: function renderActions(item) {
            var _this2 = this;

            if (item.type && item.type.actions) {
                return _react2.default.createElement(
                    'div',
                    null,
                    item.type.actions.map(function (action) {
                        return _react2.default.createElement(
                            _reactstrap.Button,
                            { key: action.icon, color: action.color, onClick: function onClick() {
                                    return _this2.handleAction(action.func, item);
                                } },
                            _react2.default.createElement('i', { className: action.icon }),
                            ' ',
                            action.name
                        );
                    })
                );
            }
        }
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
                        ' ',
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
                                item.text.length > truncateTextLength ? this.truncateText(item.text, 500) : item.text
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                successMessage = _state.successMessage,
                errorMessage = _state.errorMessage,
                showFullText = _state.showFullText;
            var _props = this.props,
                item = _props.item,
                priorityClasses = _props.priorityClasses,
                truncateTextLength = _props.truncateTextLength;

            return _react2.default.createElement(
                'li',
                { className: !item.isRead ? "message unread" : "message" && (item.category && item.category.cssClass ? item.category.cssClass : ''), style: { cursor: 'default', padding: '0.3rem' } },
                item.url && _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: item.url },
                    this.renderListItem(item, priorityClasses)
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
    priorityClasses: _propTypes2.default.instanceOf(Map).isRequired
};

exports.default = NotificationListItem;