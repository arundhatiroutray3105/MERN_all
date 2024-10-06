import events from 'events';
const eventEmitter=new events.EventEmitter();
const method1=()=>{
    console.log("Method One!");
}
const method2=()=>{
    console.log("Method Two!");
}
const method3=()=>{
    console.log("Method Three!");
}
//add method into listener
eventEmitter.on("myevent",method1);
eventEmitter.on("myevent",method2);
eventEmitter.on("myevent",method3);
//call all methods 
eventEmitter.emit("myevent");
//remove method from the listener 
eventEmitter.removeListener("myevent",method2);
eventEmitter.emit("myevent");