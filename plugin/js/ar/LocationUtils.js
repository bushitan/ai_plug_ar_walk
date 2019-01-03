
var Location = require("Location.js")

/**
 * @method  地理位置工具类
 */
class LocationUtils {
    constructor(options) {
        // if (!options.hasOwnProperty("latitue")) { throw Error('latitue值不能为空'); }
        // if (!options.hasOwnProperty("longitude")) { throw Error('longitude值不能为空'); }
        // latitue, longitude, name, style
    }

    /**
     * @method 计算两点间距离
     * @param
     *      {Location} A 点，
     *      {Location} B 点，
     * @return
     *      {Number} s 两点距离
     */
    getDistanceAB(options) {
        if (!options.hasOwnProperty("locationA")) { throw Error('A值不能为空'); }
        if (!options.hasOwnProperty("locationB")) { throw Error('B值不能为空'); }
        var A = options.locationA
        var B = options.locationB
        const EARTH_RADIUS = 6378137.0;
        var radLat1 = (A.latitue * Math.PI / 180.0);
        var radLat2 = (B.latitue * Math.PI / 180.0);
        var a = radLat1 - radLat2;
        var b = (A.longitude - B.longitude) * Math.PI / 180.0;
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLat1) * Math.cos(radLat2) *
            Math.pow(Math.sin(b / 2), 2)));
        s = s * EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return parseInt(s);
    }


    /**
     * @method 两点所连直线的罗盘方向角
     * @param
     *      {Location} A 点，
     *      {Location} B 点，
     * @return
     *      {Number} angle 方向角
     */
    getCompassDirectionSelfToFocus(options) {
        if (!options.hasOwnProperty("locationSelf")) { throw Error('locationSelf值不能为空'); }
        if (!options.hasOwnProperty("locationFocus")) { throw Error('locationFocus值不能为空'); }
        var A = options.locationSelf
        var B = options.locationFocus
        var D = new Location({ latitue: A.latitue, longitude:B.longitude})
        // var D = Location.create(A.latitue, B.longitude) //水平辅助点
        var _distance = this.getDistanceAB({ locationA: A,locationB: B})
        var _duan = this.getDistanceAB({ locationA: A, locationB: D })
        var value = 180 * Math.asin(_duan / _distance) / Math.PI
        //TODO 四个象限
        return parseInt(value)
    }

    /**
     * @method 两个方向的夹角值
     * @for CompassUtils
     * @param
     *      {Number} angleA   手机本身的罗盘度数
     *      {Number} angleB   手机与目标的罗盘度数
     * @return
     *      {Number} value 夹角度数
     */
    getAngleAB(options) {
        if (!options.hasOwnProperty("angleA")) { throw Error('angleA值不能为空'); }
        if (!options.hasOwnProperty("angleB")) { throw Error('angleB值不能为空'); }
        var dir_phone = options.angleA
        var dir_nav = options.angleB
        var value, side
        if (dir_phone >= dir_nav) { //手机 > 目标
            if (dir_phone - dir_nav <= 180) {//手机 - 目标 <= 180
                value = dir_nav - dir_phone
            } else { //手机 - 目标 > 180
                value = 359 - dir_phone + dir_nav
            }
        }
        else {//目标 > 手机
            if (dir_nav - dir_phone <= 180) { // 目标 - 手机 <= 180
                value = dir_nav - dir_phone
            } else {// 目标 - 手机 > 180
                value = 0 - (359 - dir_nav + dir_phone)
            }
        }
        return value
        // return Angle.create(value, side)
    }


    /**
     * @method 获取手机与目标点的夹角
     * @param
     *      {String} direction 手机的方向数值
     *      {Location} locationSelf 手机GPS经纬度
     *      {Location} locationFocus 目标点经纬度
     * @return
     *      {Number} value 手机与目标点方向加的夹角
     */
    getAngleSelfToFocus(options) {
        if (!options.hasOwnProperty("direction")) { throw Error('direction值不能为空'); }
        if (!options.hasOwnProperty("locationSelf")) { throw Error('locationSelf值不能为空'); }
        if (!options.hasOwnProperty("locationFocus")) { throw Error('locationFocus值不能为空'); }

        var _direction = options.direction
        var _loc_self = options.locationSelf
        var _loc_focus = options.locationFocus//目标点的location
        var _agnle_focus = this.getCompassDirectionSelfToFocus({
            locationSelf: _loc_self,
            locationFocus: _loc_focus
        })
        var value = this.getAngleAB({
            angleA: _direction,
            angleB: _agnle_focus,
        })
        return value
    }

}


module.exports = LocationUtils