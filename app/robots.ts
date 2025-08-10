// ===== IMPORTS & DEPENDENCIES =====
import { MetadataRoute } from 'next';

// ===== CORE LOGIC: Robots.txt Generation =====
// This file configures the rules for search engine crawlers.
// It tells them which pages they are allowed to crawl and provides the sitemap location.
export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Replace with your actual domain name after deployment
  const baseUrl = 'https://www.danielnemati.ir'; 

  return {
    rules: {
      userAgent: '*', // This rule applies to all crawlers (e.g., Googlebot)
      allow: '/',      // Allow crawlers to access all pages starting from the root
      disallow: '/api/', // Disallow crawling of any API routes (good practice)
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Provide the full URL to your sitemap
  };
}