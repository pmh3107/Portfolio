#!/usr/bin/env bash
set -euo pipefail

# Đồng bộ main = develop để tránh conflict khi mục tiêu là
# lấy toàn bộ code từ develop.
# CẢNH BÁO: thao tác này sẽ ghi đè lịch sử/commit trên main khi push --force-with-lease.

REMOTE="${1:-origin}"
MAIN_BRANCH="${2:-main}"
DEVELOP_BRANCH="${3:-develop}"

if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  echo "❌ Remote '$REMOTE' không tồn tại trong repo này."
  echo "   Hãy thêm remote trước: git remote add origin <repo-url>"
  exit 1
fi

echo "➡️ Fetch latest từ $REMOTE..."
git fetch "$REMOTE" "$MAIN_BRANCH" "$DEVELOP_BRANCH"

echo "➡️ Checkout $MAIN_BRANCH"
git checkout "$MAIN_BRANCH"

echo "➡️ Reset $MAIN_BRANCH theo $REMOTE/$DEVELOP_BRANCH (take all code from develop)"
git reset --hard "$REMOTE/$DEVELOP_BRANCH"

echo "➡️ Push cập nhật lên $REMOTE/$MAIN_BRANCH"
git push "$REMOTE" "$MAIN_BRANCH" --force-with-lease

echo "✅ Hoàn tất: $MAIN_BRANCH hiện giống hệt $DEVELOP_BRANCH"
