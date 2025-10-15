#!/bin/bash

# Script to clean up duplicate files in public directory

echo "🧹 Cleaning up duplicate files in public directory..."

# Remove package.json from public
if [ -f "public/package.json" ]; then
    rm public/package.json
    echo "✅ Removed public/package.json"
fi

# Remove package-lock.json from public
if [ -f "public/package-lock.json" ]; then
    rm public/package-lock.json
    echo "✅ Removed public/package-lock.json"
fi

# Remove node_modules from public
if [ -d "public/node_modules" ]; then
    rm -rf public/node_modules
    echo "✅ Removed public/node_modules/"
fi

# Remove tailwind.config.js from public (it should only be in root)
if [ -f "public/tailwind.config.js" ]; then
    rm public/tailwind.config.js
    echo "✅ Removed public/tailwind.config.js"
fi

echo ""
echo "✨ Cleanup completed!"
echo ""
echo "📂 Current public directory structure:"
ls -la public/

echo ""
echo "🔍 Verifying required files..."
if [ -f "public/index.html" ]; then
    echo "  ✅ index.html exists"
else
    echo "  ❌ index.html missing!"
fi

if [ -f "public/css/output.css" ]; then
    echo "  ✅ css/output.css exists"
else
    echo "  ❌ css/output.css missing!"
fi

if [ -f "public/js/animations.js" ]; then
    echo "  ✅ js/animations.js exists"
else
    echo "  ❌ js/animations.js missing!"
fi

if [ -d "public/image" ]; then
    echo "  ✅ image/ directory exists"
else
    echo "  ❌ image/ directory missing!"
fi

echo ""
echo "🚀 Ready for deployment!"
echo "Next steps:"
echo "  1. Test build: npm run build"
echo "  2. Commit: git add . && git commit -m 'Fix deployment issues'"
echo "  3. Push: git push origin main"
