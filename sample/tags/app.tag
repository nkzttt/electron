<app>
	<nav>
		<virtual each="{nav}">
			<a href="#{path}" if="{path != currentPath}">{title}</a>
			<span if="{path == currentPath}">{title}</span>
		</virtual>
	</nav>

	<main>
		<root show="{currentPath == '/'}"></root>
		<test show="{currentPath == '/test'}"></test>
		<web show="{currentPath == '/web'}"></web>
	</main>
	
	<script type="es6">
		let self = this;
		
		// ナビゲーション用配列
		self.nav = [
			{path: '/', title: 'TOP'},
			{path: '/test', title: 'TEST'},
			{path: '/web', title: 'WEB'}
		];
		
		// 初期化（ルート定義）
		self.currentPath = '/';
		location.hash = self.currentPath;
		
		route('/', () => {
			self.currentPath = '/';
			self.update();
		});
		
		// ルート以外のルーティング
		route('/test', () => {
			self.currentPath = '/test';
			self.update();
		});
		
		route('/web', () => {
			self.currentPath = '/web';
			self.update();
		});
	</script>

	<style type="stylus">
		:scope {
			display: block;
			font-family: sans-serif;
			margin: 0;
			padding: 1em;
			text-align: center;
			color: #666;
		}
		nav {
			display: block;
			border-bottom: 1px solid #666;
			padding: 0 0 1em;
		}
		nav > a,
		nav > span {
			display: inline-block;
			padding: 0 .8em;
		}
		nav > a:not(:first-child),
		nav > span:not(:first-child) {
			border-left: 1px solid #eee;
		}
	</style>
</app>





<root>
	<p>これはサンプルプロジェクトです。</p>
</root>





<test>
	<h2>DOM操作テスト</h2>
	<p>テキストエリアにリスト項目を入力してください。</p>
	<div><input type="text" onkeyup="{checkVal}" disabled="{!items.length}"></div>
	<ul>
		<li each="{v in items}">{v}</li>
	</ul>
	<p if="{!items.length}">!!!コンプリート!!!</p>

	<script type="es6">
		let self = this;
		
		self.items = [
			'hoge',
			'fuga',
			'piyo'
		];
		
		self.checkVal = function (e) {
			let value = e.target.value,
				index = self.items.indexOf(value);
			if (index === -1) return;
			
			e.target.value = '';
			self.items.splice(index, 1);
		}
	</script>

	<style type="stylus">
		:scope {
			ul {
				padding: 0;
				margin: 1em 0 0;
				list-style: none;
				> li {
					  display: inline-block;
					  padding: 0 10px;
				  }
			}
		}
	</style>
</test>




<web>
	<iframe src="http://riotjs.com/ja/" frameborder="0"></iframe>

	<style type="stylus">
		:scope {
			iframe {
				width: 100%;
				height: 500px;
			}
		}
	</style>
</web>
