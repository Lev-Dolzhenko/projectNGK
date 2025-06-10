
document.getElementById("adviceForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  const GAS_URL = "https://script.google.com/macros/s/AKfycbySXcZVP3lYOnqhmUDsRCb6tUCmYZKBwgjzra4m2ibG-mTMbn901zmCG3B649o2dDY/exec";

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Успешно:", result);
    alert(result.message || "Заявка отправлена!");
    form.reset();
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка отправки. Попробуйте позже.");
  }
});
