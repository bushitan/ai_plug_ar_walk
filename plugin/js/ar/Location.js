

/**
 * @method  地理位置基础类
 */
class Location {
    constructor(options) {
        if (!options.hasOwnProperty("latitue")) { throw Error('latitue值不能为空'); }
        if (!options.hasOwnProperty("longitude")) { throw Error('longitude值不能为空'); }
        // latitue, longitude, name, style
        this.latitue = options.latitue
        this.longitude = options.longitude
        // return {
        //     latitue: this.latitue,
        //     longitude: this.longitude,
        //     // name: options.name,
        //     // style: options.style,
        // }
    }
    getString(){
        return String(this.latitue) + "," + String(this.longitude)
    }
}

module.exports = Location