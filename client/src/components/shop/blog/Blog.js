import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Chiếc iPhone 17 rất được chờ đợi bắt đầu sản xuất thử nghiệm",
      content: "Theo báo cáo mới đến từ DigiTimes, Foxconn đã bắt đầu giai đoạn New Product Introduction (NPI) đối với chiếc iPhone 17 Air sắp tới.",
      author: "Nguyễn Văn A",
      date: "01/10/2025",
      image: "/img/list/abc.jpg",
      href: "https://www.24h.com.vn/thoi-trang-hi-tech/chiec-iphone-17-rat-duoc-cho-doi-bat-dau-san-xuat-thu-nghiem-c407a1626332.html" // Thêm liên kết vào đây
    },
    
    {
      title: "Người Việt tìm 'Gemini' nhiều hơn 'ChatGPT'",
      content: "Trong danh sách công cụ AI được tìm kiếm nhiều nhất trên Google năm 2024, Gemini vượt các đối thủ như ChatGPT hay Copilot.",
      author: "Trần Thị B",
      date: "02/10/2025",
      image: "/img/list/a3.jpg",
      href: "https://www.24h.com.vn/cong-nghe-thong-tin/nguoi-viet-tim-gemini-nhieu-hon-chatgpt-c55a1626376.html" // Thêm liên kết vào đây

    },
  ];

  return (
    <div className="container mt-5 content">
  <h1 className="mb-4 text-center">Blog</h1>
  <div className="row">
    {blogPosts.map((post, index) => (
      <div key={index} className="col-md-6 mb-4">
        <a href={post.href} className="text-decoration-none">
          <div className="card h-100 shadow-sm">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {post.author} - {post.date}
              </h6>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default Blog;
