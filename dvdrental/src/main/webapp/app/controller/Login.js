Ext.define('Sanjay.controller.Login', { // #1 
	extend : 'Ext.app.Controller', // #2 
	views : [ 
	          'Login' // #3 
	],
	init : function(application) { // #4 
		this.control({ // #5 
			"login form button#submit":{
				click: this.onButtonClickSubmit
			},
			"login form button#cancel":{
				click: this.onButtonClickCancel
			}
		});
	},
	onButtonClickSubmit: function(button, e, options){
		console.log('login submit');
		var formPanel = button.up('form');
		login = button.up('login');
		user = formPanel.down('textfield[name = user]').getValue();
		pass = formPanel.down('textfield[name = password]').getValue();
		if(formPanel.getForm().isValid()){
			Ext.Ajax.request({
				url: 'auth/login',
				params:{
					user: user,
					password: pass
				}
			});
		}

		
	},
	onButtonClickCancel: function(button, e, options){
		console.log('login cancel');
		button.up('form').getForm().reset();

	}

});
