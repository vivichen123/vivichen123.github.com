"use strict";
define(function(require, exports, module) {

	// 依赖
	var $ = require('$'),
		Reflux = require('reflux');

	// Action
	var Actions = Reflux.createActions(['addItem', 'removeItem', 'editItem', 'getAll']);
	
	// Stroe
	var Stroe = Reflux.createStore({
		items: ['item1', 'item2', 'item3'],
		listenables: [Actions],


		onAddItem: function(val){
			
			var me = this;
			me.items.push(val);
			me.trigger(me.items);
		},

		onRemoveItem: function(index){
			
			var me = this;
			if(index < me.items.length){
				me.items.splice(index,1);
			}
			me.trigger(me.items);
		},

		onEditItem: function(val, index){
			var me = this;
			if(index < me.items.length){
				me.items.splice(index, 1, val);
			}
			me.trigger(me.items);
		},

		onGetAll:function(){
			var me = this;
			me.trigger(me.items);
		}

	});
	
	// 接口
	module.exports = {
		Actions: Actions,
		Stroe: Stroe,
		Reflux: Reflux
	};

});