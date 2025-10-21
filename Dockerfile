FROM node:18

WORKDIR /app

# Copy package.json từ thư mục back-end
COPY back-end/package*.json ./
RUN npm install

# Copy toàn bộ code backend vào container
COPY back-end ./

EXPOSE 5000

CMD ["npm", "start"]
