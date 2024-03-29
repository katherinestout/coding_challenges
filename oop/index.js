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

//class inheritance
class Admin extends User {
//if u is equal to user/email we gave, will delete, return false
//if not, will return true
    deleteUser(user){
        users = users.filter( u => {
            return u.email != user.email;
        })
    }
}

//'new' keyword creates new empty object & sets value of 'this' to new empty object
var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('kat@ninjas.com', 'Kat');
var admin = new Admin('zu@ninjas.com', 'Zu');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);
console.log(users);

//userOne.login();
//userTwo.logout();

//method chaining
//userOne.login().updateScore().updateScore().logout();


//constructors 'under the hood'

/*
function User(){
    this.email = email;
    this.name = name;
    this.online = false;
}
//the constructor function above has prototype property
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, "has logged in");
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, "has logged out");
}

//...args takes in admin parameters (email and name)
function Admin(...args){
 //console.log(args);
 //applies the User function
 User.apply(this, args);
 this.role = "super admin";
}

//we want to base the admin prototype on the user prototype
Admin.prototype = Object.create(User.prototype);

//additional functionality to admin
Admin.prototype.deleteUser = function(){
users = users.filter(user => {
    return user.email != u.email;
});
};

//admin.deleteUser(users[1]);

var userOne = new User('one@gmail.com', 'one');
var userTwo = new User('two@gmail.com', 'two');
var admin = new Admin('admin@gmail.com', 'admin');

var users = [userOne, userTwo, admin];

//console.log(userOne);
//userTwo.login(); 
//console.log(admin);

*/