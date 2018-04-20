var btn = document.getElementById('btn');
var params = document.getElementById('params');

var arr = ['me', 'you', 'them', 'us', 'whoever', 'whomever', 'everybody'];

btn.onclick = () => {
    let x = document.querySelector('#dataBox').value;
    alert(x);
    t = "access granted";
    alert (t);
}

function printArr() {
    for (var i in obj1) {
        params.innerHTML += '<br />' + i + ': ' + obj1[i].constructor + ' ' + obj1[i] + '<br />';
    }
}

class Animal {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.type = 'Dog';
        this.new = 'newnew';
    }
    speak() {
        alert(this.color);
    }
    ish() {
        return this.name + 'ish';
    }
}
class Cat extends Animal {
    constructor(name, breed, color, age) {
        super(name, breed, color);
        this.age = age;
        this.type = 'Cat';
    }
    ish() {
        return this.name + '-ish';
    }
}

class Breed extends Cat {
    alish() {
        var newName = super.ish();
        newName += 'alish';
        return newName;
    }
}

var duke = new Animal('duke', 'hound', 'black');
var izzy = new Animal('izzy', 'terrier', 'beige');
var sammy = new Cat('samson', 'tabby', 'orange', 10);
var furry = new Breed('charlie', 'siamese', 'black', 10);

/*function newObj() {
    var obj = {
        box: true,
        sphere: false,
        cube: 2,
        cylindar: 'yes',
        piston: arr,
        doIt: function() {
            alert(this.cylindar);
        },
        newIt: function() {
            this.cylindar = prompt('Tell me another one');
        }
    }
    return obj;
}*/