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
function moTrangThemSach() {
    window.location.href = "themsach.html";
}
function xemChiTiet(tenSach) {
    localStorage.setItem("sachDangXem", tenSach);
    window.location.href = "chitiet.html";
}
function xemTatCaSach() {
    window.location.href = "danhsach.html";
}
