// src/routes/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  // Load events
  const eventsDir = path.resolve('content/events');
  const eventFiles = fs.readdirSync(eventsDir);
  const events = eventFiles.map((filename) => {
    const filePath = path.join(eventsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  // Load activities
  const activitiesDir = path.resolve('content/activities');
  const activityFiles = fs.readdirSync(activitiesDir);
  const activities = activityFiles.map((filename) => {
    const filePath = path.join(activitiesDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  // Load featured content (assuming there is only one featured content file)
  const featuredDir = path.resolve('content/featured');
  const featuredFiles = fs.readdirSync(featuredDir);
  if (featuredFiles.length === 0) {
    throw new Error('No featured content file found.');
  }
  const featuredPath = path.join(featuredDir, featuredFiles[0]);
  const featuredContent = matter(fs.readFileSync(featuredPath, 'utf-8')).data;

  // Filter events and activities based on the featured relations
  const featuredEvents = events.filter((event: any) =>
    featuredContent.featured_events?.includes(event.title)
  );

  const featuredActivities = activities.filter((activity: any) =>
    featuredContent.featured_activities?.includes(activity.title)
  );

  return {
    featuredEvents,
    featuredActivities
  };
}
