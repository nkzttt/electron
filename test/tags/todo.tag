<todo>
	
	<h3>{opts.title}</h3>
	
	<ul>
		<li each="{items}" hide="{hidden}">
			<label class="{completed: done}">
				<input type="checkbox" checked="{done}" onclick="{parent.toggle}">
				{title}
				<button onclick="{parent.remove}" disabled="{!done}">delete</button>
			</label>
		</li>
	</ul>

	<form onsubmit="{add}">
		<input type="text" ref="input" onkeyup="{edit}">
		<button disabled="{!text}">
			ADD #{items.length + 1}
		</button>
		<p>your input text is: 
			<b>{refs.input.value}</b>
		</p>
	</form>

	<script type="es6">
		this.items = opts.items;
		
		this.edit = (e) => {
			this.text = e.target.value;
		}
		
		this.add = (e) => {
			e.preventDefault();
			if (this.text) {
				this.items.push({title: this.text});
				this.text = this.refs.input.value = '';
			}
		}
		
		this.toggle = (e) => {
			let item = e.item;
			item.done = !item.done;
		}
		
		this.remove = (e) => {
			let item = e.item,
				index = this.items.indexOf(item);
			this.items.splice(index, 1);
		}
		
		// get selector
		this.on('mount', () => {
			console.log(this.root.querySelector('form'));
		});
		
	</script>

	<style type="stylus">
		body {
			font-family: 'myriad pro', sans-serif;
			font-size: 20px;
			border: 0;
		}

		todo {
			display: block;
			max-width: 400px;
			margin: 5% auto;
		}

		form input {
			font-size: 85%;
			padding: .4em;
			border: 1px solid #ccc;
			border-radius: 2px;
		}

		button {
			background-color: #1FADC5;
			border: 1px solid rgba(0,0,0,.2);
			font-size: 75%;
			color: #fff;
			padding: .4em 1.2em;
			border-radius: 2em;
			cursor: pointer;
			margin: 0 .23em;
			outline: none;
		}

		button[disabled] {
			background-color: #ddd;
			color: #aaa;
		}

		ul {
			padding: 0;
		}

		li {
			list-style-type: none;
			padding: .2em 0;
		}

		.completed {
			text-decoration: line-through;
			color: #ccc;
		}

		label {
			cursor: pointer;
		}
	</style>
	
</todo>
