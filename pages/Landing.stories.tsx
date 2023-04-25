import type { Meta, StoryObj } from '@storybook/react';
import Landing from './Landing';


const meta: Meta<typeof Landing> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/Landing',
  component: Landing,
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Montserrat'}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Landing>;

export const Normal: Story = {};