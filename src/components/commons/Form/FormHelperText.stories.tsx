import type { Meta, StoryObj } from '@storybook/nextjs';
import FormHelperText from './FormHelperText';

const meta: Meta<typeof FormHelperText> = {
  title: 'Components/FormHelperText',
  component: FormHelperText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base'],
      description: 'Text size',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: 'Text variant/color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: 'This is a default helper text.',
    variant: 'default',
    size: 'sm',
  },
};

export const Error: Story = {
  args: {
    children: 'This field is required.',
    variant: 'error',
    size: 'sm',
  },
};

export const Success: Story = {
  args: {
    children: 'Looks good!',
    variant: 'success',
    size: 'sm',
  },
};

export const Warning: Story = {
  args: {
    children: 'Please verify this information.',
    variant: 'warning',
    size: 'sm',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    children: 'Extra small helper text (12px)',
    size: 'xs',
    variant: 'default',
  },
};

export const Small: Story = {
  args: {
    children: 'Small helper text (14px)',
    size: 'sm',
    variant: 'default',
  },
};

export const Base: Story = {
  args: {
    children: 'Base helper text (16px)',
    size: 'base',
    variant: 'default',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Variants</h3>
        <div className="space-y-2">
          <FormHelperText variant="default">Default: Enter your email address</FormHelperText>
          <FormHelperText variant="error">Error: This field is required</FormHelperText>
          <FormHelperText variant="success">Success: Email is valid</FormHelperText>
          <FormHelperText variant="warning">
            Warning: This email is already registered
          </FormHelperText>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Sizes</h3>
        <div className="space-y-2">
          <FormHelperText size="xs" variant="default">
            Extra small (12px): Minimum 8 characters
          </FormHelperText>
          <FormHelperText size="sm" variant="default">
            Small (14px): Minimum 8 characters
          </FormHelperText>
          <FormHelperText size="base" variant="default">
            Base (16px): Minimum 8 characters
          </FormHelperText>
        </div>
      </div>
    </div>
  ),
};

// With form example
export const WithFormField: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-10 px-4 border border-gray-300 rounded-lg"
        />
        <FormHelperText variant="default">{`We'll never share your email with anyone.`}</FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full h-10 px-4 border border-red-500 rounded-lg"
        />
        <FormHelperText variant="error">Password must be at least 8 characters.</FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value="john_doe"
          className="w-full h-10 px-4 border border-green-500 rounded-lg"
        />
        <FormHelperText variant="success">Username is available!</FormHelperText>
      </div>
    </div>
  ),
};
