Ext.define('Sanjay.controller.Login', { // #1 
	extend : 'Ext.app.Controller', // #2 
	views : [ 
	          'Login',
	          'authentication.CapsLockTooltip',
	          'Header',
	          'MyViewPort'
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
					Ext.Msg.show({
						title: 'Error!',
						msg: conn.responseText,
						icon: Ext.Msg.ERROR,
						buttons: Ext.Msg.OK
					});
				},
				success: function(conn,response,options, eOpts){
					Ext.get(login.getEl()).unmask();
					console.log(conn);
					var result=Ext.JSON.decode(conn.responseText, true);
					if(!result){
						result={};
						result.success=false;
						result.msg=conn.responseText;
					}
					if(result.success){
						login.close();
						Ext.create('Sanjay.view.MyViewPort');
					}else{
						Ext.Msg.show({
							title: 'Fail!',
							msg: result.msg,
							icon: Ext.Msg.ERROR,
							buttons: Ext.Msg.OK
						});
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
	      ]

	

});
