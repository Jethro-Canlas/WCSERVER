module.exports = function (val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
    this.sum = function () {
        return val1 + val2;
    }
}