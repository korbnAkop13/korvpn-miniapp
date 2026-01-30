const copyBtn = document.getElementById("copyBtn");

// ТУТ ХРАНИТСЯ ПОЛНЫЙ КЛЮЧ
const FULL_KEY = "ss://VERY-LONG-OUTLINE-KEY-GOES-HERE";

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
