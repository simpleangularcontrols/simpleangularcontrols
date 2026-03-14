const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './..'; // The root directory where LICENSE and CONTRIBUTING are located
const PROJECT_PKG_PATH = './dist/sac-common/package.json'; // Path to package.json with the version
const TARGET_DIR = './'; // Where the files for Compodoc should be copied to
const ROOT_PKG_PATH = './package.json';

try {
    // Read the version from the project package
    const pkg = JSON.parse(fs.readFileSync(PROJECT_PKG_PATH, 'utf8'));
    const version = pkg.version;
    console.log(`Version found: ${version}`);

    // Update the main package.json
    const rootPkg = JSON.parse(fs.readFileSync(ROOT_PKG_PATH, 'utf8'));
    if (rootPkg.version !== version) {
        rootPkg.version = version;
        fs.writeFileSync(ROOT_PKG_PATH, JSON.stringify(rootPkg, null, 4) + '\n');
        console.log(`Updated root-package.json to v${version}.`);
    }

    // Copy files (Synchronise)
    if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });

    ['LICENSE.md', 'CONTRIBUTING.md'].forEach((file) => {
        const src = path.join(SOURCE_DIR, file);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(TARGET_DIR, file));
            console.log(`Copy: ${file} -> ${TARGET_DIR}`);
        }
    });
} catch (error) {
    console.error('Error during Compodoc preparation:', error.message);
    process.exit(1);
}
