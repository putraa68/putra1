document.addEventListener("DOMContentLoaded", function() {
    let currentScene = 0;
    const scenes = [
        { q: "Kenapa aku selalu senyum tiap lihat kamu?", a: "Karena kamu alasan bahagia aku! 😊" },
        { q: "Tau nggak kenapa aku nggak bisa jauh dari kamu?", a: "Karena kamu magnet hati aku! ❤️" },
        { q: "Apa yang lebih manis dari coklat?", a: "Senyuman kamu! 🍫😍" },
        { q: "Apa yang lebih indah dari sunset?", a: "Mata kamu yang bercahaya! 🌅✨" },
        { q: "Kenapa aku suka melamun akhir-akhir ini?", a: "Karena aku selalu mikirin kamu! 🤭" },
        { q: "Kalau aku bisa jadi sesuatu, aku mau jadi apa?", a: "Jadi alasan kamu tersenyum! 😊" },
        { q: "Kenapa aku nggak suka hujan?", a: "Karena aku lebih suka berada di pelukan kamu. ☔🤗" },
        { q: "Kalau ada satu keinginan yang bisa aku minta, apa itu?", a: "Bisa terus sama kamu selamanya! 💖" },
        { q: "Apa yang lebih indah dari langit malam?", a: "Hati kamu yang penuh cinta! 💫" },
        { q: "Kalau aku bisa ulang waktu, aku mau ngapain?", a: "Ketemu kamu lebih awal! ⏳💖" },
        { q: "Apa yang bikin aku semangat setiap hari?", a: "Kamu! Karena kamu motivasi aku! 🚀" },
        { q: "Kenapa aku nggak butuh kompas?", a: "Karena hati aku selalu tertuju ke kamu! 🧭💕" },
        { q: "Kalau aku jadi lagu, aku bakal jadi lagu apa?", a: "Lagu cinta yang cuma buat kamu! 🎶" },
        { q: "Apa yang aku lakukan kalau lagi sedih?", a: "Dengerin suara kamu, karena itu obat terbaik. 📞💖" },
        { q: "Apa yang aku harapkan tiap bangun tidur?", a: "Bisa lihat wajah kamu duluan! 😍" },
        { q: "Kenapa aku suka nunggu chat dari kamu?", a: "Karena tiap kata dari kamu bikin aku bahagia! 💬❤️" },
        { q: "Apa arti nama kamu buat aku?", a: "Sebuah kata yang bikin hati aku hangat. 💗" },
        { q: "Kalau aku kasih 3 kata buat kamu, apa itu?", a: "Aku sayang kamu! 🥰" },
        { q: "Apa yang bikin aku yakin sama kita?", a: "Karena aku nggak bisa bayangin dunia tanpa kamu! 🌍❤️" }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const music = document.getElementById("bgMusic");
    const startBtn = document.getElementById("startBtn");
    const welcomeScreen = document.getElementById("welcome-screen");

    startBtn.addEventListener("click", function() {
        welcomeScreen.classList.add("hidden");
        quizContainer.style.display = "block";
        music.play();
        showScene(currentScene);
    });

    function showScene(index) {
        quizContainer.innerHTML = "";
        let scene = document.createElement("div");
        scene.className = "scene fade-in";

        let text = document.createElement("p");
        text.innerHTML = `<span class="typewriter">${scenes[index].q}</span>`;

        let nextBtn = document.createElement("button");
        nextBtn.className = "glow-button";
        nextBtn.textContent = "Lihat Jawaban ➜";

        nextBtn.addEventListener("click", function() {
            showAnswer(index);
        });

        scene.appendChild(text);
        scene.appendChild(nextBtn);
        quizContainer.appendChild(scene);
    }

    function showAnswer(index) {
        quizContainer.innerHTML = "";
        let scene = document.createElement("div");
        scene.className = "scene fade-in";

        let answerText = document.createElement("p");
        answerText.innerHTML = `<span class="typewriter">${scenes[index].a}</span>`;

        let nextBtn = document.createElement("button");
        nextBtn.className = "glow-button";
        nextBtn.textContent = (index < scenes.length - 1) ? "Pertanyaan Selanjutnya ➜" : "Selesai ❤️";

        nextBtn.addEventListener("click", function() {
            if (index < scenes.length - 1) {
                showScene(index + 1);
            } else {
                quizContainer.innerHTML = "<h2>Terima kasih sayang! ❤️</h2>";
            }
        });

        scene.appendChild(answerText);
        scene.appendChild(nextBtn);
        quizContainer.appendChild(scene);
    }
});