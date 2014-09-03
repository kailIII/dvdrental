Ext.define('Sanjay.controller.Users', {
	extend : 'Ext.app.Controller',
	requires:[
	          'Sanjay.store.security.Users',
	          'Sanjay.store.security.Groups'
	          ],
	stores : [ 'security.Users', 'security.Groups' ],
	models : [ 'security.User', 'security.Group' ],
	views : [ 'security.Users','security.UsersList' ],
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
