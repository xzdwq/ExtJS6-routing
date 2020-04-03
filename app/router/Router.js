Ext.define('xzdwq.router.Router', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.router',
  views: 'xzdwq.view.Viewport',
  routes: {
    'home': {
      action: 'onHome'
    }
  },
  onHome: function() {
    this.addContentToCenterRegion(
      { xtype: 'home' }
    );
  },
  addContentToCenterRegion: function( config ) {
    var viewport = Ext.getCmp('viewport');
    var cmp = viewport.down('[xtype=' + config.xtype + ']');
    if( !cmp ) {
      viewport.removeAll();
        cmp = viewport.add( config );
    }
    return cmp;
  }
});