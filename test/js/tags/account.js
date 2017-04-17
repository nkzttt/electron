riot.tag2('account', '<h2>{opts.name}</h2> <subscription plan="{opts.plan}" show_details="true"></subscription> <visual if="{opts.name == \'my name\'}"> <p>your owner!</p> </visual>', '', '', function(opts) {
});

riot.tag2('subscription', '<h3>{opts.plan.name}</h3>', '', '', function(opts) {
"use strict";

var plan = opts.plan,
    show_details = opts.show_details,
    parent = this.parent;
});