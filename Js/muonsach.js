const tenSach = localStorage.getItem("sachDangXem");
var infos = JSON.parse(localStorage.getItem("listBook")) || [];
function muonSach() {
    let ten = document.getElementById("tenNguoiMuon").value;
    let ma = document.getElementById("maSinhVien").value;
    let sdt = document.getElementById("sdt").value;
    let ngayMuon = document.getElementById("ngayMuon").value;
    let ngayTra = document.getElementById("ngayTra").value;
    let sdtKT = /[0-9]/;
    let maKT = /[0-9]/;
    if (ten === "" || ma === " " || ngayMuon === "" || ngayTra === "") {
        alert("⚠️ Vui lòng nhập đầy đủ thông tin trước khi xác nhận!");
        return false;
    }
    if(!sdtKT.test(sdt)) {
        alert("Hãy nhập đúng định dạng số điện thoại!");
        return false;
    }
    if(!maKT.test(ma)) {
        alert("Hãy nhập đúng định dạng mã sinh viên!");
        return false;
    }
    const info = {ten, ma, ngayMuon, ngayTra}
    infos.push(info);
    localStorage.setItem("muonSachInfo", JSON.stringify(info));
   
    let trangThaiSach = JSON.parse(localStorage.getItem("trangThaiSach")) || {};
    
    trangThaiSach[tenSach] = "daMuon";
    localStorage.setItem("trangThaiSach", JSON.stringify(trangThaiSach));

    alert("✅ Bạn đã mượn sách: " + tenSach);
    window.location.href = "chitiet.html";
}
function back() {
    window.location.href = "chitiet.html"
}
