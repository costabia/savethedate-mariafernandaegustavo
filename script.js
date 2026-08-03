const revealOrder = [
  ".postcard--decor-top",
  ".postcard--decor-bottom",
  ".postcard--main",
];

function revealPostcards() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealOrder.forEach((selector, index) => {
    const element = document.querySelector(selector);

    if (!element) {
      return;
    }

    if (reduceMotion) {
      element.classList.add("is-ready");
      return;
    }

    window.setTimeout(() => {
      element.classList.add("is-ready");
    }, 80 + index * 140);
  });
}

function addCalendarReminder() {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = "evento.ics";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealPostcards, { once: true });
} else {
  revealPostcards();
}

const reminderButton = document.querySelector(".reminder-button");

if (reminderButton) {
  reminderButton.addEventListener("click", addCalendarReminder);
}
