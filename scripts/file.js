function myFunction() {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  let hari = new Date();
  let day = days[hari.getDay()];
  let month = months[hari.getMonth()];
  document.getElementById("hari").innerHTML =
    day + " " + month + " " + hari.getFullYear();
}
