Ext.define('Sanjay.controller.Users', {
	extend : 'Ext.app.Controller',
	requires:[
	          'Sanjay.store.security.Users',
	          'Sanjay.store.security.Groups'
	          ],
	views : [ 'security.Users'],
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
