const giftButton = document.getElementById("giftButton");
const envelopeModal = document.getElementById("envelopeModal");
const envelope = document.getElementById("envelope");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const finalMessage = document.getElementById("finalMessage");
const welcomeCard = document.querySelector(".welcome-card");

function spawnHearts() {
  const heartsContainer = document.createElement("div");
  heartsContainer.className = "hearts";

  for (let i = 0; i < 22; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-bubble";
    heart.textContent = i % 2 === 0 ? "♡" : "♥";
    heart.style.left = `${30 + Math.random() * 40}%`;
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 180}px`);
    heart.style.setProperty("--rot", `${(Math.random() - 0.5) * 90}deg`);
    heart.style.animationDelay = `${i * 0.04}s`;
    heartsContainer.appendChild(heart);
  }

  envelope.appendChild(heartsContainer);

  setTimeout(() => {
    heartsContainer.remove();
  }, 1800);
}

if (giftButton) {
  giftButton.addEventListener("click", function () {
    envelopeModal.classList.add("visible");
    envelopeModal.setAttribute("aria-hidden", "false");
    welcomeCard.classList.add("is-faded");
  });
}

if (openEnvelopeBtn) {
  openEnvelopeBtn.addEventListener("click", function () {
    envelope.classList.add("opened");
    openEnvelopeBtn.disabled = true;
    spawnHearts();

    setTimeout(() => {
      envelopeModal.classList.remove("visible");
      envelopeModal.setAttribute("aria-hidden", "true");
      finalMessage.classList.add("visible");
    }, 1600);
  });
}
