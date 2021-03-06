Ext.define('xzdwq.view.Viewport', {
  extend:'Ext.container.Viewport',
  layout: 'fit',
  requires: [
    'xzdwq.router.Router',
    'xzdwq.view.home.Home',
    'xzdwq.view.structur.Structur',
    'xzdwq.view.scheduleSMR.ScheduleSMR'
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
            icon: 'img/home.gif',
            itemId: 'home',
            style: { background: '#025b80' }
          },
          {
            text: 'Структура',
            itemId: 'structur',
            cls: 'custom-button',
            style: { background: '#025b80' }
          },
          {
            text: 'График СМР',
            itemId: 'scheduleSMR',
            cls: 'custom-button',
            style: { background: '#025b80' }
          }
        ]
      }]
    }
  ]
});