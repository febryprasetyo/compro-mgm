#!/bin/bash

# Medigas Web Deployment Script
echo "🚀 Starting deployment..."

# 1. Pull the latest code
echo "📥 Pulling latest changes from git..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install --frozen-lockfile || npm install

# 3. Prisma setup
echo "🗄️  Generating Prisma client and updating database..."
npx prisma generate
npx prisma db push # Using db push for SQLite; use migrate deploy for other DBs

# 4. Build the application
echo "🏗️  Building Next.js application..."
npm run build

# 5. Restart with PM2
echo "🔄 Restarting application with PM2..."
# Check if ecosystem.config.js exists, otherwise use direct npm start
if [ -f ecosystem.config.js ]; then
  pm2 restart ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production
else
  pm2 restart medigas-web || pm2 start "npm run start" --name "medigas-web"
fi

echo "✅ Deployment complete! Status:"
pm2 status medigas-web
