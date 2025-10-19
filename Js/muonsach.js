const tenSach = localStorage.getItem("sachDangChon");
console.log(tenSach)
if (tenSach) {
    document.getElementById("tenSach").value = tenSach;
}
function muonSach() {
    let ten = document.getElementById("tenNguoiMuon").value;
    let ma = document.getElementById("maSinhVien").value;
    let ngayMuon = document.getElementById("ngayMuon").value;
    let ngayTra = document.getElementById("ngayTra").value;
    if (ten === "" || ma === " " || ngayMuon === "" || ngayTra === "") {
        alert("⚠️ Vui lòng nhập đầy đủ thông tin trước khi xác nhận!");
        return false;
    }
    let trangThaiSach = JSON.parse(localStorage.getItem("trangThaiSach")) || {};
    trangThaiSach[info.tenSach] = "daMuon";
    localStorage.setItem("trangThaiSach", JSON.stringify(trangThaiSach));

    localStorage.setItem("muonSachInfo", JSON.stringify(info));

    alert("✅ Bạn đã mượn sách: " + tenSach);
    window.location.href = "chitiet.html";
}
function back() {
    window.location.href = "chitiet.html"
}
