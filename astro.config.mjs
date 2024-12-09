import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [tailwind(), react(), partytown()],
  site: import.meta.env.SITE_URL,
});