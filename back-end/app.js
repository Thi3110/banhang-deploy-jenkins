/*
================== Most Important ==================
* Issue 1 : Folders auto-created by CreateAllFolder()
* Issue 2: role:1 = admin, role:0 = customer
* NEW FEATURE: Integrated OpenAI Chatbot API at /api/chat
*/
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// THÊM: Import thư viện OpenAI
const OpenAI = require("openai"); 

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");

// Middleware
const { loginCheck } = require("./middleware/auth");
const CreateAllFolder = require("./config/uploadFolderCreateScript");

// Khởi tạo thư viện OpenAI Client
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    console.warn("⚠️ CẢNH BÁO: OPENAI_API_KEY không được tìm thấy. Chức năng chat AI sẽ không hoạt động.");
}
const openai = new OpenAI({ apiKey });

// Tạo folder tự động
CreateAllFolder();

// Kết nối DB 
mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("==============Mongodb Database Connected Successfully=============="))
  .catch((err) => {
    console.log("Database Not Connected !!! Error: ", err.message);
    process.exit(1);
  });


// Middleware
app.use(morgan("dev"));
// Cấu hình CORS để cho phép Front-end gọi API
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// =================================================================================
// API Endpoint cho Chatbox AI (POST /api/chat)
// =================================================================================
app.post('/api/chat', async (req, res) => {
    // Kiểm tra API Key đã được cung cấp chưa
    if (!process.env.OPENAI_API_KEY) {
        return res.status(503).json({ error: "Dịch vụ AI không khả dụng. Thiếu OPENAI_API_KEY." });
    }

    try {
        // Nhận lịch sử tin nhắn từ Front-end
        const { messages } = req.body;
        
        // Chuyển đổi định dạng messages sang định dạng của OpenAI
        // Front-end: { sender: 'user' | 'ai', text: 'nội dung' } 
        // OpenAI: { role: 'user' | 'assistant', content: 'nội dung' }
        const conversation = messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant', 
            content: msg.text
        }));

        if (!conversation || conversation.length === 0) {
            return res.status(400).json({ error: "No messages sent." });
        }

        // Gọi API Chat Completions của OpenAI
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Model AI
            messages: conversation, // Truyền toàn bộ lịch sử để duy trì ngữ cảnh
        });

        const aiResponse = completion.choices[0].message.content;
        res.json({ response: aiResponse });

    } catch (error) {
        console.error("Lỗi khi giao tiếp với OpenAI API:", error.message);
        res.status(500).json({ error: "Có lỗi xảy ra khi xử lý yêu cầu AI." });
    }
});
// =================================================================================


// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);

// Run Server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});