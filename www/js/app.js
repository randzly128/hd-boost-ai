// HD BOOST AI - JavaScript
console.log("HD BOOST AI dimuat");

// Hide splash setelah 3 detik
setTimeout(function() {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    console.log("Aplikasi siap");
}, 3000);

// Proses foto
function processPhoto() {
    console.log("Memproses foto...");
    
    // Simulasi progress bar
    const progressBar = document.getElementById('photo-progress');
    let width = 0;
    
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            showResult("✅ Foto berhasil di-enhance ke 8K!");
        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 200);
}

// Proses video
function processVideo() {
    console.log("Memproses video...");
    
    const progressBar = document.getElementById('video-progress');
    let width = 0;
    
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            showResult("✅ Video berhasil di-upscale ke 4K!");
        } else {
            width += 5;
            progressBar.style.width = width + '%';
        }
    }, 200);
}

// Tampilkan AI tools
function showTools() {
    const tools = [
        "🎯 AI Denoise - Hapus noise & grain",
        "🎨 Colorize - Warna foto hitam putih",
        "✨ Face Enhance - Perbaiki wajah",
        "🔍 Super Resolution - Naikkan resolusi 4x",
        "🌅 HDR Effect - Tambah dynamic range"
    ];
    
    let message = "🛠️ AI Tools Tersedia:\n\n";
    tools.forEach(tool => {
        message += "• " + tool + "\n";
    });
    
    alert(message);
}

// Tampilkan hasil
function showResult(message) {
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultArea').classList.remove('hidden');
    
    // Reset progress bar setelah 2 detik
    setTimeout(function() {
        document.getElementById('photo-progress').style.width = '0%';
        document.getElementById('video-progress').style.width = '0%';
    }, 2000);
}

// Tutup hasil
function closeResult() {
    document.getElementById('resultArea').classList.add('hidden');
}

// Jika di browser (bukan Cordova)
if (typeof cordova === 'undefined') {
    console.log("Mode browser aktif");
    
    // Override fungsi untuk browser
    window.processPhoto = function() {
        alert("📸 Pilih foto dari galeri\n(Di aplikasi asli akan buka file picker)");
        processPhoto();
    };
    
    window.processVideo = function() {
        alert("🎥 Pilih video dari galeri\n(Di aplikasi asli akan buka video picker)");
        processVideo();
    };
}
