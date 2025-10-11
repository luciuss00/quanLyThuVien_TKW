var listEmp = document.getElementById("listEmp");
var listBook = JSON.parse(localStorage.getItem("listBook")) || [];
function display() {
    if(listBook.length === 0) {
        listEmp.innerHTML = `<tr><td colspan=9 class="no-data">Danh sách trống</td></tr>`;
        return;
    }
    else {
        var row = document.getElementById("listEmp");
        row.innerHTML = "";
        listBook.forEach(function(book, index) {
            row.innerHTML += `
                <td>${index + 1}</td>
                <td>${book.tenSach}</td>
                <td>${book.tacGia}</td>
                <td>${book.theLoai}</td>
                <td>${book.nhaXB}</td>
                <td>${book.namXB}</td>
                <td>${book.moTa || "-"}</td>
                <td>${book.ngayThem}</td>
                <td>
                    <button class="delete" data-id="${book.id}">Xóa</button>
                </td>
            `
        })
    }
    let button = document.querySelectorAll(".delete");
    button.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
        let id = Number(e.target.dataset.id);
            deleteBook(id);
        });
    });
    function deleteBook(id) {
        if (confirm("Có muốn tiếp tục k")) {
            listBook = listBook.filter(function(kt) {
                return kt.id !== id
            });
            localStorage.setItem("listBook", JSON.stringify(listBook));
            display();
        }
    }
}
display();