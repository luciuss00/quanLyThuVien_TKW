function addBook() {
    let tenSach = document.getElementById("bookTitle").value.trim();
    let tacGia = document.getElementById("bookAuthor").value.trim();
    let theLoai = document.getElementById("bookCategory").value;
    let nhaXB = document.getElementById("bookPublisher").value.trim();
    let namXB = document.getElementById("bookYear").value;
    let moTa =  document.getElementById("bookDescription").value.trim();
    
    let listBook = JSON.parse(localStorage.getItem("listBook"));
    const newBook = {
        tenSach,
        tacGia,
        theLoai,
        nhaXB,
        namXB,
        moTa,
        ngayThem: new Date().toLocaleDateString("vi-VN")
    };
    listBook.push(newBook);
    localStorage.setItem("listBook", JSON.stringify(listBook));
    alert("Thành công!");
}