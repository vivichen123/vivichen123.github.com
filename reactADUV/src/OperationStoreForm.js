"use strict";

define(function (require, exports, module) {

	// 依赖
	var React = require('react'),
	    ReactDOM = require('reactDOM'),
	    OperationStore = require('./OperationStore');
	require('./react.css');

	// 业务主类
	var OperationStoreForm = React.createClass({
		displayName: 'OperationStoreForm',

		mixins: [OperationStore.Reflux.connect(OperationStore.Stroe), OperationStore.Reflux.listenTo(OperationStore.Stroe, 'onStatusChange')],

		getInitialState: function getInitialState() {
			return { list: [], currentEditRow: -1, editValue: '' };
		},

		onStatusChange: function onStatusChange(list) {
			this.setState({ list: list });
		},

		editRow: function editRow(e) {
			var rowNum = $(e.target).data('row');
			this.setState({ currentEditRow: rowNum, editValue: this.state.list[rowNum] });
		},

		deleteRow: function deleteRow(e) {
			var rowNum = $(e.target).data('row');
			OperationStore.Actions.removeItem(rowNum);
		},

		handleRow: function handleRow(e) {
			var value = this.refs.itemValue.value;
			if (value) {
				this.state.currentEditRow >= 0 ? OperationStore.Actions.editItem(value, this.state.currentEditRow) : OperationStore.Actions.addItem(value);
				this.setState({ currentEditRow: -1, editValue: "" });
			} else {
				alert('值不能为空');
			}
		},

		changeValue: function changeValue(e) {
			this.setState({ editValue: this.refs.itemValue.value });
		},

		render: function render() {
			var me = this;
			var buttonText = this.state.currentEditRow >= 0 ? "修改" : "添加";
			//var buttonStyle = {width:'50px', height:'20px'};

			// 格式化数据
			return React.createElement(
				'div',
				{ className: 'main' },
				React.createElement(
					'div',
					{ className: 'title' },
					'React增删改查'
				),
				React.createElement(
					'table',
					{ className: 'table' },
					React.createElement(
						'tbody',
						null,
						this.state.list.map(function (val, index) {
							return React.createElement(
								'tr',
								{ className: 'row', key: index },
								React.createElement(
									'td',
									{ width: '30' },
									index + 1
								),
								React.createElement(
									'td',
									null,
									val
								),
								React.createElement(
									'td',
									{ width: '60' },
									React.createElement(
										'a',
										{ href: 'javascript:void(0);', onClick: me.editRow, 'data-row': index },
										'编辑'
									),
									React.createElement(
										'a',
										{ href: 'javascript:void(0);', onClick: me.deleteRow, 'data-row': index },
										'删除'
									)
								)
							);
						})
					)
				),
				React.createElement(
					'div',
					{ className: 'edit' },
					React.createElement('input', { type: 'text', value: this.state.editValue, name: 'item-value', ref: 'itemValue', onChange: me.changeValue }),
					React.createElement('input', { type: 'button', value: buttonText, onClick: me.handleRow })
				)
			);
		},

		componentDidMount: function componentDidMount() {
			OperationStore.Actions.getAll();
		}

	});

	// 接口
	module.exports = OperationStoreForm;
});