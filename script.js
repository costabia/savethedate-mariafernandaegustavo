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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealPostcards, { once: true });
} else {
  revealPostcards();
}

function addCalendarReminder() {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    return;
  }

  const event = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maria Fernanda e Gustavo//Save the Date//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:save-the-date-maria-fernanda-gustavo-20270410@invite",
    "DTSTAMP:20260730T120000Z",
    "DTSTART:20270410T173000Z",
    "DTEND:20270410T203000Z",
    "SUMMARY:Casamento de Maria Fernanda e Gustavo",
    "LOCATION:Salão Verde\\, Clube Curitibano\\, Av. Pres. Getúlio Vargas\\, 2857\\, Curitiba - PR",
    "DESCRIPTION:Convite oficial em breve.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\\r\\n");

  const calendarFile = new Blob([event], { type: "text/calendar;charset=utf-8" });
  const calendarUrl = URL.createObjectURL(calendarFile);

  window.location.href = calendarUrl;
}

const reminderButton = document.querySelector(".reminder-button");

if (reminderButton) {
  reminderButton.addEventListener("click", addCalendarReminder);
}
