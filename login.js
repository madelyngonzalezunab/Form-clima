const form = document.getElementById("traffic-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const level = document.getElementById("traffic-level").value;
  const time = document.getElementById("time").value;

  const prompt = `Actúa como un asistente de tráfico. Analiza el siguiente reporte: 
  Ubicación: ${location}, Nivel de Tráfico: ${level}, Hora: ${time}.
  Describe cómo se encuentra el tráfico y da una recomendación.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) throw new Error("La API falló");

    const data = await response.json();
    const message = data.choices[0].message.content;

    resultDiv.innerHTML = `<p>${message}</p>`;
    resultDiv.style.color = "black";
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">Error: No se pudo obtener la respuesta de la API.</p>`;
  }
});