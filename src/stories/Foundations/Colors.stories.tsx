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

const ColorSwatch = ({
  name,
  bgClass,
  hexValue,
  textClass,
}: {
  name: string;
  bgClass: string;
  hexValue?: string;
  textClass?: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className={`h-20 rounded-lg border border-gray-200 shadow-sm ${bgClass}`} />
    <div className="text-sm">
      <div>
        <span className="font-semibold">{name}</span>{' '}
        <span className="text-gray-500 font-mono text-xs">({hexValue})</span>
      </div>
      {textClass && (
        <div className="mt-2 space-y-1">
          <div className="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded">
            text: {textClass}
          </div>
          <div className="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded">
            bg: {bgClass}
          </div>
        </div>
      )}
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
        <ColorSwatch
          name="Tenere Green"
          bgClass="bg-green-tenere"
          hexValue="#B8EC60"
          textClass="text-green-tenere"
        />
        <ColorSwatch
          name="Tenere Dark"
          bgClass="bg-green-tenere-dark"
          hexValue="#9ed84e"
          textClass="text-green-tenere-dark"
        />
        <ColorSwatch
          name="Tenere Darker"
          bgClass="bg-green-tenere-darker"
          hexValue="#85c43a"
          textClass="text-green-tenere-darker"
        />
        <ColorSwatch
          name="Acacia Green"
          bgClass="bg-green-acacia"
          hexValue="#014810"
          textClass="text-green-acacia"
        />
        <ColorSwatch
          name="Desert Shadow"
          bgClass="bg-shadow-desert"
          hexValue="#191919"
          textClass="text-shadow-desert"
        />
        <ColorSwatch name="White" bgClass="bg-white" hexValue="#FFFFFF" textClass="text-white" />
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
        <ColorSwatch
          name="Oasis Green"
          bgClass="bg-green-oasis"
          hexValue="#56A619"
          textClass="text-green-oasis"
        />
        <ColorSwatch
          name="Sahara Deep"
          bgClass="bg-green-sahara-deep"
          hexValue="#14801A"
          textClass="text-green-sahara-deep"
        />
        <ColorSwatch
          name="Desert Sky"
          bgClass="bg-sky-desert"
          hexValue="#C2EAFD"
          textClass="text-sky-desert"
        />
        <ColorSwatch
          name="Sahara Sand"
          bgClass="bg-sand-sahara"
          hexValue="#F6F1E9"
          textClass="text-sand-sahara"
        />
      </div>
    </div>
  ),
};

const BorderColorSwatch = ({
  name,
  value,
  usage,
  tailwindClass,
}: {
  name: string;
  value: string;
  usage: string;
  tailwindClass: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="h-20 rounded-lg bg-white" style={{ border: value }} />
    <div className="text-sm">
      <div>
        <span className="font-semibold">{name}</span>{' '}
        <span className="text-gray-500 font-mono text-xs">({value})</span>
      </div>
      <div className="text-xs text-gray-400 mt-1">{usage}</div>
      <div className="mt-2">
        <div className="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded inline-block">
          {tailwindClass}
        </div>
      </div>
    </div>
  </div>
);

// Border Colors Story
export const BorderColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Border Colors</h2>
      <p className="text-gray-600 mb-6">
        Standardized border colors for cards, inputs, and content separation.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <BorderColorSwatch
          name="Default"
          value="1px solid #E5E7EB"
          usage="Cards, inputs, grouped content"
          tailwindClass="border-default"
        />
        <BorderColorSwatch
          name="Medium"
          value="1px solid #D1D5DB"
          usage="Active inputs, hover states"
          tailwindClass="border-medium"
        />
        <BorderColorSwatch
          name="Strong"
          value="2px solid #191919"
          usage="Focused inputs, selected items"
          tailwindClass="border-strong border-2"
        />
        <BorderColorSwatch
          name="Brand Accent"
          value="2px solid #B8EC60"
          usage="Active tabs, selected filters"
          tailwindClass="border-green-tenere border-2"
        />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch
            name="green-tenere"
            bgClass="bg-green-tenere"
            hexValue="#B8EC60"
            textClass="text-green-tenere"
          />
          <ColorSwatch
            name="green-tenere-dark"
            bgClass="bg-green-tenere-dark"
            hexValue="#9ed84e"
            textClass="text-green-tenere-dark"
          />
          <ColorSwatch
            name="green-tenere-darker"
            bgClass="bg-green-tenere-darker"
            hexValue="#85c43a"
            textClass="text-green-tenere-darker"
          />
          <ColorSwatch
            name="green-acacia"
            bgClass="bg-green-acacia"
            hexValue="#014810"
            textClass="text-green-acacia"
          />
          <ColorSwatch
            name="green-oasis"
            bgClass="bg-green-oasis"
            hexValue="#56A619"
            textClass="text-green-oasis"
          />
          <ColorSwatch
            name="green-sahara-deep"
            bgClass="bg-green-sahara-deep"
            hexValue="#14801A"
            textClass="text-green-sahara-deep"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Neutral Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch
            name="shadow-desert"
            bgClass="bg-shadow-desert"
            hexValue="#191919"
            textClass="text-shadow-desert"
          />
          <ColorSwatch
            name="sky-desert"
            bgClass="bg-sky-desert"
            hexValue="#C2EAFD"
            textClass="text-sky-desert"
          />
          <ColorSwatch
            name="sand-sahara"
            bgClass="bg-sand-sahara"
            hexValue="#F6F1E9"
            textClass="text-sand-sahara"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Border Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BorderColorSwatch
            name="Default"
            value="1px solid #E5E7EB"
            usage="Cards, inputs, grouped content"
            tailwindClass="border-default"
          />
          <BorderColorSwatch
            name="Medium"
            value="1px solid #D1D5DB"
            usage="Active inputs, hover states"
            tailwindClass="border-medium"
          />
          <BorderColorSwatch
            name="Strong"
            value="2px solid #191919"
            usage="Focused inputs, selected items"
            tailwindClass="border-strong border-2"
          />
          <BorderColorSwatch
            name="Brand Accent"
            value="2px solid #B8EC60"
            usage="Active tabs, selected filters"
            tailwindClass="border-green-tenere border-2"
          />
        </div>
      </div>
    </div>
  ),
};
