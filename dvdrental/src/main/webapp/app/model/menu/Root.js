Ext.define('Sanjay.model.menu.Root', {
	extend : 'Ext.data.Model',
	uses : [ 'Sanjay.model.menu.Item' ],
	idProperty : 'id',
	fields : [ {
		name : 'text'
	}, {
		name : 'iconCls'
	}, {
		name : 'id'

	} ],
	hasMany : {
		model : 'Sanjay.model.menu.Item',
		foreignKey : 'parent_id',
		name : 'items'
	}
});
