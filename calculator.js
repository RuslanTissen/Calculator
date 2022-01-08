// function calculator(x, operator, y) {
//     let result = 0
//     if (operator == `+`) {
//         return console.log(result = x + y);
//     }
//     if (operator == `-`) {
//         return console.log(result = x - y);
//     }
//     if (operator == `*`) {
//         return console.log(result = x * y);
//     }
//     if (operator == `/`) {
//         if (x == 0) {
//             return console.log(false);
//         }
//         return console.log(result = x / y);
//     }
//     if (operator ==`power`){
//         return console.log(result = Math.pow(x,y));
//     }
//     if(operator== `sqrt`){
//         return console.log(Math.sqrt(x));
//     }
//     if(operator == `reminder`){
//         result = x%y
//                 if (result  == 0){
//                     return console.log(false);
//                 }return console.log(result);
//     }
//     if(operator == `percentage`){
//         return console.log(result = (x/(y/100))+`%`);
//     }
//     if(typeof operator == `number`){
//         return console.log(result = (x*operator)/y);
//     }
// }
// calculator(2,`+`,3);
// calculator(6.5,`-`,8)
// calculator(6.5,`*`,8)
// calculator(10, `/`, 8)
// calculator(6,`power`,6)
// calculator(6,`sqrt`)
// calculator(6, `reminder`, 6)
// calculator(6, `percentage`, 8)
// calculator(6, 10, 8)

// Class version:

class M {
    constructor(x, operator, y) {
        this.x = x;
        this.operator = operator;
        this.y = y;
        this.result = 0;
    }

    pi() {
        return Math.PI
    }
    e() {
        return Math.E
    }
    ratio() {
        return this.result = ((this.x * this.operator) / this.y);
    }
    per() {
        return this.result = (this.x / (this.y / 100)) + `%`
    }
    sum() {
        return this.result = this.x + this.y
    }
    sub() {
        return this.result = this.x - this.y
    }
    mul() {
        return this.result = this.x * this.y
    }
    div(a, b) {
        this.result = a / b
        if (this.result !== 0) {
            return this.result
        }
        return false
    }
    mod(a, b) {
        this.result = a % b;
        if (this.result !== 0) {
            return this.result
        }
        return false
    }
    el (a,b){
        return this.result= Math.pow(a,b)
    }
    sq (a){
        return this.result= Math.sqrt(a)
    }
}
let p = new M(2, 10, 4)
console.log(p.pi());
console.log(p.e());
console.log(p.ratio());
console.log(p.per());
console.log(p.sum());
console.log(p.sub());
console.log(p.mul());
console.log(p.div(15, 10));
console.log(p.mod(15, 10));
console.log(p.el(5, 5));
console.log(p.sq(15));