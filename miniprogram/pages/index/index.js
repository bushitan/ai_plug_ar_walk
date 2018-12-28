var plugin = requirePlugin("myPlugin")
Page({
    data:{
    },
    onLoad: function() {
    
        console.log(plugin.getData())
        //   wx.navigateTo({
        //       url: 'plugin-private://wxb5f4203d6bc1d799/pages/map/map',
        //   })
    }
})