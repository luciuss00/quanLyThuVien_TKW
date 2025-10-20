document.addEventListener("DOMContentLoaded", () => {
  const fromDetail = sessionStorage.getItem("fromDetailPage");
  if (!fromDetail) {
    sessionStorage.removeItem("searchState"); 
  }
  sessionStorage.removeItem("fromDetailPage");
  const searchInput = document.getElementById("localSearchInput");
  const searchIcon = document.getElementById("localSearchIcon");
  const resultsGrid = document.getElementById("resultsGrid");
  const resultsTitle = document.getElementById("resultsTitle");
  const stats = document.getElementById("searchStats");
  const noResults = document.getElementById("noResults");
  const resetBtn = document.getElementById("resetFilters");
  const authorFilter = document.getElementById("authorFilter");
  const yearFilter = document.getElementById("yearFilter");
  let allBooks = JSON.parse(localStorage.getItem("listBook")) || [];
  for (let y = 1990; y <= 2025; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearFilter.appendChild(opt);
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
    resultsGrid.innerHTML = list
      .map((b) => {
        const imagePath = `/Img/${encodeURIComponent(b.tenSach)}.jpg`;
        const bookData = encodeURIComponent(JSON.stringify(b));
        return `
          <div class="book-card" onclick="viewBookDetail('${bookData}')">
            <img src="${imagePath}" alt="${b.tenSach}" onerror="this.src='/Img/default-book.png'">
            <div class="book-content">
              <h3>${b.tenSach}</h3>
              <p><strong>Tác giả:</strong> ${b.tacGia || "Không rõ"}</p>
            </div>
          </div>
        `;
      })
      .join("");
  }
  window.viewBookDetail = function (bookData) {
    const username = localStorage.getItem("username");
    if (!username) {
      alert("⚠️ Vui lòng đăng nhập để xem chi tiết sách!");
      return;
    }

    const book = JSON.parse(decodeURIComponent(bookData)); 
    localStorage.setItem("sachDangXem", book.tenSach);
    sessionStorage.setItem("fromDetailPage", "true");
    window.location.href = "/bookDetail/chitiet.html";
  };

  function showDefaultBooks() {
    resultsTitle.textContent = "Sách đề xuất";
    renderBooks(allBooks.slice(0, 8), false);
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
    if (checked) filtered = filtered.filter(b => b.theLoai === checked.value);
    const authorValue = authorFilter.value.trim().toLowerCase();
    if (authorValue) filtered = filtered.filter(b => b.tacGia && b.tacGia.toLowerCase().includes(authorValue));
    const yearValue = yearFilter.value.trim();
    if (yearValue) filtered = filtered.filter(b => String(b.namXB) === yearValue);
    resultsTitle.textContent = filtered.length ? "Kết quả lọc" : "";
    renderBooks(filtered);
  }
  authorFilter.addEventListener("input", applyFilters);
  yearFilter.addEventListener("change", applyFilters);
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
    yearFilter.value = "";
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
    showDefaultBooks();
  });

  searchIcon.addEventListener("click", performSearch);
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") performSearch();
  });
  document.addEventListener("click", function (e) {
    const card = e.target.closest(".book-card");
    if (card) {
      sessionStorage.setItem("searchState", JSON.stringify({
        keyword: searchInput.value,
        author: authorFilter.value,
        year: yearFilter.value,
        checkedCategory: document.querySelector('.filter-group input[type="checkbox"]:checked')?.value || "",
        resultsTitle: resultsTitle.textContent,
        statsText: stats.textContent
      }));
    }
  });
  const savedState = sessionStorage.getItem("searchState");
  if (savedState) {
    const state = JSON.parse(savedState);
    searchInput.value = state.keyword || "";
    authorFilter.value = state.author || "";
    yearFilter.value = state.year || "";
    if (state.checkedCategory) {
      document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => {
        cb.checked = (cb.value === state.checkedCategory);
      });
    }

    if (state.keyword) performSearch();
    else applyFilters();
    resultsTitle.textContent = state.resultsTitle || "Sách đề xuất";
    stats.textContent = state.statsText || "";
  } else {
    showDefaultBooks();
  }
});
