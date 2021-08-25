module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Matter Surface Landing Page - Prismic.io', // Navigation and Site Title
  titleAlt: 'Matter Surface Landing Page - Prismic.io', // Title for JSONLD
  description:
    'Headless CMS version of Matter Surface Landing Page which uses the Headless CMS Prismic.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://webpoint.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/logo.png', // Used for manifest favicon generation
  shortName: 'Matter Surface', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Matter Surface Landing Page', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
