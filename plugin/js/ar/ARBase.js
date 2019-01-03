

/**
 * @method  AR的基础类
 */
class ARBase {
    constructor(options) {
        // if (!options.GP) { throw Error('GP值不能为空'); }
    }

    /**
     * @methon 把request获取的mark，计算与gps的方向角
     * 
     */
    addCompassAngle(options) {
        if (!options.hasOwnProperty("list")) { throw Error('list值不能为空'); }
        if (!options.hasOwnProperty("location")) { throw Error('location值不能为空'); }

        var _list = options.list
        var _location = options.location
    }
}

module.exports = ARBase