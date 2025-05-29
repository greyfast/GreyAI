
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (message !== "") {
        const userMsg = document.createElement("div");
        userMsg.className = "grey-msg";
        userMsg.textContent = "🧠 Perintah King: " + message;
        chatBox.appendChild(userMsg);

        const greyReply = document.createElement("div");
        greyReply.className = "grey-msg";
        greyReply.textContent = "🤖 Grey menerima dan sedang memproses...";
        chatBox.appendChild(greyReply);

        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";
    }
}
