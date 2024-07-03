import markdownit from 'markdown-it';

export default (content, fileName) => {
    const parts = content.split('---');
    const frontMatter = parts[0];
    const mainContent = parts[1] || '';

    const frontMatterRegex = /(?:title:\s*(.+?)\n)?(?:slug:\s*(.+?)\n)?(?:author:\s*(.+?)\n)?(?:datePosted:\s*(.+?)\n)?(?:dateUpdated:\s*(.*?)(?=\n(?:hero:\s*.+?\n|$)))?\n?(?:hero:\s*(.+?)\n)?/;
    const match = frontMatter.match(frontMatterRegex);
    const md = markdownit();

    if (match) {
        return {
            fileName: fileName || null,
            title: match[1] ? match[1].trim() : null,
            slug: match[2] ? match[2].trim() : null,
            author: match[3] ? match[3].trim() : null,
            datePosted: match[4] ? match[4].trim() : null,
            dateUpdated: match[5] && match[5].trim() !== 'hero:' ? match[5].trim() : null,
            hero: match[6] ? match[6].trim() : null,
            content: md.render(mainContent.trim())
        };
    } else {
        console.error('Could not extract blog data from markdown.');
        return null;
    }
}