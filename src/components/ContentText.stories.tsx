import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentText from './ContentText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ContentText',
  component: ContentText,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#282c34',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white',
          fontFamily: 'Segoe UI',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ContentText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentText> = (args) => (
  <ContentText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <p>Hello Vite + React!</p>,
};
