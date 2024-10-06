import events from 'events';
function Iteration(num){
    const emitter=new events.EventEmitter();
    setTimeout(()=>{
        for(let i=1 ;i <=num; i++){
            emitter.emit("BeforeProcess",i);
            console.log("Process number : "+i)
            emitter.emit("Afterprocess",i)
        }
    },3000);
    return emitter;
}
const iter=Iteration(3);
iter.on('BeforeProcess',(data)=>{
    console.log("About to start the process "+data)
})
iter.on('Afterprocess',(data)=>{
    console.log("Completed process "+data)
})
