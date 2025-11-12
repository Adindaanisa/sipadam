// dashboard.js

let map, userMarker;

// Inisialisasi peta
function initMap(lat = -6.2, lon = 106.816666) {
  map = L.map("map").setView([lat, lon], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  userMarker = L.marker([lat, lon]).addTo(map).bindPopup("Lokasi Anda").openPopup();
}

// Zoom map
function zoomMap() {
  map.setZoom(map.getZoom() + 1);
}

// Panggil GPS
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      initMap(latitude, longitude);
    },
    () => {
      alert("Tidak dapat mengakses lokasi. Menampilkan default Jakarta.");
      initMap();
    }
  );
} else {
  alert("Browser tidak mendukung GPS.");
  initMap();
}

// Fungsi buka halaman detail laporan
function openDetail(page) {
  window.location.href = page;
}
