import type { Meta, StoryObj } from '@storybook/react';
import {Navbar} from './Navbar';



const meta: Meta<typeof Navbar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navbar',
  component: Navbar,
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
type Story = StoryObj<typeof Navbar>;

export const LoggedBruh: Story = {};