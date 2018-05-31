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

var _NotificationListItem = require('./NotificationListItem');

var _NotificationListItem2 = _interopRequireDefault(_NotificationListItem);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationList = function (_PureComponent) {
  _inherits(NotificationList, _PureComponent);

  function NotificationList(props) {
    _classCallCheck(this, NotificationList);

    var _this = _possibleConstructorReturn(this, (NotificationList.__proto__ || Object.getPrototypeOf(NotificationList)).call(this, props));

    _this.toggle = function (key) {
      var isDropdownOpen = _this.state[key];
      _this.setState(_defineProperty({}, key, !isDropdownOpen));
    };

    _this.handleAction = function (func) {
      var resp = func();
      if (resp && resp.isSuccess) {
        _this.setState({ successMessage: resp && resp.message ? resp.message : 'Done!' });
        setTimeout(function () {
          return _this.setState({ successMessage: null });
        }, 3000);
      } else {
        _this.setState({ errorMessage: resp && resp.message ? resp.message : 'Something went wrong...' });
        setTimeout(function () {
          return _this.setState({ errorMessage: null });
        }, 3000);
      }
    };

    _this.handleSort = function (fieldName) {
      var sortDesc = _this.state.sortDesc;

      _this.setState({ sortBy: fieldName, sortDesc: !sortDesc });
    };

    _this.handleFilter = function (predicateFunc) {
      var items = _this.props.items;

      _this.setState({ filteredItems: items.filter(predicateFunc) });
    };

    _this.state = {
      sortBy: 'date',
      sortDesc: false,
      filteredItems: _this.props.items,
      isSortingDropdownOpen: false,
      isFilteringDropdownOpen: false,
      successMessage: null,
      errorMessage: null
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
    key: 'handleClick',
    value: function handleClick(func, obj, prm) {
      return func(obj[prm]);
    }
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
            return _react2.default.createElement(_NotificationListItem2.default, {
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

NotificationList.propTypes = {
  title: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  items: _propTypes2.default.array.isRequired,
  priorityClasses: _propTypes2.default.instanceOf(Map),
  sortableFields: _propTypes2.default.array,
  actions: _propTypes2.default.array,
  filters: _propTypes2.default.array
};

exports.default = NotificationList;