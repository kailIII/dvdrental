Ext.define('Sanjay.store.security.Groups', {
	extend : 'Ext.data.Store',
	requires : [ 'Sanjay.model.security.Group' ],
	model : 'Sanjay.model.security.Group',
	storeId: 'groups',
	proxy : {
		type : 'ajax',
		url : 'security/groups',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	}
});
