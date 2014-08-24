Ext.define(
				'Sanjay.view.MyViewPort',
				{
					extend : 'Ext.container.Viewport', // #1
					alias : 'widget.mainviewport', // #2
					requires : ['Sanjay.view.Header' // #3
					],

					layout : {
						type : 'border' // #4
					},
					items : [
							{
								xtype : 'container', // #5
								width : 185,
								collapsible : true,
								region : 'west',
								style : 'background-color: #8FB488;'
							},
							{
								xtype : 'appheader', // #6
								region : 'north'
							},
							{
								xtype : 'container', // #7

								region : 'center'
							},
							{
								xtype : 'container', // #8
								region : 'south',
								height : 30,
								style : 'border-top: 1px solid #4c72a4;',
								html : '<div id="titleHeader"> <center> <span style ="font-size: 10px;">ExtJS 5 with Spring 4 showcase by Sanjay Singh</span> </center> </div>'
							} ]
				});
