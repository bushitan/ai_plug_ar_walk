
var Sprite = require("Sprite.js")
var GP

/**
 * @method  开关对象对象
 */
class MarkUtils {
    constructor(options) {
        if (!options.GP) { throw Error('GP值不能为空'); }
        GP = options.GP
    }

    /**
     * 渲染mark状态
     */
    render(options) {
        var _acc_z = options.acc_z //acc_z做为属性
        //  var _mark_list = SpriteMark.render({
        //     markList: GP.data.markList,
        //     acc_z: this.acc_z
        // })
        return []
    }
}
module.exports = MarkUtils