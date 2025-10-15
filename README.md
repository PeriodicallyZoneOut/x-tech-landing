# X-TECH LANDING - Hướng dẫn cài đặt đầy đủ

## ⚠️ Lỗi 'tailwindcss' is not recognized

Lỗi này xảy ra vì bạn chưa cài đặt Tailwind CSS. Làm theo các bước sau:

## 📦 Bước 1: Cài đặt Dependencies

Mở Terminal/CMD trong thư mục project và chạy:

```bash
cd D:\ProgramFiles\Claude\ClaudeSource\x-tech-landing
npm install
```

Lệnh này sẽ cài đặt Tailwind CSS vào thư mục `node_modules`.

## 🔨 Bước 2: Build Tailwind CSS

Sau khi cài đặt xong, chạy một trong hai lệnh sau:

### Option 1: Development Mode (tự động build khi có thay đổi)
```bash
npm run dev
```

### Option 2: Production Build (build 1 lần, minified)
```bash
npm run build
```

## 🌐 Bước 3: Mở trang web

Sau khi build xong (file `css/output.css` được tạo), mở file `index.html` trong trình duyệt.

---

## 🚀 Alternative: Sử dụng CDN (Nhanh chóng)

Nếu bạn muốn test nhanh mà không cần cài đặt, tôi có thể tạo phiên bản sử dụng Tailwind CDN.

Bạn có muốn tôi tạo file HTML sử dụng CDN không? (Y/N)

---

## 📁 Cấu trúc Project

```
x-tech-landing/
├── index.html              # HTML chính
├── package.json            # NPM config
├── tailwind.config.js      # Tailwind config
├── .gitignore             # Git ignore file
├── src/
│   └── input.css          # Tailwind input
├── css/
│   ├── output.css         # Generated CSS (sau khi build)
│   └── custom.css         # Custom CSS (backup)
├── js/
│   └── animations.js      # JavaScript
└── README.md
```

## 🔧 Commands

```bash
# Cài đặt dependencies
npm install

# Development mode (watch changes)
npm run dev

# Production build (minified)
npm run build
```

## ✅ Kiểm tra cài đặt thành công

Sau khi chạy `npm install`, kiểm tra:
1. Thư mục `node_modules` đã được tạo
2. File `package-lock.json` đã được tạo

Sau khi chạy `npm run build`:
1. File `css/output.css` đã được tạo
2. Mở `index.html` và kiểm tra styling

## 🆘 Troubleshooting

### Lỗi: npm not found
- Cài đặt Node.js từ: https://nodejs.org/
- Khởi động lại Terminal sau khi cài

### Lỗi: Permission denied
```bash
# Windows: Chạy CMD/PowerShell as Administrator
# Hoặc dùng:
npm install --force
```

### File output.css không được tạo
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 💡 Khuyến nghị

Để phát triển, nên chạy:
```bash
npm run dev
```

Lệnh này sẽ tự động build lại CSS mỗi khi bạn thay đổi file HTML hoặc CSS.

---

## 🎨 Custom Animations có sẵn

Các animation đã được config trong `tailwind.config.js`:
- `animate-float-tablet`
- `animate-float-mobile`
- `animate-float-desktop`
- `animate-fade-in`
- `animate-slide-in-up`
- `animate-fade-in-bottom`
- `animate-arrow-bounce`
- `animate-logo-rotate`

Tất cả đã được sử dụng trong HTML với các class của Tailwind.
