Ext.define('xzdwq.router.Router', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.router',
  views: 'xzdwq.view.Viewport',
  routes: {
    'home': {
      action: 'onRoutingHome'
    },
    'structur': {
      action: 'onRoutingStructur'
    },
    'scheduleSMR': {
      action: 'onRoutingScheduleSMR'
    }
  },
  //CONTROL BOTTOM TOOLBAR
  init: function() {
    this.control({
      '#home': {
        click: this.onClickHome
      },
      '#structur': {
        click: this.onClickStuctur
      },
      '#scheduleSMR': {
        click: this.onClickSheduleSMR
      }
    });
  },
  onClickHome: function(btn, e, eOpts) {
    this.redirectTo( btn.itemId );
  },
  onClickStuctur: function(btn, e, eOpts) {
    this.redirectTo( btn.itemId );
  },
  onClickSheduleSMR: function(btn, e, eOpts) {
    this.redirectTo( btn.itemId );
  },
  //ROUTING
  onRoutingHome: function() {
    this.onReplacement(
      { xtype: 'home' }
    );
  },
  onRoutingStructur: function() {
    this.onReplacement(
      { xtype: 'structur' }
    );
  },
  onRoutingScheduleSMR: function() {
    this.onReplacement(
      { xtype: 'scheduleSMR' }
    );
  },
  //ROUTING ELEMENT PANEL
  onReplacement: function(el) {
    var itemViewport = Ext.ComponentQuery.query('#view-panel')[0];
    itemViewport.remove(itemViewport.items.items[0]);
    itemViewport.add(el);
  }
});