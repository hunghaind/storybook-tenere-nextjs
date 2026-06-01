import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

const meta: Meta = {
  title: 'Foundations/Shadows',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ShadowCard = ({
  name,
  description,
  usage,
  shadow,
  border,
}: {
  name: string;
  description: string;
  usage: string;
  shadow: string;
  border?: string;
}) => (
  <div className="mb-8">
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div
      className="w-full h-32 bg-white rounded-xl flex items-center justify-center"
      style={{ boxShadow: shadow, border: border || 'none' }}
    >
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500 mt-1">{usage}</div>
      </div>
    </div>
    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
      <code className="text-xs font-mono text-gray-700 break-all">{shadow}</code>
      {border && (
        <div className="mt-1">
          <code className="text-xs font-mono text-gray-700">border: {border}</code>
        </div>
      )}
    </div>
  </div>
);

// Shadow System
export const ShadowSystem: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shadow & Elevation System</h2>
      <p className="text-gray-600 mb-8">
        A four-level elevation system that communicates visual hierarchy and depth. Use shadows
        sparingly to maintain a clean, modern aesthetic.
      </p>

      <div className="space-y-8">
        <ShadowCard
          name="Flat (No Shadow)"
          description="Default state for most embedded surfaces"
          usage="Content sits within the page plane"
          shadow="none"
          border="1px solid #E5E7EB"
        />

        <ShadowCard
          name="Subtle Elevation"
          description="Light shadow for slight separation"
          usage="Cards, hover states, slight separation"
          shadow="0px 1px 3px rgba(0,0,0,0.06), 0px 1px 2px rgba(0,0,0,0.04)"
        />

        <ShadowCard
          name="Medium Elevation"
          description="Clear separation from background"
          usage="Dropdowns, popovers, floating elements"
          shadow="0px 4px 12px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.04)"
        />

        <ShadowCard
          name="Focused Elevation"
          description="Highest priority overlays"
          usage="Modals, dialogs, high-priority overlays"
          shadow="0px 29px 50px rgba(0,0,0,0.1)"
        />
      </div>
    </div>
  ),
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shadow Usage Guidelines</h2>
      <p className="text-gray-600 mb-8">
        When and how to apply shadows for effective visual hierarchy.
      </p>

      <div className="space-y-8">
        {/* Flat */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Flat — No Shadow</h3>
          <p className="text-sm text-gray-600 mb-4">
            Default for embedded content, forms, and inline elements. Use a subtle border instead of
            shadow.
          </p>
          <div className="max-w-md border border-gray-200 rounded-xl p-6">
            <div className="text-sm font-medium mb-2">Embedded Card</div>
            <div className="text-xs text-gray-600">
              This card sits flat on the page with only a border for definition.
            </div>
          </div>
        </div>

        {/* Subtle */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Subtle Elevation</h3>
          <p className="text-sm text-gray-600 mb-4">
            For cards that need slight emphasis or hover states. Creates gentle separation without
            being intrusive.
          </p>
          <div className="max-w-md bg-white rounded-xl p-6 shadow-subtle">
            <div className="text-sm font-medium mb-2">Card with Subtle Shadow</div>
            <div className="text-xs text-gray-600">
              Hovers slightly above the surface for gentle emphasis.
            </div>
          </div>
        </div>

        {/* Medium */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Medium Elevation</h3>
          <p className="text-sm text-gray-600 mb-4">
            For dropdowns, popovers, and tooltips that float above the content. Clear separation is
            needed.
          </p>
          <div className="max-w-md bg-white rounded-xl p-6 shadow-medium">
            <div className="text-sm font-medium mb-2">Dropdown Menu</div>
            <div className="text-xs text-gray-600 mb-3">
              Floats above content with clear visual separation.
            </div>
            <div className="space-y-2">
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option 1</div>
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option 2</div>
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option 3</div>
            </div>
          </div>
        </div>

        {/* Focused */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Focused Elevation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Reserved for modals and critical dialogs that demand full attention. Maximum elevation.
          </p>
          <div className="max-w-md bg-white rounded-2xl p-8 shadow-focused">
            <div className="text-lg font-bold mb-2">Modal Dialog</div>
            <div className="text-sm text-gray-600 mb-6">
              High-priority overlay with maximum shadow for clear focus and attention.
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-tenere rounded-full text-sm font-medium">
                Confirm
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium">
                Cancel
              </button>
            </div>
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
      <h2 className="text-2xl font-bold mb-4">Component Shadow Examples</h2>
      <p className="text-gray-600 mb-8">
        Real-world component examples showing appropriate shadow usage.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Card Grid */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Card Grid (Subtle)</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-4 shadow-subtle">
              <div className="text-xs font-medium">Card 1</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-subtle">
              <div className="text-xs font-medium">Card 2</div>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Dropdown (Medium)</div>
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
              Select Option
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-medium p-2">
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option A</div>
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option B</div>
              <div className="text-xs p-2 hover:bg-gray-50 rounded">Option C</div>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Tooltip (Medium)</div>
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-green-tenere rounded-lg text-sm font-medium">
              Hover Me
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-medium whitespace-nowrap">
              Helpful tooltip text
            </div>
          </div>
        </div>

        {/* Modal Preview */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Modal (Focused)</div>
          <div className="bg-white rounded-xl p-6 shadow-focused max-w-xs">
            <div className="text-sm font-bold mb-2">Confirm Action</div>
            <div className="text-xs text-gray-600 mb-4">Are you sure you want to proceed?</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-green-tenere rounded-full text-xs font-medium">
                Yes
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive Elevation Component
const InteractiveElevationDemo = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Interactive Elevation</h2>
      <p className="text-gray-600 mb-8">
        Shadows can change on interaction to provide feedback. Hover over the cards below.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="bg-white rounded-xl p-6 transition-all duration-200 cursor-pointer"
            style={{
              boxShadow:
                hoveredCard === card
                  ? '0px 4px 12px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.04)'
                  : '0px 1px 3px rgba(0,0,0,0.06), 0px 1px 2px rgba(0,0,0,0.04)',
              transform: hoveredCard === card ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(card)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-sm font-medium mb-2">Interactive Card {card}</div>
            <div className="text-xs text-gray-500">Hover to see elevation change</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm font-medium mb-2">Interaction Principle</div>
        <div className="text-xs text-gray-600">
          Elevation can increase on hover to provide tactile feedback, suggesting the element is
          interactive. Combine with subtle transform (e.g., translateY(-2px)) for enhanced effect.
        </div>
      </div>
    </div>
  );
};

// Interactive Elevation
export const InteractiveElevation: Story = {
  render: () => <InteractiveElevationDemo />,
};

// Shadow Best Practices
export const BestPractices: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shadow Best Practices</h2>
      <p className="text-gray-600 mb-8">
        Guidelines for using shadows effectively in the design system.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-green-tenere bg-green-tenere/10 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">✓ DO: Use borders for flat content</div>
          <div className="text-xs text-gray-600">
            Most embedded content should use borders (1px solid #E5E7EB) instead of shadows for
            clean, modern aesthetics.
          </div>
        </div>

        <div className="border-l-4 border-green-tenere bg-green-tenere/10 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">✓ DO: Layer shadows appropriately</div>
          <div className="text-xs text-gray-600">
            Elements higher in the z-index stack should have stronger shadows. Dropdowns above
            cards, modals above everything.
          </div>
        </div>

        <div className="border-l-4 border-green-tenere bg-green-tenere/10 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">✓ DO: Combine with transitions</div>
          <div className="text-xs text-gray-600">
            Use CSS transitions (duration-200) when changing shadow on hover or interaction for
            smooth feedback.
          </div>
        </div>

        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">{`✗ DON'T: Layer heavy borders and shadows`}</div>
          <div className="text-xs text-gray-600">
            Avoid combining thick borders with strong shadows unless hierarchy clearly benefits from
            both.
          </div>
        </div>

        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">{`✗ DON'T: Use shadows everywhere`}</div>
          <div className="text-xs text-gray-600">
            Overusing shadows creates visual noise. Most content should be flat with borders.
          </div>
        </div>

        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
          <div className="text-sm font-semibold mb-2">{`✗ DON'T: Create custom shadow values`}</div>
          <div className="text-xs text-gray-600">
            Stick to the four defined elevation levels for consistency across the product.
          </div>
        </div>
      </div>
    </div>
  ),
};
