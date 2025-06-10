document.getElementById("adviceForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // Преобразуем FormData в объект
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  // URL вашего Google Apps Script
  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbwR1fhQCUbHHlROtfHS1bfXPj4-pPkkeIdAQB_9SxhCIaJuQ-joXKn0Mfpk-aSnor-Stg/exec";

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      mode: "cors", // Явно указываем режим CORS
      headers: {
        "Content-Type": "application/json",
        Origin: window.location.origin, // Добавляем Origin
      },
      body: JSON.stringify(data),
    });

    const result = await response.json(); // Измените на .json() вместо .text()
    console.log("Успешно:", result);
    form.reset();
    alert(result.message || "Заявка отправлена!");
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка отправки. Попробуйте позже.");
  }
});
