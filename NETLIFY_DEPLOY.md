# Hướng dẫn Deploy x-tech-landing lên Netlify

## Vấn đề hiện tại

Dự án có cấu trúc thư mục không chuẩn cho Netlify:
- File `index.html` nằm trong `public/` thay vì root
- CSS được generate vào `css/output.css` ở root
- Assets (images, js) nằm trong `public/`

## Giải pháp

### Option 1: Sử dụng Netlify Configuration (Khuyến nghị)

Tạo file `netlify.toml` ở root project:

```toml
[build]
  # Thư mục chứa file build output
  publish = "public"
  
  # Lệnh build
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Lưu ý:** Cần sửa script build trong `package.json`:

```json
"scripts": {
  "build": "tailwindcss -i ./src/input.css -o ./public/css/output.css --minify"
}
```

### Option 2: Di chuyển files (Đơn giản hơn)

1. **Di chuyển `index.html` về root:**
   ```bash
   mv public/index.html ./index.html
   ```

2. **Di chuyển assets về root:**
   ```bash
   mv public/image ./image
   mv public/js ./js
   ```

3. **Cập nhật đường dẫn trong `index.html`:**
   - Giữ nguyên: `css/output.css`
   - Đổi: `./image/` → `image/`
   - Đổi: `js/animations.js` → `js/animations.js`

4. **Cập nhật `package.json`:**
   ```json
   "scripts": {
     "build": "tailwindcss -i ./src/input.css -o ./css/output.css --minify"
   }
   ```

## Deploy Steps

### 1. Push lên GitHub

```bash
git add .
git commit -m "Configure for Netlify deployment"
git push origin main
```

### 2. Deploy trên Netlify

1. Login vào [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn GitHub repository
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `public` (nếu dùng Option 1) hoặc `.` (nếu dùng Option 2)
5. Click **"Deploy site"**

### 3. Kiểm tra

- Netlify sẽ tự động build và deploy
- Site sẽ có URL: `https://[random-name].netlify.app`
- Có thể custom domain sau

## Troubleshooting

### CSS không load

- Kiểm tra đường dẫn trong `index.html`
- Đảm bảo build command đã chạy thành công
- Check publish directory trong Netlify settings

### Images không hiển thị

- Kiểm tra đường dẫn tương đối
- Đảm bảo folder `image/` nằm trong publish directory

### Build failed

- Check Node.js version (Netlify default: Node 16+)
- Xem build logs trong Netlify dashboard
- Đảm bảo `package.json` có đầy đủ dependencies

## Khuyến nghị

**Dùng Option 1** với file `netlify.toml` vì:
- Cấu hình rõ ràng
- Dễ maintain
- Có thể config thêm redirects, headers, v.v.
- Không cần thay đổi cấu trúc project hiện tại nhiều
