
var MarkUtils = require("MarkUtils.js")
var GP
/**
 * @method  开关对象对象
 */
class NavUtils extends MarkUtils{
    constructor(options) {
        super(options)
        if (!options.GP) { throw Error('GP值不能为空'); }
        GP = options.GP
    }

    /**
     * 渲染mark状态
     */
    render() {
        var _direction = GP.data.direction //acc_z做为属性
        var _acc_z = GP.data.acc_z //acc_z做为属性
        //  var _mark_list = SpriteMark.render({
        //     markList: GP.data.markList,
        //     acc_z: this.acc_z
        // })
        var _list = GP.data.focusList
        _list = this._move(_list)
        return {
            focusList: _list,
        }
    }
}
module.exports = NavUtils