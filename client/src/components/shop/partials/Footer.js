import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="container" style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
  <div className="row">
    <div className="blog-outer-container">
      <div className="block-title" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "28px", color: "#333", textTransform: "uppercase", fontWeight: "bold" }}>TIN TỨC CỬA HÀNG</h2>
      </div>
      <div className="blog-inner" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div className="col-lg-6 col-md-6 col-sm-6" style={{ flex: "1", maxWidth: "48%", boxSizing: "border-box" }}>
          <div className="entry-thumb image-hover2" style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "15px", position: "relative" }}>
            <a href="#">
              <img alt="Blog" src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/mobile_blog_2_cc74a8477a.jpg" width="50px" height="255.46px" style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease, opacity 0.3s ease" }} />
            </a>
          </div>
          <div className="blog-preview_info" style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="blog-preview_title">
              <a href="#" style={{ color: "#333", fontSize: "18px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "10px" }}>Review balo laptop HGFD 13h</a>
            </h4>
            <ul className="post-meta" style={{ listStyle: "none", padding: "0", margin: "10px 0 15px", display: "flex", flexWrap: "wrap", gap: "10px", color: "#666", fontSize: "14px" }}>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-user" style={{ marginRight: "5px" }}></i>được đăng bởi <a href="#">admin</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-comments" style={{ marginRight: "5px" }}></i><a href="#">8 nhận xét</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i><span className="day">12</span> <span className="tháng">Tháng hai</span></li>
            </ul>
            <div className="blog-preview_desc" style={{ color: "#555", lineHeight: "1.6", fontSize: "14px", marginBottom: "15px" }}>
              Cùng với đó là những chiếc balo laptop nhỏ gọn được khách hàng lựa chọn hàng ngày. Một trong những ưu điểm nổi bật nhất của balo laptop 13 inch là thiết kế nhỏ gọn và thân thiện. Sau đây, KOS sẽ review balo laptop dưới 10 triệu thật chi tiết cho các bạn dễ dàng lựa chọn.
            </div>
            <a className="blog-preview_btn" href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textTransform: "uppercase", fontWeight: "bold", borderRadius: "5px", textDecoration: "none" }}>
              ĐỌC THÊM
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6" style={{ flex: "1", maxWidth: "48%", boxSizing: "border-box" }}>
          <div className="entry-thumb image-hover2" style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "15px", position: "relative" }}>
            <a href="#">
              <img alt="Blog" src="https://tiki.vn/blog/wp-content/uploads/2023/02/nen-mua-dien-thoai-nao.jpg" width="550px" height="255.46px" style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease, opacity 0.3s ease" }} />
            </a>
          </div>
          <div className="blog-preview_info" style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="blog-preview_title">
              <a href="#" style={{ color: "#333", fontSize: "18px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "10px" }}>Nên chọn balo màu gì để PHÙ HỢP dễ phối đồ nhất</a>
            </h4>
            <ul className="post-meta" style={{ listStyle: "none", padding: "0", margin: "10px 0 15px", display: "flex", flexWrap: "wrap", gap: "10px", color: "#666", fontSize: "14px" }}>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-user" style={{ marginRight: "5px" }}></i>được đăng bởi <a href="#">admin</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-comments" style={{ marginRight: "5px" }}></i><a href="#">4 nhận xét</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i><span className="day">25</span> <span className="tháng">Tháng 1</span></li>
            </ul>
            <div className="blog-preview_desc" style={{ color: "#555", lineHeight: "1.6", fontSize: "14px", marginBottom: "15px" }}>
              Trong cuộc sống thường ngày, balo gắn một vai trò vô cùng quan trọng. Những mẫu mã và màu sắc của chiếc balo mà bạn sở hữu cũng phản ánh thẩm mỹ và phong cách thời trang của chính mình. Bên cạnh thương hiệu, mẫu mã, chất liệu...
            </div>
            <a className="blog-preview_btn" href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textTransform: "uppercase", fontWeight: "bold", borderRadius: "5px", textDecoration: "none" }}>
              ĐỌC THÊM
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
        {/* Newsletter Section */}
        <div
          className="newsletter-wrap"
          style={{
            backgroundColor: "#444",
            padding: "20px 0",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h4 style={{ color: "#ffcc00", marginBottom: "15px" }}>Bản tin</h4>
            <form>
              <input
                type="text"
                placeholder="Nhập địa chỉ email của bạn"
                style={{
                  padding: "10px",
                  width: "60%",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ffcc00",
                  border: "none",
                  borderRadius: "5px",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        {/* Footer Middle Section */}
        <div className="footer-middle" style={{ padding: "30px 0" }}>
          <div className="container">
            <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Column */}
              <div className="footer-column" style={{ width: "23%" }}>
                <h4 style={{ color: "#ffcc00" }}>Hướng dẫn mua sắm</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li><a href="blog.html" style={linkStyle}>Blog</a></li>
                  <li><a href="faq.html" style={linkStyle}>Câu hỏi thường gặp</a></li>
                  <li><a href="#" style={linkStyle}>Thanh toán</a></li>
                  <li><a href="#" style={linkStyle}>Chuyến hàng</a></li>
                  <li><a href="#" style={linkStyle}>Đơn hàng của tôi ở đâu?</a></li>
                  <li><a href="#" style={linkStyle}>Chính sách hoàn trả</a></li>
                </ul>
              </div>
              {/* Other Columns */}
              <div className="footer-column" style={{ width: "23%" }}>
                <h4 style={{ color: "#ffcc00" }}>Cố vấn phong cách</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li><a href="login.html" style={linkStyle}>Tài khoản của bạn</a></li>
                  <li><a href="#" style={linkStyle}>Thông tin</a></li>
                  <li><a href="#" style={linkStyle}>Địa chỉ</a></li>
                  <li><a href="#" style={linkStyle}>Giảm giá</a></li>
                  <li><a href="#" style={linkStyle}>Lịch sử đơn hàng</a></li>
                  <li><a href="#" style={linkStyle}>Theo dõi đơn hàng</a></li>
                </ul>
              </div>
              <div className="footer-column" style={{ width: "23%" }}>
                <h4 style={{ color: "#ffcc00" }}>Thông tin</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li><a href="sitemap.html" style={linkStyle}>Sơ đồ trang web</a></li>
                  <li><a href="#" style={linkStyle}>Cụm từ tìm kiếm</a></li>
                  <li><a href="#" style={linkStyle}>Tìm kiếm nâng cao</a></li>
                  <li><a href="about_us.html" style={linkStyle}>Giới thiệu</a></li>
                  <li><a href="contact_us.html" style={linkStyle}>Liên hệ với chúng tôi</a></li>
                  <li><a href="#" style={linkStyle}>Nhà cung cấp</a></li>
                </ul>
              </div>
              <div className="footer-column" style={{ width: "23%" }}>
                <h4 style={{ color: "#ffcc00" }}>Liên hệ với chúng tôi</h4>
                <address style={{ fontStyle: "normal", marginBottom: "10px" }}>
                  123 Main Street, Anytown, CA 12345 Hoa Kỳ
                </address>
                <p style={{ margin: "0 0 5px" }}>📞 +(012) 365-6531</p>
                <p style={{ margin: "0" }}>
                  ✉️ <a href="mailto:abc@magikcommerce.com" style={linkStyle}>abc@magikcommerce.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div
          className="footer-bottom"
          style={{
            backgroundColor: "#222",
            color: "#ccc",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0" }}>
            &copy; {moment().format("YYYY")} Magikc Commerce. Đã đăng ký bản quyền.
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

// Common style for links
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  margin: "5px 0",
};

export default Footer;
