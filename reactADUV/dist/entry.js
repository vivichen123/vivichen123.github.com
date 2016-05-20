webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	let React = __webpack_require__(1);
	let ReactDOM = __webpack_require__(158);
	let Hello = __webpack_require__(159);
	ReactDOM.render(React.createElement(Hello, { name: "Nate" }), document.getElementById('id'));

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var ____Class1 = React.Component;for (var ____Class1____Key in ____Class1) {
		if (____Class1.hasOwnProperty(____Class1____Key)) {
			Hello[____Class1____Key] = ____Class1[____Class1____Key];
		}
	}var ____SuperProtoOf____Class1 = ____Class1 === null ? null : ____Class1.prototype;Hello.prototype = Object.create(____SuperProtoOf____Class1);Hello.prototype.constructor = Hello;Hello.__superConstructor__ = ____Class1;
	function Hello(props) {
		"use strict";

		____Class1.call(this, props);
	}

	Object.defineProperty(Hello.prototype, "render", { writable: true, configurable: true, value: function () {
			"use strict";

			return React.createElement("h1", { ref: "node" }, "Hello ", this.props.name, "!");
		} });
	Object.defineProperty(Hello.prototype, "componentDidMount", { writable: true, configurable: true, value: function () {
			"use strict";

			let me = this,
			    refs = me.refs;
		} });

	Hello.propTypes = {};

	module.exports = Hello;

/***/ }

});