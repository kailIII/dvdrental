Ext.define('Sanjay.model.menu.Item', {
	extend : 'Ext.data.Model',
	uses : [ 'Sanjay.model.menu.Root' ],
	idProperty : 'id',
	fields : [ {
		name : 'text'

	}, {
		name : 'iconCls'
	}, {
		name : 'className'
	}, {
		name : 'id'
	}, {
		name : 'parent_id'
	} ],
	reference : {
		model : 'Sanjay.model.menu.Root',
		foreignKey : 'parent_id'
	}
});
