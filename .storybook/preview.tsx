import type { Preview } from '@storybook/nextjs';
import { SessionProvider } from 'next-auth/react';
import './storybook.css';

const preview: Preview = {
  parameters: {
    // ✅ Config Next.js context
    nextjs: {
      appDirectory: true, // Bật App Router (Next.js 13+)
      navigation: {
        pathname: '/', // Mock pathname mặc định
        query: {},
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
      defaultViewport: 'desktop',
    },
  },
  // ✅ Decorators để mock providers (auth, SWR, React Query, etc.)
  decorators: [
    (Story) => (
      <SessionProvider
        session={{
          user: { name: 'Test User', email: 'test@example.com' },
          expires: '2099-01-01',
        }}
      >
        <Story />
      </SessionProvider>
    ),
  ],
};

export default preview;
