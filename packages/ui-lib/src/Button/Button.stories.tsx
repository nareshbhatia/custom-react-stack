import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <Button
    rootClass={args.rootClass}
    color={args.color}
    disabled={args.disabled}
    size={args.size}
    variant={args.variant}
  >
    {args.text}
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  text: 'Button',
  rootClass: '',
  color: 'primary',
  disabled: false,
  size: 'medium',
  variant: 'contained',
};

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h5 className="h5">Buttons</h5>

      <h6 className="h6 mt-2">Contained Buttons</h6>
      <div className="mt-1">
        <Button>Default</Button>
        <Button rootClass="ml-1" color="primary">
          Primary
        </Button>
        <Button rootClass="ml-1" color="secondary">
          Secondary
        </Button>
        <Button rootClass="ml-1" disabled>
          Disabled
        </Button>
      </div>

      <h6 className="h6 mt-2">Outlined Buttons</h6>
      <div className="mt-1">
        <Button variant="outlined">Default</Button>
        <Button rootClass="ml-1" variant="outlined" color="primary">
          Primary
        </Button>
        <Button rootClass="ml-1" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button rootClass="ml-1" variant="outlined" disabled>
          Disabled
        </Button>
      </div>

      <h6 className="h6 mt-2">Sizes</h6>
      <div className="mt-1">
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button
          rootClass="ml-1"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          rootClass="ml-1"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="outlined" color="primary" size="small">
          Small
        </Button>
        <Button
          rootClass="ml-1"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          rootClass="ml-1"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
    </div>
  );
};
ButtonVariationsStory.storyName = 'Button Variations';
