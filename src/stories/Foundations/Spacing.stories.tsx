import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SpacingBlock = ({ size, px, rem }: { size: string; px: number; rem: number }) => (
  <div className="flex items-center gap-6 mb-4">
    <div className="w-24 text-sm font-mono text-gray-600">
      {px}px / {rem}rem
    </div>
    <div className="bg-green-tenere rounded" style={{ width: `${px}px`, height: '32px' }} />
    <div className="text-sm text-gray-500">{size}</div>
  </div>
);

// Spacing Scale
export const SpacingScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Spacing Scale</h2>
      <p className="text-gray-600 mb-6">
        Consistent spacing scale used throughout the design system. Based on an 8px grid with
        additional values for fine-tuning.
      </p>
      <div className="space-y-2">
        <SpacingBlock size="2xs" px={2} rem={0.125} />
        <SpacingBlock size="xs" px={4} rem={0.25} />
        <SpacingBlock size="sm" px={8} rem={0.5} />
        <SpacingBlock size="md" px={12} rem={0.75} />
        <SpacingBlock size="base" px={16} rem={1} />
        <SpacingBlock size="lg" px={24} rem={1.5} />
        <SpacingBlock size="xl" px={32} rem={2} />
        <SpacingBlock size="2xl" px={40} rem={2.5} />
        <SpacingBlock size="3xl" px={48} rem={3} />
        <SpacingBlock size="4xl" px={64} rem={4} />
        <SpacingBlock size="5xl" px={80} rem={5} />
        <SpacingBlock size="6xl" px={96} rem={6} />
        <SpacingBlock size="7xl" px={120} rem={7.5} />
      </div>
    </div>
  ),
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Spacing Usage Guidelines</h2>
      <p className="text-gray-600 mb-6">How to apply spacing values in different contexts.</p>

      <div className="space-y-6">
        {/* Tight Spacing */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Tight Spacing (4–12px)</h3>
          <p className="text-sm text-gray-600 mb-4">
            For tight internal spacing and compact UI elements
          </p>
          <div className="flex gap-1 items-center">
            <div className="bg-green-tenere h-10 w-10 rounded"></div>
            <div className="bg-green-tenere h-10 w-10 rounded"></div>
            <div className="bg-green-tenere h-10 w-10 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 4px (0.25rem)</div>
        </div>

        {/* Standard Spacing */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Standard Spacing (16–24px)</h3>
          <p className="text-sm text-gray-600 mb-4">
            For component padding and related content groups
          </p>
          <div className="flex gap-4 items-center">
            <div className="bg-green-tenere h-12 w-12 rounded"></div>
            <div className="bg-green-tenere h-12 w-12 rounded"></div>
            <div className="bg-green-tenere h-12 w-12 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 16px (1rem)</div>
        </div>

        {/* Large Blocks */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Large Blocks (32–48px)</h3>
          <p className="text-sm text-gray-600 mb-4">For larger blocks and section interiors</p>
          <div className="flex gap-8 items-center">
            <div className="bg-green-tenere h-16 w-16 rounded"></div>
            <div className="bg-green-tenere h-16 w-16 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 32px (2rem)</div>
        </div>

        {/* Section Spacing */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Section Spacing (64–120px)</h3>
          <p className="text-sm text-gray-600 mb-4">For major section spacing and page rhythm</p>
          <div className="space-y-16">
            <div className="bg-green-tenere h-20 rounded"></div>
            <div className="bg-green-tenere h-20 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 64px (4rem)</div>
        </div>
      </div>
    </div>
  ),
};

// Component Spacing Examples
export const ComponentSpacing: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Component Spacing Examples</h2>
      <p className="text-gray-600 mb-6">Real-world examples of spacing applied to components.</p>

      <div className="space-y-8">
        {/* Button Group */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Button Group (16px gap)</div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-green-tenere rounded-full text-sm font-medium">
              Primary Action
            </button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium">
              Secondary Action
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Card (24px padding)</div>
          <div className="border border-gray-200 rounded-xl p-6 max-w-sm">
            <h3 className="text-lg font-semibold mb-3">Card Title</h3>
            <p className="text-sm text-gray-600 mb-4">
              Card content with consistent internal spacing.
            </p>
            <button className="px-4 py-2 bg-green-tenere rounded-full text-sm font-medium">
              Action
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Form (16px between fields)</div>
          <div className="max-w-sm space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        {/* List */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">List Items (12px gap)</div>
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-tenere rounded-full"></div>
              <div className="text-sm">List item with icon</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-tenere rounded-full"></div>
              <div className="text-sm">List item with icon</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-tenere rounded-full"></div>
              <div className="text-sm">List item with icon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Layout Spacing
export const LayoutSpacing: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Layout & Section Spacing</h2>
      <p className="text-gray-600 mb-6">Guidelines for spacing between major page sections.</p>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Content Groups (32–48px)</h3>
          <p className="text-sm text-gray-600 mb-4">
            Spacing between related content groups within the same section
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="text-sm font-mono text-gray-500">Content Group 1</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="text-sm font-mono text-gray-500">Content Group 2</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-sm font-mono text-gray-500">Content Group 3</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 32px between groups</div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Major Sections (64–80px)</h3>
          <p className="text-sm text-gray-600 mb-4">Standard spacing between major sections</p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-green-tenere/20 border-2 border-green-tenere rounded-lg p-8 mb-16">
              <div className="text-sm font-mono">Section 1</div>
            </div>
            <div className="bg-green-tenere/20 border-2 border-green-tenere rounded-lg p-8 mb-16">
              <div className="text-sm font-mono">Section 2</div>
            </div>
            <div className="bg-green-tenere/20 border-2 border-green-tenere rounded-lg p-8">
              <div className="text-sm font-mono">Section 3</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 64px between sections</div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Hero Spacing (120px)</h3>
          <p className="text-sm text-gray-600 mb-4">
            High-emphasis transitions and spacious hero layouts
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-green-tenere border-2 border-green-tenere-dark rounded-lg p-12 mb-32">
              <div className="text-sm font-mono">Hero Section</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-sm font-mono">Next Section</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">gap: 120px for strong visual separation</div>
        </div>
      </div>
    </div>
  ),
};
