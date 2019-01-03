var StageBase = require("StageBase.js")
var Sprite = require("Sprite.js")
var SpriteMark = require("SpriteMark.js")
/**
 * @method  StagePropertyFilter过滤接口信息
 */
var Utils = {

    /**
     * 获取marklist列表
     */
    getMarkList(list) {
        var _org_list = list
        var _list = []
        for (var i = 0; i < _org_list.length; i++) {
            var _m = _org_list[i]
            var _sprite = new SpriteMark(_m) //创建mark精灵
            _list.push(_sprite)
        }
        return _list
    },

    /**
    * 罗盘抖动矫正
    */
    getDirectionShake(direction) {
        var abs = parseInt(direction / 4) * 4
        return parseInt(abs)
    },
     /**
     * 罗盘逆转
     */
    getDirectionReverse(direction, acc_z) {
        if (acc_z <= 0)
            return parseInt(direction)
        else {
            if (direction >= 180) {
                direction = direction - 180
                return parseInt(direction)
            }
            else {
                direction = direction + 180
                return parseInt(direction)
            }
        }
    },


}
class StagePropertyFilter extends StageBase{
    constructor(options) {
        super(options)
        // if (!options.GP) { throw Error('GP值不能为空'); }
    }

    /**
     * @method 过滤marklist数组
     */
    filterMarkList(options = {}) {
        if (!options.hasOwnProperty('list')) {throw Error('list值不能为空')}    
        var _list = options.list
        var _list = Utils.getMarkList(_list)
        return _list
    }

    /**
     * @method 罗盘方向
     */
    filterDirection(options = {}) {
        if (!options.hasOwnProperty("direction")) { throw Error('direction值不能为空') }
        if (!options.hasOwnProperty("acc_z")) { throw Error('acc_z值不能为空') }

        var _d = options.direction
        var _acc_z = options.acc_z
        _d = Utils.getDirectionShake(_d)
        console.log()
        _d = Utils.getDirectionReverse(_d, _acc_z)
        return _d
    }

    /**
    * @method 过滤nav导航数组
    */
    filterNavList(options = {}) {
        if (!options.list) { throw Error('list值不能为空') }
        var _list = options.list
        var _list = Utils.getMarkList(_list)
        return _list
    }


}
module.exports = StagePropertyFilter