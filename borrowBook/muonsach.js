const tenSach = localStorage.getItem("sachDangXem");

function muonSach() {
    let ten = document.getElementById("tenNguoiMuon").value;
    let ma = document.getElementById("maSinhVien").value;
    let sdt = document.getElementById("sdt").value;
    let ngayMuon = document.getElementById("ngayMuon").value;
    let ngayTra = document.getElementById("ngayTra").value;

    let sdtKT = /^[0-9]{9,11}$/;
    let maKT = /^[A-Za-z0-9]+$/;

    if (ten === "" || ma === "" || ngayMuon === "" || ngayTra === "") {
        alert("⚠️ Vui lòng nhập đầy đủ thông tin trước khi xác nhận!");
        return;
    }
    if (!sdtKT.test(sdt)) {
        alert("Hãy nhập đúng định dạng số điện thoại!");
        return;
    }
    if (!maKT.test(ma)) {
        alert("Hãy nhập đúng định dạng mã sinh viên!");
        return;
    }
    const info = { ten, ma, sdt, ngayMuon, ngayTra, tenSach };

    let infos = JSON.parse(localStorage.getItem("muonSachInfo")) || [];
    if (!Array.isArray(infos)) {
        infos = [infos];
    }
    infos.push(info);
    localStorage.setItem("muonSachInfo", JSON.stringify(infos));

    let trangThaiSach = JSON.parse(localStorage.getItem("trangThaiSach")) || {};
    trangThaiSach[tenSach] = "daMuon";
    localStorage.setItem("trangThaiSach", JSON.stringify(trangThaiSach));

    alert("✅ Bạn đã mượn sách: " + tenSach + " thành công!");
    window.location.href = "/bookDetail/chitiet.html";
}
function back() {
    window.location.href = "/bookDetail/chitiet.html";
}
