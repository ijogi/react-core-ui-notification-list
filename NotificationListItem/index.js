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

    function NotificationListItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NotificationListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationListItem.__proto__ || Object.getPrototypeOf(NotificationListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleMarkAsRead = function () {
            var item = _this.props.item;

            _this.props.handleMarkAsRead(item);
        }, _this.handleMarkAsArchived = function () {
            var item = _this.props.item;

            _this.props.handleMarkAsArchived(item);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NotificationListItem, [{
        key: 'truncateText',
        value: function truncateText(text, truncateLength) {
            if (text.length > truncateLength) {
                return text.substring(0, truncateLength) + '...';
            }
            return text;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                item = _props.item,
                priorityClasses = _props.priorityClasses;

            return _react2.default.createElement(
                'li',
                { className: !item.isRead ? "message unread" : "message", style: { cursor: 'default' } },
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
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'date' },
                        _react2.default.createElement('span', { className: 'fa fa-paper-clip' }),
                        ' ',
                        item.date.toString()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    _react2.default.createElement(
                        'h6',
                        null,
                        item.category
                    ),
                    _react2.default.createElement(
                        _reactstrap.Media,
                        null,
                        item.sender && item.sender.avatarUrl && _react2.default.createElement(
                            _reactstrap.Media,
                            { left: true, href: '#' },
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
                                this.truncateText(item.body, 250)
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.ButtonGroup,
                    { size: 'sm', style: { padding: '0.2rem 0' } },
                    this.handleMarkAsRead && _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'light', onClick: this.handleMarkAsRead },
                        _react2.default.createElement('i', { className: 'fa fa-envelope-open-o' })
                    ),
                    this.handleMarkAsArchived && _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'light', onClick: this.handleMarkAsArchived },
                        _react2.default.createElement('i', { className: 'fa fa-archive' })
                    )
                )
            );
        }
    }]);

    return NotificationListItem;
}(_react.PureComponent);

NotificationListItem.propTypes = {
    item: _propTypes2.default.object.isRequired,
    priorityClasses: _propTypes2.default.instanceOf(Map).isRequired,
    handleMarkAsRead: _propTypes2.default.func,
    handleMarkAsArchived: _propTypes2.default.func
};

exports.default = NotificationListItem;