Ext.define('Sanjay.view.Login', { // #1 
	extend : 'Ext.window.Window', // #2 
	alias : 'widget.login', // #3 
	autoShow : true, // #4 
	height : 170, // #5 
	width : 360, // #6 
	layout : {
		type : 'fit' // #7 
	},
	iconCls : 'key', // #8 
	title : "Login", // #9 
	closeAction : 'hide', // #10 
	closable : false, // #11 
	items: [
	        {
	        	xtype:'form',
	        	frame: false,
	        	bodyPadding: 15,
	        	defaults: {
	        		xtype: 'textfield',
	        		anchor: '100%',
	        		labelWidth:60,
	        		allowBlanks: false,
	        		vtype: 'alphanum',
	        		minLength: 3,
	        		msgTarget: 'under'
	        	},
	        	items: [
	        	        {
	        	        	name: 'user',
	        	        	fieldLabel: "User",
	        	        	maxLength: 25
	        	        },
	        	        {
		        	        inputType: 'password',
		        	        name: 'password',
		        	        fieldLabel: "Password",
		        	        enableKeyEvents: true,
		        	        id: 'password',
		        	        maxLength: 15
	        	        }
	        	        ],
    	        dockedItems: [
    	                      {
    	                    	  xtype: 'toolbar',
    	                    	  dock: 'bottom',
    	                    	  items: [
    	                    	          {
    	                    	        	  xtype: 'tbfill',
    	                    	        	  
    	                    	          },
    	                    	          {
    	                    	        	 xtype: 'button',
    	                    	        	 itemId: 'cancel',
    	                    	        	 iconCls: 'cancel',
    	                    	        	 text: 'Cancel'
    	                    	          },
    	                    	          {
    	                    	        	  xtype: 'button',
    	                    	        	  itemId: 'submit',
    	                    	        	  formBind: true,
    	                    	        	  iconCls: 'key-go',
    	                    	        	  text: "Submit"
    	                    	          }
    	                    	          ]
    	                    	  
    	                      }
    	                      ]            
	        }
	        
	        ]
	          
});
