/*const mydata={
    success:(message)=>{
        console.log("success msg"+message);
    },
    warning:(message)=>{
        console.log("warning message"+message);
    },
    error:(message)=>{
        console.log("error msg"+message);
    },

}
const title='Arundhati';
module.exports={mydata,title}*/
const mydata = {
    success: (message) => {
        console.log("Success message is : " + message);
    },
    warning: (message) => {
        console.log("Warning message is : " + message);
    },
    error: (message) => {
        console.log("Error message is : " + message);
    },
}
const PRO_TITLE = "Shopping Cart";
module.exports = { mydata, PRO_TITLE }