#!/bin/bash
set -e

echo "Cleaning build cache and dependencies..."

# Remove Next.js build directory
if [ -d ".next" ]; then
  rm -rf .next
  echo "Removed .next directory"
fi

# Remove node_modules cache
if [ -d "node_modules/.cache" ]; then
  rm -rf node_modules/.cache
  echo "Removed node_modules cache"
fi

echo "Build cache cleaned successfully"
