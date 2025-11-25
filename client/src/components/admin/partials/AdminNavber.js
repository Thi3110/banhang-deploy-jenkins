import { useSnackbar } from "notistack";
import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AdminNavber = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    enqueueSnackbar("Đăng xuất thành công!", { variant: "success" });
    setTimeout(() => window.location.href = "/", 800);
  };

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      enqueueSnackbar("Chuyển sang Light Mode", { variant: "info" });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      enqueueSnackbar("Chuyển sang Dark Mode", { variant: "info" });
    }
  };

  // Load theme khi mở trang
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Fragment>
      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-20" onClick={() => setMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-30 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 font-bold text-xl border-b dark:border-gray-700">Menu</div>
        <ul className="p-4 space-y-3">
          <li onClick={() => { history.push("/admin/dashboard"); setMenuOpen(false); }} className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</li>
          <li onClick={() => { history.push("/admin/products"); setMenuOpen(false); }} className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Products</li>
          <li onClick={() => { history.push("/admin/orders"); setMenuOpen(false); }} className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Orders</li>
          <li onClick={logout} className="cursor-pointer p-2 rounded hover:bg-red-100 dark:hover:bg-red-900 text-red-600">Logout</li>
        </ul>
      </div>

      <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white dark:bg-gray-900 transition-all duration-300">
        {/* Logo + Menu */}
        <div className="flex items-center space-x-4">
          <span onClick={() => setMenuOpen(true)} className="cursor-pointer">
            <svg className="w-8 h-8 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          <span onClick={() => history.push("/admin/dashboard")} className="font-bold uppercase text-2xl text-gray-800 dark:text-white" style={{ letterSpacing: "0.5rem" }}>
            ECOMMERCE
          </span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">

          {/* Ô tìm kiếm */}
          <div className="relative">
            {searchOpen && (
              <input
                type="text"
                placeholder="Tìm kiếm..."
                autoFocus
                onBlur={() => setSearchOpen(false)}
                className="absolute right-0 top-12 w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
              />
            )}
            <div onClick={() => setSearchOpen(!searchOpen)} className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 cursor-pointer">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Dark Mode */}
          <div onClick={toggleDarkMode} className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 cursor-pointer">
            <svg className="w-8 h-8 text-gray-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>

          {/* User */}
          <div className="userDropdownBtn hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-2 rounded-lg relative">
            <svg className="cursor-pointer w-8 h-8 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="userDropdown absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded shadow-lg border dark:border-gray-700">
              <ul className="text-gray-700 dark:text-gray-300">
                <li onClick={() => history.push("/")} className="py-2 px-8 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Shop</li>
                <li onClick={() => setMenuOpen(true)} className="py-2 px-8 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Setting</li>
                <li onClick={logout} className="py-2 px-8 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer text-red-600">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default AdminNavber;