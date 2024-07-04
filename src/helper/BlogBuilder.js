import metaParser from './BlogMetaParser';
import fs from 'fs';
import path from 'path';

export default (directoryPath, outputPath) => {
    const absoluteDirectoryPath = path.resolve(directoryPath);

    fs.readdir(absoluteDirectoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const results = [];

        files.reverse().forEach(file => {
            const filePath = path.join(absoluteDirectoryPath, file);
            
            if (path.extname(file) === '.md') {
                const result = metaParser(fs.readFileSync(filePath, 'utf8'), file);
                if (result) results.push(result);
            }
        });

        fs.writeFile(outputPath, JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            } else {
                console.log('Successfully built blog.json');
            }
        });
    });
}