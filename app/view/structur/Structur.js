Ext.define('xzdwq.view.structur.Structur', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.structur',
  requires: [
    'xzdwq.view.structur.StructurController'
  ],
  controller: 'structur',
  bodyPadding: 10,
  html: 'Страница структуры портала'
});