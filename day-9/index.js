import { DataSiswa, DataKelas } from './class.js';
import DataGuru from './class.js';


// function
const objSiswa = {
  name: "lili",
  kelas: "A",
};

function Siswa(param1, param2) {
  this.name = param1;
  this.kelas = param2;
  this.sapa = function () {
    console.log("lala");
  };
}

const dataKelas = new DataKelas("lili", "A");
const dataGuru = new DataGuru('ahmad', '1234')

dataKelas.sapaSiswa();

dataGuru.sapa();
