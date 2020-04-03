Ext.Loader.setConfig({ enabled: true });
Ext.application({
  name: 'xzdwq',
  appFolder: 'app',
  autoCreateViewport: true,
  models: [],
  views: [],
  stores: [],
  controllers: [],
  defaultToken : 'home',
  quickTips: false,
  platformConfig: {
    desktop: { quickTips: true }
  },
  launch: function () {},
  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});