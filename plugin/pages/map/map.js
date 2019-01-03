// pages/map/map.js

var ARUtils = require("../../js/ar/ARUtils.js")
var arUtils
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //基础数据
        GPSFrameFre: 70, //获取GPS坐标频率(按罗盘转动次数)
        GPSAccuray: 30, //GPS的精度
        GPSSpeed: 5,//移动速度
        GPSLocation: { latitue: 23.1290800000, longitude: 113.2643600000 },

        keyword:"酒店",
        isSearch:true,
        pointList:[],
        accZ:1

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
        arUtils = new ARUtils({ GP:this })
        setInterval(function(){
            GP.setData({
                accZ:parseInt(Math.random() * 300)
            })
            
        },1000)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
        this.getLocation()

        this.onInit() //测试类
    },

    /**
     * 更新经纬度
     */
    getLocation(){
        wx.getLocation({
            type: 'gcj02',
            success(res) {
                GP.setData({
                    GPSLocation: { latitue: res.latitude, longitude: res.longitude} ,
                    GPSAccuracy: res.accuracy,
                    GPSSpeed: res.speed,
                })

                GP.onInit()

            }
        })
    },


    /**
     * 初始化工具
     */
    onInit() {
        if (GP.data.isSearch){
            GP.setData({
                isSearch:false
            })
            arUtils.search({
                "keyword": GP.data.keyword,
                "GPSLocation": GP.data.GPSLocation
            })
        }


    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})