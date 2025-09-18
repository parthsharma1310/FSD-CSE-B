// console.log(a);
// var a;
// var b=6
// console.log(a);
// {
//     var c=7;
//     console.log(b);
//     console.log(c);
// }
// console.log(c);
// function waitforTwoseconds(){
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms){}
// }
// function register(){
//     waitforTwoseconds();
//     console.log("register End");
// }
// function SendEmail(){
//     waitforTwoseconds();
//     console.log("Sendemail");
// }
// function Login(){
//     waitforTwoseconds();
//     console.log("Login");
// }
// function Getdata(){
//     waitforTwoseconds();
//     console.log("Getdata");
// }
// function logout(){
//     waitforTwoseconds();
//     console.log("logout");
// }
// register();
// SendEmail();
// Login();
// Getdata();
// logout();
//callback hell
function register(){
    setTimeout(()=>{
        console.log("register end");
        
    },2000)
}
function SendEmail(){
    setTimeout(()=>{
        console.log("Send Email");
        
    },2000)
}
function Login(){
    setTimeout(()=>{
        console.log("Log in");
        
    },2000)
}
function getdata(){
    setTimeout(()=>{
        console.log("getdata");
        
    },2000)
}
function display(){
    setTimeout(()=>{
        console.log("display data");
        
    },2000)
}
console.log("successful");
register();
SendEmail();
Login();
getdata();
display();




