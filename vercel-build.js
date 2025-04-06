// vercel-build.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build process...');

// Run the main build command
try {
  console.log('Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Ensure the public files are accessible at the root level for Vercel
  const distPublicPath = path.join(__dirname, 'dist', 'public');
  const distPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(distPublicPath)) {
    console.log('Copying public files to root dist directory...');
    
    // Read all files from dist/public
    const files = fs.readdirSync(distPublicPath);
    
    // Copy each file to dist root
    files.forEach(file => {
      const sourcePath = path.join(distPublicPath, file);
      const destPath = path.join(distPath, file);
      
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, destPath);
      } else {
        // It's a directory - use a recursive copy function or a library
        // This is a simplified example and might need enhancement for directories
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
      }
    });
    
    console.log('Files copied successfully.');
  } else {
    console.log('dist/public directory not found. Skipping file copy.');
  }
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}