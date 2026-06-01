import type { Meta, StoryObj } from '@storybook/nextjs';
import { ArrowRight, Download, Heart } from 'lucide-react';
import React from 'react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

// Sizes
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

// With icons
export const WithIcon: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'medium',
    icon: <ArrowRight size={16} />,
  },
};

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
};

export const LoadingWithIcon: Story = {
  args: {
    children: 'Submitting',
    variant: 'secondary',
    size: 'medium',
    loading: true,
    icon: <ArrowRight size={16} />,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Variants</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Sizes</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">With Icons</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary" icon={<ArrowRight size={16} />}>
            Get Started
          </Button>
          <Button variant="secondary" icon={<Download size={16} />}>
            Download
          </Button>
          <Button variant="outline" icon={<Heart size={16} />}>
            Favorite
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Disabled States</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Loading States</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary" loading>
            Primary
          </Button>
          <Button variant="secondary" loading>
            Secondary
          </Button>
          <Button variant="outline" loading>
            Outline
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Loading with Icons</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary" loading icon={<ArrowRight size={16} />}>
            Submitting
          </Button>
          <Button variant="secondary" size="large" loading icon={<Download size={16} />}>
            Downloading
          </Button>
          <Button variant="outline" size="small" loading>
            Saving
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Click Me!',
    variant: 'primary',
    size: 'medium',
    onClick: () => alert('Button clicked!'),
  },
};

// Form submission example with loading
const FormSubmissionExample = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Form submitted!');
    }, 2000);
  };

  return (
    <div className="w-96 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Example Form</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg"
          disabled={isLoading}
        />
      </div>
      <div className="flex gap-3">
        <Button variant="primary" loading={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
        <Button variant="outline" disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export const FormSubmission: Story = {
  render: () => <FormSubmissionExample />,
};
