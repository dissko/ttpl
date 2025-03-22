// src/routes/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { HomepageItem } from '$lib';
export async function load() {
  const events = await loadEvents();
  const activities = await loadActivities();
  const featuredContent = await loadFeatured();
  const homepageItems = await loadHomepageItems();

  // Filter events and activities based on the featured relations
  const featuredEvents = events.filter((event: any) =>
    featuredContent.featured_events?.includes(event.title)
  );
  const featuredActivities = activities.filter((activity: any) =>
    featuredContent.featured_activities?.includes(activity.title)
  );

  return {
    featuredEvents,
    featuredActivities,
    homepageItems
  };
}

async function loadEvents() {
  const eventsDir = path.resolve('content/events');
  if (!fs.existsSync(eventsDir)) {
    console.error('No events directory found');
    return [];
  }
  const eventFiles = fs.readdirSync(eventsDir);
  if (!eventFiles.length) {
    return [];
  }
  return eventFiles.map((filename) => {
    const filePath = path.join(eventsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });
}

async function loadActivities() {
  const activitiesDir = path.resolve('content/activities');
  if (!fs.existsSync(activitiesDir)) {
    console.error('No activities directory found');
    return [];
  }
  const activityFiles = fs.readdirSync(activitiesDir);
  if (!activityFiles.length) {
    return [];
  }
  return activityFiles.map((filename) => {
    const filePath = path.join(activitiesDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });
}

async function loadFeatured() {
  const featuredDir = path.resolve('content/featured');
  if (!fs.existsSync(featuredDir)) {
    throw new Error('No featured directory found.');
  }
  const featuredFiles = fs.readdirSync(featuredDir);
  if (featuredFiles.length === 0) {
    throw new Error('No featured content file found.');
  }
  const featuredPath = path.join(featuredDir, featuredFiles[0]);
  const fileContent = fs.readFileSync(featuredPath, 'utf-8');
  const { data } = matter(fileContent);
  return data;
}

// Define a hard type for homepage items


async function loadHomepageItems(): Promise<HomepageItem[]> {
  const homepageItemsDir = path.resolve('content/homepage-items');
  if (!fs.existsSync(homepageItemsDir)) {
    console.error('No homepage items directory found');
    return [];
  }
  const homepageItemsFiles = fs.readdirSync(homepageItemsDir);
  if (!homepageItemsFiles.length) {
    console.error('No homepage items found');
    return [];
  }
  return homepageItemsFiles.map((filename) => {
    const filePath = path.join(homepageItemsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data as HomepageItem;
  });
}
