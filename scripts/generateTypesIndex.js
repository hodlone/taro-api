const fs = require('fs');
const path = require('path');

/**
 * This script creates an index.ts file in the types directory that exports all
 * types from the files in each subdirectory. This is useful for importing types
 * from the types directory without having to specify the file name, as well as
 * allowing us to export all generated types from the top level package.
 */

const TYPES_DIR = './src/types';

// Get all subdirectories in the types directory
const subDirs = fs
  .readdirSync('./src/types', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Get all files in each subdirectory
const filePaths = [];
subDirs.forEach((subDir) => {
  const filesInSubDir = fs.readdirSync(`${TYPES_DIR}/${subDir}`);
  filesInSubDir.forEach((file) => {
    filePaths.push(`./${subDir}/${path.basename(file, '.ts')}`);
  });
});

// Create index.ts file in types directory exporting all types from the files
// in each subdirectory
const content = filePaths
  .map((filePath) => `export * from '${filePath}';`)
  .join('\n');
fs.writeFileSync(`${TYPES_DIR}/index.ts`, content);
