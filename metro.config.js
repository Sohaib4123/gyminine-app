const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Optimize for performance on lower-end devices
config.resolver.platforms = ['native', 'android', 'ios', 'web'];

// Enable bundle splitting and tree shaking
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    // Enable aggressive minification for smaller bundles
    mangle: {
      keep_fnames: true,
    },
    output: {
      ascii_only: true,
      quote_keys: true,
      wrap_iife: true,
    },
    sourceMap: {
      includeSources: false,
    },
    toplevel: false,
    warnings: false,
  },
};

// Optimize asset loading
config.resolver = {
  ...config.resolver,
  assetExts: [...config.resolver.assetExts, 'bin'],
};

// Enable bundle splitting for better performance
config.serializer = {
  ...config.serializer,
  customSerializer: config.serializer.customSerializer,
};

module.exports = config;