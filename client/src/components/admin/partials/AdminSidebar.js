import React, { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const history = useHistory();

  // ĐÓNG SIDEBAR KHI CLICK NGOÀI
  const closeSidebar = () => {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  };

  return (
    <Fragment>
      {/* OVERLAY MỜ KHI MỞ SIDEBAR */}
      <div
        id="overlay"
        className="fixed inset-0 bg-black bg-opacity-60 z-40 hidden"
        onClick={closeSidebar}
      />

      {/* SIDEBAR */}
      <div
        id="sidebar"
        className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-800 shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out
                   md:translate-x-0 md:static md:w-3/12 lg:w-2/12 md:block"
        style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa" }}
      >
        <div className="p-6">
          {/* Dashboard */}
          <div
            onClick={() => { history.push("/admin/dashboard"); closeSidebar(); }}
            className={`flex flex-col items-center py-6 rounded-lg cursor-pointer transition
              ${location.pathname === "/admin/dashboard"
                ? "bg-orange-50 dark:bg-orange-900 border-r-4 border-orange-500"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="mt-2 text-sm font-medium">Dashboard</span>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Categories */}
          <div
            onClick={() => { history.push("/admin/dashboard/categories"); closeSidebar(); }}
            className={`flex flex-col items-center py-6 rounded-lg cursor-pointer transition
              ${location.pathname.includes("categories")
                ? "bg-orange-50 dark:bg-orange-900 border-r-4 border-orange-500"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="mt-2 text-sm font-medium">Categories</span>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Products */}
          <div
            onClick={() => { history.push("/admin/dashboard/products"); closeSidebar(); }}
            className={`flex flex-col items-center py-6 rounded-lg cursor-pointer transition
              ${location.pathname.includes("products")
                ? "bg-orange-50 dark:bg-orange-900 border-r-4 border-orange-500"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="mt-2 text-sm font-medium">Product</span>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Orders */}
          <div
            onClick={() => { history.push("/admin/dashboard/orders"); closeSidebar(); }}
            className={`flex flex-col items-center py-6 rounded-lg cursor-pointer transition
              ${location.pathname.includes("orders")
                ? "bg-orange-50 dark:bg-orange-900 border-r-4 border-orange-500"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="mt-2 text-sm font-medium">Order</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;