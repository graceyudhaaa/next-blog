import type { Meta, StoryObj } from '@storybook/react';
import BlogPostCard from './BlogPostCard';



const meta: Meta<typeof BlogPostCard> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Component/BlogPostCard',
    component: BlogPostCard,
    argTypes: {
        postTag: {
            control: { type: 'object' }
        }
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
type Story = StoryObj<typeof BlogPostCard>;

export const Normal: Story = {
    args: {
        title: "ShitPost 2: Electric Boogaloo Revelations Brotherhood Origin Mirage",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    }
};