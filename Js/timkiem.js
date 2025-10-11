function initializeMenuSearch() {
     const searchInput = document.getElementById("localSearchInput");
    const searchIcon = document.getElementById("localSearchIcon");
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `timkiem.html?query=${encodeURIComponent(query)}`;
        }
    }
    searchIcon.addEventListener("click", performSearch);
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });
}
function displayResults(results, term) {
    const grid = document.getElementById("resultsGrid");
    const stats = document.getElementById("searchStats");
    const noRes = document.getElementById("noResults");
    const title = document.querySelector(".results-header h2"); 
    grid.innerHTML = "";
    noRes.style.display = "none";
    title.innerHTML = `Kết quả tìm kiếm cho "<strong>${term}</strong>"`;
    if (!results || results.length === 0) {
        noRes.style.display = "block";
        return;
    }
    stats.innerHTML = `Tìm thấy <strong>${results.length}</strong> kết quả.`;
    grid.innerHTML = results.map(b => `
        <div class="book-card">
            <img src="${b.image || '../Img/default-book.png'}" alt="${b.tenSach}">
            <div class="book-content">
                <h3>${b.tenSach}</h3>
                <p><strong>Tác giả:</strong> ${b.tacGia}</p>
                <button class="book-button">Xem chi tiết</button>
            </div>
        </div>
    `).join("");
}
function main(){
document.addEventListener("DOMContentLoaded", () => {
    initializeMenuSearch();
});
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    const listBook = JSON.parse(localStorage.getItem("listBook")) || [];
    const keyword = query.toLowerCase();
    const results = listBook.filter(b =>
        (b.tenSach && b.tenSach.toLowerCase().includes(keyword)) ||
        (b.tacGia && b.tacGia.toLowerCase().includes(keyword))
    );
    displayResults(results, query);
  }
main();
