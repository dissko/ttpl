import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export async function load() {
    const meetingMinutes = await loadMeetingMinutes();

    return { meetingMinutes: meetingMinutes };
}

async function loadMeetingMinutes(){
    const meetingMinutesDir = path.resolve('content/meeting-minutes');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(meetingMinutesDir)) {
        console.error('No Meeting Minutes directory found');
        return [];
    }
    const files = fs.readdirSync(meetingMinutesDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(meetingMinutesDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                date: data.date,
                fileLink: data.fileLink,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}