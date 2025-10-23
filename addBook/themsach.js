function addBook() {
    let tenSach = document.getElementById("bookTitle").value.trim();
    let tacGia = document.getElementById("bookAuthor").value.trim();
    let theLoai = document.getElementById("bookCategory").value;
    let nhaXB = document.getElementById("bookPublisher").value.trim();
    let namXB = document.getElementById("bookYear").value;
    let moTa = document.getElementById("bookDescription").value.trim();
    let fileInput = document.getElementById('upload');
    let preview = document.getElementById('preview');

    if (tenSach === "") {
        alert("Hãy nhập tên sách!");
        return false;
    }
    if (tacGia === "") {
        alert("Hãy nhập tên tác giả!");
        return false;
    }
    if (theLoai === "") {
        alert("Hãy chọn thể loại!");
        return false;
    }
    if (nhaXB === "") {
        alert("Hãy nhập tên nhà xuất bản!");
    }
    if (namXB === "" || isNaN(namXB)) {
        alert("Phải nhập năm xuất bản hợp lệ!");
        return false;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const base64Image = file ? reader.result : "";
        let listBook = JSON.parse(localStorage.getItem("listBook")) || [];
        const newBook = {
            id: Date.now(),
            tenSach,
            tacGia,
            theLoai,
            nhaXB,
            namXB,
            moTa,
            anh: base64Image, 
            ngayThem: new Date().toLocaleDateString("vi-VN")
        };

        listBook.push(newBook);
        localStorage.setItem("listBook", JSON.stringify(listBook));

        alert("Thêm sách thành công!");
        preview.src = base64Image; 
        document.getElementById("addBook").reset();
    };

    if (file) reader.readAsDataURL(file);
    else reader.onload(); 
}
document.getElementById("importFile").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
        const importedBooks = JSON.parse(e.target.result); 
        if (!Array.isArray(importedBooks)) {
            alert("❌ File JSON không đúng định dạng!");
            return;
        }
        let currentBooks = JSON.parse(localStorage.getItem("listBook")) || [];
        const updatedBooks = [...currentBooks, ...importedBooks];
        localStorage.setItem("listBook", JSON.stringify(updatedBooks));
        alert(`✅ Đã nhập ${importedBooks.length} quyển sách thành công!`);
        document.getElementById("addBook").reset();
        } catch (err) {
        alert("❌ Lỗi khi đọc file JSON!");
        console.error(err);
        }
    };
    reader.readAsText(file);
});


