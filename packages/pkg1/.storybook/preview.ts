import type { Preview } from "@storybook/react";
import { load } from "./test";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [
    async () => {
      load();
      return {};
    },
  ],
};

export default preview;
