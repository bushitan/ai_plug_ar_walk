


/**
 * @method  地理位置基础类
 */
class Location {
    constructor(options) {
        if (!options.hasOwnProperty("latitue")) { throw Error('latitue值不能为空'); }
        if (!options.hasOwnProperty("longitude")) { throw Error('longitude值不能为空'); }
        // latitue, longitude, name, style

        return {
            latitue: options.latitue,
            longitude: options.longitude,
            // name: options.name,
            // style: options.style,
        }
    }
}

module.exports = Location