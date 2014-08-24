Ext.define('Sanjay.controller.Login', { // #1 
	extend : 'Ext.app.Controller', // #2 
	views : [ 
	          'Login',
	          'authentication.CapsLockTooltip',
	          'Header',
	          'MyViewPort'
	],
	requires:[
	          'Sanjay.util.Util',
	          'Sanjay.util.SessionMonitor'
	          ],
	init : function(application) { // #4 
		this.control({ // #5 
			"login form button#submit":{
				click: this.onButtonClickSubmit
			},
			"login form button#cancel":{
				click: this.onButtonClickCancel
			},
			"login form textfield":{
				specialKey: this.onTextfieldSpecialKey
			},
			"login form textfield[name=password]":{
				keypress: this.onTextfieldKeyPress
			},
			"appheader button#logout": {
				click: this.onButtonClickLogout
			}
		});
	},
	onButtonClickSubmit: function(button, e, options){
		//formPanel.getForm().validate();
		console.log('login submit');
		var formPanel = button.up('form');
		login = button.up('login');
		user = formPanel.down('textfield[name = user]').getValue();
		pass = formPanel.down('textfield[name = password]').getValue();
		if(formPanel.getForm().isValid()){
			Ext.get(login.getEl()).mask("Autheticating.. please wait..","loading");
			Ext.Ajax.request({
				url: 'auth/login',
				params:{
					user: user,
					password: pass
				},
				failure: function(conn,response,options, eOpts){
					Ext.get(login.getEl()).unmask();
					Sanjay.util.Util.showErrorMsg(conn.responseText);
				},
				success: function(conn,response,options, eOpts){
					Ext.get(login.getEl()).unmask();
					console.log(conn);
					var result= Sanjay.util.Util.decodeJSON(conn.responseText);
					if(result.success){
						login.close();
						Ext.create('Sanjay.view.MyViewPort');
						Sanjay.util.SessionMonitor.start();
					}else{
						Sanjay.util.Util.showErrorMsg(conn.responseText);
					}
				}
			});
		}

		
	},
	onButtonClickCancel: function(button, e, options){
		console.log('login cancel');
		button.up('form').getForm().reset();

	},
	onTextfieldSpecialKey: function(field, e, options){
		if(e.getKey()==e.ENTER){
			var submitBtn = field.up('form').down('button#submit');
			submitBtn.fireEvent('click',submitBtn,e,options);
		}
	},
	onTextfieldKeyPress: function(field, e, options) {
		var charCode = e.getCharCode(); // #1
		if ((e.shiftKey && charCode >= 97 && charCode <= 122) || (!e.shiftKey && charCode >= 5 && charCode <= 90)) {
			if (this.getCapslockTooltip() == undefined) { 
				Ext.widget('capslocktooltip'); 
			}
			this.getCapslockTooltip().show();
		} else {
			if (this.getCapslockTooltip() != undefined) { 
				this.getCapslockTooltip().hide(); 
			}
		}

	},
	refs: [ 
	        {
	        	ref: 'capslockTooltip', 
	        	selector: 'capslocktooltip' 
	        } 
	      ],
	onButtonClickLogout: function(button, e, options)  {
		Ext.Ajax.request({
			url: 'auth/logout',
			success: function(conn, response, options, eOpts){
				var result = Sanjay.util.Util.decodeJSON(conn.responseText);
				if (result.success) { // #3 
					button.up('mainviewport').destroy(); // #4 
					window.location.reload(); // #5 
				} else { 
					Sanjay.util.Util.showErrorMsg(conn.responseText);
				}
				
			},
			failure: function(conn, response, options, eOpts){
				Sanjay.util.Util.showErrorMsg(conn.responseText);
			}
		});
	}    

	

});
