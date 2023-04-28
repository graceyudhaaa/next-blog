import type { Preview } from "@storybook/react";
import '../app/globals.css'

export const globalTypes = {
  darkMode: false,
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a2137',
        },
      ],
    },
  },
};

export default preview;
