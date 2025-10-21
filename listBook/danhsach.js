let listBook = JSON.parse(localStorage.getItem("listBook")) || [];
const categoriesContainer = document.getElementById("categoriesContainer");

function getGenres() {
    return [...new Set(listBook.map(b => b.theLoai))];
}

function createGenreSection(genre, books) {
    const section = document.createElement("section");
    section.classList.add("genre-section");

    const header = document.createElement("div");
    header.classList.add("genre-header");
    header.innerHTML = `<h2 class="genre-title">${genre}</h2>`;
    section.appendChild(header);

    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-container");

    const row = document.createElement("div");
    row.classList.add("book-row");

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
        <div class="book-image">
            <img src="/Img/${book.tenSach}.jpg" alt="${book.tenSach}">     
        </div>
        <div class="book-info">
            <h3>${book.tenSach}</h3>
            <p>${book.tacGia}</p>
        </div>
        `;
        card.onclick = function() {
            let username = localStorage.getItem("username");
            if (!username) {
                alert("⚠️ Vui lòng đăng nhập để xem chi tiết sách!");
                return;
            }
            localStorage.setItem("sachDangXem", book.tenSach);
            window.location.href = "/bookDetail/chitiet.html";
        };
        row.appendChild(card);
    });

    const leftBtn = document.createElement("button");
    leftBtn.classList.add("carousel-btn", "left-btn");
    leftBtn.innerHTML = "&#10094;";

    const rightBtn = document.createElement("button");
    rightBtn.classList.add("carousel-btn", "right-btn");
    rightBtn.innerHTML = "&#10095;"; 

    carouselContainer.appendChild(leftBtn);
    carouselContainer.appendChild(row);
    carouselContainer.appendChild(rightBtn);
    section.appendChild(carouselContainer);
    categoriesContainer.appendChild(section);

    leftBtn.addEventListener("click", () => row.scrollBy({ left: -400, behavior: "smooth" }));
    rightBtn.addEventListener("click", () => row.scrollBy({ left: 400, behavior: "smooth" }));
}
async function docFile() {
    try {
        let existing = JSON.parse(localStorage.getItem("listBook"));
        if (existing && existing.length > 0) {
            listBook = existing;
            displayAllGenres();
            return;
        }
        const res = await fetch("/books.json");
        if (!res.ok) throw new Error("Không thể đọc file JSON");
        const data = await res.json();
        localStorage.setItem("listBook", JSON.stringify(data));
        listBook = data;
        displayAllGenres(); 
    } catch (err) {
        console.error("Lỗi đọc file JSON:", err);
    }
}

docFile();

function displayAllGenres() {
    categoriesContainer.innerHTML = "";
    const genres = getGenres();

    genres.forEach(genre => {
        const books = listBook.filter(b => b.theLoai === genre);
        createGenreSection(genre, books);
    });
}

displayAllGenres();
const role = localStorage.getItem("role");
const btnThemSach = document.getElementById("btnThemSach");

if (btnThemSach && role !== "admin") {
    btnThemSach.style.display = "none";
}