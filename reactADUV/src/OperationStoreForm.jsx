"use strict";
define(function(require, exports, module) {

	// 依赖
	var React = require('react'),
		ReactDOM = require('reactDOM'),
		OperationStore = require('./OperationStore');
		require('./react.css');

		
	// 业务主类
	var OperationStoreForm = React.createClass({
		mixins: [OperationStore.Reflux.connect(OperationStore.Stroe), OperationStore.Reflux.listenTo(OperationStore.Stroe, 'onStatusChange')],

		getInitialState: function () {
        	return {list: [], currentEditRow: -1, editValue:''};
   		},

   		onStatusChange: function (list) {
        	this.setState({list: list});
    	},

    	editRow: function(e){
    		var rowNum = $(e.target).data('row');
    		this.setState({currentEditRow:rowNum, editValue:this.state.list[rowNum]});
    	},

    	deleteRow: function(e){
			var rowNum = $(e.target).data('row');
			OperationStore.Actions.removeItem(rowNum);
    	},

    	handleRow: function(e){
    		var value = this.refs.itemValue.value;
    		if(value){
    			this.state.currentEditRow >= 0 ? OperationStore.Actions.editItem(value, this.state.currentEditRow) : OperationStore.Actions.addItem(value);
    			this.setState({currentEditRow: -1, editValue:""});
    		}else{
    			alert('值不能为空');
    		}
    	},

    	changeValue:function(e){
    		this.setState({editValue : this.refs.itemValue.value});
    	},

		render: function(){
			var me = this;
			var buttonText = this.state.currentEditRow >= 0 ? "修改" : "添加";
			//var buttonStyle = {width:'50px', height:'20px'};

			// 格式化数据
			return (
				<div className="main">
					<div className="title">React增删改查</div>
					<table className="table">
						<tbody>
		            	{ 
		            		this.state.list.map(function(val, index){
				        		return <tr className="row" key={index}>
				        			<td width='30'>{index+1}</td>
				        			<td>{val}</td>
				        			<td width='60'><a href="javascript:void(0);" onClick={me.editRow} data-row={index}>编辑</a><a href="javascript:void(0);" onClick={me.deleteRow} data-row={index}>删除</a></td>
				        			</tr>
				        	})
			        	}
			        	</tbody>
			        </table>
			        <div className="edit">
			        	<input type="text" value={this.state.editValue} name="item-value" ref="itemValue" onChange={me.changeValue}/><input type="button" value={buttonText} onClick={me.handleRow} />
			        </div>
		        </div>
		    );
		},
		
		componentDidMount: function(){
			OperationStore.Actions.getAll();
		}

	});

	// 接口
	module.exports = OperationStoreForm;

});

