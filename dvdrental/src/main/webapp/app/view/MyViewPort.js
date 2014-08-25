Ext.define(
				'Sanjay.view.MyViewPort',
				{
					extend : 'Ext.container.Viewport', // #1
					alias : 'widget.mainviewport', // #2
					requires : [
					            'Sanjay.view.Header',
					            'Sanjay.view.MainPanel',
					            'Sanjay.view.menu.Accordion',
					            'Sanjay.view.menu.Item'
					],

					layout : {
						type : 'border' // #4
					},
					items : [
							{
								xtype : 'mainmenu', // #5
								width : 185,
								collapsible : true,
								region : 'west',
							},
							{
								xtype : 'appheader', // #6
								region : 'north'
							},
							{
								xtype : 'mainpanel', // #7

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
