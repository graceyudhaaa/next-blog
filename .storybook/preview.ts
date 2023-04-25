import type { Preview } from "@storybook/react";
import '../app/globals.css'

export const globalTypes = {
  darkMode: false,
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
