"use strict";
define(function(require, exports, module) {

	// 依赖
	var $ = require('$'),
		React = require('react'),
		ReactDOM = require('reactDOM'),
		OperationStoreForm = require('./OperationStoreForm');


		
	// 置入文档 
	ReactDOM.render(
		<OperationStoreForm />,
	    document.getElementById('react')
  	);

});