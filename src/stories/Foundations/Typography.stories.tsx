import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TypeSample = ({
  fontFamily,
  fontSize,
  lineHeight,
  weight = 'normal',
  text = 'The quick brown fox jumps over the lazy dog',
  tailwindClass,
}: {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  weight?: string;
  text?: string;
  tailwindClass?: string;
}) => (
  <div className="border-b border-gray-200 pb-4 mb-4">
    <div
      style={{
        fontFamily,
        fontSize,
        lineHeight,
        fontWeight: weight,
      }}
    >
      {text}
    </div>
    <div className="mt-2 text-sm text-gray-500 flex items-start justify-between gap-4">
      <span className="font-mono">
        {fontFamily} · {fontSize} · {lineHeight} line-height
      </span>
      {tailwindClass && (
        <span className="text-xs font-mono bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
          {tailwindClass}
        </span>
      )}
    </div>
  </div>
);

// Font Families
export const FontFamilies: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Font Families</h2>
      <p className="text-gray-600 mb-6">
        Three font families used across the Tenere design system.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">TT Norms® Std Condensed</h3>
          <p className="text-sm text-gray-600 mb-4">
            Display and high-emphasis headlines (20px – 50px)
          </p>
          <TypeSample
            fontFamily="TTNormsStd, sans-serif"
            fontSize="32px"
            lineHeight="1.1"
            weight="700"
            text="Display Headlines & High Emphasis"
            tailwindClass="font-ttnorms"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Inter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Body copy, interface text, and reading comfort (12px – 26px)
          </p>
          <TypeSample
            fontFamily="InterUI, sans-serif"
            fontSize="16px"
            lineHeight="1.5"
            text="Body copy and interface text for optimal reading comfort"
            tailwindClass="font-inter"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Montserrat</h3>
          <p className="text-sm text-gray-600 mb-4">
            Promotional banners and marketing moments only (40px – 50px)
          </p>
          <TypeSample
            fontFamily="Montserrat, sans-serif"
            fontSize="40px"
            lineHeight="1.1"
            weight="700"
            text="Promotional Moments"
            tailwindClass="font-montserrat"
          />
        </div>
      </div>
    </div>
  ),
};

// TT Norms Scale
export const TTNormsScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">TT Norms® Std Scale</h2>
      <p className="text-gray-600 mb-6">
        Display and headline scale (20px – 50px) with ~1.1× line-height.
      </p>
      <div className="space-y-4">
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="50px"
          lineHeight="1.1"
          weight="700"
          text="50px Display"
          tailwindClass="text-[50px]"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="40px"
          lineHeight="1.1"
          weight="700"
          text="40px Large Headline"
          tailwindClass="text-base40"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="36px"
          lineHeight="1.1"
          weight="700"
          text="36px Headline"
          tailwindClass="text-base36"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="32px"
          lineHeight="1.1"
          weight="700"
          text="32px Medium Headline"
          tailwindClass="text-base32"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="28px"
          lineHeight="1.1"
          weight="600"
          text="28px Small Headline"
          tailwindClass="text-base28"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="24px"
          lineHeight="1.1"
          weight="600"
          text="24px Section Title"
          tailwindClass="text-base24"
        />
        <TypeSample
          fontFamily="TTNormsStd, sans-serif"
          fontSize="20px"
          lineHeight="1.1"
          weight="600"
          text="20px Subsection Title"
          tailwindClass="text-base20"
        />
      </div>
    </div>
  ),
};

