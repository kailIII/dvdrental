
Ext.application({
	
    name   : 'Sanjay',

    launch : function() {

    	Ext.tip.QuickTipManager.init();
    	var task = new Ext.util.DelayedTask(function(){
    	  splashscreen.fadeOut({
    		  duration: 500,
    		  remove:true
    	  });
    	
    	  splashscreen.next().fadeOut({
    		  duration: 500,
    		  remove:true,
    		  listeners: { 
    			  afteranimate: function( el, startTime, eOpts ){ 
    				  Ext.widget('login'); // #1 
    				  }
    			  }
    	  });
    	  console.log("Launch");
      });
      task.delay(1000);
      

    },
    init : function(){
    	splashscreen=Ext.getBody().mask('Loading application','splashscreen');
    	splashscreen.addCls('splashscreen');
    	Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0],{
    		cls: 'x-splash-icon'
    	});
    },

	controllers: [
		'Login',
		'TranslationManager',
		'Menu',
		'Users'
	],
    splashscreen: {}
});