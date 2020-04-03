Ext.define('xzdwq.view.home.Home', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.home',
  requires: [
    'xzdwq.view.home.HomeController',
    'xzdwq.view.home.HomeModel'
  ],
  controller: 'home',
  viewModel: 'home',
  bind: {
      title: '{title}'
  },
  bodyPadding: 10,
  html: 'This is our main content area :)'
});