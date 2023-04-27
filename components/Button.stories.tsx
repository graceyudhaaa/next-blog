import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FaEdit, FaMoon } from 'react-icons/fa'



const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Button',
  component: Button,
  argTypes: {
    iconPos: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Montserrat' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    icon: <FaEdit />,
    iconPos: "right",
    variant: "primary",
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Button',
    icon: <FaEdit />,
    iconPos: "right"
  }
}

export const NoIcon: Story = {
  args: {
    label: 'Button',
  }
}

export const IconOnly: Story = {
  args: {
    icon: <FaMoon />,
  }
}