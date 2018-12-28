Component({

    data: {
        markList: [
            {
            id: 1, x: 10, y: 50, name: "水浒人家", distance: 500,
            latitude: 24.4972341880, longitude: 108.6384236813, compass_value: 0
            },
            {
                id: 1, x: 10, y: 50, name: "广西民族影城", distance: 500,
                latitude: 22.8122400000, longitude: 108.3995300000, compass_value: 0
            },
            {
                id: 1, x: 10, y: 50, name: "邮政小区", distance: 500,
                latitude: 22.8194235482, longitude: 108.3917355537, compass_value: 0
            },
            {
                id: 1, x: 10, y: 50, name: "水电大厦", distance: 500,
                latitude: 22.8134306166, longitude: 108.3889245987, compass_value: 0
            },
            {
                id: 1, x: 10, y: 50, name: "泰迪咖啡(航洋店)", distance: 500,
                latitude: 22.8147953668, longitude: 108.3848476410, compass_value: 0
            },
            {
                id: 1, x: 10, y: 50, name: "桃源山庄", distance: 500,
                latitude: 22.8099692323, longitude: 108.3908343315, compass_value: 0
            },
        ],
        // show: {
        //     menu: false,
        //     navInfo: false,
        //     navIcon: false,
        //     navMark: false,
        //     mark: false,
        //     markInfo: false,
        //     map: false,
        //     mapIcon: false,
        //     mapCamera: false,

        // },

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
      GPSFrameFre: 70, //获取GPS坐标频率(按罗盘转动次数)
      GPSAccuray: 30, //GPS的精度
      GPSSpeed: 5,//移动速度
      GPSLocation: { latitue: 23.1290800000, longitude: 113.2643600000 },


      //罗盘
      directionName: "东",
      cameraHeight: 100,
      //导航
      navDirection: 0,

      //标记
      clickMarkID: 2,//点击mark的id
      //菜单
      isPack: !false,
      clickMenuID: 0,
      menuList: [
          { name: "全部", id: 0 },
          { name: "景点", id: 1 },
          { name: "厕所", id: 2 },
      ],

      //显示控制
      show: {},
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