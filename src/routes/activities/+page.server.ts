// src/routes/activities/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
	const activitiesDir = path.resolve('content/activities');
	const files = fs.readdirSync(activitiesDir);

	const activities = files
		.map((filename) => {
			const filePath = path.join(activitiesDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data } = matter(fileContent);

			return {
				title: data.title,
				subtitle: data.subtitle || '',
				description: data.description || '',
				image: data.image || '',
				link: data.link || '',
				reverse: !!data.reverse,
                order: data.order,
			};
		})
        .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

	return { activities };
}
