var Car = function (name, brand, type, output) {

    var args = [].slice.call(arguments);
    this.name = name;
    this.brand = brand;
    this.type = type;    
    this.output = output;

    this.catetory = 'car';
}
Car.prototype.openLight = function () {
    this.lightStatus = 'open';
    console.log(this.name + ' lights open');
}
Car.prototype.closeLight = function () {
    this.lightStatus = 'close';
    console.log(this.name + ' lights up');
}
Car.prototype.start = function () {
    this.enginStatus = 'start';
    console.log(this.name + ' engin start');
}

var Cabrio = window.Extend(Car, {
    openTop: function () {
        this.topStatus = 'open';
        console.log(this.name + ' top open');
    },
    closeTop: function () {
        this.topStatus = 'close';
        console.log(this.name + ' top close');
    },
    start: function () {
        this.enginStatus = 'start';
        console.log(this.name + ' yeah, let\'s rock');
    }
}, function () {
    this.catetory = 'cabrio';
});

var car1 = new Car('xiao4', 'audi', 'a4l', '1984');
car1.openLight();
car1.closeLight();
car1.start();

var car2 = new Cabrio('whatever', 'bmw', '650i', '5700');
car2.openLight();
car2.closeLight();
car2.openTop();
car2.closeTop();
car2.start();
