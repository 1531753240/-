//  var pitaya = {}
// // var pitaya = Object.creat()
 
// var pitaya2={
//     name:"火龙果",
//     price:15,
//     origin:"海南",
//     weight:1,
//     nut:{
//         name:"火龙果 nut"
//     },
//     printName:function(){
//         console.log(this.name)
//     }
// }
// pitaya2.printName();
// pitaya2["printName"]();


//   function Haw(name,price,origin) {
//     this.name = name;
//     this.price = price;
//     this.origin = origin;
//     this.printName = function () {
//         console.log("this is Haw")
//     }
// }


// Haw.prototype.printPrice = function () {
//     console.log("prototype print Price")
// }



// // Haw()
// var h1 = new Haw("山楂",2,"河南省");

// console.log(h1.__proro__);
// h1.printName();
// h1.printPrice();

function Chestnut (name,price,origin,weight) {
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.weight = weight;
    this.printName = function(){
        console.log("this is " + this.name)
    }
}

Chestnut.prototype.printName2=function(){
    console.log("this is chestunet prototype")
}

let che1 = new Chestnut("大栗子",20,"江西",12);
che1.printPrice = function(){
    console.log("this is price " + this.price)
}

che1.printPrice();

console.log(che1.__proto__);
console.log(Chestnut.prototype);


let obj1 = new Object({});
obj1.name="张三"
console.log(obj1.__proto__.__proto__);

function Object2(){
    this.__proto2__ = Object2.prototype2;
}
Object2.age = 20;
Object2.prototype2 = {
    __proto2__: null
}

let obj1 = new Object2()
console.log(obj1.__proto2__.__proto2__)



















































































