const copyBtn = document.getElementById("copyBtn");

// ТУТ ХРАНИТСЯ ПОЛНЫЙ КЛЮЧ
const FULL_KEY = "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp2U1NkcU55SWhjNWhYcUJjcUt2NTgz@194.147.33.147:58652/?outline=1";

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(FULL_KEY);

  copyBtn.innerText = "Готово ✓";
  setTimeout(() => {
    copyBtn.innerText = "Скопировать";
  }, 1500);
});

if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.ready();
}
