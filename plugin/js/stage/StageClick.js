
var StagePropertyFilter = require("StagePropertyFilter.js")
var SwitchUtils = require("SwitchUtils.js")
/**
 * @method  StagePropertyFilter过滤接口信息
 */
class StageClick extends StagePropertyFilter {
    constructor(options) {
        super(options)
    }


    /**
     * 设置mark模式
     */
    setModeMark() { 
        var s = new SwitchUtils()
        return s.onMark()
        // this.GP.setData({
        //     show:s.onMark()
        // }) 
    }


    /**
     * 设置导航模式
     */
    setModeNav() {
        var s = new SwitchUtils()
        return s.onNav()
        // this.GP.setData({
        //     show: s.onNav()
        // }) 
    }

}
module.exports = StageClick