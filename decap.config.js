import { defineConfig } from 'decap';

export default defineConfig({
  backend: {
    name: 'github',
    repo: 'nicksalt/ttpl', // Replace with your GitHub repo
  },
  media_folder: 'static/media', // Folder for media files
  public_folder: 'media',
  collections: [
    {
      name: 'traffic', // Collection name
      label: 'Traffic Counter',
      folder: 'src/traffic', // Folder for traffic data
      create: true,
      fields: [
        {
          name: 'count',
          label: 'Count',
          widget: 'number',
        },
      ],
    },
  ],
});
