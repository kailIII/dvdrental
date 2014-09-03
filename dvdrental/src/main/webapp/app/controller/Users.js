Ext.define('Sanjay.controller.security.Users', {
	extend : 'Ext.app.Controller',
	requires : [ 'Sanjay.store.security.Users' ],
	views : [ 'security.Users' ],
	init : function(application) {
		this.control({
			"userslist" : {
				render : this.onRender
			}
		});
	},

	onRender : function(component, options) {
		component.getStore().load();
	}
});
