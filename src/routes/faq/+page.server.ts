import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
	const faqDir = path.resolve('content/faq');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(faqDir)) {
        console.error('No FAQs directory found');
        return { faqs: [] };
    }
	const files = fs.readdirSync(faqDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return { faqs: [] };
    }
	const faqs = files
		.map((filename) => {
			const filePath = path.join(faqDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data } = matter(fileContent);

			return {
                question: data.question,
                answer: data.answer
			};
		})
        // order by question alphabetically
        .sort((a, b) => a.question.localeCompare(b.question));

	return { faqs: faqs };
}
