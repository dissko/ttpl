// src/routes/+layout.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  // Read the single contact file
  const filePath = path.resolve('content/contact/contact.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    contact: data
  };
}
