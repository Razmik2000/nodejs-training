function wordsFromString(str){
    str.split(' ').forEach(word =>{
        if(!/[^a-z,A-Z]/g.test(word)){
            console.log(word);
        }
    });

}
module.exports = wordsFromString;