
//物件的建構程序
function Dog(name, bread, weight) {
    this.name = name;
    this.bread = bread;
    this.weight = weight;
}


//設定Dog的原型
Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof !");
    } else {
        console.log(this.name + " says Yip ~ ");
    }
};

Dog.prototype.run = function () {
    console.log("Run~~");
};

Dog.prototype.wag = function () {
    console.log("Wag!");
};

var fido = new Dog('Fido', 'Mixed', '38');
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

//複寫 原型
spot.bark = function () {
    console.log(this.name + " says WOOF ~~~~~~~~");
}

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

