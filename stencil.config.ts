import { Config } from '@stencil/core';
import 'dotenv/config';

export const config: Config = {
  namespace: 'girondins33-design-system',
  globalStyle: 'src/global/global.css',
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
