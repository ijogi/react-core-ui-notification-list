'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

require('./styles.css');

var _NotificationListItem = require('./NotificationListItem');

var _NotificationListItem2 = _interopRequireDefault(_NotificationListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationList = function (_PureComponent) {
  _inherits(NotificationList, _PureComponent);

  function NotificationList(props) {
    _classCallCheck(this, NotificationList);

    var _this = _possibleConstructorReturn(this, (NotificationList.__proto__ || Object.getPrototypeOf(NotificationList)).call(this, props));

    _this.toggle = function () {
      var dropdownOpen = _this.state.dropdownOpen;

      _this.setState({
        dropdownOpen: !dropdownOpen
      });
    };

    _this.handleMarkAllItemsAsRead = function () {
      var items = _this.props.items;

      _this.props.handleMarkAllItemsAsRead(items);
    };

    _this.handleMarkAllItemsAsArchived = function () {
      var items = _this.props.items;

      _this.props.handleMarkAllItemsAsArchived(items);
    };

    _this.state = {
      sortBy: 'date',
      sortDesc: false,
      dropdownOpen: false
    };
    return _this;
  }

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
  }, {
    key: 'handleSort',
    value: function handleSort(fieldName) {
      var sortDesc = this.state.sortDesc;

      this.setState({ sortBy: fieldName, sortDesc: !sortDesc });
    }
  }, {
    key: 'renderSortingButtons',
    value: function renderSortingButtons() {
      var _this2 = this;

      var sortableFields = this.props.sortableFields;

      return _react2.default.createElement(
        _reactstrap.ButtonDropdown,
        { isOpen: this.state.dropdownOpen, toggle: this.toggle },
        _react2.default.createElement(
          _reactstrap.DropdownToggle,
          { caret: true },
          'Sort by'
        ),
        _react2.default.createElement(
          _reactstrap.DropdownMenu,
          null,
          sortableFields.map(function (field) {
            return _react2.default.createElement(
              _reactstrap.DropdownItem,
              { onClick: function onClick() {
                  return _this2.handleSort(field.title);
                }, key: field.title },
              'Sort by ',
              field.title
            );
          })
        )
      );
    }
  }, {
    key: 'renderTableItems',
    value: function renderTableItems() {
      var _this3 = this;

      var items = this.props.items;
      var sortableFields = this.props.sortableFields;
      var sortBy = this.state.sortBy;

      var sortableProperty = sortableFields.find(function (f) {
        return f.title === sortBy;
      });

      return _react2.default.createElement(
        'ul',
        { className: 'messages' },
        items.sort(function (a, b) {
          return _this3.compare(b, a, sortBy, sortableProperty ? sortableProperty.sortByProp : null);
        }).map(function (item) {
          return _react2.default.createElement(_NotificationListItem2.default, {
            item: Object.assign({}, item),
            priorityClasses: _this3.props.priorityClasses,
            handleMarkAsArchived: _this3.props.handleMarkAsArchived,
            handleMarkAsRead: _this3.props.handleMarkAsRead,
            key: item.id });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          title = _props.title;

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
            this.renderSortingButtons(),
            _react2.default.createElement(
              _reactstrap.ButtonGroup,
              null,
              this.handleMarkAllItemsAsRead && _react2.default.createElement(
                _reactstrap.Button,
                { color: 'success', onClick: this.handleMarkAllItemsAsRead },
                _react2.default.createElement('i', { className: 'fa fa-envelope-open-o' }),
                ' Mark all as read'
              ),
              this.handleMarkAllItemsAsArchived && _react2.default.createElement(
                _reactstrap.Button,
                { color: 'success', onClick: this.handleMarkAllItemsAsArchived },
                _react2.default.createElement('i', { className: 'fa fa-archive' }),
                ' Mark all as archived'
              )
            )
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

NotificationList.propTypes = {
  title: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  items: _propTypes2.default.array.isRequired,
  priorityClasses: _propTypes2.default.instanceOf(Map).isRequired,
  handleMarkAsArchived: _propTypes2.default.func,
  handleMarkAllItemsAsArchived: _propTypes2.default.func,
  handleMarkAsRead: _propTypes2.default.func,
  handleMarkAllItemsAsRead: _propTypes2.default.func
};

exports.default = NotificationList;