import type { Preview } from "@storybook/react";
import { foo } from "pkg2";

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
      foo();
      return {};
    },
  ],
};

export default preview;
