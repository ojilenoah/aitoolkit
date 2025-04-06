#!/bin/bash

# Build the client
npm run build

# Ensure files are in the correct location for Vercel
mkdir -p dist/public
cp -r dist/public/* dist/ 2>/dev/null || true

echo "Build completed for Vercel deployment"