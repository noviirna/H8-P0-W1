var nama = "novi irnawati"
var peran = "penyihir"

if (nama == '' && peran == ''){
  console.log("Nama harus diisi!")
}
else if(nama != '' && peran === ''){
  console.log("Halo "+ nama +" Pilih peranmu untuk memulai game!")
}
else if(nama != '' && peran != ''){
  console.log("Selamat datang di Dunia Proxytia, " + nama)

  switch(peran){
    case 'ksatria' :
      console.log("Halo "+peran+" "+nama+" kamu dapat menyerang dengan senjatamu!")
      break

    case 'tabib' :
      console.log("Halo "+peran+" "+nama+" kamu dapat membantu temanmu yang terluka")
      break

    case 'penyihir' :
      console.log("Halo "+peran+" "+nama+" ciptakan keajaiban ang membantu kemenangan mu")
      break

    default:
      console.log("masukan peran yang sesuai")
    break
  }
}
else{
  console.log("");
}
