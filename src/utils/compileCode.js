/**
 * Combines HTML, CSS, and JS into a single string for an iframe.
 * If the active mode is README, you'd typically handle it differently.
 */
export const generateSrcDoc = (html, css, js) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch (err) {
            console.error('JS Error:', err);
          }
        </script>
      </body>
    </html>
  `;
};