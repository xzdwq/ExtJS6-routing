Ext.define('xzdwq.view.Viewport', {
  extend:'Ext.container.Viewport',
  layout: 'fit',
  requires: [
    'xzdwq.router.Router',
    'xzdwq.view.home.Home',
    'xzdwq.view.structur.Structur'
  ],
  controller: 'router',
  items: [
    {
      xtype: 'panel',
      itemId: 'view-panel',
      region: 'south',
      items: [{ xtype: 'component', id: 'replacement' }],
      dockedItems: [{
        xtype: 'toolbar',
        style: { background: '#025b80' },
        dock: 'bottom',
        items: [
          {
            text: 'Структура',
            itemId: 'structur'
          }
        ]
      }]
    }
  ]
});