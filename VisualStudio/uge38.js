let matchstr = /\d+/.exec("one two 100");
console.log(matchstr);

var course = "BINTV1064.LA_E21"
console.log(/^BINT/.test(course));
console.log(/^[A-Z]{4}V/.test(course));
console.log(/\w{4}v/.test(course));