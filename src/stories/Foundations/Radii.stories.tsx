import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Foundations/Radii',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const RadiusBlock = ({ size, px, usage }: { size: string; px: number; usage: string }) => (
  <div className="mb-6">
    <div className="flex items-center gap-6 mb-2">
      <div className="w-32 text-sm font-mono text-gray-600">{px}px</div>
      <div
        className="bg-green-tenere border-2 border-green-tenere-dark w-32 h-32"
        style={{ borderRadius: `${px}px` }}
      />
    </div>
    <div className="ml-36">
      <div className="text-sm font-semibold">{size}</div>
      <div className="text-xs text-gray-500">{usage}</div>
    </div>
  </div>
);

// Radius Scale
export const RadiusScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Corner Radius Scale</h2>
      <p className="text-gray-600 mb-6">
        Consistent corner radius values used throughout the design system. Use softer corners to
        reduce visual harshness while maintaining brand consistency.
      </p>
      <div className="space-y-4">
        <RadiusBlock size="Small" px={12} usage="Small cards, compact elements" />
        <RadiusBlock size="Medium" px={16} usage="Medium cards, list items" />
        <RadiusBlock size="Default" px={20} usage="Default controls, inputs, standard cards" />
        <RadiusBlock size="Large" px={24} usage="Large cards, panels, buttons (pill)" />
        <RadiusBlock size="XL" px={30} usage="Modals, prominent surfaces" />
        <RadiusBlock size="2XL" px={40} usage="Large modals, banners, hero elements" />
      </div>
    </div>
  ),
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Radius Usage Guidelines</h2>
      <p className="text-gray-600 mb-6">
        When and how to apply corner radius in different contexts.
      </p>

      <div className="space-y-6">
        {/* Small Cards */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">12px — Small Cards</h3>
          <p className="text-sm text-gray-600 mb-4">Compact list items, small tags, badges</p>
          <div className="flex gap-3">
            <div
              className="bg-green-tenere px-3 py-1 text-sm font-medium"
              style={{ borderRadius: '12px' }}
            >
              Badge
            </div>
            <div
              className="bg-green-tenere px-3 py-1 text-sm font-medium"
              style={{ borderRadius: '12px' }}
            >
              Tag
            </div>
            <div
              className="bg-green-tenere px-3 py-1 text-sm font-medium"
              style={{ borderRadius: '12px' }}
            >
              Label
            </div>
          </div>
        </div>

        {/* Medium Cards */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">16px — Medium Cards</h3>
          <p className="text-sm text-gray-600 mb-4">List items, smaller content cards</p>
          <div className="max-w-xs border border-gray-200 p-4" style={{ borderRadius: '16px' }}>
            <div className="text-sm font-medium mb-2">Product Card</div>
            <div className="text-xs text-gray-500">
              Medium-sized card with moderate corner radius
            </div>
          </div>
        </div>

        {/* Default Controls */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">20px — Default Controls</h3>
          <p className="text-sm text-gray-600 mb-4">Inputs, default cards, standard UI elements</p>
          <div className="space-y-3 max-w-xs">
            <input
              type="text"
              placeholder="Text input"
              className="w-full px-4 py-2 border border-gray-300"
              style={{ borderRadius: '20px' }}
            />
            <div className="border border-gray-200 p-4" style={{ borderRadius: '20px' }}>
              <div className="text-sm">Standard Card</div>
            </div>
          </div>
        </div>

        {/* Buttons - Pill */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">24px — Buttons (Pill Shape)</h3>
          <p className="text-sm text-gray-600 mb-4">Primary UI controls, call-to-action buttons</p>
          <div className="flex gap-3">
            <button
              className="px-6 py-2 bg-green-tenere text-sm font-medium"
              style={{ borderRadius: '24px' }}
            >
              Primary Button
            </button>
            <button
              className="px-6 py-2 bg-white border border-gray-300 text-sm font-medium"
              style={{ borderRadius: '24px' }}
            >
              Secondary Button
            </button>
          </div>
        </div>

        {/* Modals */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">30px — Modals</h3>
          <p className="text-sm text-gray-600 mb-4">Dialog boxes, prominent overlays</p>
          <div
            className="max-w-md border border-gray-200 p-8 shadow-lg"
            style={{ borderRadius: '30px' }}
          >
            <h4 className="text-lg font-semibold mb-3">Modal Title</h4>
            <p className="text-sm text-gray-600 mb-4">
              Prominent surface with larger corner radius for visual hierarchy
            </p>
            <button
              className="px-6 py-2 bg-green-tenere text-sm font-medium"
              style={{ borderRadius: '24px' }}
            >
              Confirm
            </button>
          </div>
        </div>

        {/* Large Surfaces */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">40px — Large Surfaces</h3>
          <p className="text-sm text-gray-600 mb-4">
            Hero sections, promotional banners, large modals
          </p>
          <div
            className="border border-gray-200 p-8 bg-gradient-to-r from-green-tenere/20 to-green-tenere/10"
            style={{ borderRadius: '40px' }}
          >
            <h4 className="text-2xl font-bold mb-2">Hero Banner</h4>
            <p className="text-gray-600 mb-4">
              Large surface with maximum corner radius for soft, inviting appearance
            </p>
            <button
              className="px-6 py-2 bg-green-tenere text-sm font-medium"
              style={{ borderRadius: '24px' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Component Examples
export const ComponentExamples: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Component Radius Examples</h2>
      <p className="text-gray-600 mb-6">
        Real-world component examples showing appropriate radius usage.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Icon Button */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Icon Button (50% circle)</div>
          <div className="flex gap-3">
            <button
              className="w-10 h-10 bg-green-tenere flex items-center justify-center"
              style={{ borderRadius: '50%' }}
            >
              →
            </button>
            <button
              className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center"
              style={{ borderRadius: '50%' }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Search Bar (24px)</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-10 border border-gray-300"
              style={{ borderRadius: '24px' }}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-400">
              🔍
            </button>
          </div>
        </div>

        {/* Product Card */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Product Card (20px)</div>
          <div className="border border-gray-200 overflow-hidden" style={{ borderRadius: '20px' }}>
            <div className="bg-green-tenere/20 h-32"></div>
            <div className="p-4">
              <div className="font-semibold mb-1">Product Name</div>
              <div className="text-sm text-gray-600">$29.99</div>
            </div>
          </div>
        </div>

        {/* Alert Box */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Alert Box (16px)</div>
          <div
            className="bg-green-tenere/20 border-l-4 border-green-tenere p-4"
            style={{ borderRadius: '16px' }}
          >
            <div className="text-sm font-medium">Success!</div>
            <div className="text-xs text-gray-600">Your changes have been saved.</div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Tooltip (12px)</div>
          <div
            className="inline-block bg-gray-900 text-white text-xs px-3 py-2"
            style={{ borderRadius: '12px' }}
          >
            Helpful tooltip
          </div>
        </div>

        {/* Avatar */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Avatar (50% circle)</div>
          <div className="flex gap-2">
            <div
              className="w-12 h-12 bg-green-tenere flex items-center justify-center font-semibold"
              style={{ borderRadius: '50%' }}
            >
              JD
            </div>
            <div
              className="w-12 h-12 bg-gray-300 flex items-center justify-center font-semibold"
              style={{ borderRadius: '50%' }}
            >
              AB
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Comparison
export const Comparison: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Radius Comparison</h2>
      <p className="text-gray-600 mb-6">
        Visual comparison of all radius values on the same element size.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { label: '12px', value: 12 },
          { label: '16px', value: 16 },
          { label: '20px', value: 20 },
          { label: '24px', value: 24 },
          { label: '30px', value: 30 },
          { label: '40px', value: 40 },
        ].map(({ label, value }) => (
          <div key={value} className="text-center">
            <div
              className="w-full aspect-square bg-green-tenere border-2 border-green-tenere-dark mb-2"
              style={{ borderRadius: `${value}px` }}
            />
            <div className="text-sm font-medium">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-3">Principle</h3>
        <p className="text-sm text-gray-600">
          Use softer corners to reduce visual harshness, but avoid excessive rounding that makes the
          interface feel playful or inconsistent with the brand. The radius should be proportional
          to the element size — larger surfaces get larger radii.
        </p>
      </div>
    </div>
  ),
};
