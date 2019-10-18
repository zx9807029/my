let a: Array<number> = [1, 2, 3, 4];
let b: ReadonlyArray<number> = a;
// interface Point {
//     readonly x:number;
//     readonly y:number
// }

// let p1:Point = {x:10,y:11};

// p1.x = 55
// interface Point1 {
//      x:number;
//      y:number
// }

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig):{color:string;area:number} {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: "black",width:1000 });

// console.log( mySquare )

// function greeter(person:string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.innerHTML = greeter(user);
// console.log(greeter(user))

// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// class greeter{
//     public para:string;
//     constructor (message:string){
//         this.para = message;
//     }
//     greeting (){
//         console.log('hello '+this.para);
//         // return this.para
//     }
// }

// let obj = new greeter('world');
// obj.greeting();
// console.log(obj.para)

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// // let greeter = new Greeter("world");
// let greeter1 : Greeter;

// typeof greeter1.greet();