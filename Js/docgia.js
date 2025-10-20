
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
});
