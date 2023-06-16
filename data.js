// Data awal
var data = [
  ['John Doe', 25, 'Developer'],
  ['Jane Smith', 30, 'Desainer'],
  ['Mark Johnson', 35, 'Manajer'],
  ['Sarah Thompson', 28, 'Analisis Data'],
  ['Richardo', 29, 'Teknik Informatika'],
  ['Sarah', 34, 'Teknik Informasi']
];

// Fungsi untuk mengacak urutan array
function acakArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Mengacak urutan array
var dataAcak = acakArray(data);

// Mengonversi array menjadi objek JSON
var json = [];
dataAcak.forEach(function(item) {
  var obj = {
    nama: item[0],
    umur: item[1],
    pekerjaan: item[2]
  };
  json.push(obj);
});

// Menampilkan data JSON
console.log(JSON.stringify(json, null, 2));
