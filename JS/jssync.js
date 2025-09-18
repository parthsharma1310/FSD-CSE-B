function waitforTwoseconds(){
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms){}
}
function register(){
    waitforTwoseconds();
    console.log("register End");
}
function SendEmail(){
    waitforTwoseconds();
    console.log("Sendemail");
}
function Login(){
    waitforTwoseconds();
    console.log("Login");
}
function Getdata(){
    waitforTwoseconds();
    console.log("Getdata");
}
function logout(){
    waitforTwoseconds();
    console.log("logout");
}
register();
SendEmail();
Login();
Getdata();
logout();
console.log("Other Process")