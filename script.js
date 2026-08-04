let selectedService = "";

function showPopup(service) {
  selectedService = service;
  document.getElementById("popupText").innerText =
    `You selected: ${service}. Do you want to send this request via WhatsApp?`;
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function sendToWhatsApp() {
  sparkleBurst();
  const phoneNumber = "918180016969"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    `Hello, I want to apply for ${selectedService}.`,
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
  closePopup();
}

/* Sparkles */
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  document.getElementById("sparkles").appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1500);
}
function sparkleBurst(count = 30) {
  for (let i = 0; i < count; i++) {
    setTimeout(createSparkle, i * 50);
  }
}
window;

// Mobile nav toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
