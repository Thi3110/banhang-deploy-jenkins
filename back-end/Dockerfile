# Sử dụng Node.js 18 làm base image
FROM node:18

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Copy file package.json và package-lock.json để cài dependency
COPY package*.json ./

# Cài đặt các package cần thiết
RUN npm install

# Copy toàn bộ mã nguồn backend vào container
COPY . .

# Expose cổng ứng dụng (đổi nếu app bạn chạy port khác)
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]
