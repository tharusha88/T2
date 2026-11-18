/**
 * URL of a file in /public, including the site's base path
 * ("/" locally, "/T2/" on GitHub Pages).
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
