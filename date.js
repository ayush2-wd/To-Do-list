module.exports.getDate = getDate;
function getDate(){
var today= new Date();
var option = {
    weekday : "long",
    day : "numeric",
    month : "long"
};
var day = today.toLocaleDateString("en-US",option);
return day;
}
module.exports.getDay= getDay;
function getDay(){
    var today= new Date();
    var option = {
        weekday : "long"
    };
    var day = today.toLocaleDateString("en-US",option);
    return day;
    }