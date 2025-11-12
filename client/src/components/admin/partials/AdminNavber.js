import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

const AdminNavbar = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.classList.add("fade-transition");

    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }

    const timer = setTimeout(() => {
      document.body.classList.remove("fade-transition");
    }, 300);
    return () => clearTimeout(timer);
  }, [darkMode]);

  const handleSearch = async () => {
    if (!query.trim()) {
      enqueueSnackbar("Vui lòng nhập từ khóa tìm kiếm!", { variant: "warning" });
      return;
    }

    try {
      const res = await fetch(`/api/products?search=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Không thể lấy dữ liệu");
      const data = await res.json();
      setResults(data);
      enqueueSnackbar(`Tìm thấy ${data.length} sản phẩm`, { variant: "success" });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Lỗi khi tìm kiếm sản phẩm!", { variant: "error" });
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <nav className="admin-navbar">
        <div className="navbar-left">
          <span onClick={() => history.push("/admin/dashboard")} className="brand">
            Ecommerce
          </span>
        </div>

        {showSearch && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>🔍</button>

            {/* Hiển thị danh sách kết quả */}
            {results.length > 0 && (
              <ul className="search-results">
                {results.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => history.push(`/admin/products/${item.id}`)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="navbar-right">
          <button className="icon-btn" title="Tìm kiếm" onClick={() => setShowSearch(!showSearch)}>
            🔎
          </button>

          <button
            className="icon-btn"
            title="Dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="icon-btn" title="Đăng xuất" onClick={logout}>
            🚪
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default AdminNavbar;
