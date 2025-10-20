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
            window.location.href = "chitiet.html";
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

function displayAllGenres() {
    categoriesContainer.innerHTML = "";
    const genres = getGenres();

    genres.forEach(genre => {
        const books = listBook.filter(b => b.theLoai === genre);
        createGenreSection(genre, books);
    });
}

displayAllGenres();
