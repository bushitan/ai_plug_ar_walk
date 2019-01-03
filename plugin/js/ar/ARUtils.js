
var ARBase = require("ARBase.js")

var ApiUtils = require("ApiUtils.js")
var LocationUtils = require("LocationUtils.js")
var Location = require("Location.js")
var apiUtils = new ApiUtils()

var GP 
var that
/**
 * @method  AR的工具类
 */
class ARUtils extends ARBase  {

    constructor(options = {}) {
        if (!options.GP) { throw Error('GP值不能为空'); }

        super(options)
        GP = options.GP
    }

    search(options = {}) {
        var _keyword = options.keyword || "车站"
        var _gps_location = options.GPSLocation || { latitue: 23.1290800000, longitude: 113.2643600000 }
        
        var _location = new Location(_gps_location)
        apiUtils.getMarkList(_keyword, _location.getString(), this.searchCallback)
    }
    searchCallback(res){
        var _list = GP.addCompassAngle({
            list: res.data,
            location: GP.data.GPSLocation,
        })
        GP.setData({
            pointList: _list
        })
    }
}
module.exports = ARUtils