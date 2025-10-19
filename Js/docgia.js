let docGia = JSON.parse(localStorage.getItem("muonSachInfo")) || [];
if (!Array.isArray(docGia)) {
  docGia = [docGia];
}

const tbody = document.getElementById("userTableBody");
tbody.innerHTML = "";
docGia.forEach((dg, index) => {
  console.log(dg.ten)
  const row = document.createElement("tr");
  row.innerHTML += `
    <td>${index + 1}</td>
    <td>${dg.ten}</td>
    <td>${dg.ma}</td>
    <td>${dg.sdt}</td>
    <td>${dg.tenSach}</td>
    <td>${dg.ngayMuon}</td>
    <td>${dg.ngayTra}</td>
    <td><button onclick="xoaDocGia(${index}) id="bt">Xóa</button></td>
  `;
  tbody.appendChild(row);
  
});

function xoaDocGia(i) {
  let ds = JSON.parse(localStorage.getItem("muonSachInfo")) || [];
  ds.splice(i, 1);
  localStorage.setItem("muonSachInfo", JSON.stringify(ds));
  location.reload();
}
