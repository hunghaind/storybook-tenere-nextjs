import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col gap-2">
    <div
      className="h-20 rounded-lg border border-gray-200 shadow-sm"
      style={{ backgroundColor: value }}
    />
    <div className="text-sm">
      <div className="font-semibold">{name}</div>
      <div className="text-gray-500 font-mono text-xs">{value}</div>
    </div>
  </div>
);

// Primary Color Palette Story
export const PrimaryPalette: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Primary Color Palette</h2>
      <p className="text-gray-600 mb-6">
        Core brand colors used for key highlights, primary emphasis, and branded moments.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch name="Tenere Green" value="#B8EC60" />
        <ColorSwatch name="Tenere Dark" value="#9ed84e" />
        <ColorSwatch name="Tenere Darker" value="#85c43a" />
        <ColorSwatch name="Acacia Green" value="#014810" />
        <ColorSwatch name="Desert Shadow" value="#191919" />
        <ColorSwatch name="White" value="#FFFFFF" />
      </div>
    </div>
  ),
};

// Secondary Color Palette Story
export const SecondaryPalette: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Secondary Color Palette</h2>
      <p className="text-gray-600 mb-6">
        Supporting colors for accents, backgrounds, and visual depth.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch name="Oasis Green" value="#56A619" />
        <ColorSwatch name="Sahara Deep" value="#14801A" />
        <ColorSwatch name="Desert Sky" value="#C2EAFD" />
        <ColorSwatch name="Sahara Sand" value="#F6F1E9" />
      </div>
    </div>
  ),
};

// Border Colors Story
export const BorderColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Border Colors</h2>
      <p className="text-gray-600 mb-6">
        Standardized border colors for cards, inputs, and content separation.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-32 h-16 rounded-lg" style={{ border: '1px solid #E5E7EB' }} />
          <div>
            <div className="font-semibold">Default</div>
            <div className="text-sm text-gray-500">1px solid #E5E7EB</div>
            <div className="text-xs text-gray-400">Cards, inputs, grouped content</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-32 h-16 rounded-lg" style={{ border: '1px solid #D1D5DB' }} />
          <div>
            <div className="font-semibold">Medium</div>
            <div className="text-sm text-gray-500">1px solid #D1D5DB</div>
            <div className="text-xs text-gray-400">Active inputs, hover states</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-32 h-16 rounded-lg" style={{ border: '2px solid #191919' }} />
          <div>
            <div className="font-semibold">Strong</div>
            <div className="text-sm text-gray-500">2px solid #191919</div>
            <div className="text-xs text-gray-400">Focused inputs, selected items</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-32 h-16 rounded-lg" style={{ border: '2px solid #B8EC60' }} />
          <div>
            <div className="font-semibold">Brand Accent</div>
            <div className="text-sm text-gray-500">2px solid #B8EC60</div>
            <div className="text-xs text-gray-400">Active tabs, selected filters</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// All Colors Overview
export const AllColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Complete Color System</h2>
        <p className="text-gray-600 mb-6">All colors available in the Tenere design system.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Green Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch name="green-tenere" value="#B8EC60" />
          <ColorSwatch name="green-tenere-dark" value="#9ed84e" />
          <ColorSwatch name="green-tenere-darker" value="#85c43a" />
          <ColorSwatch name="green-acacia" value="#014810" />
          <ColorSwatch name="green-oasis" value="#56A619" />
          <ColorSwatch name="green-sahara-deep" value="#14801A" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Neutral Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch name="shadow-desert" value="#191919" />
          <ColorSwatch name="sky-desert" value="#C2EAFD" />
          <ColorSwatch name="sand-sahara" value="#F6F1E9" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Border Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="border-default" value="#E5E7EB" />
          <ColorSwatch name="border-medium" value="#D1D5DB" />
          <ColorSwatch name="border-strong" value="#191919" />
        </div>
      </div>
    </div>
  ),
};
