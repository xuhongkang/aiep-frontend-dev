import withNextra from 'nextra';
import nextIntl from 'next-intl/plugin';

// Define your Next.js config
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

// Configure nextra with your theme and config
const nextraConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
});

// Configure next-intl
const withNextIntl = nextIntl("./src/i18n.ts");

// Combine nextra and next-intl with your Next.js config
export default nextraConfig(withNextIntl(nextConfig));
