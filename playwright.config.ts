import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './randomuser/tests',
  fullyParallel: true,
  retries: 1,
  reporter:[
    ["html", {outputFolder: 'reports/', open: "always"}, ], ["list"]
    ],
  use: {
    headless: true,
    baseURL: 'https://randomuser.me/',
    screenshot: "only-on-failure",
    video: "on-first-retry"

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});
