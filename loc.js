function getLocation() {
  const display = document.getElementById("locationDisplay");
  if (!navigator.geolocation) {
    display.innerText = "Geolocation not supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    display.innerHTML = `
      <p>Latitude: ${lat}</p>
      <p>Longitude: ${lon}</p>
      <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">View on Google Maps</a>
    `;
  }, err => {
    display.innerText = "Location access denied.";
  });
}
