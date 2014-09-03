Ext.define('Sanjay.view.menu.Accordion', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mainmenu',
	width : 300,
	layout : {
		type : 'accordion'
	},
	collapsible : true,
	hideCollapseTool : false,
	iconCls : 'sitemap',
	title : 'Menu'
});
