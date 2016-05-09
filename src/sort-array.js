export default sortArray

/**
 * Original Source: http://stackoverflow.com/a/5476833/3316157
 *
 * This method will sort an array of values
 *
 * @param {Array} sortArray - the array to be sorted
 * @param {String} dir - the sort direction ("asc" or "desc")
 * @return {Array} - the sorted array
 */
function sortArray(sortArray, dir) {
    if (dir == "asc") {
        sortArray.sort(function(a, b) {
            return a.toLowerCase() > b.toLowerCase()
        });
    } else {
        sortArray.sort(function(a, b) {
            return b.toLowerCase() > a.toLowerCase()
        });
    }
    return sortArray;
}