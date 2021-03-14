function currentTime() {
    const d = new Date();
    console.log('Hours ' + d.getHours());
    console.log( 'Minutes ' + d.getMinutes());
    console.log('Seconds ' + d.getSeconds());
    console.log('Milliseconds ' + d.getMilliseconds());
}

module.exports = currentTime;