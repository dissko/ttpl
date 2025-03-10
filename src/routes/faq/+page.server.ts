// src/routes/activities/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
	const activitiesDir = path.resolve('content/faq');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(activitiesDir)) {
        return { activities: [] };
    }
	const files = fs.readdirSync(activitiesDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return { activities: [] };
    }
	const activities = files
		.map((filename) => {
			const filePath = path.join(activitiesDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data } = matter(fileContent);

			return {
                question: data.question,
                answer: data.answer
			};
		})

	return { activities };
}
