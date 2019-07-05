/* var userOne = {

    email: "kat@gmail.com",
    name: "kat",
    login(){
        console.log(this.email, "login");
    },
    logOut(){
        console.log(this.email, "logout");
    }
};

console.log(userOne.email); */

//class
//constructor function
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, "logged in");
        return this;
    }
    logout(){
        console.log(this.email, "logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

//'new' keyword creates new empty object & sets value of 'this' to new empty object
var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('kat@ninjas.com', 'Kat');

//userOne.login();
//userTwo.logout();

//method chaining
userOne.login().updateScore().updateScore().logout();