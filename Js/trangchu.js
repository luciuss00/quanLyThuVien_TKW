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
function xemTatCaSach() {
    var username = localStorage.getItem("username");
    if (!username) {
        alert("Vui lòng đăng nhập để xem tất cả sách!");
    } 
    else {
        window.location.href = "danhsach.html";
    }
}
function xemChiTiet(tenSach) {
    localStorage.setItem("sachDangXem", tenSach);
    window.location.href = "chitiet.html";
}

