# ✅ Deployment Checklist

## Pre-deployment

- [x] `netlify.toml` đã được tạo
- [x] `package.json` scripts đã được cập nhật
- [x] `.gitignore` đã được cập nhật
- [x] CSS output path: `public/css/output.css`
- [x] HTML đúng vị trí: `public/index.html`
- [x] Assets trong: `public/image/`, `public/js/`

## Trước khi push

```bash
# 1. Test build locally
npm run build

# 2. Kiểm tra file generated
ls public/css/output.css

# 3. Commit changes
git add .
git commit -m "Configure for Netlify deployment"

# 4. Push to GitHub
git push origin main
```

## Trên Netlify

1. ✓ Import project từ GitHub
2. ✓ Build command: `npm run build` (auto-detect từ netlify.toml)
3. ✓ Publish directory: `public` (auto-detect từ netlify.toml)
4. ✓ Click "Deploy site"

## Sau khi deploy

- [ ] Kiểm tra site URL
- [ ] Test responsive trên mobile
- [ ] Verify images load correctly
- [ ] Check CSS styling
- [ ] Test all links

## Nếu có lỗi

### Build failed
```bash
# Local test
npm install
npm run build
```

### CSS không load
- Check: `public/css/output.css` exists?
- Check: HTML link `href="css/output.css"` correct?

### Images broken
- Check: All images in `public/image/`?
- Check: Paths relative `./image/file.png`?

## Done! 🎉

Site live tại: `https://[your-site].netlify.app`
