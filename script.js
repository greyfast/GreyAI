async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (message === "") return;

    chatBox.innerHTML += `<div class="grey-msg">🧠 Perintah King: ${message}</div>`;
    input.value = "";

    chatBox.innerHTML += `<div class="grey-msg">🤖 Grey sedang memproses jawaban...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const res = await fetch("/api/gpt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: message })
        });
        const data = await res.json();
        chatBox.innerHTML += `<div class="grey-msg">💬 ${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
        chatBox.innerHTML += `<div class="grey-msg">⚠️ Gagal mendapatkan jawaban Grey.</div>`;
    }
}
