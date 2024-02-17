// let siswa = {
//     nama: 'Lili',
//     umur: 12,
//     kelas: 'A'
// }

// // console.log("nama saya adalah: " + siswa.nama)
// siswa.umur = 15
// siswa.alamat = 'jakarta'

// delete siswa.kelas;

// console.log(siswa);

// ==================================

// let hitung = {
//   bilangan1: 2,
//   bilangan2: 4,

//   //method
//   penjumlahan: function (number1, number2) {
//     return this.number1 + this.number2;
//   },
//   pengurangan: function (number1, number2) {
//     return number1 - number2;
//   },
// };

// hitung.perkalian  = function(param1, param2) {
//     return param1 * param2;
// }

// // let res = hitung.penjumlahan();
// // let res = hitung.pengurangan(5, 10);
// let res = hitung.perkalian(5, 10);

// console.log(res);

// ==================================
// let siswa = {
//   nama: "Lili",
//   umur: 12,
//   kelas: "A",
//   say: function () {
//     return `Hallo nama saya ${this.nama}, umur saya ${this.umur} dan saya dari kelas ${this.kelas}`;
//   },
// };

// let res = siswa.say();

// console.log(res);

// ==================================
// let data = [
//   { nama: "lili", kelas: "A", nilai: 75 },
//   { nama: "tono", kelas: "A", nilai: 80 },
//   { nama: "ani", kelas: "A", nilai: 90 },
//   { nama: "budi", kelas: "A", nilai: 60 },
// ];

// // lulus > 70

// let Siswa = {
//     nama: '',
//     kelas: ''
// }

// function Siswa(paramNama, paramKelas) {
//   this.nama = paramNama;
//   this.kelas = paramKelas;
//   this.showSiswa = function() {
//     return `Hallo nama saya adalah ${this.nama} dan saya berasal dari kelas ${this.kelas}`
//   }
// }

// let s1 = new Siswa("lili", "B");
// let s1 = new Siswa('lala', 'C')

// console.log(s1.showSiswa());

// dispatch
// 

// ==================================
let siswa = {
  alksdjfalkjhsdfb: "",
  lijasdkjfbasdhf: "",

  get nama() {
    return this.alksdjfalkjhsdfb;
  },
  get kelas() {
    return this.lijasdkjfbasdhf;
  },

  set nama(val) {
    this._nama = val;
  },
  set kelas(val) {
    this._kelas = val;
  },

  updateNama: function (newname) {
    this.alksdjfalkjhsdfb = newname;
  },
};

/*
let siswa1 = {
    nama: 'lili',
    kelas: 'A'
}

siswa1.nama = 'budi'
*/

// siswa.nama = "lili";

siswa.kelas = "C";
siswa.updateNama('tono');

console.log(siswa.nama);
