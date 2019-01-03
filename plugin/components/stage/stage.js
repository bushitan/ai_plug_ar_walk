


var StageUtils = require("../../js/stage/StageUtils.js")
var stageUtils
var GP 
// var SpriteMark = require("../../js/stage/SpriteMark.js")

var MODE_MARK = "mark"
var MODE_NAV = "nav"
Component({
    properties: {
        list: {
            type: Array,
            value: [],
            observer(newVal, oldVal) {
                if(newVal)
                    this.setData({
                        markList: stageUtils.filterMarkList({ list: newVal })
                    })
            }
        },
        
        direction: {
            type: Number,
            value: 0,
            observer(newVal, oldVal) {

                //过滤罗盘方向
                newVal = stageUtils.filterDirection({
                    direction: newVal,
                    acc_z: this.data.acc_z
                })

                //渲染
                if (this.data.mode == MODE_MARK) //渲染mark
                    stageUtils.rendMark()
                else  //渲染导航
                {
                    stageUtils.rendNav()

                }
                return newVal
            }
        },
        acc_z: {
            type: Number,
            value: 0,
        },

        /**模式 */
        mode:{
            type: String,
            value: MODE_MARK,
            observer(newVal, oldVal) {
                if (newVal == MODE_MARK) //渲染mark
                    this.setData({ show: stageUtils.setModeMark()})                        
                else
                    this.setData({ show: stageUtils.setModeNav() })
            }
        },

        /**下一点 */
        next: {
            type: Object,
            value: {},
            observer(newVal, oldVal) { }
        },

        /**
         * 结束点 
        */
        focus: {
            type: Object,
            value: {},
            observer(newVal, oldVal) {
                if (newVal)
                    this.setData({ //
                        focusList: stageUtils.filterMarkList({ list: newVal })
                    })
             }
        },


    },
    data: {
        markList: [], //mark数组
        focusList:[], //终点数组
        show: {},

        keywordValue: "",


        //基础数据
        // GPSFrameFre: 70, //获取GPS坐标频率(按罗盘转动次数)
        // GPSAccuray: 30, //GPS的精度
        // GPSSpeed: 5,//移动速度
        // GPSLocation: { latitue: 23.1290800000, longitude: 113.2643600000 },


        //罗盘
        // directionName: "东",
        cameraHeight: 100,
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
    ready() {
        GP = this
        stageUtils = new StageUtils({GP:this})
        stageUtils.setModeMark()
    },
    // attached: function(){
    //     // 可以在这里发起网络请求获取插件的数据
    //     // this.setData({
    //     //     list: [{
    //     //     name: '电视',
    //     //     price: 1000
    //     //     }, {
    //     //     name: '电脑',
    //     //     price: 4000
    //     //     }, {
    //     //     name: '手机',
    //     //     price: 3000
    //     //     }]
    //     // })
    // },
    method:{
        // render(options){
        //     var _acc_z = options.acc_z
        //     SpriteMark.render({
        //         markList: this.data.markList, 
        //         acc_z: _acc_z
        //     })
        // }
    },
})