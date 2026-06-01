import type { Meta, StoryObj } from '@storybook/nextjs';
import { Check, DollarSign, Eye, EyeOff, Lock, Mail, Search, X } from 'lucide-react';
import FormHelperText from './FormHelperText';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    scale: {
      control: 'select',
      options: ['large', 'medium'],
      description: 'Input size',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Input state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    leftIcon: {
      description: 'Icon to display on the left side',
    },
    rightIcon: {
      description: 'Icon to display on the right side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic states
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
    state: 'default',
    scale: 'medium',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Enter text here...',
    state: 'error',
    scale: 'medium',
    defaultValue: 'Invalid input',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Enter text here...',
    state: 'success',
    scale: 'medium',
    defaultValue: 'Valid input',
  },
};

// Sizes
export const Large: Story = {
  args: {
    placeholder: 'Large input',
    scale: 'large',
    state: 'default',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    scale: 'medium',
    state: 'default',
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    scale: 'medium',
    state: 'default',
    leftIcon: <Search size={18} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Enter value',
    scale: 'medium',
    state: 'success',
    rightIcon: <Check size={18} className="text-green-oasis" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: '0.00',
    scale: 'medium',
    state: 'default',
    leftIcon: <DollarSign size={18} className="text-gray-500" />,
    rightIcon: <Check size={18} className="text-green-oasis" />,
  },
};

// States
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    scale: 'medium',
    state: 'default',
    disabled: true,
    value: 'Cannot edit this',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">States</h3>
        <div className="space-y-3">
          <Input placeholder="Default state" state="default" />
          <Input placeholder="Error state" state="error" defaultValue="Invalid" />
          <Input placeholder="Success state" state="success" defaultValue="Valid" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Scales</h3>
        <div className="space-y-3">
          <Input placeholder="Large input" scale="large" />
          <Input placeholder="Medium input" scale="medium" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">With Icons</h3>
        <div className="space-y-3">
          <Input type="email" placeholder="Email" leftIcon={<Mail size={18} />} />
          <Input
            placeholder="Valid"
            state="success"
            rightIcon={<Check size={18} className="text-green-oasis" />}
          />
          <Input
            placeholder="Amount"
            leftIcon={<DollarSign size={18} />}
            rightIcon={<Check size={18} className="text-green-oasis" />}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Disabled</h3>
        <div className="space-y-3">
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Disabled" disabled value="Cannot edit" />
        </div>
      </div>
    </div>
  ),
};

// Form example with validation
export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Email Address *</label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          scale="large"
          state="default"
          leftIcon={<Mail size={18} />}
        />
        <FormHelperText variant="default" size="sm">
          {`We'll never share your email with anyone.`}
        </FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Password *</label>
        <Input
          type="password"
          placeholder="Enter your password"
          scale="large"
          state="error"
          leftIcon={<Lock size={18} />}
          rightIcon={<EyeOff size={18} className="text-gray-400" />}
        />
        <FormHelperText variant="error" size="sm">
          Password must be at least 8 characters long.
        </FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Search</label>
        <Input
          type="text"
          placeholder="Search products..."
          scale="large"
          state="default"
          leftIcon={<Search size={18} />}
          rightIcon={<X size={18} className="text-gray-400" />}
        />
        <FormHelperText variant="default" size="sm">
          Press Enter to search
        </FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Username</label>
        <Input
          type="text"
          placeholder="Choose a username"
          scale="large"
          state="success"
          defaultValue="john_doe"
          rightIcon={<Check size={18} className="text-green-oasis" />}
        />
        <FormHelperText variant="success" size="sm">
          Username is available!
        </FormHelperText>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <Input type="tel" placeholder="+1 (555) 000-0000" scale="medium" state="default" />
        <FormHelperText variant="default" size="xs">
          Optional: For account recovery
        </FormHelperText>
      </div>
    </div>
  ),
};
