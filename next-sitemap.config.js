/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dbuggger.netlify.app/', // 🔁 Replace with your actual domain
  generateRobotsTxt: true, // ✅ Enable robots.txt generation
  generateIndexSitemap: false, // optional if you want a single sitemap file
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all bots
    ],
  },
};
