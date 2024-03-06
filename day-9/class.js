export class DataSiswa {
  constructor(param1, param2) {
    this.name = param1;
    this.kelas = param2;
  }

  sapa() {
    return `Nama: ${this.name}, Kelas: ${this.kelas}`;
  }
}

export class DataKelas {
  constructor(param1, param2) {
    this.nama = param1;
    this.kapasita = param2;
  }

  sapaSiswa() {
    const data = new DataSiswa("lili", "A");
    return console.log(data.sapa());
  }
}

export default class DataGuru {
  constructor(param1, param2) {
    this.name = param1;
    this.NIK = param2;
  }

  sapa() {
    return console.log(`Nama: ${this.name}, Kelas: ${this.NIK}`);
  }
}

const date = new Date().getDate()
