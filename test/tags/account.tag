<account>
	<h2>{opts.name}</h2>
	<subscription plan="{opts.plan}" show_details="true"></subscription>
	<visual if="{opts.name == 'my name'}">
		<p>your owner!</p>
	</visual>
</account>

<subscription>
	<h3>{opts.plan.name}</h3>

	<script type="es6">
		const 
			plan = opts.plan,
			show_details = opts.show_details,
			parent = this.parent;
	</script>
	
</subscription>