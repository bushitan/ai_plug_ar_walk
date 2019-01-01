Component({

    data: {
        markList: [
            {
                id: 1, x: 10, y: 50, name: "水浒人家", distance: 500,
                latitude: 24.4972341880, longitude: 108.6384236813, compass_value: 0
            },
        ],
        show: {
            menu: true,
            navInfo: true,
            navIcon: true,
            navMark: true,
            mark: true,
            markInfo: true,
            map: true,
            mapIcon: true,
            mapCamera: true,
        },

        keywordValue: "",


        //基础数据
        // GPSFrameFre: 70, //获取GPS坐标频率(按罗盘转动次数)
        // GPSAccuray: 30, //GPS的精度
        // GPSSpeed: 5,//移动速度
        // GPSLocation: { latitue: 23.1290800000, longitude: 113.2643600000 },


        //罗盘
        // directionName: "东",
        cameraHeight: 80,
        //导航
        // navDirection: 0,

        //标记
        clickMarkID: 2,//点击mark的id
        //菜单
        // isPack: !false,
        // clickMenuID: 0,
        // menuList: [
        //     { name: "全部", id: 0 },
        //     { name: "景点", id: 1 },
        //     { name: "厕所", id: 2 },
        // ],

    },
    attached: function(){
        // 可以在这里发起网络请求获取插件的数据
        this.setData({
            list: [{
            name: '电视',
            price: 1000
            }, {
            name: '电脑',
            price: 4000
            }, {
            name: '手机',
            price: 3000
            }]
        })
    },
})