// Inter Scale
export const InterScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inter Scale</h2>
      <p className="text-gray-600 mb-6">
        Body and interface text scale (12px – 26px) with ~1.4-1.8× line-height.
      </p>
      <div className="space-y-4">
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="26px"
          lineHeight="1.4"
          weight="600"
          text="26px Large Body Lead"
          tailwindClass="text-base26"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="20px"
          lineHeight="1.5"
          weight="500"
          text="20px Emphasized Body"
          tailwindClass="text-base20"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="18px"
          lineHeight="1.5"
          text="18px Large Body Text"
          tailwindClass="text-base18"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="17px"
          lineHeight="1.5"
          text="17px Body Text"
          tailwindClass="text-base17"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="16px"
          lineHeight="1.5"
          text="16px Default Body (Most common size for reading)"
          tailwindClass="text-base16"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="15px"
          lineHeight="1.6"
          text="15px Small Body Text"
          tailwindClass="text-base15"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="14px"
          lineHeight="1.6"
          text="14px Interface Text (Labels, buttons, inputs)"
          tailwindClass="text-base14"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="13px"
          lineHeight="1.6"
          text="13px Secondary Text (Metadata, captions)"
          tailwindClass="text-base13"
        />
        <TypeSample
          fontFamily="InterUI, sans-serif"
          fontSize="12px"
          lineHeight="1.5"
          text="12px Smallest Text (Fine print, timestamps)"
          tailwindClass="text-base12"
        />
      </div>
    </div>
  ),
};

// Font Size Scale (All)
export const AllFontSizes: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Complete Font Size Scale</h2>
      <p className="text-gray-600 mb-6">
        All available font sizes in the Tailwind configuration (base10 – base40).
      </p>
      <div className="space-y-3">
        {[
          { size: '40px', class: 'text-base40' },
          { size: '38px', class: 'text-base38' },
          { size: '36px', class: 'text-base36' },
          { size: '34px', class: 'text-base34' },
          { size: '32px', class: 'text-base32' },
          { size: '30px', class: 'text-base30' },
          { size: '28px', class: 'text-base28' },
          { size: '26px', class: 'text-base26' },
          { size: '24px', class: 'text-base24' },
          { size: '22px', class: 'text-base22' },
          { size: '20px', class: 'text-base20' },
          { size: '19px', class: 'text-base19' },
          { size: '18px', class: 'text-base18' },
          { size: '17px', class: 'text-base17' },
          { size: '16px', class: 'text-base16' },
          { size: '15px', class: 'text-base15' },
          { size: '14px', class: 'text-base14' },
          { size: '13px', class: 'text-base13' },
          { size: '12px', class: 'text-base12' },
          { size: '11px', class: 'text-base11' },
          { size: '10px', class: 'text-base10' },
        ].map(({ size, class: className }) => (
          <div key={size} className="flex items-center gap-4">
            <div className="w-20 text-sm text-gray-500 font-mono">{size}</div>
            <div className={className}>The quick brown fox jumps over the lazy dog</div>
            <div className="text-xs font-mono bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
              {className}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Typography Usage Examples</h2>
      <p className="text-gray-600 mb-6">
        Real-world examples showing how different font families and sizes work together.
      </p>

      <div className="space-y-8">
        {/* Hero Section Example */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Hero Section</div>
          <h1 className="font-ttnorms text-base40 font-bold mb-4" style={{ lineHeight: '1.1' }}>
            Save More with Verified Coupons
          </h1>
          <p className="font-inter text-base18" style={{ lineHeight: '1.5' }}>
            Discover thousands of discount codes and deals from your favorite stores.
          </p>
        </div>

        {/* Card Example */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Content Card</div>
          <h3 className="font-ttnorms text-base24 font-semibold mb-3" style={{ lineHeight: '1.1' }}>
            Featured Deal
          </h3>
          <p className="font-inter text-base15 mb-2" style={{ lineHeight: '1.6' }}>
            Get 20% off your entire purchase with this exclusive offer.
          </p>
          <div className="font-inter text-base13 text-gray-500" style={{ lineHeight: '1.6' }}>
            Valid until Dec 31, 2024
          </div>
        </div>

        {/* Form Example */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-4 font-mono">Form Elements</div>
          <label className="block font-inter text-base14 font-medium mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg font-inter text-base14"
          />
          <div className="mt-2 font-inter text-base12 text-gray-500">
            {`We'll never share your email with anyone else.`}
          </div>
        </div>
      </div>
    </div>
  ),
};
