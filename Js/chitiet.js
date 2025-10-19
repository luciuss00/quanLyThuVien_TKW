var books = JSON.parse(localStorage.getItem("listBook"));
var tenSach = localStorage.getItem("sachDangXem");
if (books && tenSach) {
    var sach = books.find(b => b.tenSach === tenSach);
    if (sach) {
        document.getElementById("tenSach").textContent = sach.tenSach;
        document.getElementById("tacGia").textContent = sach.tacGia;
        document.getElementById("theLoai").textContent = sach.theLoai;
        document.getElementById("nhaXB").textContent = sach.nhaXB;
        document.getElementById("namXB").textContent = sach.namXB;
        document.getElementById("moTa").textContent = sach.moTa || "Chưa có mô tả";
        document.getElementById("anhSach").src = `/Img/${sach.tenSach}.jpg`;
    }
    else {
        document.body.innerHTML = "<p>Không tìm thấy thông tin sách!</p>";
    }
}
else {
    window.location.href = "danhsach.html";
}
const trangThai = document.getElementById("trangThaiSach");
const muonBtn = document.getElementById("muonSachBtn");
let trangThaiSach = JSON.parse(localStorage.getItem("trangThaiSach")) || {};
if (trangThaiSach[tenSach] === "daMuon") {
    trangThai.textContent = "❌ Đã mượn";
    trangThai.style.color = "red";
    muonBtn.disabled = true;
    muonBtn.style.opacity = "0.6";
    muonBtn.style.cursor = "not-allowed";
} else {
    trangThai.textContent = "✅ Còn sách";
    trangThai.style.color = "green";
}
muonBtn.onclick = function() {
    localStorage.setItem("sachDangChon", tenSach);
    window.location.href = "muonsach.html";
};


