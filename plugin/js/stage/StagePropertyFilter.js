var StageBase = require("StageBase.js")
var Sprite = require("Sprite.js")
var SpriteMark = require("SpriteMark.js")
/**
 * @method  StagePropertyFilter过滤接口信息
 */
var Utils = {

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

}
class StagePropertyFilter extends StageBase{
    constructor(options) {
        super(options)
        console.log("StagePropertyFilter")
        // if (!options.GP) { throw Error('GP值不能为空'); }
    }
    filterMarkList(options = {}) {
        if (!options.list) {
            throw Error('list值不能为空');
        }
        var _list = options.list
        var _list = Utils.getMarkList(_list)
        return _list
    }

}
module.exports = StagePropertyFilter