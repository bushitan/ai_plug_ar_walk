
var ARBase = require("ARBase.js")
var RouteUtils = require("RouteUtils.js")
var routeUtils = new RouteUtils({ start: false })
var GP 
/**
 * @method  AR的基础类
 */
class ARRoute extends ARBase {
    constructor(options) {
        super(options)
        if (!options.GP) { throw Error('GP值不能为空'); }

        GP = options.GP
    }

    _setRoute(){
        routeUtils = new RouteUtils({
            start: true,
        })
    }


    checkNav() {
        console.log(routeUtils)
    }

}

module.exports = ARRoute