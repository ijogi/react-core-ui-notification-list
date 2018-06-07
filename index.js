'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_reactRouterDom=require('react-router-dom'),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_reactstrap=require('reactstrap');Object.defineProperty(exports,'__esModule',{value:!0}),exports.NotificationListItemPreview=exports.NotificationListItem=exports.NotificationList=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var NotificationList=exports.NotificationList=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));_initialiseProps.call(c);var d=c.props,e=d.defaultSortBy,f=d.items;return c.state={sortBy:e||'date',sortDesc:!1,filteredItems:f,isSortingDropdownOpen:!1,isFilteringDropdownOpen:!1,successMessage:null,errorMessage:null},c}/**
     * Compares 2 objects based on their property values .
     * @param {Object} a - Object to be compared.
     * @param {Object} b - Notification list item passed to the function.
     * @param {any} propIn1 - Property of the passed in objects a and b.
     * @param {any} propIn2 - Property of propIn1 of the passed in objects a and b.
     * @return {number} Comparison result.
     */return _inherits(b,a),_createClass(b,[{key:'compare',value:function compare(c,a,b,d){var e=null,f=null;this.state.sortDesc?(e=d?a[b][d]:a[b],f=d?c[b][d]:c[b]):(e=d?c[b][d]:c[b],f=d?a[b][d]:a[b]);var g=0;return e>f?g=1:e<f&&(g=-1),g}/**
     * Toggles dropdown visibility
     * @param {string} key - A key in the state object based on which to toggle visibility
     *//**
     * Call's the passed in function with item as it's parameter . If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
     * @param {Function} func - Function to be called on onClick.
     * @param {Object} item - Notification list item passed to the function.
     *//**
     * Sets the sort by property and toggles asc/desc sorting
     * @param {string} fieldName - Functions based into filter iterator.
     *//**
     * Filters notification list items based on a predicate function
     * @param {Function} predicateFunc - Functions based into filter iterator.
     */},{key:'handleClick',/**
     * Call's the passed in function with passed in object's passed in property
     * @param {Function} func - Function to be called.
     * @param {Object} obj - Notification list item passed to the function.
     * @param {any} prm - Notification list item passed to the function.
     * @return {any} Value retrieved by calling the function.
     */value:function handleClick(a,b,c){return a(b[c])}/**
     * Renders the actions passed into the function.
     * @param {Array} actions - Actions with correspoding functions to rendered with event handlers.
     * @return {Object} JSX code for action buttons with onClick event handlers.
     */},{key:'renderActions',value:function renderActions(a){var b=this;if(a)return _react2.default.createElement('div',null,a.map(function(a){return _react2.default.createElement(_reactstrap.Button,{key:a.icon,color:a.color,onClick:function onClick(){return b.handleAction(a.func)}},_react2.default.createElement('i',{className:a.icon}),' ',a.name)}))}/**
     * Renders button dropdowns with corresponding action and label names.
     * @param {boolean} isOpenKey - Indicates if dropdown is open or not
     * @param {arr} arr - An array of dropdown values.
     * @param {Function} action - A function to be called on each dropdown item.
     * @param {any} actionPrm - A parameter to passed into the function call.
     * @param {string} actionName - Text to be displayed on dropdown group.
     * @return {Object} JSX code for action buttons with onClick event handlers.
     */},{key:'renderButtonDropdown',value:function renderButtonDropdown(a,b,c,d,f){var g=this,e=this.state[a];return _react2.default.createElement(_reactstrap.ButtonDropdown,{isOpen:e,toggle:function toggle(){return g.toggle(a)}},_react2.default.createElement(_reactstrap.DropdownToggle,{caret:!0},f),_react2.default.createElement(_reactstrap.DropdownMenu,null,b.map(function(a){return _react2.default.createElement(_reactstrap.DropdownItem,{onClick:function onClick(){return g.handleClick(c,a,d)},key:a.title},f,' ',a.title)})))}/**
     * Renders notification list items inside notification list
     * @return {Object} JSX code for Notification list.
     */},{key:'renderTableItems',value:function renderTableItems(){var c=this,a=this.props,b=a.sortableFields,d=a.emptyPage,e=a.priorityClasses,f=a.truncateTextLength,g=this.state,h=g.filteredItems,i=g.sortBy,j=b.find(function(a){return a.title===i});return h&&0<h.length?_react2.default.createElement('ul',{className:'messages'},h.sort(function(d,a){return c.compare(a,d,i,j?j.sortByProp:null)}).map(function(a){return _react2.default.createElement(NotificationListItem,{item:Object.assign({},a),priorityClasses:e,truncateTextLength:f,key:a.id})})):_react2.default.createElement('div',null,d)}/**
     * Components render fucntion
     * @return {Object} JSX code for Notification list.
     */},{key:'render',value:function render(){var a=this.state,b=a.successMessage,c=a.errorMessage,d=this.props,e=d.icon,f=d.title,g=d.actions,h=d.sortableFields,i=d.filters;return _react2.default.createElement(_reactstrap.Card,null,_react2.default.createElement(_reactstrap.CardHeader,null,e&&_react2.default.createElement('i',{className:e}),' ',f),_react2.default.createElement(_reactstrap.CardBody,null,_react2.default.createElement(_reactstrap.CardTitle,null,this.renderButtonDropdown('isSortingDropdownOpen',h,this.handleSort,'title','Sort by'),this.renderButtonDropdown('isFilteringDropdownOpen',i,this.handleFilter,'predicateFunc','Show'),_react2.default.createElement(_reactstrap.ButtonGroup,null,this.renderActions(g))),b&&_react2.default.createElement(_reactstrap.Alert,{color:'success animated fadeIn'},b),c&&_react2.default.createElement(_reactstrap.Alert,{color:'danger animated fadeIn'},c),_react2.default.createElement('div',{className:'animated fadeIn'},_react2.default.createElement('div',{className:'email-app mb-4',style:{border:'none'}},_react2.default.createElement('main',{className:'inbox'},this.renderTableItems())))))}}]),b}(_react.PureComponent),_initialiseProps=function(){var a=this;this.toggle=function(b){var c=a.state[b];a.setState(_defineProperty({},b,!c))},this.handleAction=function(b){var c=b();c&&c.isSuccess?(a.setState({successMessage:c&&c.message?c.message:'Done!'}),setTimeout(function(){return a.setState({successMessage:null})},3e3)):(a.setState({errorMessage:c&&c.message?c.message:'Something went wrong...'}),setTimeout(function(){return a.setState({errorMessage:null})},3e3))},this.handleSort=function(b){var c=a.state.sortDesc;a.setState({sortBy:b,sortDesc:!c})},this.handleFilter=function(b){var c=a.props.items;a.setState({filteredItems:c.filter(b)})}};NotificationList.propTypes={title:_propTypes2.default.string.isRequired,icon:_propTypes2.default.string,items:_propTypes2.default.array.isRequired,priorityClasses:_propTypes2.default.instanceOf(Map),sortableFields:_propTypes2.default.array,actions:_propTypes2.default.array,filters:_propTypes2.default.array};var NotificationListItem=exports.NotificationListItem=function(a){/**
     * @param {Object} props - Passed in props.
     * @member {string} state.fulltext - Component state.
     */function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.expandText=function(){var a=c.state.showFullText;c.setState({showFullText:!a})},c.handleAction=function(a,b){var d=a(b);d&&d.isSuccess?(c.setState({successMessage:d&&d.message?d.message:'Done!'}),setTimeout(function(){return c.setState({successMessage:null})},3e3)):(c.setState({errorMessage:d&&d.message?d.message:'Something went wrong...'}),setTimeout(function(){return c.setState({errorMessage:null})},3e3))},c.state={showFullText:!1,successMessage:null,errorMessage:null},c}/**
     * Truncates text if it's longer that specified limit.
     * @param {string} text - Text to be truncated.
     * @param {string} truncateLength - The length starting from which the text will be truncated.
     * @return {string} Truncated text.
     */return _inherits(b,a),_createClass(b,[{key:'truncateText',value:function truncateText(a,b){var c=this.state.showFullText;return a.length>b&&!c?a.substring(0,b)+'...':a}/**
     * Toggles showing full text if text has been truncated based on this.state.showFullText
     *//**
     * Call's the action based in to onClick handle and passes in the action attached to item's type object. If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
     * @param {Function} func - Function to be called on onClick.
     * @param {Object} item - Notification list item passed to the function.
     */},{key:'renderActions',/**
     * Renders the actions passed into item.type.actions array
     * @param {Object} item - Notification list item.
     * @return {Object} JSX code for action buttons with onClick event handlers.
     */value:function renderActions(a){var b=this;if(a.type&&a.type.actions)return _react2.default.createElement('div',null,a.type.actions.map(function(c){return _react2.default.createElement(_reactstrap.Button,{key:c.icon,color:c.color,onClick:function onClick(){return b.handleAction(c.func,a)}},_react2.default.createElement('i',{className:c.icon}),' ',c.name)}))}/**
     * Renders individual list items
     * @param {Object} item - Notification list item.
     * @param {Map} priorityClasses - A map of priority name's and associated reactstrap colorClasses.
     * @param {string} truncateTextLength - The length starting from which the text will be truncated.
     * @return {Object} JSX code for Notification list item.
     */},{key:'renderListItem',value:function renderListItem(a,b,c){return _react2.default.createElement('div',null,_react2.default.createElement(_reactstrap.CardHeader,{style:{padding:'0.3rem 0.7rem',borderBottom:'none'},className:a.category?a.category.cssClass:''},_react2.default.createElement('div',{className:'header',style:{margin:'0'}},_react2.default.createElement('span',{className:'from'},b&&_react2.default.createElement('div',null,_react2.default.createElement(_reactstrap.Badge,{color:b.get(a.priority.name)},a.priority.name),_react2.default.createElement('span',{className:'title'},' ',a.title))))),_react2.default.createElement(_reactstrap.CardBody,{style:{padding:'0.5rem 0.5rem 0 0.5rem'}},a.alert&&_react2.default.createElement(_reactstrap.Alert,{color:a.alert.color,style:{padding:'0.2rem 0.3rem'}},a.alert.text),_react2.default.createElement('h6',null,a.category?a.category.name:''),_react2.default.createElement(_reactstrap.Media,null,a.sender&&a.sender.avatarUrl&&_react2.default.createElement(_reactstrap.Media,null,_react2.default.createElement(_reactstrap.Media,{object:!0,src:a.sender.avatarUrl,alt:'Client avatar',className:'img-avatar',style:{height:'3.5rem'}})),_react2.default.createElement(_reactstrap.Media,{body:!0},_react2.default.createElement('div',{className:'title',style:a.sender&&a.sender.avatarUrl&&{margin:'0 0.5rem'}},a.sender&&a.sender&&_react2.default.createElement('span',{className:'title'},' ',a.sender.firstName,' ',a.sender.lastName),_react2.default.createElement('span',{className:'description date',style:{float:'right'}},_react2.default.createElement('span',{className:'fa fa-paper-clip'}),a.date.displayDate)),_react2.default.createElement('p',{style:a.sender&&a.sender.avatarUrl&&{margin:'0 0.5rem'}},a.text.length>c?this.truncateText(a.text,c):a.text)))))}/**
     * Components render fucntion
     * @return {Object} JSX code for Notification list item.
     */},{key:'render',value:function render(){var a=this.state,b=a.successMessage,c=a.errorMessage,d=a.showFullText,e=this.props,f=e.item,g=e.priorityClasses,h=e.truncateTextLength;return _react2.default.createElement('li',{className:(f.category&&f.category.cssClass?f.category.cssClass:'x')&&(f.isRead?'message':'message unread'),style:{cursor:'default',padding:'0',marginBottom:'0.2rem',border:'none'}},_react2.default.createElement(_reactstrap.Card,{className:f.isRead?'':'bg-gray-100'},f.url&&_react2.default.createElement(_reactRouterDom.Link,{to:f.url},this.renderListItem(f,g,h)),!f.url&&this.renderListItem(f,g,h),f.text.length>h&&_react2.default.createElement('div',null,_react2.default.createElement(_reactstrap.Button,{color:'link',size:'sm',onClick:this.expandText},d?'Less':'More')),_react2.default.createElement(_reactstrap.ButtonGroup,{size:'sm',style:{padding:'0.4rem'}},this.renderActions(f)),_react2.default.createElement('div',{style:{padding:'0 0.4rem'}},b&&_react2.default.createElement('p',{className:'text-success description animated fadeIn'},b),c&&_react2.default.createElement('p',{className:'text-danger description animated fadeIn'},c))))}}]),b}(_react.PureComponent);NotificationListItem.propTypes={item:_propTypes2.default.object.isRequired,priorityClasses:_propTypes2.default.instanceOf(Map).isRequired,truncateTextLength:_propTypes2.default.number.isRequired};var NotificationListItemPreview=exports.NotificationListItemPreview=function(a){/**
     * @param {Object} props - Passed in props.
     * @member {string} state.fulltext - Component state.
     */function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.handleAction=function(a,b){var d=a(b);d&&d.isSuccess?(c.setState({successMessage:d&&d.message?d.message:'Done!'}),setTimeout(function(){return c.setState({successMessage:null})},3e3)):(c.setState({errorMessage:d&&d.message?d.message:'Something went wrong...'}),setTimeout(function(){return c.setState({errorMessage:null})},3e3))},c.state={showFullText:!1,successMessage:null,errorMessage:null},c}/**
     * Truncates text if it's longer that specified limit.
     * @param {string} text - Text to be truncated.
     * @param {string} truncateLength - The length starting from which the text will be truncated.
     * @return {string} Truncated text.
     */return _inherits(b,a),_createClass(b,[{key:'truncateText',value:function truncateText(a,b){var c=this.state.showFullText;return a.length>b&&!c?a.substring(0,b)+'...':a}/**
     * Call's the passed in function with item as it's parameter . If the passed in object return an object with properties isSuccess and message then a success or error message can be displayed.
     * @param {Function} func - Function to be called on onClick.
     * @param {Object} item - Notification list item passed to the function.
     */},{key:'renderActions',/**
     * Renders the actions passed into item.type.actions array
     * @param {Object} item - Notification list item.
     * @return {Object} JSX code for action buttons with onClick event handlers.
     */value:function renderActions(a){var b=this;if(a.type&&a.type.actions)return _react2.default.createElement('div',null,a.type.actions.map(function(c){return _react2.default.createElement(_reactstrap.Button,{key:c.icon,color:c.color,onClick:function onClick(){return b.handleAction(c.func,a)},style:{padding:'0.1rem'}},_react2.default.createElement('i',{className:c.icon}),' ',c.name)}))}/**
     * Components render fucntion
     * @return {Object} JSX code for Notification list item.
     */},{key:'render',value:function render(){var a=this.state,b=a.successMessage,c=a.errorMessage,d=this.props,e=d.item,f=d.truncateTextLength;return _react2.default.createElement('div',{className:'message',style:{borderBottom:'1px solid #c2cfd6'}},_react2.default.createElement(_reactstrap.DropdownItem,{href:'#',style:{border:'none'}},_react2.default.createElement('div',null,_react2.default.createElement('div',null,_react2.default.createElement('small',{className:'text-muted'},e.sender.firstName,' ',e.sender.lastName),_react2.default.createElement('small',{className:'text-muted float-right mt-1'},e.date.displayDate)),_react2.default.createElement('div',{className:'text-truncate font-weight-bold'},_react2.default.createElement('span',{className:e.type.icon}),' ',e.title),_react2.default.createElement('div',{className:'small text-muted text-truncate'},e.text.length>f?this.truncateText(e.text,f):e.text)),b&&_react2.default.createElement('p',{className:'text-success description animated fadeIn'},b),c&&_react2.default.createElement('p',{className:'text-danger description animated fadeIn'},c)),_react2.default.createElement(_reactstrap.ButtonGroup,{size:'sm',style:{padding:'0.1rem 0.5rem'},className:'message'},this.renderActions(e)))}}]),b}(_react.PureComponent);NotificationListItemPreview.propTypes={item:_propTypes2.default.object.isRequired,truncateTextLength:_propTypes2.default.number.isRequired};