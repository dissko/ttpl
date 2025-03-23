import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Resource } from '$lib';

export async function load() {
    const resources = await loadResources();
    return {
        resources
    };
}
async function loadResources() {
    const resourceDir = path.resolve('content/resources');
    if (!fs.existsSync(resourceDir)) {
        console.error('No resources found');
        return [];
    }
    const files = fs.readdirSync(resourceDir);
    if (!files.length) {
        console.error('No resources found');
        return [];
    }
    return files.map((file) => {
        const filePath = path.resolve(resourceDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        return data as Resource;
    });
}