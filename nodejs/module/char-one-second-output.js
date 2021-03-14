function charOneSecondOutput(str) {
    let a = 0
    const int = setInterval(function () {
        if (a >= str.length - 1) {
            clearInterval(int);
        }
        console.log(str[a]);
        a++
    }, 1000);

}
module.exports = charOneSecondOutput;