let kode ="BINTO1064U.LA_E21"
console.log(/\w/.test(kode));
console.log(/\d/.test(kode));
console.log(/^BINT/.test(kode));
console.log(/_/.exec(kode).index);
console.log(kode.match("BINTO1064"));

var regex = /(\w{4})(O)(.*)/;
//kode = kode.replace(regex, "$1$3");
//kode = kode.replace(/U.LA_E21/, "")
console.log(kode);

kode = kode.replace(/E21/, "F22");
console.log(kode)