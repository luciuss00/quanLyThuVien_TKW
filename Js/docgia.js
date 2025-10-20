let docGia = JSON.parse(localStorage.getItem("muonSachInfo")) || [];
if (!Array.isArray(docGia)) {
  docGia = [docGia];
}
async function loadDocGia() {
  try {
    const res = await fetch("/userMuonSach.json");
    if (!res.ok) throw new Error("Không thể tải file JSON!");
    const data = await res.json();
    localStorage.setItem("muonSachInfo", JSON.stringify(data));
    renderTable(data);

<<<<<<< HEAD
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

const tbody = document.getElementById("userTableBody");

tbody.innerHTML = "";


userLocal.forEach((user,index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${user.userName}</td>
    <td>${user.email}</td>
    <td>${user.gender}</td>
    <td>${user.tel}</td>
    
  `;
  tbody.appendChild(row);
=======
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Không thể đọc dữ liệu từ file JSON!");
  }
}
function renderTable(data) {
  const tbody = document.getElementById("userTableBody");
  tbody.innerHTML = ""; 
  data.forEach((dg, index) => {
    const row = document.createElement("tr");
    row.innerHTML += `
      <td>${index + 1}</td>
      <td>${dg.ten}</td>
      <td>${dg.ma}</td>
      <td>${dg.sdt}</td>
      <td>${dg.tenSach}</td>
      <td>${dg.ngayMuon}</td>
      <td>${dg.ngayTra}</td>
      <td><button onclick="xoaDocGia(${index})" id="bt">Xóa</button></td>
    `;
    tbody.appendChild(row);
  });
}
function xoaDocGia(i) {
  confirm("Ban có chắc chắn muốn xóa không!");
  let ds = JSON.parse(localStorage.getItem("muonSachInfo")) || [];
  ds.splice(i, 1);
  localStorage.setItem("muonSachInfo", JSON.stringify(ds));
  renderTable(ds); 
}
document.addEventListener("DOMContentLoaded", () => {
  if (docGia.length > 0) {
    renderTable(docGia);
  } else {
    loadDocGia();
  }
>>>>>>> 279eeba179c6f4665e2b88554be8ec4d1128b140
});
