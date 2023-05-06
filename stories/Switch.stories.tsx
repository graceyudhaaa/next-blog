import type { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from '../components/Switch';
import { userEvent, within } from '@storybook/testing-library';



const meta: Meta<typeof Switch> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Component/Switch',
    component: Switch,
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
type Story = StoryObj<typeof Switch>;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        await sleep(1000)
        const canvas = within(canvasElement);
        const switchButton = await canvas.getByRole('button')
        await userEvent.click(switchButton);
    },
};
