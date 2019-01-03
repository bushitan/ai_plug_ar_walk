
var StageClick = require("StagePropertyFilter.js")
var MarkUtils = require("MarkUtils.js")
var markUtils 
var NavUtils = require("NavUtils.js")
var navUtils 

var GP
/**
 * @method  Stage工具类
 */
class StageUtils extends StageClick {
    constructor(options) {
        super(options)
        if (!options.GP) { throw Error('GP值不能为空'); }
        GP = options.GP
        markUtils = new MarkUtils({ GP: GP })
        navUtils = new NavUtils({ GP: GP })
    }    
    /**
     * 渲染mark状态
     */
    rendMark(options) {
        var _mark_list = markUtils.render(options)
        GP.setData({
            markList: _mark_list
        })
    }

    /**
     * 渲染导航状态
     */
    rendNav(options) {
        var _nav = navUtils.render(options)
        GP.setData({
            nav: _nav
        })
    }

}
module.exports = StageUtils