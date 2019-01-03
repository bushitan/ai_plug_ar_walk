var plugin = requirePlugin("myPlugin")
Page({
    data:{
    },
    onLoad: function () {
        wx.navigateTo({
            // url: 'plugin-private://wxb5f4203d6bc1d799/pages/test/test',
            url: 'plugin-private://wxb5f4203d6bc1d799/pages/map/map',
          })
    }
})