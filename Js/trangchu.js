function hienNutThemSach() {
    var role = localStorage.getItem("role");
    var container = document.getElementById("themSachContainer");
    if (!container) return;
    container.style.display = "none";
    if (role === "admin") {
        container.style.display = "block";
    }
}
hienNutThemSach();
function xemChiTiet(tenSach) {
    const user = localStorage.getItem("username");
    if (!user) {
        alert("Vui lòng đăng nhập để xem chi tiết sách!");
        return;
    }
    localStorage.setItem("sachDangXem", tenSach);
    window.location.href = "/bookdetail/chitiet.html";
}
function xemTatCaSach() {
    window.location.href = "/listBook/danhsach.html";d("themSachContainer");
    if (!container) return;
    container.style.display = "none";
    if (role === "admin") {
        container.style.display = "block";
    }
}
function moTrangThemSach() {
    window.location.href = "/addBook/themsach.html";
}
