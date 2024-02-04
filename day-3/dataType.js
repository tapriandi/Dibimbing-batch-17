// let array = ["string", 10, true];
// // index -> 0

// let res = array.length;

// console.log(array[1]);

// let siswa = {
//   name: "lili",
//   nilai: 80,
//   kelas: "A",
// };

// if(siswa.nilai > 70) {
//     console.log('selamat ' + siswa.name + ', kamu lulus' )
// }

// -----------------------------

// let res =
//   "halo nama saya " +
//   siswa.name +
//   ", nilai saya adalah " +
//   siswa.nilai +
//   ", saya dari kelas  " +
//   siswa.kelas;

//   let res1 = `halo nama saya ${siswa.name}, nilai saya adalah ${siswa.nilai}, saya dari kelas ${siswa.kelas}`
// console.log(siswa);

// -----------------------------

let siswa = [
  {
    name: "naruto",
    nilai: 70,
    kelas: "A",
    hobi: ["sepakbola", "lari", "adfasdf"],
    koleksiKomik: [
      { judul: "judul 1", tahun: 2022 },
      { judul: "judul 2", tahun: 2022 },
    ],
  },
  {
    name: "sasuke",
    nilai: 90,
    kelas: "A",
    hobi: ["belajar", "baca buku"],
    koleksiKomik: [
      { judul: "judul 1", tahun: 2022 },
      { judul: "judul 2", tahun: 2022 },
    ],
  },
  {
    name: "sakura",
    nilai: 80,
    kelas: "A",
    hobi: ["belajar", "baca buku"],
    koleksiKomik: [
      { judul: "judul 1", tahun: 2022 },
      { judul: "judul 2", tahun: 2022 },
    ],
  },
];

// console.log(siswa[1].name)
for (let i = 0; i < siswa.length; i++) {
  if (siswa[i].nilai >= 80) {
    console.log(siswa[i].name);
  }
}

//array of object
[
    {}
]

//object of array
{
   key: []
}

// array nested
[
    [
        []
    ]
]

// object nested
{
    key: {
        key2: {}
    }
}