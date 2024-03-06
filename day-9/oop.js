// class Ayah {
//   constructor(name) {
//     this.name = name;
//   }

//   getNameSeparator() {
//     return "-";
//   }
// }

// class Anak extends Ayah {
//   constructor(name, index) {
//     super(name);
//     this.index = index;
//   }

//   getFullName() {
//     return this.name + super.getNameSeparator() + this.index;
//   }
// }

// const firstFooBar = new Anak("foo", 1);

// // Anak = {nama: '', index: '', getFullName: ''}

// console.log(firstFooBar.name);
// // Expected output: "foo"

// console.log(firstFooBar.getFullName());
// // Expected output: "foo-1"

// class Car {
//   constructor(carname, speed) {
//     this.carname = carname;
//     this._speed = 1234;
//   }

//   // get
//   get speedCar() {
//     return this._speed;
//   }

//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(carname, model, speed) {
//     super(carname, speed);
//     this.model = model;
//   }
//   show() {
//     return console.log(super.present() + ", it is a " + this.model);
//   }
// }

// let mycar = new Model("Toyota", "Clasic", 2000);

// console.log(mycar.speedCar);

// Hitung
// - hasil
// - pembagian
// - perkalian (val * val)

// persegi extend Hitung
// - hitung luas (p x l)
// -- res = perkalian(p, l)

// lingkaran
// - hitung (22/7 * input)
// -- res = pembagian --> perkalian

class Hitung {
  constructor(luas) {
    this.luas = luas;
  }

  hasil() {
    return `Hasil perhitungan luasnya adalah ${this.luas}`;
  }

  pembagian(val1, val2) {
    return val1 / val2;
  }

  perkalian(val1, val2) {
    return val1 * val2;
  }
}

class Persegi extends Hitung {
  constructor(luas, panjang, lebar) {
    super(luas);
    this.panjang = panjang;
    this.lebar = lebar;
  }

  hitungLuas() {
    const luas = super.perkalian(this.panjang, this.lebar)
    return super.hasil()
  }
  // - hitung luas (p x l)
  // -- res = perkalian(p, l)
}


// const test = new Persegi();

// class Lingkaran extends Hitung {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   // - hitung (22/7 * input)
//   // -- res = pembagian --> perkalian
// }
