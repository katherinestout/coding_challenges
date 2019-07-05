var userOne = {

    email: "kat@gmail.com",
    name: "kat",
    login(){
        console.log(this.email, "login");
    },
    logOut(){
        console.log(this.email, "logout");
    }
};

console.log(userOne.email);