:root {
  --text-main: #eaeaea;
  --text-muted: rgba(234,234,234,0.6);
}

/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY */
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: #050608;
}

/* =========================
   BACKGROUND IMAGE (MAHADEV)
   ========================= */

/* ⚠️ IMPORTANT:
   If your image is .jpg or .png, change the extension below */
.bg {
  position: fixed;
  inset: 0;
  background-image: url("assets/mahadev.jpg"); /* <- CHANGE IF NEEDED */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transform: scale(1.06);
  animation: breathe 14s ease-in-out infinite;
  will-change: transform;
  z-index: 1;
}

/* Breathing (cosmic calm) */
@keyframes breathe {
  0% {
    transform: scale(1.06);
  }
  50% {
    transform: scale(1.09);
  }
  100% {
    transform: scale(1.06);
  }
}

/* Awareness Light Sweep */
.bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255,255,255,0.06) 45%,
    transparent 60%
  );
  transform: translateX(-100%);
  animation: lightSweep 12s ease-in-out infinite;
  pointer-events: none;
}

@keyframes lightSweep {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  35% {
    opacity: 0.4;
  }
  50% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* =========================
   OVERLAY (DEPTH CONTROL)
   ========================= */

.overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(0,0,0,0.35),
    rgba(0,0,0,0.8)
  );
  z-index: 2;
}

/* =========================
   MAIN CONTAINER
   ========================= */

.container {
  position: relative;
  z-index: 3;
  height: 100vh;
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: var(--text-main);
}

/* =========================
   QUOTE
   ========================= */

.quote span {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.4;
  opacity: 0;
  animation: reveal 1.2s ease forwards;
}

.quote span:first-child {
  font-size: 2.8rem;
  animation-delay: 0.4s;
}

.quote span:nth-child(2),
.quote span:nth-child(3) {
  font-size: 2.2rem;
  opacity: 0.9;
}

.quote span:nth-child(2) {
  animation-delay: 1.2s;
}

.quote span:nth-child(3) {
  animation-delay: 2s;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   SIGNATURE
   ========================= */

.signature {
  margin-top: 18px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  opacity: 0.55;
}

/* =========================
   CHOICES
   ========================= */

.choices {
  margin-top: 70px;
  display: flex;
  gap: 32px;
}

.choices button {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;

  transition: 
    color 0.4s ease,
    transform 0.4s ease,
    text-shadow 0.4s ease;
}

.choices button:hover {
  color: #ffffff;
  transform: translateY(-2px);
  text-shadow: 0 0 8px rgba(255,255,255,0.25);
}

/* =========================
   FINAL STATE (AFTER CHOICE)
   ========================= */

.state {
  position: fixed;
  inset: 0;
  z-index: 10;

  background: rgba(0,0,0,0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
}

.state.active {
  opacity: 1;
  pointer-events: all;
}

.state p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  max-width: 600px;
  padding: 20px;
  color: var(--text-main);
  text-align: center;
}

/* =========================
   MOBILE OPTIMIZATION
   ========================= */

@media (max-width: 768px) {
  .quote span:first-child {
    font-size: 2.2rem;
  }

  .quote span:nth-child(2),
  .quote span:nth-child(3) {
    font-size: 1.7rem;
  }

  .choices {
    flex-direction: column;
    gap: 18px;
  }
}
