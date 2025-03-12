// src/routes/+layout.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  // Read the single contact file
  const contactMarkdownPath = path.resolve('content/contact/contact.md');
  const contactMarkdownContent = fs.readFileSync(contactMarkdownPath, 'utf-8');
  const { data: contactInfo } = matter(contactMarkdownContent);

  const bannerAlertMarkdownPath = path.resolve('content/bannerAlert/index.md');
  const bannerAlertMarkdownContent = fs.readFileSync(bannerAlertMarkdownPath, 'utf-8');
  const { data: bannerAlertInfo } = matter(bannerAlertMarkdownContent);

  return {
    contact: contactInfo,
    bannerAlert: bannerAlertInfo,
  };
}
