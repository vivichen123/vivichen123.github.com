webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	let React = __webpack_require__(1);
	let ReactDOM = __webpack_require__(158);
	let TimeUp = __webpack_require__(160);

	seajs.config({
		base: 'http://static.alipayobjects.com',
		alias: {
			'jquery': 'jquery/1.7.2/jquery',
			'index': 'arale-qrcode/1.1.0/index'
		}
	});

	//console.log('TimeUp',TimeUp);
	/*
	console.log('sea',sea);

	console.log('sea',seajs);
		seajs.config({
			paths: {
				jquery: 'https://alinw.alipayobjects.com/jquery',
				arale: 'https://alinw.alipayobjects.com/arale'
			},
			alias: {
				"jquery": 'jquery/1.7.2/jquery'
			}
		});
		
		seajs.use(['jquery'], function($){
			console.log('a',$);
		});


	var Frame =React.createClass({
		getInitialState: function(){
			return {flag: true};
		},
		
		handleFrameClick: function(){
			this.setState({flag:!this.state.flag});
		},
		
		render: function(){
			var color;
			if(this.state.flag){
				color = 'red';
			}else{
				color = 'blue';
			}
			return(<div style={{backgroundColor: color}}>
						<TimeUp name="Nate" onClick={this.handleFrameClick.bind(this)}/>
				</div>);
		}
		
	});
	console.log("frame", Frame);
	*/

	var Frame = function () {
		var ____Class0 = React.Component;for (var ____Class0____Key in ____Class0) {
			if (____Class0.hasOwnProperty(____Class0____Key)) {
				frame[____Class0____Key] = ____Class0[____Class0____Key];
			}
		}var ____SuperProtoOf____Class0 = ____Class0 === null ? null : ____Class0.prototype;frame.prototype = Object.create(____SuperProtoOf____Class0);frame.prototype.constructor = frame;frame.__superConstructor__ = ____Class0;
		function frame(props) {
			"use strict";

			____Class0.call(this, props);
			this.state = { flag: true };
		}

		Object.defineProperty(frame.prototype, "handleFrameClick", { writable: true, configurable: true, value: function () {
				"use strict";

				this.setState({ flag: !this.state.flag });
			} });

		Object.defineProperty(frame.prototype, "render", { writable: true, configurable: true, value: function () {
				"use strict";

				var color;
				if (this.state.flag) {
					color = 'red';
				} else {
					color = 'blue';
				}
				return React.createElement("div", { style: { backgroundColor: color } }, React.createElement(TimeUp, { name: "Nate", onClick: this.handleFrameClick.bind(this) }), React.createElement("div", { id: "qrcodeDefault", ref: "qrcodeDefault" }));
			} });

		Object.defineProperty(frame.prototype, "componentDidMount", { writable: true, configurable: true, value: function () {
				"use strict";

				var me = this;
				seajs.use(['index', 'jquery'], function (qrcode, $) {
					console.log(qrcode);
					var qrnode = new qrcode({
						text: ""
					});
					$(ReactDOM.findDOMNode(me.refs.qrcodeDefault)).append(qrnode);
				});
			} });

		return frame;
	}();

	ReactDOM.render(React.createElement(Frame, null), document.getElementById('id1'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var ____Class2 = React.Component;for (var ____Class2____Key in ____Class2) {
		if (____Class2.hasOwnProperty(____Class2____Key)) {
			TimeUp[____Class2____Key] = ____Class2[____Class2____Key];
		}
	}var ____SuperProtoOf____Class2 = ____Class2 === null ? null : ____Class2.prototype;TimeUp.prototype = Object.create(____SuperProtoOf____Class2);TimeUp.prototype.constructor = TimeUp;TimeUp.__superConstructor__ = ____Class2;
	function TimeUp(props) {
		"use strict";

		____Class2.call(this, props);
		this.state = { count: 0 };
	}

	Object.defineProperty(TimeUp.prototype, "resetState", { writable: true, configurable: true, value: function () {} });

	//console.log(this.state.count);
	Object.defineProperty(TimeUp.prototype, "handleClick", { writable: true, configurable: true, value: function () {
			"use strict";

			this.setState({ count: this.state.count + 1 });
			console.log(this.state.count);
		} });

	Object.defineProperty(TimeUp.prototype, "componentDidMount", { writable: true, configurable: true, value: function () {} });

	//setInterval(this.handleClick.bind(this), 1000);
	Object.defineProperty(TimeUp.prototype, "componentWillUpdate", { writable: true, configurable: true, value: function (nextProps, nextState) {
			"use strict";

			console.log('Component WILL UPDATE!');
		} });

	Object.defineProperty(TimeUp.prototype, "componentDidUpdate", { writable: true, configurable: true, value: function (prevProps, prevState) {
			"use strict";

			console.log('Component DID UPDATE!');
		} });

	Object.defineProperty(TimeUp.prototype, "render", { writable: true, configurable: true, value: function () {
			"use strict";

			console.log('a');
			return React.createElement("div", null, React.createElement("span", { name: this.props.name }, "Count��", this.state.count), React.createElement("input", { type: "button", name: "button", onClick: this.props.onClick }) /*onClick={this.handleClick.bind(this)}*/
			);
		} });

	TimeUp.propTypes = {};

	module.exports = TimeUp;

/***/ }

});