import type { Meta, StoryObj } from '@storybook/react';
import BlogPage from './BlogPage';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/Button';


const meta: Meta<typeof BlogPage> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Pages/BlogPage',
    component: BlogPage,
    decorators: [
        (Story) => (
            <div style={{ fontFamily: 'Montserrat' }} className=' dark:bg-chambray-950'>
                <Navbar />
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof BlogPage>;

export const Normal: Story = {

};