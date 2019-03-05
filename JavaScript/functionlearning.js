function avg(...args){
    for(let value of args){
        console.log(value);
    }
}

avg(1,2,3,4);

var avg = function() {
    for(let value of arguments){
        console.log(value)
    }
}

avg(1,2,3,5);

/*
var charsInBody = (function counter(ele){
    if (ele.nodeType == 3) {
        return ele.nodeValue.length
    } //TEXT_NODE
    var count=0;
    for (let i=0, child; child = ele.childNodes[i]; i++){
        count += counter(child);
    }
    return count;
})(null);
*/
function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function () {
            return this.first + ' ' + this.last;
        }
    };
}
function printFillName(person) {
    return person['first'] + ' ' + person['last'];
}

var prav = makePerson('praveen', 'chappidi');
console.log(printFillName(prav));
console.log(prav.fullName())

