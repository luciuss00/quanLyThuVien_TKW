document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("localSearchInput");
  const searchIcon = document.getElementById("localSearchIcon");
  const resultsGrid = document.getElementById("resultsGrid");
  const resultsTitle = document.getElementById("resultsTitle");
  const stats = document.getElementById("searchStats");
  const noResults = document.getElementById("noResults");
  const resetBtn = document.getElementById("resetFilters");
  const authorFilter = document.getElementById("authorFilter");
  let allBooks = JSON.parse(localStorage.getItem("listBook")) || [];
  const defaultBooks = [
    { 
      tenSach: "Đắc nhân tâm", 
      tacGia: "Dale Carnegie", 
      theLoai: "Phát triển bản thân", 
      nhaXB: "NXB Lao Động", 
      namXB: 2023, 
      anh: "../Img/Đắc nhân tâm.jpg" 
    },
    { 
      tenSach: "Nhà giả kim", 
      tacGia: "Paulo Coelho", 
      theLoai: "Tâm linh", 
      nhaXB: "NXB Lao Động", 
      namXB: 2021, 
      anh: "../Img/Nhà giả kim.jpg" 
    },
    { 
      tenSach: "Tuổi trẻ đáng giá bao nhiêu", 
      tacGia: "Rosie Nguyễn", 
      theLoai: "Kỹ năng sống", 
      nhaXB: "NXB Thế Giới", 
      namXB: 2020, 
      anh: "../Img/Tuổi trẻ đáng giá bao nhiêu.jpg" 
    },
  ];

  if (allBooks.length === 0) {
    allBooks = defaultBooks;
  }
  function renderBooks(list, showStats = true) {
  if (!list || list.length === 0) {
    resultsGrid.innerHTML = "";
    noResults.style.display = "block";
    stats.textContent = "";
    return;
  }
  noResults.style.display = "none";
  stats.innerHTML = showStats ? `Tìm thấy <strong>${list.length}</strong> kết quả.` : "";
  resultsGrid.innerHTML = list.map(b => {
    const imagePath = `/Img/${encodeURIComponent(b.tenSach)}.jpg`;
    return `
      <div class="book-card">
        <img src="${imagePath}" alt="${b.tenSach}" onerror="this.src='/Img/default-book.png'">
        <div class="book-content">
          <h3>${b.tenSach}</h3>
          <p><strong>Tác giả:</strong> ${b.tacGia || "Không rõ"}</p>
          <p><strong>Thể loại:</strong> ${b.theLoai || "—"}</p>
          <p><strong>Năm XB:</strong> ${b.namXB || "—"}</p>
          <p><strong>Nhà XB:</strong> ${b.nhaXB || "—"}</p>
        </div>
      </div>
    `;
  }).join("");
}
  function showDefaultBooks() {
    resultsTitle.textContent = " Sách đề xuất";
    renderBooks(allBooks.slice(0, 3), false);
  }
  showDefaultBooks();
  function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
      showDefaultBooks();
      return;
    }
    const filtered = allBooks.filter(b =>
      (b.tenSach && b.tenSach.toLowerCase().includes(keyword)) ||
      (b.tacGia && b.tacGia.toLowerCase().includes(keyword)) ||
      (b.theLoai && b.theLoai.toLowerCase().includes(keyword))
    );
    resultsTitle.innerHTML = `Kết quả cho "<strong>${keyword}</strong>"`;
    renderBooks(filtered);
  }
  function applyFilters() {
    let filtered = [...allBooks];
    const checked = document.querySelector('.filter-group input[type="checkbox"]:checked');
    if (checked) {
      filtered = filtered.filter(b => b.theLoai === checked.value);
    }
    const authorValue = authorFilter.value.trim().toLowerCase();
    if (authorValue) {
      filtered = filtered.filter(b => b.tacGia && b.tacGia.toLowerCase().includes(authorValue));
    }

    renderBooks(filtered);
  }
  authorFilter.addEventListener("input", applyFilters);

  document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", e => {
      if (e.target.checked) {
        document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(other => {
          if (other !== e.target) other.checked = false;
        });
      }
      applyFilters();
    });
  });
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    authorFilter.value = "";
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
    showDefaultBooks();
  });
  searchIcon.addEventListener("click", performSearch);
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") performSearch();
  });
});
