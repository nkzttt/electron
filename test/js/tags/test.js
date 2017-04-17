riot.tag2('todo', '<h3>{opts.title}</h3> <ul> <li each="{items}"> <label class="{completed: done}"> <input type="checkbox" checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input type="text" ref="input" onkeyup="{edit}"> <button disabled="{!text}"> ADD #{items.length + 1} </button> </form>', 'todo body,[data-is="todo"] body{ font-family: \'myriad pro\', sans-serif; font-size: 20px; border: 0; } todo { display: block; max-width: 400px; margin: 5% auto; } todo form input,[data-is="todo"] form input{ font-size: 85%; padding: 0.4em; border: 1px solid #ccc; border-radius: 2px; } todo button,[data-is="todo"] button{ background-color: #1fadc5; border: 1px solid rgba(0,0,0,0.2); font-size: 75%; color: #fff; padding: 0.4em 1.2em; border-radius: 2em; cursor: pointer; margin: 0 0.23em; outline: none; } todo button[disabled],[data-is="todo"] button[disabled]{ background-color: #ddd; color: #aaa; } todo ul,[data-is="todo"] ul{ padding: 0; } todo li,[data-is="todo"] li{ list-style-type: none; padding: 0.2em 0; } todo .completed,[data-is="todo"] .completed{ text-decoration: line-through; color: #ccc; } todo label,[data-is="todo"] label{ cursor: pointer; }', '', function(opts) {
'use strict';

var _this = this;

this.items = opts.items;

this.edit = function (e) {
	_this.text = e.target.value;
};

this.add = function (e) {
	e.preventDefault();
	if (_this.text) {
		_this.items.push({ title: _this.text });
		_this.text = _this.refs.input.value = '';
	}
};

this.toggle = function (e) {
	var item = e.item;
	item.done = !item.done;
};
});
