async function sendMessage() {
    const masukan = document.getElementById("masukan_pengguna").value;  // Kolom input dari pengguna
    const kotak_obrolan = document.getElementById("kotak_obrolan");

    // Menampilkan pesan pengguna
    if (masukan === "") return;  // Tidak kirim jika kolom kosong
    kotak_obrolan.innerHTML += `<div class="grey-msg">💬 Perintah Raja: ${masukan}</div>`;

    // Menampilkan "Grey sedang memproses jawaban..."
    kotak_obrolan.innerHTML += `<div class="grey-msg">⚙️ Grey sedang memproses jawaban...</div>`;
    kotak_obrolan.scrollTop = kotak_obrolan.scrollHeight;  // Scroll ke bawah

    try {
        // Mengirimkan permintaan ke OpenAI API
        const res = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Authorization": 'bearer sk-...8R8A,  // Ganti dengan API Key OpenAI kamu
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",  // Model yang digunakan, bisa disesuaikan
                messages: [{ role: "user", content: masukan }],
                max_tokens: 150,  // Tentukan jumlah token maksimal yang diinginkan
            }),
        });

        const data = await res.json();  // Mengambil data dari API response
        const botMessage = data.choices[0].message.content;  // Mengambil pesan dari respons

        // Menampilkan respons bot di chat
        kotak_obrolan.innerHTML += `<div class="pesan-abu">${botMessage}</div>`;
        kotak_obrolan.scrollTop = kotak_obrolan.scrollHeight;  // Scroll ke bawah

    } catch (error) {
        // Menampilkan error jika ada
        kotak_obrolan.innerHTML += `<div class="grey-msg">❌ Gagal mendapatkan jawaban dari Grey.</div>`;
        console.error("Error fetching data from OpenAI:", error);
    }
}
