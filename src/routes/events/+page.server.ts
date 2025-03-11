import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export async function load() {
    const events = await loadEvents();

    return { events: events };
}


async function loadEvents() {
    const eventsDir = path.resolve('content/events');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(eventsDir)) {
        console.error('No Events directory found');
        return [];
    }
    const files = fs.readdirSync(eventsDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(eventsDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                title: data.title,
                description: data.description,
                date: data.date,
                link: data.link,
                buttonText: data.buttonText,
                image: data.image,
            };
        })
        // order by date
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

}