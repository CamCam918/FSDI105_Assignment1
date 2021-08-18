console.log("Users Register");
// global variable
class User {
    constructor(name, pass, email, first, last, age, address, phone, payment, color) {
        this.name=name;
        this.password=pass;
        this.email=email;
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.address=address;
        this.phoneNumber=phone;
        this.payment=payment;
        this.color=color;
    }
}

function registerUser(){
    let name=$("#userName").val();
    let password=$("#txtPassword").val();
    let email=$("#txtEmail").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user = new User(name,password,email,first,last,age,address,phone,payment,color);
    console.log(user);
    saveUser(user);
    clearInputs();

}
function clearInputs(){
    $("#userName").val("");
    $("#txtPassword").val("");
    $("#txtEmail").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("#000000");

}

function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
    $("#btnSave").click(clearInputs);
}
window.onload=init;