import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { title } from 'process';

export async function load() {
    const services = await loadServices();

    return { services: services };
}

async function loadServices() {
    const servicesDir = path.resolve('content/services');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(servicesDir)) {
        console.error('No Services directory found');
        return [];
    }
    const files = fs.readdirSync(servicesDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(servicesDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                title: data.title,
                description: data.description,
                icon: data.icon,
                link: data.link,
                buttonText: data.buttonText,
            };
        })
        // order by title alphabetically
        .sort((a, b) => a.title.localeCompare(b.title));
}