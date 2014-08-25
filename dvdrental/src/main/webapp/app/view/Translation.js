Ext.define('Sanjay.view.Translation', {
	extend : 'Ext.button.Split',
	alias : 'widget.translation', 
	text: 'Choose Language',
	menu: {
		items : [ {
			xtype : 'menuitem', // #4
			iconCls : 'en',
			text : 'English'
				
				
		}, {
			xtype : 'menuitem', // #5
			iconCls : 'es',
			text : 'Español'
		}, {
			xtype : 'menuitem', // #6
			iconCls : 'pt_BR',
			text : 'Português'
		} ]
	}

});
