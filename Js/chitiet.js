var books = JSON.parse(localStorage.getItem("listBook"));
var tenSach = localStorage.getItem("sachDangXem");
if (books && tenSach) {
    var sach = books.find(b => b.tenSach === tenSach);
    if (sach) {
        document.getElementById("tenSach").textContent = sach.tenSach;
        document.getElementById("tacGia").textContent = sach.tacGia;
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