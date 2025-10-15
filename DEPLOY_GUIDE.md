# 🚀 Deploy x-tech-landing lên Netlify

## ✅ Đã cấu hình sẵn

Dự án đã được cấu hình tự động để deploy lên Netlify với:

- ✓ File `netlify.toml` - Config cho Netlify
- ✓ File `package.json` - Scripts build đã được cập nhật
- ✓ Cấu trúc: `public/` chứa tất cả files static

## 📋 Các bước Deploy

### 1. Push code lên GitHub

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 2. Deploy trên Netlify

1. Vào [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn **GitHub** và chọn repo `x-tech-landing`
4. Netlify tự động detect settings từ `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `public`
5. Click **"Deploy"**

### 3. Xong! 🎉

Site sẽ có URL: `https://[your-site-name].netlify.app`

## 🛠 Scripts available

```bash
npm run dev      # Development với Tailwind watch mode
npm run build    # Build CSS cho production (Netlify dùng)
```

## ⚙️ Cấu hình chi tiết

### netlify.toml
```toml
[build]
  publish = "public"           # Thư mục chứa files để deploy
  command = "npm run build"    # Lệnh build trước khi deploy

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200                 # SPA redirect
```

### package.json (scripts)
```json
{
  "dev": "tailwindcss -i ./src/input.css -o ./public/css/output.css --watch",
  "build": "tailwindcss -i ./src/input.css -o ./public/css/output.css --minify"
}
```

## 🔧 Nếu gặp lỗi

### Build failed
- Check logs trong Netlify dashboard
- Đảm bảo `package.json` có `tailwindcss` trong `devDependencies`

### CSS không load
- Kiểm tra file `public/css/output.css` đã được generate
- Check đường dẫn trong `public/index.html`: `href="css/output.css"`

### Images không hiển thị  
- Đảm bảo tất cả assets nằm trong `public/`
- Sử dụng đường dẫn tương đối: `./image/logo.png`

## 📝 Cấu trúc project

```
x-tech-landing/
├── netlify.toml          # ← Config Netlify
├── package.json          # ← Build scripts
├── tailwind.config.js
├── src/
│   └── input.css         # ← Input Tailwind
└── public/               # ← Deploy folder
    ├── index.html        # ← Main HTML
    ├── css/
    │   └── output.css    # ← Generated CSS
    ├── image/
    └── js/
```

## 💡 Tips

- Netlify tự động deploy khi push lên GitHub
- Có thể custom domain trong Netlify settings
- Deploy preview tự động cho Pull Requests
- Xem build logs để debug
