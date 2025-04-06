import express, { type Express } from "express";
import path from "path";
import fs from "fs";

/**
 * Enhanced static file serving with improved client-side routing support
 * To be used in production environments
 */
export function enhanceStaticServing(app: Express): void {
  // Don't run this in development mode
  if (app.get("env") === "development") {
    return;
  }
  
  // Get the built client files path
  const distPath = path.resolve(process.cwd(), "dist", "public");
  
  // Check if the build directory exists
  if (!fs.existsSync(distPath)) {
    console.warn(`Warning: Build directory ${distPath} not found. Client-side enhancements not applied.`);
    return;
  }
  
  // Add Cache-Control headers for static assets
  app.use((req, res, next) => {
    // Only apply to static assets
    if (req.path.match(/\.(js|css|ico|png|jpg|jpeg|svg|gif|json)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days
    }
    next();
  });
  
  // Add a helper route specifically for client-side routing in production
  // This should be placed AFTER API routes but BEFORE the catch-all handler
  app.get([
    '/login',
    '/dashboard',
    // Add other client routes here
  ], (req, res, next) => {
    // If the actual file exists, serve that instead
    const filePath = path.join(distPath, req.path);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return next();
    }
    
    // Otherwise serve the index.html for client-side routing
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}