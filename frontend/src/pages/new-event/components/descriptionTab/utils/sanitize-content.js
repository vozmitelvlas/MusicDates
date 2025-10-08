// import DOMPurify from 'dompurify';
// export const sanitizeContent = (html) => DOMPurify.sanitize(html)

export const sanitizeContent = (content) =>
    content.replaceAll('<div><br></div>', '\n')
        .replace(/ +/g, ' ')
        .replaceAll('<div>', '\n')
        .replaceAll('</div>', '')
        .replaceAll('<br>', '')