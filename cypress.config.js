import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,
    screenshotsFolder: 'reports/functional/screenshots',
    videosFolder: 'reports/functional/videos',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      cypressMochawesomeReporterReporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        reportDir: 'reports/functional',
        reportFilename: 'functional-test-report.html',
        reportPageTitle: 'Functional Test Report',
      },
    },
  }
});