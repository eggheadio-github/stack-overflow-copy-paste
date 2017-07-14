export default object-to_arraylist

/**
 * This method will place the contents of an object into an arraylist
 *
 * @param {Object} obj - object to convert
 */
    function convertObj(obj) {
        var result = [];
        for (var key in obj) {
            result.push([key, obj[key]])
        }
        return result;
    }
    