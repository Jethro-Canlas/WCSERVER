module.exports = function (user) {
        this.user = user;
        this.greeting = function () {
            return "Hello, " + this.user;
        }
}