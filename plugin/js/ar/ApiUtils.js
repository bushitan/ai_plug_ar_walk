
var QQMapWX = require('wexin/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var KEY = "5KFBZ-OSU6F-SUPJ5-NJPMP-JYMU3-YCBZJ"
qqmapsdk = new QQMapWX({
    key: KEY,
});


/**
 * @method  AR的工具类
 */
class ApiUtils {
    constructor(options) {
        // if (!options.GP) { throw Error('GP值不能为空'); }
    }



    /**
     * @method 查询腾讯导航路径
     * @for ApiUtils
     * @param
     *      {string} from_str 开始点经纬度
     *      {string} to_str 结束点经纬度
     */
    getMarkList(key, location_str, callback) {
        console.log(key, location_str, callback)
        // callback()
        // return 

        qqmapsdk.search({
            keyword: key,
            location: location_str,
            // location: "23.1290800000, 113.2643600000",
            success: function (res) {
                // console.log(res);
                callback(res)
            },
            fail: function (res) {
                console.log(res);
            },
        })
    }

    /**
     * @method 查询腾讯导航路径
     * @for ApiUtils
     * @param
     *      {string} from_str 开始点经纬度
     *      {string} to_str 结束点经纬度
     */        
    getRoute(from_str, to_str, callback) {

        // 步行导航
        var opt = {
            //WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
            url: 'https://apis.map.qq.com/ws/direction/v1/walking/'
                + '?from=' + from_str
                + '&to=' + to_str
                + '&key=' + KEY,
            method: 'GET',
            dataType: 'json',
            //请求成功回调
            success: function (res) {
                var ret = res.data
                if (ret.status != 0) return; //服务异常处理
                callback(ret.result.routes[0])
                console.log(ret.result.routes[0])
                return

                var coors = ret.result.routes[0].polyline, pl = [];
                //坐标解压（返回的点串坐标，通过前向差分进行压缩）
                var kr = 1000000;
                for (var i = 2; i < coors.length; i++) {
                    coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
                }
                //将解压后的坐标放入点串数组pl中
                for (var i = 0; i < coors.length; i += 2) {
                    pl.push({ latitude: coors[i], longitude: coors[i + 1] })
                }
            }
        };
        wx.request(opt);
    }

}
module.exports = ApiUtils